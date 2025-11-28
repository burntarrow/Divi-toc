<?php
/**
 * REST Registration.
 *
 * @package DCT\Modules;
 */
namespace DCT\Modules;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\Route\RESTRoute;
use DCT\Modules\ContentToggle\ContentToggleController;

/**
 * Class RESTRegistration
 *
 * @package DGE\Modules
 */
class RESTRegistration {
	/**
	 * Register REST routes for modules.
	 */
	public function register_routes() {
		try {
			$route = new RESTRoute( 'elicus/v1' ); // Namespace for the extension.

			// Route for modules.
			$route->prefix( '/dct-modules' )->get( '/content-toggle', ContentToggleController::class );

		} catch ( \Exception $e ) {
			// Divi 4 with no RESTRoute class.
		}
	}
}
