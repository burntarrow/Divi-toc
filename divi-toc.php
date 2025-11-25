<?php
/**
 * Plugin Name: Divi TOC
 * Description: A Divi 5 module that generates a table of contents for page/post headings.
 * Version: 1.0.0
 * Author: Divi5 Plugins
 * Author URI: https://divi5-plugins.com
 * Plugin URI: https://divi5-plugins.com/divi-toc/
 * License: GPLv3 or later
 * Text Domain: divi-toc
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! defined( 'DIVI_TOC_PLUGIN_FILE' ) ) {
    define( 'DIVI_TOC_PLUGIN_FILE', __FILE__ );
}

/**
 * Load plugin text domain for translations.
 */
function divi_toc_load_textdomain() {
    load_plugin_textdomain( 'divi-toc', false, dirname( plugin_basename( DIVI_TOC_PLUGIN_FILE ) ) . '/languages' );
}
add_action( 'init', 'divi_toc_load_textdomain' );

/**
 * Register the Divi TOC module when Divi 5 is ready.
 * Divi 5 exposes the `divi_extensions_init` hook which mirrors the
 * classic Divi extension bootstrap.
 */
function divi_toc_register_module() {
    // Avoid loading the module before Divi has initialized its base classes.
    if ( class_exists( 'Divi_toc_Module' ) ) {
        return;
    }

    if ( ! class_exists( 'ET_Builder_Module' ) ) {
        return;
    }

    require_once plugin_dir_path( __FILE__ ) . 'includes/class-divi-toc-module.php';
    do_action( 'divi_toc_after_register' );
}
add_action( 'divi_extensions_init', 'divi_toc_register_module' );
// In some environments ET_Builder_Module is available later; ensure we also hook when Divi reports ready.
add_action( 'et_builder_ready', 'divi_toc_register_module' );

/**
 * Enqueue assets for frontend and builder preview. The module class will
 * enqueue scripts on demand, but these hooks ensure assets are available
 * when Divi renders in the front-end builder as well.
 */
function divi_toc_enqueue_assets() {
    $version = '1.0.0';
    $base_url = plugin_dir_url( DIVI_TOC_PLUGIN_FILE );
    wp_register_style( 'divi_toc_style', $base_url . 'assets/css/style.css', array(), $version );
    wp_register_script( 'divi_toc_frontend', $base_url . 'assets/js/frontend.js', array(), $version, true );
    wp_register_script( 'divi_toc_builder', $base_url . 'assets/js/builder.js', array( 'react', 'react-dom' ), $version, true );
}
add_action( 'wp_enqueue_scripts', 'divi_toc_enqueue_assets' );
add_action( 'et_fb_enqueue_scripts', 'divi_toc_enqueue_assets' );

/**
 * Helper to expose plugin URL.
 */
function divi_toc_get_plugin_url() {
    return plugin_dir_url( DIVI_TOC_PLUGIN_FILE );
}

