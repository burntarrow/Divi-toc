<?php
class EL_DiviContentToggle {

	/**
	 * DCT_DiviContentToggle constructor.
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'dct_register_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'dct_enqueue_visual_builder_assets' ) );

		add_filter( 'divi_frontend_assets_dynamic_assets_late_global_assets_list', array( $this, 'dct_divi5_late_assets' ), 10, 3 );

		if ( is_admin() ) {
			require_once plugin_dir_path( __FILE__ ) . 'core/class-update.php';
		}
	}

	/**
	 * Register assets
	 *
	 * @since 1.0.0
	 */
	public function dct_register_scripts() {
		$modules = glob( ELICUS_DCT_MODULES_PATH . '/*', GLOB_ONLYDIR );
		if ( ! empty( $modules ) ) {
			foreach ( $modules as $module ) {
				if ( ! $module ) {
					continue;
				}
				$module = basename( $module );
				if ( file_exists( ELICUS_DCT_MODULES_PATH . "/$module/script.min.js" ) ) {
					wp_register_script(
						"divi-content-toggle-$module",
						ELICUS_DCT_MODULES_URL . "/$module/script.min.js",
						array( 'jquery' ),
						ELICUS_DIVI_CONTENT_TOGGLE_VERSION
					);
				}
				if ( file_exists( ELICUS_DCT_MODULES_PATH . "/$module/style.min.css" ) ) {
					wp_register_style(
						"divi-content-toggle-$module",
						ELICUS_DCT_MODULES_URL . "/$module/style.min.css",
						array(),
						ELICUS_DIVI_CONTENT_TOGGLE_VERSION
					);
				}
			}
		}
	}

	/**
	 * Load builder side assets
	 * Divi 4
	 * @since 1.0.0
	 */
	public function dct_enqueue_visual_builder_assets() {
		if ( et_core_is_fb_enabled() ) {

			/* Scripts */
			wp_enqueue_script(
				'dct-visual-builder',
				ELICUS_DIVI_CONTENT_TOGGLE_URL . 'divi-4/visual-builder/build/build.js',
				array( 'react', 'jquery' ),
				ELICUS_DIVI_CONTENT_TOGGLE_VERSION,
				true
			);

			$modules = glob( ELICUS_DCT_MODULES_PATH . '/*', GLOB_ONLYDIR );
			if ( ! empty( $modules ) ) {
				foreach ( $modules as $module ) {
					if ( ! $module ) {
						continue;
					}
					$module = basename( $module );
					if ( file_exists( ELICUS_DCT_MODULES_PATH . "/$module/script.min.js" ) ) {
						wp_enqueue_script( "divi-content-toggle-$module" );
					}
					if ( file_exists( ELICUS_DCT_MODULES_PATH . "/$module/style.min.css" ) ) {
						wp_enqueue_style( "divi-content-toggle-$module" );
					}
				}
			}
		}
	}

	public function dct_divi5_late_assets( $assets_list, $assets_args, $dynamic_assets ) {
		$cpt_suffix = et_builder_should_wrap_styles() && ! et_is_builder_plugin_active() ? '_cpt' : '';
		if ( empty( $assets_list['et_icons_all'] ) ) {
			$assets_list['et_icons_all'] = array(
				'css' => $assets_args['assets_prefix'] . "/css/icons_all.css",
			);
		}
		if ( empty( $assets_list['et_icons_fa'] ) ) {
			$assets_list['et_icons_fa'] = array(
				'css' => $assets_args['assets_prefix'] . "/css/icons_fa_all.css",
			);
		}

		return $assets_list;
	}
}

new EL_DiviContentToggle;
