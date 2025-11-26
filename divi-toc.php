<?php
/**
 * Plugin Name:       Divi TOC
 * Description:       A Divi 5 module that generates a table of contents for page/post headings.
 * Version:           1.0.1
 * Author:            Divi5 Plugins
 * Author URI:        https://divi5-plugins.com
 * Plugin URI:        https://divi5-plugins.com/divi-toc/
 * License:           GPL-3.0-or-later
 * Text Domain:       divi-toc
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'DIVI_TOC_PLUGIN_FILE', __FILE__ );
define( 'DIVI_TOC_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'DIVI_TOC_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

/**
 * Load plugin text domain.
 */
add_action(
	'plugins_loaded',
	function () {
		load_plugin_textdomain(
			'divi-toc',
			false,
			dirname( plugin_basename( __FILE__ ) ) . '/languages'
		);
	}
);

/**
 * Load the Modules class directly (no Composer required).
 */
require_once DIVI_TOC_PLUGIN_DIR . 'modules/Modules.php';

/**
 * Register Divi 5 modules on init.
 *
 * We guard this so it only runs when Divi / Divi Builder is present.
 */
add_action(
	'init',
	function () {
		// Bail if Divi / Divi Builder is not active.
		if ( ! ( defined( 'ET_BUILDER_VERSION' ) || function_exists( 'et_builder_is_enabled' ) ) ) {
			return;
		}

		if ( class_exists( '\Divi_toc\Modules\Modules' ) ) {
			\Divi_toc\Modules\Modules::register();
		}
	},
	20
);

/**
 * Enqueue front-end assets.
 */
add_action(
	'wp_enqueue_scripts',
	function () {
		// Front-end JS bundle built by webpack.
		wp_enqueue_script(
			'divi-toc-frontend',
			DIVI_TOC_PLUGIN_URL . 'build/divi-toc-frontend.js',
			array(),
			'1.0.0',
			true
		);

		// Shared styles (handle name "divi-toc" so PHP module can reference it).
		wp_enqueue_style(
			'divi-toc',
			DIVI_TOC_PLUGIN_URL . 'assets/css/divi-toc.css',
			array(),
			'1.0.0'
		);
	}
);

/**
 * Enqueue builder-only assets for Divi 5.
 *
 * If Elegant Themes publishes a dedicated Divi 5 builder hook,
 * you can swap this to that hook later.
 */
add_action(
	'enqueue_block_editor_assets',
	function () {
		// Builder JS bundle built by webpack.
		wp_enqueue_script(
			'divi-toc-builder',
			DIVI_TOC_PLUGIN_URL . 'build/divi-toc-builder.js',
			array( 'react', 'react-dom' ),
			'1.0.0',
			true
		);

		// Same CSS handle so both frontend + builder share styling.
		wp_enqueue_style(
			'divi-toc',
			DIVI_TOC_PLUGIN_URL . 'assets/css/divi-toc.css',
			array(),
			'1.0.0'
		);
	}
);
