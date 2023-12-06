<?php

function ippm_get_packages() {
  $wpUploadsDir = wp_upload_dir();
  $directory = $wpUploadsDir['basedir'] . '/ippm-packages/';

  if ($handle = opendir($directory)) {
    $blacklist = array('.', '..');

    while (false !== ($file = readdir($handle))) :
      if (!in_array($file, $blacklist)) $packages[] = $file;
    endwhile;

    closedir($handle);
  }

  return $packages;
}

function ippm_add_get_packages() {
  $args = array(
    'methods' => 'GET',
    'callback' => 'ippm_get_packages',
  );
  register_rest_route('ippm/v1', '/packages', $args);
}
add_action('rest_api_init', 'ippm_add_get_packages');
