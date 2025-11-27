<?php
/**
 * Plugin Name:       Divi TOC
 * Description:       A Divi 5 module that generates a table of contents for page/post headings.
 * Version:           1.0.0
 * Author:            Divi5 Plugins
 * Author URI:        https://divi5-plugins.com
 * Plugin URI:        https://divi5-plugins.com/divi-toc/
 * License:           GPL-3.0-or-later
 * Text Domain:       divi-toc
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Base plugin constants.
 */
define( 'DIVI_TOC_PLUGIN_FILE', __FILE__ );
define( 'DIVI_TOC_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'DIVI_TOC_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

/**
 * Load translations.
 */
add_action( 'plugins_loaded', function () {
    load_plugin_textdomain(
        'divi-toc',
        false,
        dirname( plugin_basename( __FILE__ ) ) . '/languages'
    );
} );

/**
 * Register this plugin as a Divi 5 Extension.
 *
 * This is what tells Divi 5 to load build/index.js and your module.json files.
 */
add_filter( 'divi.modules.extensions', function ( $extensions ) {
    $extensions['divi-toc'] = require __DIR__ . '/divi-toc-extension.php';
    return $extensions;
} );

/**
 * Load the PHP modules loader.
 */
require_once DIVI_TOC_PLUGIN_DIR . 'modules/Modules.php';

/**
 * Register PHP-side modules after WordPress init.
 * (Divi 5 JS side is handled via the extension + build/index.js.)
 */
add_action( 'init', function () {
    if ( class_exists( '\Divi_toc\Modules\Modules' ) ) {
        \Divi_toc\Modules\Modules::register();
    }
}, 20 );

/**
 * Enqueue FRONT-END styles.
 *
 * Note: Divi 5 will load your JS for the module via the extension build.
 * We only need to enqueue the shared CSS file here.
 */
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'divi-toc',
        DIVI_TOC_PLUGIN_URL . 'assets/css/style.css',
        [],
        '1.0.0'
    );
} );

/**
 * Optionally enqueue the same CSS in the editor as well.
 * (No JS here – Divi 5 handles builder JS itself.)
 */
add_action( 'enqueue_block_editor_assets', function () {
    wp_enqueue_style(
        'divi-toc',
        DIVI_TOC_PLUGIN_URL . 'assets/css/style.css',
        [],
        '1.0.0'
    );
} );
