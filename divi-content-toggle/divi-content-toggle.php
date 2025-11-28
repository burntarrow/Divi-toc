<?php
/**
 * Plugin Name: Divi Content Toggle
 * Plugin URI:  https://diviextended.com/product/divi-content-toggle/
 * Description: Display key information in a compact and engaging way with a switch in the divi theme.
 * Version:     1.0.3
 * Author:      Elicus
 * Author URI:  https://elicus.com/
 * Update URI:  https://diviextended.com/
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: divi-content-toggle
 * Domain Path: /languages
**/

defined( 'ABSPATH' ) || die( 'No script kiddies please!' );

define( 'ELICUS_DIVI_CONTENT_TOGGLE_VERSION', '1.0.3' );
define( 'ELICUS_DIVI_CONTENT_TOGGLE_BASENAME', plugin_basename( __FILE__ ) );

define( 'ELICUS_DIVI_CONTENT_TOGGLE_DIR', plugin_dir_path( __FILE__ ) );
define( 'ELICUS_DIVI_CONTENT_TOGGLE_URL', plugin_dir_url( __FILE__ ) );

define( 'ELICUS_DCT_MODULES_URL', ELICUS_DIVI_CONTENT_TOGGLE_URL . 'divi-5/visual-builder/src/modules' );
define( 'ELICUS_DCT_MODULES_PATH', ELICUS_DIVI_CONTENT_TOGGLE_DIR . 'divi-5/visual-builder/src/modules' );

require_once plugin_dir_path( __FILE__ ) . 'includes/core/class-installation.php';
register_activation_hook( __FILE__, array( 'El_DiviContentToggle_Installation', 'el_plugin_add_installs' ) );
register_deactivation_hook( __FILE__, array( 'El_DiviContentToggle_Installation', 'el_plugin_remove_installs' ) );

/**
 * Creates the extension's main class instance.
 *
 * @since 1.0.0
 */
require_once ELICUS_DIVI_CONTENT_TOGGLE_DIR . 'includes/DiviContentToggle.php';

/**
 * Register Divi Modules.
 */
function dct_register_module() {
	require_once ELICUS_DIVI_CONTENT_TOGGLE_DIR . 'divi-4/server/loader.php';
}
add_action( 'et_builder_ready', 'dct_register_module' );

// Load Divi 5 modules.
require_once ELICUS_DIVI_CONTENT_TOGGLE_DIR . 'divi-5/divi5-content-toggle.php';
