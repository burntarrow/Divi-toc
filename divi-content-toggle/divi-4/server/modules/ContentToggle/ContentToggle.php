<?php
/**
 * @author      Elicus <hello@elicus.com>
 * @link        https://www.elicus.com/
 * @copyright   2021 Elicus Technologies Private Limited
 * @version     1.0.2
 */
class EL_ContentToggle extends ET_Builder_Module {

	public $slug       = 'el_content_toggle';
	public $vb_support = 'on';

	protected $module_credits = array(
		'module_uri' => 'https://diviextended.com/product/divi-content-toggle/',
		'author'     => 'Elicus',
		'author_uri' => 'https://elicus.com/',
	);

	public function init() {
		$this->name = esc_html__( 'Divi Content Toggle', 'divi-content-toggle' );
		$this->main_css_element = '%%order_class%%';
	}

	public function get_settings_modal_toggles() {
		return array(
			'general'  => array(
				'toggles' => array(
					'content_one' => array(
						'title'    => esc_html__( 'Content One', 'divi-content-toggle' ),
						'priority' => 1,
					),
					'content_two' => array(
						'title'    => esc_html__( 'Content Two', 'divi-content-toggle' ),
						'priority' => 2,
					),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'content_toggle_styling' => array(
						'title'    => esc_html__( 'Toggle Switch Styling', 'divi-content-toggle' ),
						'priority' => 1,
					),
					'toggle_title_text_settings' => array(
						'title'    => esc_html__( 'Toggle Title Text Setting', 'divi-content-toggle' ),
						'priority' => 2,
					),
					'toggle_title_icon_settings' => array(
						'title'    => esc_html__( 'Toggle Title Icon Setting', 'divi-content-toggle' ),
						'priority' => 3,
					),
					'content_one_text_settings' => array(
						'title'    => esc_html__( 'Content One Text Setting', 'divi-content-toggle' ),
						'priority' => 4,
					),
					'content_two_text_settings' => array(
						'title'    => esc_html__( 'Content Two Text Setting', 'divi-content-toggle' ),
						'priority' => 5,
					),
					'content_one_image_settings' => array(
						'title'    => esc_html__( 'Content One Image Setting', 'divi-content-toggle' ),
						'priority' => 6,
					),
					'content_two_image_settings' => array(
						'title'    => esc_html__( 'Content Two Image Setting', 'divi-content-toggle' ),
						'priority' => 7,
					),
				),
			),
		);
	}

