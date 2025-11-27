<?php
/**
 * Divi TOC – Divi 5 Extension descriptor
 *
 * This file is required by the `divi.modules.extensions` filter in divi-toc.php
 * and tells Divi 5 which assets and modules this extension provides.
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

return [
    // This should be unique across extensions.
    'name'      => 'Divi TOC',
    'namespace' => 'Divi_toc',

    /**
     * Scripts loaded by Divi 5.
     *
     * IMPORTANT: `divi-toc-builder` MUST point to the JS bundle that calls
     * `registerModule(...)` for your TableOfContents module.
     */
    'scripts'   => [
        'divi-toc-builder'  => [
            'src'       => plugins_url( 'build/divi-toc-builder.js', __FILE__ ),
            'in_footer' => true,
            // Divi 5 will enqueue its own runtime; we keep deps light here.
            'deps'      => [ 'react', 'react-dom' ],
        ],
        'divi-toc-frontend' => [
            'src'       => plugins_url( 'build/divi-toc-frontend.js', __FILE__ ),
            'in_footer' => true,
            'deps'      => [],
        ],
    ],

    /**
     * Styles for builder + frontend.
     * We’re using the CSS file produced by webpack (MiniCssExtractPlugin).
     */
    'styles'    => [
        'divi-toc-builder' => [
            'src' => plugins_url( 'assets/css/divi-toc-builder.css', __FILE__ ),
        ],
    ],

    /**
     * PHP module classes (for server-side rendering, custom_css, etc.).
     * Divi TOC currently has a single module.
     */
    'modules'   => [
        'Divi_toc\\Modules\\TableOfContentsModule\\TableOfContentsModule',
    ],
];
