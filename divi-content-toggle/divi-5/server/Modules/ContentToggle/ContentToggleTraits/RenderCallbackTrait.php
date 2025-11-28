<?php
namespace DCT\Modules\ContentToggle\ContentToggleTraits;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use DCT\Modules\ContentToggle\ContentToggle;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Packages\Module\Module;
use ET\Builder\Packages\IconLibrary\IconFont\Utils;

trait RenderCallbackTrait {
	public static function render_callback( $attrs, $content, $block, $elements ) {

		// Get the heading level and other attrs.
		$toggleAlignment   = $attrs['toggle_switch']['advanced']['alignment']['desktop']['value'] ?? 'center';
		$titleFonts        = $attrs['toggle_title']['decoration']['font']['font']['desktop']['value'] ?? [];
		$titleHeadingLevel = $titleFonts['headingLevel'] ?? 'h5';

		// Get the title one.
		$title_one        = $attrs['content_one']['innerContent']['title']['desktop']['value'] ?? '';
		$title_one_icon   = $attrs['titleOneIcon']['innerContent']['desktop']['value'] ?? [];
		$render_one_title = '';
		if ( ! empty( $title_one ) ) {
			$one_title = '';
			if ( ! empty( $title_one ) ) {
				$one_title = HTMLUtility::render( [
					'tag'        => $titleHeadingLevel,
					'attributes' => [ 'class' => 'el-content-toggle-title' ],
					'children'   => $title_one
				] );
			}
			$one_icon = '';
			if ( ! empty( $title_one_icon['unicode'] ) ) {
				$one_icon = sprintf( '<span class="et-pb-icon">%1$s</span>', Utils::process_font_icon( $title_one_icon ) );
			}
			$render_one_title = HTMLUtility::render( [
				'tag'               => 'div',
				'attributes'        => [ 'class'  => 'el_content_toggle_title_value el_content_toggle_off_value' ],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $one_title . $one_icon,
			] );
		}

		// Get the title two.
		$title_two        = $attrs['content_two']['innerContent']['title']['desktop']['value'] ?? '';
		$title_two_icon   = $attrs['titleTwoIcon']['innerContent']['desktop']['value'] ?? [];
		$render_two_title = '';
		if ( ! empty( $title_two ) ) {
			$two_title = '';
			if ( ! empty( $title_one ) ) {
				$two_title = HTMLUtility::render( [
					'tag'        => $titleHeadingLevel,
					'attributes' => [ 'class' => 'el-content-toggle-title' ],
					'children'   => $title_two
				] );
			}
			$two_icon = '';
			if ( ! empty( $title_two_icon['unicode'] ) ) {
				$two_icon = sprintf( '<span class="et-pb-icon">%1$s</span>', Utils::process_font_icon( $title_two_icon ) );
			}
			$render_two_title = HTMLUtility::render( [
				'tag'               => 'div',
				'attributes'        => [ 'class'  => 'el_content_toggle_title_value el_content_toggle_on_value' ],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $two_title . $two_icon,
			] );
		}

		$render_switch = sprintf(
			'<div class="el_content_toggle_button_wrapper layout1 el_content_toggle_%1$s">
				%2$s
				<div class="el_content_toggle_button">
					<div class="el_content_toggle_button_inner">
						<input class="el_content_toggle_field" type="checkbox" value="" />
						<div class="el_content_toggle_switch"></div>
						<div class="el_content_toggle_bg"></div>
					</div>
				</div>
				%3$s
			</div>',
			esc_attr( $toggleAlignment ),
			$render_one_title,
			$render_two_title
		);

		// Get content attrs.
		$content_one_type   = $attrs['content_one']['advanced']['type']['desktop']['value'] ?? 'el_content_one_text';
		$content_two_type   = $attrs['content_two']['advanced']['type']['desktop']['value'] ?? 'el_content_two_text';

		$content_one_layout = $attrs['content_one']['advanced']['layout']['desktop']['value'] ?? '-1';
		$content_two_layout = $attrs['content_two']['advanced']['layout']['desktop']['value'] ?? '-1';

		$content_one_text   = $attrs['content_one']['innerContent']['content']['desktop']['value'] ?? '';
		$content_two_text   = $attrs['content_two']['innerContent']['content']['desktop']['value'] ?? '';

		$render_content_one = $render_content_two = '';
		if ( 'el_content_one_text' === $content_one_type && ! empty( $content_one_text ) ) {
			$render_content_one = HTMLUtility::render( [
				'tag'               => 'div',
				'attributes'        => [ 'class' => 'el_content_one_toggle el_content_toggle_text' ],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $content_one_text,
			] );
		}
		if ( 'el_content_one_image' === $content_one_type ){
			$content_one_image = $elements->render( [
				'attrName' => 'contentOneImage'
			] );
			if ( ! empty( $content_one_image ) ) {
				$render_content_one = sprintf(
					'<div class="el_content_one_toggle el_content_toggle_image"><div class="et_pb_image_wrap">%1$s</div></div>',
					$content_one_image
				);
			}
		}
		if ( 'el_content_one_layout' === $content_one_type && 0 < intval( $content_one_layout ) ) {
			// Get layout content.
			$layout_one_content = do_shortcode( get_the_content( null, false, intval( $content_one_layout ) ) );
			$layout_one_content = apply_filters( 'the_content', $layout_one_content );
			$render_content_one = HTMLUtility::render( [
				'tag'               => 'div',
				'attributes'        => [ 'class' => 'el_content_one_toggle el_content_toggle_layout' ],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $layout_one_content,
			] );
		}

		if ( 'el_content_two_text' === $content_two_type && ! empty( $content_two_text ) ) {
			$render_content_two = HTMLUtility::render( [
				'tag'               => 'div',
				'attributes'        => [ 'class' => 'el_content_two_toggle el_content_toggle_text' ],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $content_two_text,
			] );
		}
		if ( 'el_content_two_image' === $content_two_type ){
			$content_two_image = $elements->render( [
				'attrName' => 'contentTwoImage'
			] );
			if ( ! empty( $content_two_image ) ) {
				$render_content_two = sprintf(
					'<div class="el_content_two_toggle el_content_toggle_image"><div class="et_pb_image_wrap">%1$s</div></div>',
					$content_two_image
				);
			}
		}
		if ( 'el_content_two_layout' === $content_two_type && 0 < intval( $content_two_layout ) ) {
			// Get layout content.
			$layout_two_content = do_shortcode( get_the_content( null, false, intval( $content_two_layout ) ) );
			$layout_two_content = apply_filters( 'the_content', $layout_two_content );
			$render_content_two = HTMLUtility::render( [
				'tag'               => 'div',
				'attributes'        => [ 'class' => 'el_content_two_toggle el_content_toggle_layout' ],
				'childrenSanitizer' => 'et_core_esc_previously',
				'children'          => $layout_two_content,
			] );
		}

		// Final output.
        $rendered_output = HTMLUtility::render( [
			'tag'               => 'div',
			'attributes'        => [ 'class' => 'el_content_toggle_wrapper' ],
			'childrenSanitizer' => 'et_core_esc_previously',
			'children'          => $render_switch . $render_content_one . $render_content_two,
		] );

        $parent = BlockParserStore::get_parent( $block->parsed_block['id'], $block->parsed_block['storeInstance'] );

		return Module::render( [
			// FE only.
			'orderIndex'          => $block->parsed_block['orderIndex'],
			'storeInstance'       => $block->parsed_block['storeInstance'],

			// VB equivalent.
			'attrs'               => $attrs,
			'elements'            => $elements,
			'id'                  => $block->parsed_block['id'],
			'moduleClassName'     => '',
			'name'                => $block->block_type->name,
			'moduleCategory'      => $block->block_type->category,
			'classnamesFunction'  => [ ContentToggle::class, 'module_classnames' ],
			'stylesComponent'     => [ ContentToggle::class, 'module_styles' ],
			'scriptDataComponent' => [ ContentToggle::class, 'module_script_data' ],
			'parentAttrs'         => $parent->attrs ?? [],
			'parentId'            => $parent->id ?? '',
			'parentName'          => $parent->blockName ?? '',
			'children'            => $elements->style_components(
										[ 'attrName' => 'module', ]
									) . $rendered_output,
		] );
    }
}
