<?php
/**
 * Divi TOC – TableOfContents Module (Divi 5 server-side)
 */

namespace DiviTOC\Divi5\Server\Modules\TableOfContents;

defined( 'ABSPATH' ) || exit;

use ET\Builder\Packages\ModuleLibrary\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use ET\Builder\Packages\ModuleLibrary\Module;

class TableOfContents implements DependencyInterface {

	/**
	 * Register this module with Divi's Module Library.
	 *
	 * @param array $dependencies Existing dependencies.
	 *
	 * @return array Modified dependencies.
	 */
	public function load( array $dependencies ): array {
                // Path to the module folder that contains module.json, etc.
                // Adjust this if your structure differs.
                $module_dir = trailingslashit( DIVI_TOC_PLUGIN_DIR ) . 'divi-5/visual-builder/src/modules/table-of-contents';

		if ( ! class_exists( ModuleRegistration::class ) ) {
			// If Divi 5's ModuleRegistration isn't available, bail gracefully.
			return $dependencies;
		}

		$dependencies[] = ModuleRegistration::register_module(
			$module_dir,
			[
				// This callback will be used to render the module on the front end.
				'render_callback' => [ __CLASS__, 'render_callback' ],
			]
		);

		return $dependencies;
	}

	/**
	 * Server-side render callback for the TOC module.
	 *
	 * @param array $render_props Props provided by Divi's module pipeline.
	 *
	 * @return string HTML output.
	 */
	public static function render_callback( array $render_props ): string {
		// For now, just render a placeholder TOC markup.
		$content = '<nav class="divi-toc-placeholder" aria-label="Table of contents">';
		$content .= '<p>Divi TOC placeholder – module wiring OK.</p>';
		$content .= '</nav>';

		// If Divi's Module helper exists, let it handle wrapping/styles/etc.
		if ( class_exists( Module::class ) ) {
			return Module::render( $render_props, $content );
		}

		// Fallback: just return raw content.
		return $content;
	}
}
