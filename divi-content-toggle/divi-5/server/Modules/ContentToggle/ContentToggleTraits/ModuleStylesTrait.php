<?php
namespace DCT\Modules\ContentToggle\ContentToggleTraits;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\FrontEnd\Module\Style;
use ET\Builder\Packages\Module\Options\Css\CssStyle;
use ET\Builder\Packages\Module\Layout\Components\StyleCommon\CommonStyle;
use ET\Builder\Packages\Module\Options\FormField\FormFieldStyle;
use DCT\Modules\ContentToggle\ContentToggle;

trait ModuleStylesTrait {
	
	use StyleDeclarationTrait;
	use CustomCssTrait;

    /**
	 * Child Module's style components.
	 *
	 * This function is equivalent of JS function ModuleStyles located in
	 * src/components/child-module/styles.tsx.
	 *
	 * @param array $args {
	 *     An array of arguments.
	 *
	 * @type string $id Module ID. In VB, the ID of module is UUIDV4. In FE, the ID is order index.
	 * @type string $name Module name.
	 * @type string $attrs Module attributes.
	 * @type string $parentAttrs Parent attrs.
	 * @type string $orderClass Selector class name.
	 * @type string $parentOrderClass Parent selector class name.
	 * @type string $wrapperOrderClass Wrapper selector class name.
	 * @type string $settings Custom settings.
	 * @type string $state Attributes state.
	 * @type string $mode Style mode.
	 * @type ModuleElements $elements ModuleElements instance.
	 * }
	 * @since 2.0.0
	 */
	public static function module_styles( $args ) {
		$attrs        = $args['attrs'] ?? [];
		$order_class  = $args['orderClass'];
		$elements     = $args['elements'];
		$settings     = $args['settings'] ?? [];

        // Styles
		$styles = array(
			// Element: Module.
			$elements->style( [
				'attrName'   => 'module',
				'styleProps' => [
					'disabledOn' => [
						'disabledModuleVisibility' => $settings['disabledModuleVisibility'] ?? null,
					],
				],
			] ),
			CssStyle::style( [
				'selector'  => $order_class,
				'attr'      => $attrs['css'] ?? [],
				'cssFields' => self::custom_css(),
			] ),

			// Toggle Title.
			$elements->style( [
				'attrName' => 'toggle_title',
			] ),

			// Toggle Content.
			$elements->style( [
				'attrName' => 'content_one',
			] ),
			$elements->style( [
				'attrName' => 'content_two',
			] ),

			// Toggle Title Icon.
			CommonStyle::style( [
				'selector'            => "{$order_class} .el_content_toggle_off_value .et-pb-icon",
				'attr'                => $attrs['titleOneIcon']['innerContent'] ?? [],
				'declarationFunction' => [ ContentToggle::class, 'icon_font_declaration' ],
			] ),
			CommonStyle::style( [
				'selector'            => "{$order_class} .el_content_toggle_on_value .et-pb-icon",
				'attr'                => $attrs['titleTwoIcon']['innerContent'] ?? [],
				'declarationFunction' => [ ContentToggle::class, 'icon_font_declaration' ],
			] ),
			CommonStyle::style( [
				'selector' => "{$order_class} .el_content_toggle_title_value .et-pb-icon",
				'attr'     => $attrs['titleOneIcon']['advanced']['fontsize'] ?? null,
				'property' => 'font-size',
			] ),
			CommonStyle::style( [
				'selector' => "{$order_class} .el_content_toggle_title_value .et-pb-icon",
				'attr'     => $attrs['titleOneIcon']['advanced']['color'] ?? null,
				'property' => 'color',
			] ),

			// Toggle Switch Styling.
			CommonStyle::style( [
				'selector' => "{$order_class} .layout1 .el_content_toggle_switch::before",
				'attr'     => $attrs['toggle_switch']['advanced']['color_off'] ?? null,
				'property' => 'background-color',
			] ),
			CommonStyle::style( [
				'selector' => "{$order_class} .layout1 .el_content_toggle_field:checked + .el_content_toggle_switch::before",
				'attr'     => $attrs['toggle_switch']['advanced']['color_on'] ?? null,
				'property' => 'background-color',
			] ),
			CommonStyle::style( [
				'selector' => "{$order_class} .layout1 .el_content_toggle_bg",
				'attr'     => $attrs['toggle_switch']['advanced']['bg_color_off'] ?? null,
				'property' => 'background-color',
			] ),
			CommonStyle::style( [
				'selector' => "{$order_class} .layout1 .el_content_toggle_field:checked ~ .el_content_toggle_bg",
				'attr'     => $attrs['toggle_switch']['advanced']['bg_color_on'] ?? null,
				'property' => 'background-color',
			] ),
        );

		$content_one_type = $attrs['content_one']['advanced']['type']['desktop']['value'] ?? 'el_content_one_text';
		$content_two_type = $attrs['content_two']['advanced']['type']['desktop']['value'] ?? 'el_content_two_text';
		if ( 'el_content_one_image' === $content_one_type ) {
			array_push( $styles,
				$elements->style( [
					'attrName' => 'contentOneImage',
				] ),
				CommonStyle::style( [
					'selector' => "{$order_class} .el_content_one_toggle.el_content_toggle_image .et_pb_image_wrap",
					'attr'     => $attrs['contentOneImage']['advanced']['alignment'] ?? null,
					'property' => 'text-align',
				] )
			);
		}
		if ( 'el_content_two_image' === $content_two_type ) {
			array_push( $styles,
				$elements->style( [
					'attrName' => 'contentTwoImage',
				] ),
				CommonStyle::style( [
					'selector' => "{$order_class} .el_content_two_toggle.el_content_toggle_image .et_pb_image_wrap",
					'attr'     => $attrs['contentTwoImage']['advanced']['alignment'] ?? null,
					'property' => 'text-align',
				] )
			);
		}

        Style::add( [
			'id'            => $args['id'],
			'name'          => $args['name'],
			'orderIndex'    => $args['orderIndex'],
			'storeInstance' => $args['storeInstance'],
			'styles'        => $styles
		] );
    }
}
