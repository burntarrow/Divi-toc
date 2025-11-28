<?php
/**
 * Content Toggle Module Controller.
 *
 * @package DCT\Modules\ContentToggle;
 */
namespace DCT\Modules\ContentToggle;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\Controllers\RESTController;
use DCT\Modules\ContentToggle\ContentToggle;
use WP_REST_Request;
use WP_REST_Response;

/**
 * Class ContentToggleController
 *
 * @package DCT\Modules\ContentToggle
 */
class ContentToggleController extends RESTController {

	/**
	 * Return data for the Dynamic Module.
	 *
	 * @param WP_REST_Request $request REST request object.
	 *
	 * @return WP_REST_Response|WP_Error
	 */
	public static function index( WP_REST_Request $request ): WP_REST_Response {
		$id = $request->get_param( 'id' );

		// To render et builder shortcode.
		if ( function_exists('et_builder_add_main_elements') ) {
			et_builder_add_main_elements();
		}

		// Get the content.
		$content  = do_shortcode( get_the_content( null, false, intval( $id ) ) );
		
		// Currently, not working for divi 5 new created library layouts,
		// Let's wait divi.
		$content  = apply_filters( 'the_content', $content );
		
		$response = [ 'data' => $content ];

		return self::response_success( $content );
	}

	/**
	 * Index action arguments.
	 *
	 * Endpoint arguments as used in `register_rest_route()`.
	 *
	 * @return array
	 */
	public static function index_args(): array {
		return [
			'id' => [
				'type'              => 'string',
				'default'           => '',
				'sanitize_callback' => function( $value, $request, $param ) {
					return esc_html( $value );
				},
			],
		];
	}

	/**
	 * Index action permission.
	 *
	 * Endpoint permission callback as used in `register_rest_route()`.
	 *
	 * @return bool
	 */
	public static function index_permission(): bool {
		return true; // You can use your own permission check here.
	}
}