	public function get_advanced_fields_config() {
		return array(
			'fonts' => array(
				'content_toogle_header' => array(
					'label'          => esc_html__( 'Title', 'divi-content-toggle' ),
					'font_size'      => array(
						'default_on_front' => '18px',
						'range_settings'   => array(
							'min'  => '1',
							'max'  => '100',
							'step' => '1',
						),
						'validate_unit'    => true,
					),
					'line_height'    => array(
						'default_on_front' => '1.5em',
						'range_settings'   => array(
							'min'  => '0.1',
							'max'  => '10',
							'step' => '0.1',
						),
					),
					'letter_spacing' => array(
						'default_on_front' => '0px',
						'range_settings'   => array(
							'min'  => '0',
							'max'  => '10',
							'step' => '1',
						),
						'validate_unit'    => true,
					),
					'header_level'   => array(
						'default' => 'h5',
					),
					'hide_text_align' => true,
					'css'            => array(
						'main' => '%%order_class%% .el_content_toggle_title_value h1, %%order_class%% .el_content_toggle_title_value h2, %%order_class%% .el_content_toggle_title_value h3, %%order_class%% .el_content_toggle_title_value h4, %%order_class%% .el_content_toggle_title_value h5, %%order_class%% .el_content_toggle_title_value h6',
					),
					'tab_slug'    => 'advanced',
					'toggle_slug' => 'toggle_title_text_settings',
				),
				'content_toogle_content_one' => array(
					'label'          => esc_html__( 'Content One', 'divi-content-toggle' ),
					'font_size'      => array(
						'default_on_front' => '18px',
						'range_settings'   => array(
							'min'  => '1',
							'max'  => '100',
							'step' => '1',
						),
						'validate_unit'    => true,
					),
					'line_height'    => array(
						'default_on_front' => '1.5em',
						'range_settings'   => array(
							'min'  => '0.1',
							'max'  => '10',
							'step' => '0.1',
						),
					),
					'letter_spacing' => array(
						'default_on_front' => '0px',
						'range_settings'   => array(
							'min'  => '0',
							'max'  => '10',
							'step' => '1',
						),
						'validate_unit' => true,
					),
					'css' => array(
						'main' => '%%order_class%% .el_content_one_toggle.el_content_toggle_text, %%order_class%% .el_content_one_toggle.el_content_toggle_text p',
					),
					'depends_on'      => array( 'select_content_one_type' ),
					'depends_show_if' => 'el_content_one_text',
					'tab_slug'        => 'advanced',
					'toggle_slug'     => 'content_one_text_settings',
				),
				'content_toogle_content_two' => array(
					'label'          => esc_html__( 'Content Two', 'divi-content-toggle' ),
					'font_size'      => array(
						'default_on_front' => '18px',
						'range_settings'   => array(
							'min'  => '1',
							'max'  => '100',
							'step' => '1',
						),
						'validate_unit'    => true,
					),
					'line_height'    => array(
						'default_on_front' => '1.5em',
						'range_settings'   => array(
							'min'  => '0.1',
							'max'  => '10',
							'step' => '0.1',
						),
					),
					'letter_spacing' => array(
						'default_on_front' => '0px',
						'range_settings'   => array(
							'min'  => '0',
							'max'  => '10',
							'step' => '1',
						),
						'validate_unit' => true,
					),
					'css' => array(
						'main' => '%%order_class%% .el_content_two_toggle.el_content_toggle_text, %%order_class%% .el_content_two_toggle.el_content_toggle_text p',
					),
					'depends_on'      => array( 'select_content_two_type' ),
					'depends_show_if' => 'el_content_two_text',
					'tab_slug'        => 'advanced',
					'toggle_slug'     => 'content_two_text_settings',
				),
			),
			'toggle_content_spacing' => array(
				'content_one_image' => array(
					'margin_padding' => array(
						'css' => array(
							'margin' 	=> '%%order_class%% .el_content_one_toggle .et_pb_image_wrap',
							'padding'   => '%%order_class%% .el_content_one_toggle .et_pb_image_wrap',
							'important' => 'all',
						),
					),
				),
				'content_two_image' => array(
					'margin_padding' => array(
						'css' => array(
							'margin' 	=> '%%order_class%% .el_content_two_toggle .et_pb_image_wrap',
							'padding'   => '%%order_class%% .el_content_two_toggle .et_pb_image_wrap',
							'important' => 'all',
						),
					),
				)
			),
			'margin_padding' => array(
				'css' => array(
					'main'      => '%%order_class%%',
					'important' => 'all',
				),
			),
			'max_width' => array(
				'extra' => array(
					'content_one_image' => array(
						'options'              => array(
							'width' => array(
								'label'          => esc_html__( 'Image Width', 'divi-content-toggle' ),
								'range_settings' => array(
									'min'  => 1,
									'max'  => 100,
									'step' => 1,
								),
								'hover'            => false,
								'default_unit'     => '%',
								'default'          => '100%',
								'default_on_front' => '100%',
								'tab_slug'         => 'advanced',
								'toggle_slug'      => 'content_one_image_settings',
							),
						),
						'use_max_width'        => false,
						'use_module_alignment' => false,
						'depends_on'           => array( 'select_content_one_type' ),
						'depends_show_if'      => 'el_content_one_image',
						'css'                  => array(
							'main'      => "{$this->main_css_element} .el_content_one_toggle img",
							'important' => 'all',
						),
					),
					'content_two_image' => array(
						'options'              => array(
							'width' => array(
								'label'            => esc_html__( 'Image Width', 'divi-content-toggle' ),
								'range_settings'   => array(
									'min'  => 1,
									'max'  => 100,
									'step' => 1,
								),
								'hover'            => false,
								'default_unit'     => '%',
								'default'          => '100%',
								'default_on_front' => '100%',
								'tab_slug'         => 'advanced',
								'toggle_slug'      => 'content_two_image_settings',
							),
						),
						'use_max_width'        => false,
						'use_module_alignment' => false,
						'depends_on'           => array( 'select_content_two_type' ),
						'depends_show_if'      => 'el_content_two_image',
						'css'                  => array(
							'main'      => "{$this->main_css_element} .el_content_two_toggle img",
							'important' => 'all',
						),
					),
				),
				'default' => array(
					'css' => array(
						'main'             => '%%order_class%%',
						'module_alignment' => '%%order_class%%',
					),
				),
			),
			'borders' => array(
				'content_one_image'  => array(
					'css'          => array(
						'main' => array(
							'border_radii'  => '%%order_class%% .el_content_one_toggle img',
							'border_styles' => '%%order_class%% .el_content_one_toggle img',
							'important'     => 'all',
						),
					),
					'label_prefix'    => esc_html__( 'Image', 'divi-content-toggle' ),
					'depends_on'      => array( 'select_content_one_type' ),
					'depends_show_if' => 'el_content_one_image',
					'tab_slug'        => 'advanced',
					'toggle_slug'     => 'content_one_image_settings',
				),
				'content_two_image'  => array(
					'css'          => array(
						'main' => array(
							'border_radii'  => '%%order_class%% .el_content_two_toggle img',
							'border_styles' => '%%order_class%% .el_content_two_toggle img',
							'important'     => 'all',
						),
					),
					'label_prefix'    => esc_html__( 'Image', 'divi-content-toggle' ),
					'depends_on'      => array( 'select_content_two_type' ),
					'depends_show_if' => 'el_content_two_image',
					'tab_slug'        => 'advanced',
					'toggle_slug'     => 'content_two_image_settings',
				),
				'default' => array(
					'css' => array(
						'main' => array(
							'border_styles' => '%%order_class%%',
							'border_radii'  => '%%order_class%%',
						),
					),
				),
			),
			'box_shadow' => array(
				'content_one_image'   => array(
					'css' => array(
						'main'      => "%%order_class%% .el_content_one_toggle img",
						'important' => 'all',
					),
					'depends_on'      => array( 'select_content_one_type' ),
					'depends_show_if' => 'el_content_one_image',
					'tab_slug'        => 'advanced',
					'toggle_slug'     => 'content_one_image_settings',
				),
				'content_two_image'   => array(
					'css' => array(
						'main'      => "%%order_class%% .el_content_two_toggle img",
						'important' => 'all',
					),
					'depends_on'      => array( 'select_content_two_type' ),
					'depends_show_if' => 'el_content_two_image',
					'tab_slug'        => 'advanced',
					'toggle_slug'     => 'content_two_image_settings',
				),
				'default' => array(
					'css' => array(
						'main' => '%%order_class%% .aioc_slide_wrapper',
					),
				),
			),
			'filters' => false,
			'text'    => false,
		);
	}

