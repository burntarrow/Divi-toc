<?php
/**
 * Registers all Divi TOC modules (Divi 5).
 */

namespace Divi_toc\Modules;

defined( 'ABSPATH' ) || exit;

class Modules {

	/**
	 * Register all modules for this extension.
	 * Called from divi-toc.php after plugins/theme are loaded.
	 */
	public static function register() {
		// Load the TableOfContents module PHP class.
		require_once __DIR__ . '/TableOfContentsModule/TableOfContentsModule.php';

		// At this point Divi 5’s JS side (builder.tsx/frontend.ts) handles
		// the actual module rendering & registration inside the builder.
	}
}
