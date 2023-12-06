<?php
/*
Plugin Name: Interactive Posts (IPPM)
Description: Allows you to enhance posts with custom CSS and JavaScript.
Author: Hasani Rogers
Author URI: https://hasanirogers.me
Version: 1.0.1
*/


// 0. Utilities
// ------------

include_once(dirname(__FILE__) . '/utilities/arrayflatten.php');
include_once(dirname(__FILE__) . '/utilities/deletedirectory.php');

// 1. Scripts and Styles
// ---------------------

function ippm_admin_scripts() {
  wp_register_script('interactiveposts', plugins_url('interactiveposts.js', __FILE__), array('wp-blocks', 'wp-editor', 'wp-components'), false, true );

  $ippmData = array(
    'ajaxURL' => admin_url('admin-ajax.php'),
    'security' => wp_create_nonce('ippm-package'),
  );
  wp_localize_script('interactiveposts', 'ippmData', $ippmData);

  wp_enqueue_script('interactiveposts');
  wp_enqueue_style('interactiveposts', plugins_url('interactiveposts.css', __FILE__), array(), false);
}
add_action('admin_enqueue_scripts', 'ippm_admin_scripts');


// 2. Gutenberg Blocks
// -------------------

function ippm_gutenberg_blocks() {
    $args = array();
    register_block_type('ippm/dependencies-manager', $args);
    register_block_type('ippm/assets-manager', $args);
}
add_action( 'init', 'ippm_gutenberg_blocks' );


// 3. Build Page
// -------------

function ippm_package_manager_page() {
  $maxUploadSize = size_format(wp_max_upload_size());
  $wpUploadsDir = wp_upload_dir();
  $packageURL = $wpUploadsDir['baseurl'] . '/ippm-packages/';
  $packageDirectory = $wpUploadsDir['basedir'] . '/ippm-packages/';
  ?>
    <div class="ippm">
      <h2>Interactive Posts: Package Manager (IPPM)</h2>
      <ippm-alert></ippm-alert>
      <section>
        <h3>Upload Package</h3>
        <p>Current max upload size is: <strong><?php _e($maxUploadSize, 'max-upload-size-readable'); ?></strong>.</p>
        <form id="ippm-package" class="inside" action="" method="post" enctype="multipart/form-data">
          <kemet-upload multiple accept=".zip,.rar" max-size="<?php _e(wp_max_upload_size(), 'max-upload-size-bytes'); ?>"></kemet-upload>
          <p><strong>Note:</strong> IPPM only supports flat zip files. Any sub directories in your package will be ignored.</p>
        </form>
      </section>
      <br /><hr />
      <section>
        <h3>Manage Packages</h3>
        <p>Click on an asset to view it in the browser.</p>
        <ippm-packages url="<?php echo esc_url( $packageURL ); ?>"></ippm-packages>
      </section>
    </div>
  <?php
}


// 4. Build Menu
// -------------

function ippm_package_manager_menu() {
  add_menu_page(
    'Interactive Posts: Package Manager',
    'IPPM',
    'manage_options',
    'ippm',
    'ippm_package_manager_page',
    '',
    11
  );
}
add_action('admin_menu', 'ippm_package_manager_menu');


// 5. Inject Dependencies & Assets
// -------------------------------

function ippm_dependencies() {
  if (is_single() || is_page()) :
    global $post;
    $thePost = get_post($post->id);
    $blocks = parse_blocks($thePost->post_content);

    foreach ($blocks as $block) {
      if ($block['blockName'] == 'ippm/dependencies-manager') {
        return $block['attrs']['dependencies'];
      }
    }
  endif;
}
add_action('wp', 'ippm_dependencies');

function ippm_add_import_maps() {
  $dependencies = ippm_dependencies();
  $numDepends = $dependencies ? count($dependencies) : 0;
  $kses_allowed_html = array(
    'script' => array(
      'type' => array(),
    ),
  );

  if ($numDepends > 0) :
    $comma = ',';
    $index = 0;

    echo wp_get_script_tag(array('src' => plugins_url('scripts/es-module-shims.js', __FILE__)));
    echo '<script type="importmap">';
    echo '{"imports": {';
      foreach ($dependencies as $dependency) {
        if (++$index === $numDepends) $comma = '';
        echo wp_kses_post('"'. $dependency['name'] . '": "' . $dependency['url'] . '"'. $comma);
      }
    echo '}}';
    echo '</script>';
  endif;
}
add_action('wp_head', 'ippm_add_import_maps', '1');

function ippm_add_assets() {
  global $post;

  $thePost = get_post($post->id);
  $blocks = parse_blocks($thePost->post_content);
  $wpUploadsDir = wp_upload_dir();
  $uploadURL = $wpUploadsDir['baseurl'] . '/ippm-packages/';
  $cssAssets = [];
  $jsAssets = [];

  foreach ($blocks as $block) {
    if ($block['blockName'] == 'ippm/assets-manager') {
      $currentPackage = $block['attrs']['currentPackage'];
      $cssAssets[] = $block['attrs']['cssAssets'];
      $jsAssets[] = $block['attrs']['jsAssets'];
    }
  }

  if (!empty($cssAssets)) {
    foreach ($cssAssets as $cssAsset) {
      foreach($cssAsset as $cssAssetData) {
        $cssFile = $cssAssetData['filename'];
        wp_enqueue_style('ippm-asset-style-' . $cssFile, $uploadURL . $currentPackage . '/' . $cssFile);
      }
    }
  }

  if (!empty($jsAssets)) {
    foreach ($jsAssets as $jsAsset) {
      foreach($jsAsset as $jsAssetData) {
        $jsFile = $jsAssetData['filename'];

        if ($jsAssetData['isJSModule']) {
          $prefix = 'ippm-asset-module-script-';
        } else {
          $prefix = 'ippm-asset-script-';
        }

        wp_enqueue_script($prefix . $jsFile, $uploadURL . $currentPackage . '/' . $jsFile, array(), false, true);
      }
    }
  }
}
add_action('wp_enqueue_scripts', 'ippm_add_assets');



function add_type_attribute($tag, $handle, $src) {
  $isIPPMScriptModule = strpos($handle, 'ippm-asset-module-script');

  if ($isIPPMScriptModule === false) {
    return $tag;
  }

  $tag = '<script type="module" src="' . esc_url( $src ) . '"></script>';
  return $tag;
}
add_filter('script_loader_tag', 'add_type_attribute' , 10, 3);



// 6. REST
// -------

include_once(dirname(__FILE__) . '/rest/getpackage.php');
include_once(dirname(__FILE__) . '/rest/getpackages.php');
// include_once(dirname(__FILE__) . '/rest/deletepackage.php');


// 7. Ajax
// -------

include_once(dirname(__FILE__) . '/ajax/uploadpackage.php');
include_once(dirname(__FILE__) . '/ajax/deletepackage.php');
