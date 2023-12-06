<?php

function ippm_upload_package() {
  check_ajax_referer('ippm-package', 'security');

  // Vars
  // ----

  $wpUploadsDir = wp_upload_dir();
  $packagesDir = '/ippm-packages/';
  $isTooLarge = false;
  $userFile = sanitize_file_name($_FILES['file']['name']);
  $tmpFile = sanitize_text_field($_FILES['file']['tmp_name']);
  $fileType = sanitize_text_field($_FILES['file']['type']);
  $fileSize = intval($_FILES['file']['size']);
  $targetFile = basename($userFile, '.zip');
  $maxUploadSize = size_format(wp_max_upload_size());

  // error codes
  // 1: success
  // 2: too large
  // 3: couldn't extract archive
  // 4: upload dir not writable
  // 5: only zips allowed
  $response = array();

  // validation
  $isTooLarge = $fileSize > wp_max_upload_size();
  $allowedTypes = array('application/zip','application/x-zip-compressed','multipart/x-zip','application/s-compressed', 'application/octet-stream');

  // Extraction Logic
  // ----------------

  if ($isTooLarge) :
    http_response_code(500);
    $response['status'] = 'error';
    $response['message'] = 'The file exceeds the max upload size of ' . $maxUploadSize;
    $response['code'] = 2;
    die(json_encode($response));
  else :

    if (in_array($fileType, $allowedTypes)) :
      $wpUploadsDir = wp_upload_dir();
      $uploadDir = $wpUploadsDir['basedir'] . $packagesDir . $targetFile;

      // make the interactive assets directory if it doesn't exist
      if (!file_exists($wpUploadsDir['basedir'] . $packagesDir)) :
          mkdir($wpUploadsDir['basedir'] . $packagesDir, 0755);
          chmod($wpUploadsDir['basedir'] . $packagesDir, 0755);
      endif;

      // make the asset sub dir if it doesn't exist
      if (!file_exists($uploadDir)) :
          mkdir( $uploadDir );
          chmod( $uploadDir, 0755 );
      endif;

      if (is_writable($uploadDir)) :
        $zip = new ZipArchive;
        $result = $zip->open($tmpFile);

        if ($result === TRUE) :
          $zip->extractTo($uploadDir);
          $zip->close();

          $response['status'] = 'ok';
          $response['message'] = 'success';
          $response['code'] = 1;

          die(json_encode($response));
        else :
          http_response_code(500);
          $response['status'] = 'error';
          $response['message'] = 'Could not extract archive.';
          $response['code'] = 3;
          die(json_encode($response));
        endif; // results
      else :
        http_response_code(500);
        $response['status'] = 'error';
        $response['message'] = 'The package directory is not writable.';
        $response['code'] = 4;
        die(json_encode($response));
      endif; // is_writable
    else :
      http_response_code(500);
      $response['status'] = 'error';
      $response['message'] = 'Only zip archives are allowed.';
      $response['code'] = 5;
      die(json_encode($response));
    endif; // not allowed type
  endif; // isTooLarge

  wp_die();
}
add_action('wp_ajax_ippm_package_upload', 'ippm_upload_package');
