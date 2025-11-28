<?php
// Load Divi 5 modules.
// Require php files.
require_once ELICUS_DIVI_CONTENT_TOGGLE_DIR . 'divi-5/vendor/autoload.php';
require_once ELICUS_DIVI_CONTENT_TOGGLE_DIR . 'divi-5/server/Modules/Modules.php';

/**
 * Enqueue Divi 5 Visual Builder Assets
 *
 * @since 1.0.0
 */
function dct_divi5_enqueue_visual_builder_assets() {
	if ( et_core_is_fb_enabled() && et_builder_d5_enabled() ) {
		wp_enqueue_script(
			'dct-divi5-visual-builder',
			ELICUS_DIVI_CONTENT_TOGGLE_URL . 'divi-5/visual-builder/build/build.js',
			array( 'divi-vendor-react', 'jquery', 'divi-module-library', 'wp-hooks', 'divi-rest' ),
			ELICUS_DIVI_CONTENT_TOGGLE_VERSION,
			true
		);
	}
}
// You must use this hook to enqueue your assets for the Divi 5 Visual Builder.
add_action( 'divi_visual_builder_assets_before_enqueue_scripts', 'dct_divi5_enqueue_visual_builder_assets' );

// Load block wise scripts.
add_filter( 'separate_core_block_assets', '__return_true' ); // This is not working, kept as Divi 5 might be used in future.
add_filter( 'should_load_separate_core_block_assets', '__return_true' ); // This works fine.
