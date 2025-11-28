<?php
/**
 * Divi 5 bootstrap for the Divi TOC plugin.
 *
 * - Loads the Divi 5 server-side modules (dependency tree, TOC module).
 * - Enqueues the Divi 5 Visual Builder bundle for this extension.
 *
 * This file is intended to be required from divi-toc.php
 * when Divi 5 is active.
 */

defined( 'ABSPATH' ) || exit;

/**
 * IMPORTANT: make sure this matches the namespace + class
 * you use in Divi_toc/divi-5/server/Modules/Modules.php.
 */
const DIVI_TOC_D5_MODULES_CLASS = '\\DiviTOC\\Divi5\\Server\\Modules\\Modules';

/**
 * Derive plugin root path/URL from this file.
 * This keeps divi5-toc.php relocatable inside the plugin.
 */
if ( ! defined( 'DIVI_TOC_PLUGIN_FILE' ) ) {
    // divi5-toc.php is in: <plugin>/divi-5/divi5-toc.php
    define( 'DIVI_TOC_PLUGIN_FILE', dirname( __DIR__ ) . '/divi-toc.php' );
}

if ( ! defined( 'DIVI_TOC_PLUGIN_DIR' ) ) {
    define( 'DIVI_TOC_PLUGIN_DIR', plugin_dir_path( DIVI_TOC_PLUGIN_FILE ) );
}

if ( ! defined( 'DIVI_TOC_PLUGIN_URL' ) ) {
    define( 'DIVI_TOC_PLUGIN_URL', plugin_dir_url( DIVI_TOC_PLUGIN_FILE ) );
}

if ( ! defined( 'DIVI_TOC_VERSION' ) ) {
    define( 'DIVI_TOC_VERSION', '1.0.0' );
}

// Composer autoload for server-side classes.
$divi_toc_autoload = __DIR__ . '/vendor/autoload.php';

if ( file_exists( $divi_toc_autoload ) ) {
    require_once $divi_toc_autoload;
}

/**
 * -------------------------------------------------------------------------
 * 1. Require the Divi 5 server-side Modules bootstrap
 * -------------------------------------------------------------------------
 *
 * This file should:
 *  - Live at: divi-5/server/Modules/Modules.php
 *  - Define the class from DIVI_TOC_D5_MODULES_CLASS
 *  - Inside that class, hook into Divi 5's dependency tree
 *    (e.g. divi_module_library_modules_dependency_tree) and
 *    register the TableOfContents module.
 */
$divi_toc_d5_modules_file = __DIR__ . '/server/Modules/Modules.php';

if ( file_exists( $divi_toc_d5_modules_file ) ) {
    require_once $divi_toc_d5_modules_file;
} else {
    // Fail silently in production; in dev you can uncomment this:
    // error_log( '[Divi TOC] Divi 5 Modules.php not found at: ' . $divi_toc_d5_modules_file );
}

/**
 * Register the Divi 5 server-side modules on init.
 *
 * The Modules::register() method should:
 *  - Hook into divi_module_library_modules_dependency_tree
 *  - Add the TableOfContents dependency
 *  - Register any REST routes if needed
 */
add_action(
    'init',
    function () {
        if ( class_exists( DIVI_TOC_D5_MODULES_CLASS ) ) {
            // \DiviTOC\Divi5\Server\Modules\Modules::register()
            call_user_func( [ DIVI_TOC_D5_MODULES_CLASS, 'register' ] );
        } else {
            // In dev you can log this if the namespace/class is wrong.
            // error_log( '[Divi TOC] Divi 5 Modules class not found: ' . DIVI_TOC_D5_MODULES_CLASS );
        }
    }
);

/**
 * -------------------------------------------------------------------------
 * 2. Enqueue the Divi 5 Visual Builder bundle
 * -------------------------------------------------------------------------
 *
 * This should mirror what the working divi-content-toggle plugin does.
 * We enqueue a single JS bundle built from:
 *   Divi_toc/divi-5/visual-builder/src/index.js
 * compiled to:
 *   Divi_toc/divi-5/visual-builder/build/build.js
 */
add_action(
    'divi_visual_builder_assets_before_enqueue_scripts',
    function () {
        // Optional: only load when the builder is actually active.
        if ( function_exists( 'et_core_is_fb_enabled' ) && ! et_core_is_fb_enabled() ) {
            return;
        }

        $handle = 'divi-toc-divi5-builder';

        // This resolves to: <plugin-url>/divi-5/visual-builder/build/build.js
        $src = DIVI_TOC_PLUGIN_URL . 'divi-5/visual-builder/build/build.js';

        // Match dependencies to what the working content-toggle plugin uses.
        // If you know the exact handles from that plugin, mirror them here.
        $deps = array(
            'react',
            'react-dom',
            'wp-element',
        );

        wp_enqueue_script(
            $handle,
            $src,
            $deps,
            DIVI_TOC_VERSION,
            true
        );
    }
);
