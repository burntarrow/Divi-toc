<?php
/**
 * All modules.
 *
 * @package DCT\Modules;
 */

namespace DCT\Modules;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use DCT\Modules\ContentToggle\ContentToggle;

// Register REST routes.
add_action(
	'divi_module_library_modules_dependency_tree',
	function() {
		$restApi = new RESTRegistration();
		$restApi->register_routes();
	}
);

add_action(
	'divi_module_library_modules_dependency_tree',
	function( $dependency_tree ) {
		$dependency_tree->add_dependency( new ContentToggle() );
	}
);
