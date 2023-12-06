<?php

function ippm_get_package_assets($data) {
  $wpUploadsDir = wp_upload_dir();
  $directory = $wpUploadsDir['basedir'] . '/ippm-packages/' . $data['slug'];
  $assets = preg_grep('~\.[^.]+$~', scandir($directory)); // assets must have file extensions

  return ippm_array_flatten($assets);
}

function ippm_add_get_package() {
  $args = array(
    'methods' => 'GET',
    'callback' => 'ippm_get_package_assets',
  );
  register_rest_route('ippm/v1', '/package/(?P<slug>[a-zA-Z0-9-]+)', $args);
}
add_action('rest_api_init', 'ippm_add_get_package');
