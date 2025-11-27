<?php
/**
 * Divi 5 Extension Descriptor for Divi TOC
 */

defined( 'ABSPATH' ) || exit;

return [
    'name'         => 'Divi TOC',
    'slug'         => 'divi-toc',
    'description'  => 'Table of Contents module for Divi 5.',
    'version'      => '1.0.0',

    // This is where Divi 5 will look for the compiled extension bundle (build/index.js).
    'assets_path'  => plugin_dir_path( __FILE__ ) . 'build/',
    'assets_url'   => plugin_dir_url( __FILE__ ) . 'build/',

    // This is where your module.json + TS/React components live.
    'modules_path' => plugin_dir_path( __FILE__ ) . 'src/components/',
];