	public function get_fields() {
		$et_accent_color = et_builder_accent_color();
		$layouts[-1] = 'Select Layout';

		$args = array( 
			'post_type' => 'et_pb_layout',
			'post_status' => 'publish', 
			'posts_per_page' => -1
		);

		$query = new WP_Query($args);
		while ( $query->have_posts() ) {
			$query->the_post();
			$post_id = get_the_ID();
			$post_title = get_the_title();
			$layouts[$post_id] = $post_title;
		}
		wp_reset_postdata();

		$el_content_toggle_fields = array(
			'content_one_title' => array(
				'label'           => esc_html__( 'Toggle Title', 'divi-content-toggle' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'tab_slug'        => 'general',
				'toggle_slug'     => 'content_one',
				'description'     => esc_html__( 'Here you can input the text to be used for the toggle title of Content One.', 'divi-content-toggle' ),
			),
			'content_one_title_icon' => array(
				'label'           => esc_html__( 'Toggle Title Icon', 'divi-content-toggle' ),
				'type'            => 'select_icon',
				'option_category' => 'basic_option',
				'class'           => array( 'et-pb-font-icon' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'content_one',
				'description'     => esc_html__( 'Here you can select the icon to be used for the toggle title of Content One.', 'divi-content-toggle' ),
			),
			'select_content_one_type' => array(
				'label'           => esc_html__( 'Content Type', 'divi-content-toggle' ),
				'type'            => 'select',
				'option_category' => 'configuration',
				'options'         => array(
					'el_content_one_text'   => esc_html__( 'Text', 'divi-content-toggle' ),
					'el_content_one_image'  => esc_html__( 'Image', 'divi-content-toggle' ),
					'el_content_one_layout' => esc_html__( 'Layout', 'divi-content-toggle' ),
				),
				'default'         => 'el_content_one_text',
				'tab_slug'        => 'general',
				'toggle_slug'     => 'content_one',
				'description'     => esc_html__( 'Here you can choose the Content One type.', 'divi-content-toggle' ),
			),
			'content_one_text' => array(
				'label'           => esc_html__( 'Content', 'divi-content-toggle' ),
				'type'            => 'textarea',
				'option_category' => 'basic_option',
				'show_if'         => array(
					'select_content_one_type' => 'el_content_one_text',
				),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'content_one',
				'description'     => esc_html__( 'Here you can input the text to be used as content for Content One.', 'divi-content-toggle' ),
			),
			'content_one_image' => array(
				'label'              => esc_html__( 'Image', 'divi-content-toggle' ),
				'type'               => 'upload',
				'option_category'    => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'divi-content-toggle' ),
				'choose_text'        => esc_attr__( 'Choose an Image', 'divi-content-toggle' ),
				'update_text'        => esc_attr__( 'Set As Image', 'divi-content-toggle' ),
				'dynamic_content'    => 'image',
				'show_if'            => array(
					'select_content_one_type' => 'el_content_one_image',
				),
				'tab_slug'           => 'general',
				'toggle_slug'        => 'content_one',
				'description'        => esc_html__( 'Here you can upload the image to be used as content for Content One.', 'divi-content-toggle' ),
			),
			'content_one_image_alt' => array(
				'label'           => esc_html__( 'Image Alt Text', 'divi-content-toggle' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'show_if'         => array(
					'select_content_one_type' => 'el_content_one_image',
				),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'content_one',
				'description'     => esc_html__( 'Here you can input the text to be used for the image as HTML ALT text.', 'divi-content-toggle' ),
			),
			'select_content_one_layout' => array(
				'label'           => esc_html__( 'Select Layout', 'divi-content-toggle' ),
				'type'            => 'select',
				'option_category' => 'configuration',
				'options'         => $layouts,
				'show_if'         => array(
					'select_content_one_type' => 'el_content_one_layout',
				),
				'default'          => '-1',
				'tab_slug'         => 'general',
				'toggle_slug'      => 'content_one',
				'description'      => esc_html__( 'Here you can choose the layout saved in your Divi library to be used for the Content One.', 'divi-content-toggle' ),
			),
			'content_two_title' => array(
				'label'           => esc_html__( 'Toggle Title', 'divi-content-toggle' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'tab_slug'        => 'general',
				'toggle_slug'     => 'content_two',
				'description'     => esc_html__( 'Here you can input the text to be used for the toggle title of Content Two.', 'divi-content-toggle' ),
			),
			'content_two_title_icon' => array(
				'label'           => esc_html__( 'Toggle Title Icon', 'divi-content-toggle' ),
				'type'            => 'select_icon',
				'option_category' => 'basic_option',
				'class'           => array( 'et-pb-font-icon' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'content_two',
				'description'     => esc_html__( 'Here you can select the icon to be used for the toggle title of Content Two.', 'divi-content-toggle' ),
			),
			'select_content_two_type' => array(
				'label'           => esc_html__( 'Content Type', 'divi-content-toggle' ),
				'type'            => 'select',
				'option_category' => 'configuration',
				'options'         => array(
					'el_content_two_text'   => esc_html__( 'Text', 'divi-content-toggle' ),
					'el_content_two_image'  => esc_html__( 'Image', 'divi-content-toggle' ),
					'el_content_two_layout' => esc_html__( 'Layout', 'divi-content-toggle' ),
				),
				'default'         => 'el_content_two_text',
				'tab_slug'        => 'general',
				'toggle_slug'     => 'content_two',
				'description'     => esc_html__( 'Here you can choose the Content Two type.', 'divi-content-toggle' ),
			),
			'content_two_text' => array(
				'label'           => esc_html__( 'Content', 'divi-content-toggle' ),
				'type'            => 'textarea',
				'option_category' => 'basic_option',
				'show_if'         => array(
					'select_content_two_type' => 'el_content_two_text',
				),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'content_two',
				'description'     => esc_html__( 'Here you can input the text to be used as content for Content Two.', 'divi-content-toggle' ),
			),
			'content_two_image' => array(
				'label'              => esc_html__( 'Image', 'divi-content-toggle' ),
				'type'               => 'upload',
				'option_category'    => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'divi-content-toggle' ),
				'choose_text'        => esc_attr__( 'Choose an Image', 'divi-content-toggle' ),
				'update_text'        => esc_attr__( 'Set As Image', 'divi-content-toggle' ),
				'dynamic_content'    => 'image',
				'show_if'            => array(
					'select_content_two_type' => 'el_content_two_image',
				),
				'tab_slug'           => 'general',
				'toggle_slug'        => 'content_two',
				'description'        => esc_html__( 'Here you can upload the image to be used as content for Content One.', 'divi-content-toggle' ),
			),
			'content_two_image_alt' => array(
				'label'           => esc_html__( 'Image Alt Text', 'divi-content-toggle' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'show_if'         => array(
					'select_content_two_type' => 'el_content_two_image',
				),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'content_two',
				'description'     => esc_html__( 'Here you can input the text to be used for the image as HTML ALT text.', 'divi-content-toggle' ),
			),
			'select_content_two_layout' => array(
				'label'           => esc_html__( 'Select Layout', 'divi-content-toggle' ),
				'type'            => 'select',
				'option_category' => 'configuration',
				'options'         => $layouts,
				'show_if'         => array(
					'select_content_two_type' => 'el_content_two_layout',
				),
				'default'         => '-1',
				'tab_slug'        => 'general',
				'toggle_slug'     => 'content_two',
				'description'     => esc_html__( 'Here you can choose the layout saved in your Divi library to be used for the Content Two.', 'divi-content-toggle' ),
			),
			'toggle_alignment' => array(
				'label'           => esc_html__( 'Switch Alignment', 'divi-content-toggle' ),
				'type'            => 'text_align',
				'option_category' => 'layout',
				'options'         => et_builder_get_text_orientation_options( array( 'justified' ) ),
				'mobile_options'  => false,
				'tab_slug'        => 'advanced',
				'toggle_slug'     => 'content_toggle_styling',
				'description'     => esc_html__( 'Here you can select the alignment of the toggle switch in the left, right, or center of the module.', 'divi-content-toggle' ),
			),
			'switch_color_off' => array(
				'label'        => esc_html__( 'Switch Color(OFF State)', 'divi-content-toggle' ),
				'type'         => 'color-alpha',
				'custom_color' => true,
				'default'      => '#000',
				'hover'        => 'tabs',
				'tab_slug'     => 'advanced',
				'toggle_slug'  => 'content_toggle_styling',
				'description'  => esc_html__( 'Here you can select the custom color to be used for the circular switch icon during OFF state.', 'divi-content-toggle' ),
			),
			'switch_color_on' => array(
				'label'        => esc_html__( 'Switch Color(ON State)', 'divi-content-toggle' ),
				'type'         => 'color-alpha',
				'custom_color' => true,
				'default'      => '#eee',
				'hover'        => 'tabs',
				'tab_slug'     => 'advanced',
				'toggle_slug'  => 'content_toggle_styling',
				'description'  => esc_html__( 'Here you can select the custom color to be used for the circular switch icon during On state.', 'divi-content-toggle' ),
			),
			'switch_bg_color_off' => array(
				'label'        => esc_html__( 'Switch Background Color(OFF State)', 'divi-content-toggle' ),
				'type'         => 'color-alpha',
				'custom_color' => true,
				'default'      => '#eee',
				'hover'        => 'tabs',
				'tab_slug'     => 'advanced',
				'toggle_slug'  => 'content_toggle_styling',
				'description'  => esc_html__( 'Here you can select the custom color to be used for the switch background during OFF state.', 'divi-content-toggle' ),
			),
			'switch_bg_color_on' => array(
				'label'        => esc_html__( 'Switch Background Color(ON State)', 'divi-content-toggle' ),
				'type'         => 'color-alpha',
				'custom_color' => true,
				'default'      => '#000',
				'hover'        => 'tabs',
				'tab_slug'     => 'advanced',
				'toggle_slug'  => 'content_toggle_styling',
				'description'  => esc_html__( 'Here you can select the custom color to be used for the switch background during On state.', 'divi-content-toggle' ),
			),
			'title_icon_font_size' => array(
				'label'            => esc_html__( 'Icon Font Size', 'divi-content-toggle' ),
				'type'             => 'range',
				'option_category'  => 'font_option',
				'range_settings'   => array(
					'min'  => '1',
					'max'  => '120',
					'step' => '1',
				),
				'default'          => '24px',
				'mobile_options'   => true,
				'tab_slug'         => 'advanced',
				'toggle_slug'      => 'toggle_title_icon_settings',
				'description'      => esc_html__( 'Control the size of the icon by increasing or decreasing the font size.', 'divi-content-toggle' ),
			),
			'title_icon_color' => array(
				'label'          	 => esc_html__( 'Icon Color', 'divi-content-toggle' ),
				'type'            	=> 'color-alpha',
				'hover'           	=> 'tabs',
				'mobile_options'  	=> true,
				'tab_slug'        	=> 'advanced',
				'toggle_slug'     	=> 'toggle_title_icon_settings',
				'description'     	=> esc_html__( 'Here you can define a custom color for your icon.', 'divi-content-toggle' ),
			),
			'content_one_image_custom_padding' => array(
				'label'                 => esc_html__( 'Image Padding', 'divi-content-toggle' ),
				'type'                  => 'custom_padding',
				'option_category'       => 'layout',
				'mobile_options'        => true,
				'hover'                 => false,
				'default'          		=> '||||true|true',
				'default_on_front' 		=> '||||true|true',
				'show_if'               => array(
					'select_content_one_type' => 'el_content_one_image',
				),
				'tab_slug'              => 'advanced',
				'toggle_slug'           => 'content_one_image_settings',
				'description'           => esc_html__( 'Padding adds extra space to the inside of the element, increasing the distance between the edge of the element and its inner contents.', 'divi-content-toggle' ),
			),
			'content_one_image_alignment' => array(
				'label'           => esc_html__( 'Image Alignment', 'divi-content-toggle' ),
				'type'            => 'text_align',
				'option_category' => 'layout',
				'options'         => et_builder_get_text_orientation_options( array( 'justified' ) ),
				'mobile_options'  => false,
				'show_if'         => array(
					'select_content_one_type' => 'el_content_one_image',
				),
				'tab_slug'        => 'advanced',
				'toggle_slug'     => 'content_one_image_settings',
				'description'     => esc_html__( 'Here you can select the alignment of the image in the left, right, or center of the content.', 'divi-content-toggle' ),
			),
			'content_two_image_custom_padding' => array(
				'label'                 => esc_html__( 'Image Padding', 'divi-content-toggle' ),
				'type'                  => 'custom_padding',
				'option_category'       => 'layout',
				'mobile_options'        => true,
				'hover'                 => false,
				'default'          		=> '||||true|true',
				'default_on_front' 		=> '||||true|true',
				'show_if'               => array(
					'select_content_two_type' => 'el_content_two_image',
				),
				'tab_slug'              => 'advanced',
				'toggle_slug'           => 'content_two_image_settings',
				'description'           => esc_html__( 'Padding adds extra space to the inside of the element, increasing the distance between the edge of the element and its inner contents.', 'divi-content-toggle' ),
			),
			'content_two_image_alignment' => array(
				'label'           => esc_html__( 'Image Alignment', 'divi-content-toggle' ),
				'type'            => 'text_align',
				'option_category' => 'layout',
				'options'         => et_builder_get_text_orientation_options( array( 'justified' ) ),
				'mobile_options'  => false,
				'show_if'         => array(
					'select_content_two_type' => 'el_content_two_image',
				),
				'tab_slug'        => 'advanced',
				'toggle_slug'     => 'content_two_image_settings',
				'description'     => esc_html__( 'Here you can select the alignment of the image in the left, right, or center of the content.', 'divi-content-toggle' ),
			),
			'__content_one_layout' => array(
				'type'                => 'computed',
				'computed_callback'   => array( 'EL_ContentToggle', 'el_content_one_layout' ),
				'computed_depends_on' => array(
					'select_content_one_type',
					'select_content_one_layout'
				),
			),
			'__content_two_layout' => array(
				'type'                => 'computed',
				'computed_callback'   => array( 'EL_ContentToggle', 'el_content_two_layout' ),
				'computed_depends_on' => array(
					'select_content_two_type',
					'select_content_two_layout'
				),
			),
		);

		return $el_content_toggle_fields;
	}

	public static function el_content_one_layout( $args = array() ) {
		$defaults = array(
			'select_content_one_type'   => '',
			'select_content_one_layout' => '',
		);

		$args = wp_parse_args( $args, $defaults );

		$select_content_one_type 	= esc_attr( $args['select_content_one_type'] );
		$select_content_one_layout  = intval( esc_attr( $args['select_content_one_layout'] ) );

		$output = '';
		if ( 'el_content_one_layout' === $select_content_one_type && '' !== $select_content_one_layout && -1 !== $select_content_one_layout ) {
			$output = do_shortcode( get_the_content( null, false, $select_content_one_layout ) );
		}
		return $output;
	}

	public static function el_content_two_layout( $args = array() ) {
		$defaults = array(
			'select_content_two_type'   => '',
			'select_content_two_layout' => '',
		);

		$args = wp_parse_args( $args, $defaults );

		$select_content_two_type 	= esc_attr( $args['select_content_two_type'] );
		$select_content_two_layout  = intval( esc_attr( $args['select_content_two_layout'] ) );

		$output = '';
		if ( 'el_content_two_layout' === $select_content_two_type && '' !== $select_content_two_layout && -1 !== $select_content_two_layout ) {
			$output = do_shortcode( get_the_content( null, false, $select_content_two_layout ) );
		}
		return $output;
	}

	public function render( $attrs, $content = null, $render_slug ) {
		$multi_view            		 = et_pb_multi_view_options( $this );

		$content_one_title 			 = $this->props['content_one_title'];
		$select_content_one_type 	 = $this->props['select_content_one_type'];
		$content_one_text 			 = $this->props['content_one_text'];
		$select_content_one_layout 	 = (int)$this->props['select_content_one_layout'];
		$content_two_title 			 = $this->props['content_two_title'];
		$select_content_two_type 	 = $this->props['select_content_two_type'];
		$content_two_text 			 = $this->props['content_two_text'];
		$select_content_two_layout 	 = ( int ) $this->props['select_content_two_layout'];
		$toggle_alignment			 = esc_attr( $this->props['toggle_alignment'] ) ? esc_attr( $this->props['toggle_alignment'] ) : 'center';
		$switch_color_off			 = $this->props['switch_color_off'];
		$switch_color_off_hover 	 = esc_attr( $this->get_hover_value( 'switch_color_off' ) );
		$switch_color_on			 = $this->props['switch_color_on'];
		$switch_color_on_hover 		 = esc_attr( $this->get_hover_value( 'switch_color_on' ) );
		$switch_bg_color_off		 = $this->props['switch_bg_color_off'];
		$switch_bg_color_off_hover 	 = esc_attr( $this->get_hover_value( 'switch_bg_color_off' ) );
		$switch_bg_color_on		     = $this->props['switch_bg_color_on'];
		$switch_bg_color_on_hover    = esc_attr( $this->get_hover_value( 'switch_bg_color_on' ) );
		$content_toggle_header_level = $this->props['content_toogle_header_level'];

		$processed_content_toggle_header_level = et_pb_process_header_level( $content_toggle_header_level, 'h5' );
		$processed_content_toggle_header_level = esc_html( $processed_content_toggle_header_level );

		wp_enqueue_script( 'divi-content-toggle-content-toggle' );
		wp_enqueue_style( 'divi-content-toggle-content-toggle' );

		if ( '' !== $switch_color_off ) {
			self::set_style( $render_slug, array(
				'selector'    => '%%order_class%% .layout1 .el_content_toggle_switch::before',
				'declaration' => sprintf( 'background-color: %1$s;', esc_html( $switch_color_off ) ),
			) );
		}
		if ( '' !== $switch_color_off_hover ) {
			self::set_style( $render_slug, array(
				'selector'    => '%%order_class%% .layout1 .el_content_toggle_button:hover .el_content_toggle_switch::before',
				'declaration' => sprintf( 'background-color: %1$s;', esc_html( $switch_color_off_hover ) ),
			) );
		}
		if ( '' !== $switch_color_on ) {
			self::set_style( $render_slug, array(
				'selector'    => '%%order_class%% .layout1 .el_content_toggle_field:checked + .el_content_toggle_switch::before',
				'declaration' => sprintf( 'background-color: %1$s;', esc_html( $switch_color_on ) ),
			) );
		}
		if ( '' !== $switch_color_on_hover ) {
			self::set_style( $render_slug, array(
				'selector'    => '%%order_class%% .layout1  .el_content_toggle_button:hover .el_content_toggle_field:checked + .el_content_toggle_switch::before',
				'declaration' => sprintf( 'background-color: %1$s;', esc_html( $switch_color_on_hover ) ),
			) );
		}
		if ( '' !== $switch_bg_color_off ) {
			self::set_style( $render_slug, array(
				'selector'    => '%%order_class%% .layout1 .el_content_toggle_bg',
				'declaration' => sprintf( 'background-color: %1$s;', esc_html( $switch_bg_color_off ) ),
			) );
		}
		if ( '' !== $switch_bg_color_off_hover ) {
			self::set_style( $render_slug, array(
				'selector'    => '%%order_class%% .layout1 .el_content_toggle_button:hover .el_content_toggle_bg',
				'declaration' => sprintf( 'background-color: %1$s;', esc_html( $switch_bg_color_off_hover ) ),
			) );
		}
		if ( '' !== $switch_bg_color_on ) {
			self::set_style( $render_slug, array(
				'selector'    => '%%order_class%% .layout1 .el_content_toggle_field:checked ~ .el_content_toggle_bg',
				'declaration' => sprintf( 'background-color: %1$s;', esc_html( $switch_bg_color_on ) ),
			) );
		}
		if ( '' !== $switch_bg_color_on_hover ) {
			self::set_style( $render_slug, array(
				'selector'    => '%%order_class%% .layout1 .el_content_toggle_button:hover .el_content_toggle_field:checked ~ .el_content_toggle_bg',
				'declaration' => sprintf( 'background-color: %1$s;', esc_html( $switch_bg_color_on_hover ) ),
			) );
		}

		$content_one = '';
		$content_two = '';
		if ( 'el_content_one_text' === $select_content_one_type && '' !== $content_one_text ) {
			$content_one = sprintf(
				'<div class="el_content_one_toggle el_content_toggle_text">%1$s</div>',
				$content_one_text
			);
		}
		if ( 'el_content_one_image' === $select_content_one_type ) {
			$content_one_image = $multi_view->render_element( array(
				'tag'      => 'img',
				'attrs'    => array(
					'src'  => '{{content_one_image}}',
					'alt'  => $this->props['content_one_image_alt'],
				),
				'required' => 'content_one_image',
			) );
			if ( ! empty( $content_one_image ) ) {
				$content_one = sprintf(
					'<div class="el_content_one_toggle el_content_toggle_image"><div class="et_pb_image_wrap">%1$s</div></div>',
					$content_one_image
				);
			}
		}
		if ( 'el_content_one_layout' === $select_content_one_type && '' !== $select_content_one_layout && -1 !== $select_content_one_layout ) {
			$content_one = sprintf(
				'<div class="el_content_one_toggle el_content_toggle_layout">%1$s</div>',
				do_shortcode( get_the_content( null, false, $select_content_one_layout ) )
			);
		}

		if ( 'el_content_two_text' === $select_content_two_type && '' !== $content_two_text ) {
			$content_two = sprintf(
				'<div class="el_content_two_toggle el_content_toggle_text">%1$s</div>',
				$content_two_text
			);
		}
		if ( 'el_content_two_image' === $select_content_two_type ) {
			$content_two_image = $multi_view->render_element( array(
				'tag'      => 'img',
				'attrs'    => array(
					'src'  => '{{content_two_image}}',
					'alt'  => $this->props['content_two_image_alt'],
				),
				'required' => 'content_two_image',
			) );
			if ( ! empty( $content_two_image ) ) {
				$content_two = sprintf(
					'<div class="el_content_two_toggle el_content_toggle_image"><div class="et_pb_image_wrap">%1$s</div></div>',
					$content_two_image
				);
			}
		}
		if ( 'el_content_two_layout' === $select_content_two_type && '' !== $select_content_two_layout && -1 !== $select_content_two_layout ) {
			$content_two = sprintf(
				'<div class="el_content_two_toggle el_content_toggle_layout">%1$s</div>',
				do_shortcode( get_the_content( null, false, $select_content_two_layout ) )
			);
		}

		$content_one_title_icon = $multi_view->render_element( array(
			'content'  => '{{content_one_title_icon}}',
			'attrs'    => array( 'class' => 'et-pb-icon' ),
			'required' => 'content_one_title_icon',
		) );
		$content_two_title_icon = $multi_view->render_element( array(
			'content'  => '{{content_two_title_icon}}',
			'attrs'    => array( 'class' => 'et-pb-icon' ),
			'required' => 'content_two_title_icon',
		) );

		if ( ! empty( $content_one_title ) || ! empty( $content_one_title_icon ) ) {
			$one_title = '';
			if ( ! empty( $content_one_title ) ) {
				$one_title = sprintf( '<%2$s class="el-content-toggle-title">%1$s</%2$s>', $content_one_title, $processed_content_toggle_header_level );
			}
			$content_one_title = sprintf(
				'<div class="el_content_toggle_title_value el_content_toggle_off_value">%1$s%2$s</div>',
				$one_title,
				$content_one_title_icon
			);
		}
		if ( '' !== $content_two_title ) {
			$two_title = '';
			if ( ! empty( $content_one_title ) ) {
				$two_title = sprintf( '<%2$s class="el-content-toggle-title">%1$s</%2$s>', $content_two_title, $processed_content_toggle_header_level );
			}
			$content_two_title =  sprintf(
				'<div class="el_content_toggle_title_value el_content_toggle_on_value">%1$s%2$s</div>',
				$two_title,
				$content_two_title_icon
			);
		}

		$toggle_layout = sprintf(
			'<div class="el_content_toggle_button_wrapper layout1 el_content_toggle_%3$s">
				%1$s
				<div class="el_content_toggle_button">
					<div class="el_content_toggle_button_inner">
						<input class="el_content_toggle_field" type="checkbox" value="" />
						<div class="el_content_toggle_switch"></div>
						<div class="el_content_toggle_bg"></div>
					</div>
				</div>
				%2$s
			</div>',
		   	$content_one_title,
		   	$content_two_title,
		   	$toggle_alignment
		);

		if ( ! empty( $content_one_title_icon ) || ! empty( $content_two_title_icon ) ) {
			if ( ! empty( $content_one_title_icon ) ) {
				if ( class_exists( 'ET_Builder_Module_Helper_Style_Processor' ) && method_exists( 'ET_Builder_Module_Helper_Style_Processor', 'process_extended_icon' ) ) {
					$this->generate_styles( array(
						'utility_arg'    => 'icon_font_family',
						'render_slug'    => $render_slug,
						'base_attr_name' => 'content_one_title_icon',
						'important'      => true,
						'selector'       => '%%order_class%% .el_content_toggle_off_value .et-pb-icon',
						'processor'      => array(
							'ET_Builder_Module_Helper_Style_Processor',
							'process_extended_icon',
						),
					) );
				}
				if ( class_exists( 'ET_Builder_Module_Helper_Style_Processor' ) && method_exists( 'ET_Builder_Module_Helper_Style_Processor', 'process_extended_icon' ) ) {
					$this->generate_styles( array(
						'utility_arg'    => 'icon_font_family',
						'render_slug'    => $render_slug,
						'base_attr_name' => 'content_two_title_icon',
						'important'      => true,
						'selector'       => '%%order_class%% .el_content_toggle_on_value .et-pb-icon',
						'processor'      => array(
							'ET_Builder_Module_Helper_Style_Processor',
							'process_extended_icon',
						),
					) );
				}
			}

			$icon_font_size = et_pb_responsive_options()->get_property_values( $this->props, 'title_icon_font_size' );
			$icon_color     = et_pb_responsive_options()->get_property_values( $this->props, 'title_icon_color' );

			et_pb_responsive_options()->generate_responsive_css( $icon_font_size, '%%order_class%% .el_content_toggle_title_value .et-pb-icon', 'font-size', $render_slug, '!important;', 'range' );
			et_pb_responsive_options()->generate_responsive_css( $icon_color, '%%order_class%% .el_content_toggle_title_value .et-pb-icon', 'color', $render_slug, '!important;', 'color' );

			$icon_color_hover = $this->get_hover_value( 'title_icon_color' );
			if ( $icon_color_hover ) {
				self::set_style( $render_slug, array(
					'selector'    => '%%order_class%% .el_content_toggle_title_value .et-pb-icon:hover',
					'declaration' => sprintf( 'color: %1$s !important;', esc_attr( $icon_color_hover ) ),
				) );
			}
		}

		if ( 'el_content_one_image' === $select_content_one_type && ! empty( $this->props['content_one_image_alignment'] ) ) {
			self::set_style( $render_slug, array(
				'selector'    => '%%order_class%% .el_content_one_toggle.el_content_toggle_image .et_pb_image_wrap',
				'declaration' => sprintf( 'text-align: %1$s !important;', esc_attr( $this->props['content_one_image_alignment'] ) ),
			) );
		}
		if ( 'el_content_two_image' === $select_content_two_type && ! empty( $this->props['content_two_image_alignment'] ) ) {
			self::set_style( $render_slug, array(
				'selector'    => '%%order_class%% .el_content_two_toggle.el_content_toggle_image .et_pb_image_wrap',
				'declaration' => sprintf( 'text-align: %1$s !important;', esc_attr( $this->props['content_two_image_alignment'] ) )
			) );
		}

		$fields = array( 'toggle_content_spacing' );
		self::process_advanced_margin_padding_css( $this, $render_slug, $this->margin_padding, $fields );

		if ( '' === $content_one && '' === $content_two ) {
			return '';
		} else {
			return sprintf(
				'<div class="el_content_toggle_wrapper">%1$s%2$s%3$s</div>',
				'' === $content_one || '' === $content_two ? '' : $toggle_layout,
				$content_one,
				$content_two
			);
		}
	}

	protected function _render_module_wrapper( $output = '', $render_slug = '' ) {
		$wrapper_settings    = $this->get_wrapper_settings( $render_slug );
		$slug                = $render_slug;
		$outer_wrapper_attrs = $wrapper_settings['attrs'];
		$inner_wrapper_attrs = $wrapper_settings['inner_attrs'];

		/**
		 * Filters the HTML attributes for the module's outer wrapper. The dynamic portion of the
		 * filter name, '$slug', corresponds to the module's slug.
		 *
		 * @since 3.23 Add support for responsive video background.
		 * @since 3.1
		 *
		 * @param string[]           $outer_wrapper_attrs
		 * @param ET_Builder_Element $module_instance
		 */
		$outer_wrapper_attrs = apply_filters( "et_builder_module_{$slug}_outer_wrapper_attrs", $outer_wrapper_attrs, $this );

		/**
		 * Filters the HTML attributes for the module's inner wrapper. The dynamic portion of the
		 * filter name, '$slug', corresponds to the module's slug.
		 *
		 * @since 3.1
		 *
		 * @param string[]           $inner_wrapper_attrs
		 * @param ET_Builder_Element $module_instance
		 */
		$inner_wrapper_attrs = apply_filters( "et_builder_module_{$slug}_inner_wrapper_attrs", $inner_wrapper_attrs, $this );

		return sprintf(
			'<div%1$s>%2$s %3$s %4$s %5$s %6$s</div>',
			et_html_attrs( $outer_wrapper_attrs ),
			$wrapper_settings['parallax_background'],
			$wrapper_settings['video_background'],
			et_()->array_get( $wrapper_settings, 'video_background_tablet', '' ),
			et_()->array_get( $wrapper_settings, 'video_background_phone', '' ),
			$output
		);
	}

	public static function process_advanced_margin_padding_css( $module, $function_name, $margin_padding, $fields = array() ) {
		$utils           = ET_Core_Data_Utils::instance();
		$all_values      = $module->props;
		$advanced_fields = $module->advanced_fields;

		// Disable if module doesn't set advanced_fields property and has no VB support.
		if ( ! $module->has_vb_support() && ! $module->has_advanced_fields ) {
			return;
		}

		$allowed_advanced_fields = $fields;
		foreach ( $allowed_advanced_fields as $advanced_field ) {
			if ( ! empty( $advanced_fields[ $advanced_field ] ) ) {
				foreach ( $advanced_fields[ $advanced_field ] as $label => $form_field ) {
					$margin_key  = "{$label}_custom_margin";
					$padding_key = "{$label}_custom_padding";
					if ( '' !== $utils->array_get( $all_values, $margin_key, '' ) || '' !== $utils->array_get( $all_values, $padding_key, '' ) ) {
						$settings = $utils->array_get( $form_field, 'margin_padding', array() );
						// Ensure main selector exists.
						$form_field_margin_padding_css = $utils->array_get( $settings, 'css.main', '' );
						if ( empty( $form_field_margin_padding_css ) ) {
							$utils->array_set( $settings, 'css.main', $utils->array_get( $form_field, 'css.main', '' ) );
						}

						$margin_padding->update_styles( $module, $label, $settings, $function_name, $advanced_field );
					}
				}
			}
		}
	}

	/**
	 * Filter multi view value.
	 *
	 * @since 3.27.1
	 *
	 * @see ET_Builder_Module_Helper_MultiViewOptions::filter_value
	 *
	 * @param mixed $raw_value Props raw value.
	 * @param array $args {
	 *     Context data.
	 *
	 *     @type string $context      Context param: content, attrs, visibility, classes.
	 *     @type string $name         Module options props name.
	 *     @type string $mode         Current data mode: desktop, hover, tablet, phone.
	 *     @type string $attr_key     Attribute key for attrs context data. Example: src, class, etc.
	 *     @type string $attr_sub_key Attribute sub key that availabe when passing attrs value as array such as styes. Example: padding-top, margin-botton, etc.
	 * }
	 * @param ET_Builder_Module_Helper_MultiViewOptions $multi_view Multiview object instance.
	 *
	 * @return mixed
	 */
	public function multi_view_filter_value( $raw_value, $args, $multi_view ) {
		$name = isset( $args['name'] ) ? $args['name'] : '';
		$mode = isset( $args['mode'] ) ? $args['mode'] : '';

		if ( $raw_value && ( 'content_one_title_icon' === $name || 'content_two_title_icon' === $name ) ) {
			$processed_value = html_entity_decode( et_pb_process_font_icon( $raw_value ) );
			if ( '%%1%%' === $raw_value ) {
				$processed_value = '"';
			}

			return $processed_value;
		}

		return $raw_value;
	}
}

new EL_ContentToggle();
