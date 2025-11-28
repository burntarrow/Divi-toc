<?php
namespace DCT\Modules\ContentToggle\ContentToggleTraits;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

trait CustomCssTrait {
    public static function custom_css() {
        return \WP_Block_Type_Registry::get_instance()->get_registered( 'el/content-toggle' )->customCssFields;
    }
}
