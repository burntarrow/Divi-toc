import $ from 'jquery';

import modules from './modules';

/**
 * Register modules to Visual Builder once the API is ready.
 *
 * @since 2.0.0
 */
$(window).on( 'et_builder_api_ready', (event, API) => {
	// Register module.
	API.registerModules( modules );
} );
