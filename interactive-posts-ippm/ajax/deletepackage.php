<?php

function ippm_delete_package() {
  check_ajax_referer('ippm-package', 'security');

  $package = sanitize_file_name($_REQUEST['package']);
  $wpUploadsDir = wp_upload_dir();
  $packageDir = $wpUploadsDir['basedir'] . '/ippm-packages/' . $package;

  // error codes
  // 0. unknown
  // 1. success
  // 2. not a directory
  // 3. package dir not writable
  $response = array();

  if (is_dir($packageDir)) :
    if (is_writable($packageDir)) :
      ippm_delete_directory($packageDir);

      $response['status'] = 'ok';
      $response['message'] = 'success';
      $response['code'] = 1;

      die(json_encode($response));
    else :
      $response['status'] = 'error';
      $response['message'] = 'Was not able to delete the package directory. Please check the file permissions.';
      $response['code'] = 3;

      die(json_encode($response));
    endif;
  else :
    $response['status'] = 'error';
    $response['message'] = 'The package is not a directory.';
    $response['code'] = 2;

    die(json_encode($response));
  endif;

  $response['status'] = 'error';
  $response['message'] = 'An unknown error has occurred.';
  $response['code'] = 0;

    die(json_encode($response));

  die();
}
add_action('wp_ajax_ippm_package_delete', 'ippm_delete_package');
