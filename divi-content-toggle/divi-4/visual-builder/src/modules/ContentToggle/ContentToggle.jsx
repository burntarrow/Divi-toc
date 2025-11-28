// External Dependencies
import React, { Component } from 'react';
import jQuery from 'jquery';

// Internal Dependencies.
import Helper from '../helper';

class EL_ContentToggle extends Component {

	static slug = 'el_content_toggle';

	static css(props) {
		const utils         = window.ET_Builder.API.Utils._;
		const additionalCss = [];

		if ( props.switch_color_off ) {
			additionalCss.push( [ {
				selector:    '%%order_class%% .layout1 .el_content_toggle_switch::before',
				declaration: `background-color: ${props.switch_color_off};`,
			} ] );
		}
		if ( props.switch_color_off__hover ) {
			additionalCss.push( [ {
				selector:    '%%order_class%% .layout1 .el_content_toggle_button:hover .el_content_toggle_switch::before',
				declaration: `background-color: ${props.switch_color_off__hover};`,
			} ] );
		}
		if ( props.switch_color_on ) {
			additionalCss.push( [ {
				selector:    '%%order_class%% .layout1 .el_content_toggle_field:checked + .el_content_toggle_switch::before',
				declaration: `background-color: ${props.switch_color_on};`,
			} ] );
		}
		if ( props.switch_color_on__hover ) {
			additionalCss.push( [ {
				selector:    '%%order_class%% .layout1 .el_content_toggle_button:hover .el_content_toggle_field:checked + .el_content_toggle_switch::before',
				declaration: `background-color: ${props.switch_color_on__hover};`,
			} ] );
		}
		if ( props.switch_bg_color_off ) {
			additionalCss.push( [ {
				selector:    '%%order_class%% .layout1 .el_content_toggle_bg',
				declaration: `background-color: ${props.switch_bg_color_off};`,
			} ] );
		}
		if ( props.switch_bg_color_off__hover ) {
			additionalCss.push( [ {
				selector:    '%%order_class%% .layout1 .el_content_toggle_button:hover .el_content_toggle_bg',
				declaration: `background-color: ${props.switch_bg_color_off__hover};`,
			} ] );
		}
		if ( props.switch_bg_color_on ) {
			additionalCss.push( [ {
				selector:    '%%order_class%% .layout1 .el_content_toggle_field:checked ~ .el_content_toggle_bg',
				declaration: `background-color: ${props.switch_bg_color_on};`,
			} ] );
		}
		if ( props.switch_bg_color_on__hover ) {
			additionalCss.push( [ {
				selector:    '%%order_class%% .layout1 .el_content_toggle_button:hover .el_content_toggle_field:checked ~ .el_content_toggle_bg',
				declaration: `background-color: ${props.switch_bg_color_on__hover};`,
			} ] );
		}

		if ( props.content_one_title_icon || props.content_two_title_icon ) {
			// For title one.
			if ( props.content_one_title_icon ) {
				if ( typeof window.ET_Builder.API.Utils.processIconFontData === "function" ) {
					if ( window.ET_Builder.API.Utils.processIconFontData(props.content_one_title_icon) && window.ET_Builder.API.Utils.processIconFontData(props.content_one_title_icon).iconFontFamily ) {
						additionalCss.push( [ {
							selector:    `%%order_class%% .el_content_toggle_off_value .et-pb-icon`,
							declaration: `font-family: ${window.ET_Builder.API.Utils.processIconFontData(props.content_one_title_icon).iconFontFamily};`,
						} ] );
					}
					if ( window.ET_Builder.API.Utils.processIconFontData(props.content_one_title_icon) && window.ET_Builder.API.Utils.processIconFontData(props.content_one_title_icon).iconFontWeight ) {
						additionalCss.push( [ {
							selector:    `%%order_class%% .el_content_toggle_off_value .et-pb-icon`,
							declaration: `font-weight: ${window.ET_Builder.API.Utils.processIconFontData(props.content_one_title_icon).iconFontWeight};`,
						} ] );
					}
				}
			}
			// For title two.
			if ( props.content_two_title_icon ) {
				if ( typeof window.ET_Builder.API.Utils.processIconFontData === "function" ) {
					if ( window.ET_Builder.API.Utils.processIconFontData(props.content_two_title_icon) && window.ET_Builder.API.Utils.processIconFontData(props.content_two_title_icon).iconFontFamily ) {
						additionalCss.push( [ {
							selector:    `%%order_class%% .el_content_toggle_on_value .et-pb-icon`,
							declaration: `font-family: ${window.ET_Builder.API.Utils.processIconFontData(props.content_two_title_icon).iconFontFamily};`,
						} ] );
					}
					if ( window.ET_Builder.API.Utils.processIconFontData(props.content_two_title_icon) && window.ET_Builder.API.Utils.processIconFontData(props.content_two_title_icon).iconFontWeight ) {
						additionalCss.push( [ {
							selector:    `%%order_class%% .el_content_toggle_on_value .et-pb-icon`,
							declaration: `font-weight: ${window.ET_Builder.API.Utils.processIconFontData(props.content_two_title_icon).iconFontWeight};`,
						} ] );
					}
				}
			}

			let $icon_font_size = Helper.getResponsiveValues( props, 'title_icon_font_size' );
			if ( utils.isEmpty( utils.filter( $icon_font_size, Boolean ) ) ) {
				$icon_font_size = { 'desktop' : '24px', 'tablet' : '', 'phone' : '' };
			}
			if ( ! utils.isEmpty( utils.filter( $icon_font_size, Boolean ) ) ) {
				utils.forEach( $icon_font_size, function(value, key) {
					if ( '' !== value ) {
						additionalCss.push( [ {
							selector:    `%%order_class%% .el_content_toggle_title_value .et-pb-icon`,
							declaration: `font-size: ${value};`,
							device:      `${key}`,
						} ] );
					}
				} );
			}
			let $icon_color = Helper.getResponsiveValues( props, 'title_icon_color' );
			if ( ! utils.isEmpty( utils.filter( $icon_color, Boolean ) ) ) {
				utils.forEach( $icon_color, function(value, key) {
					if ( '' !== value ) {
						additionalCss.push( [ {
							selector:    `%%order_class%% .el_content_toggle_title_value .et-pb-icon`,
							declaration: `color: ${value};`,
							device:      `${key}`,
						} ] );
					}
				} );
			}
			let $icon_color_hover = Helper.getHoverValue( props, 'title_icon_color' );
			if ( ! utils.isEmpty( $icon_color_hover ) ) {
				additionalCss.push( [ {
					selector:    `%%order_class%% .el_content_toggle_title_value .et-pb-icon:hover`,
					declaration: `color: ${$icon_color_hover};`,
				} ] );
			}
		}

		// Image alignment.
		if ( 'el_content_one_image' === props.select_content_one_type && '' !== props.content_one_image_alignment ) {
			additionalCss.push( [ {
				selector:    '%%order_class%% .el_content_one_toggle.el_content_toggle_image .et_pb_image_wrap',
				declaration: `text-align: ${props.content_one_image_alignment};`,
			} ] );
		}
		if ( 'el_content_two_image' === props.select_content_two_type && '' !== props.content_two_image_alignment ) {
			additionalCss.push( [ {
				selector:    '%%order_class%% .el_content_two_toggle.el_content_toggle_image .et_pb_image_wrap',
				declaration: `text-align: ${props.content_two_image_alignment};`,
			} ] );
		}

		// Content Image Padding CSS.
		let $conent_one_image_padding = Helper.getMarginPaddingCss( props, 'content_one_image_custom_padding', 'padding', true );
		if ( ! utils.isEmpty( utils.filter( $conent_one_image_padding, Boolean ) ) ) {
			utils.forEach( $conent_one_image_padding, function(value, key) {
				if ( '' !== value ) {
					additionalCss.push( [ {
						selector:    `%%order_class%% .el_content_one_toggle .et_pb_image_wrap`,
						declaration: `${value}`,
						device:      `${key}`,
					} ] );
				}
			} );
		}
		let $conent_two_image_padding = Helper.getMarginPaddingCss( props, 'content_two_image_custom_padding', 'padding', true );
		if ( ! utils.isEmpty( utils.filter( $conent_two_image_padding, Boolean ) ) ) {
			utils.forEach( $conent_two_image_padding, function(value, key) {
				if ( '' !== value ) {
					additionalCss.push( [ {
						selector:    `%%order_class%% .el_content_two_toggle .et_pb_image_wrap`,
						declaration: `${value}`,
						device:      `${key}`,
					} ] );
				}
			} );
		}

		return additionalCss;
	}

	componentDidUpdate() {
		let $this = this;
		let address = this.props.moduleInfo.address;
		jQuery('body').on( 'click', '.el_content_toggle[data-address="' + address + '"] .el_content_toggle_field', function() {
			let el = jQuery(this);
			if ( el.prop('checked') === true ) {
				if ( el.closest('.el_content_toggle').children('.et_pb_module_inner').length > 0 ) {
					el.closest('.el_content_toggle').children('.et_pb_module_inner').children('.el_content_toggle_wrapper').children('.el_content_one_toggle').fadeOut( 300, function() {
						el.closest('.el_content_toggle').children('.et_pb_module_inner').children('.el_content_toggle_wrapper').children('.el_content_two_toggle').fadeIn( 300, function() {
							$this.dct_reinit_modules( el );
						} );
					} );
				} else if ( el.closest('.el_content_toggle').children('.el_content_toggle_wrapper').length > 0 ) {
					el.closest('.el_content_toggle').children('.el_content_toggle_wrapper').children('.el_content_one_toggle').fadeOut( 300, function() {
						el.closest('.el_content_toggle').children('.el_content_toggle_wrapper').children('.el_content_two_toggle').fadeIn( 300, function() {
							$this.dct_reinit_modules( el );
						} );
					} );
				} else {
					el.closest('.el_content_toggle').children('div').children('.el_content_toggle_wrapper').children('.el_content_one_toggle').fadeOut( 300,function() {
						el.closest('.el_content_toggle').children('div').children('.el_content_toggle_wrapper').children('.el_content_two_toggle').fadeIn( 300, function() {
							$this.dct_reinit_modules( el );
						} );
					} );
				}
			} else {
				if ( el.closest('.el_content_toggle').children('.et_pb_module_inner').length > 0 ) {
					el.closest('.el_content_toggle').children('.et_pb_module_inner').children('.el_content_toggle_wrapper').children('.el_content_two_toggle').fadeOut( 300, function() {
						el.closest('.el_content_toggle').children('.et_pb_module_inner').children('.el_content_toggle_wrapper').children('.el_content_one_toggle').fadeIn( 300, function() {
							$this.dct_reinit_modules( el );
						} );
					} );
				} else if ( el.closest('.el_content_toggle').children('.el_content_toggle_wrapper').length > 0 ) {
					el.closest('.el_content_toggle').children('.el_content_toggle_wrapper').children('.el_content_two_toggle').fadeOut( 300, function() {
						el.closest('.el_content_toggle').children('.el_content_toggle_wrapper').children('.el_content_one_toggle').fadeIn( 300, function() {
							$this.dct_reinit_modules( el );
						} );
					} );
				} else {
					el.closest('.el_content_toggle').children('div').children('.el_content_toggle_wrapper').children('.el_content_two_toggle').fadeOut( 300, function() {
						el.closest('.el_content_toggle').children('div').children('.el_content_toggle_wrapper').children('.el_content_one_toggle').fadeIn( 300, function() {
							$this.dct_reinit_modules( el );
						} );
					} );
				}
			}
		} );
		jQuery('body').on( 'click', '.el_content_toggle[data-address="' + address + '"] .el_content_toggle_title_value', function() {
			let el = jQuery(this);
			if ( el.hasClass('el_content_toggle_on_value') ) {
				if ( el.closest('.el_content_toggle_button_wrapper').find('.el_content_toggle_field').prop('checked') !== true ) {
					el.closest('.el_content_toggle_button_wrapper').find('.el_content_toggle_field').trigger('click');
				}   
			} else {
				if ( el.closest('.el_content_toggle_button_wrapper').find('.el_content_toggle_field').prop('checked') === true ) {
					el.closest('.el_content_toggle_button_wrapper').find('.el_content_toggle_field').trigger('click');
				}
			}
		} );
	}

	componentDidMount() {
		let $this   = this;
		let address = this.props.moduleInfo.address;
		$this.dct_reinit_modules( jQuery('.el_content_toggle[data-address="' + address + '"] .el_content_toggle_field') );
		jQuery('body').on( 'click', '.el_content_toggle[data-address="' + address + '"] .el_content_toggle_field', function() {
			let el = jQuery(this);
			if ( el.prop('checked') === true ) {
				if ( el.closest('.el_content_toggle').children('.et_pb_module_inner').length > 0 ) {
					el.closest('.el_content_toggle').children('.et_pb_module_inner').children('.el_content_toggle_wrapper').children('.el_content_one_toggle').fadeOut( 300, function() {
						el.closest('.el_content_toggle').children('.et_pb_module_inner').children('.el_content_toggle_wrapper').children('.el_content_two_toggle').fadeIn( 300, function() {
							$this.dct_reinit_modules( el );
						} );
					} );
				} else if ( el.closest('.el_content_toggle').children('.el_content_toggle_wrapper').length > 0 ) {
					el.closest('.el_content_toggle').children('.el_content_toggle_wrapper').children('.el_content_one_toggle').fadeOut( 300, function() {
						el.closest('.el_content_toggle').children('.el_content_toggle_wrapper').children('.el_content_two_toggle').fadeIn( 300, function() {
							$this.dct_reinit_modules( el );
						} );
					} );
				} else {
					el.closest('.el_content_toggle').children('div').children('.el_content_toggle_wrapper').children('.el_content_one_toggle').fadeOut( 300, function() {
						el.closest('.el_content_toggle').children('div').children('.el_content_toggle_wrapper').children('.el_content_two_toggle').fadeIn( 300, function() {
							$this.dct_reinit_modules( el );
						} );
					} );
				}
			} else {
				if ( el.closest('.el_content_toggle').children('.et_pb_module_inner').length > 0 ) {
					el.closest('.el_content_toggle').children('.et_pb_module_inner').children('.el_content_toggle_wrapper').children('.el_content_two_toggle').fadeOut( 300, function() {
						el.closest('.el_content_toggle').children('.et_pb_module_inner').children('.el_content_toggle_wrapper').children('.el_content_one_toggle').fadeIn( 300, function() {
							$this.dct_reinit_modules( el );
						} );
					} );
				} else if ( el.closest('.el_content_toggle').children('.el_content_toggle_wrapper').length > 0 ) {
					el.closest('.el_content_toggle').children('.el_content_toggle_wrapper').children('.el_content_two_toggle').fadeOut( 300, function() {
						el.closest('.el_content_toggle').children('.el_content_toggle_wrapper').children('.el_content_one_toggle').fadeIn( 300, function() {
							$this.dct_reinit_modules( el );
						} );
					} );
				} else {
					el.closest('.el_content_toggle').children('div').children('.el_content_toggle_wrapper').children('.el_content_two_toggle').fadeOut( 300, function() {
						el.closest('.el_content_toggle').children('div').children('.el_content_toggle_wrapper').children('.el_content_one_toggle').fadeIn( 300, function() {
							$this.dct_reinit_modules( el );
						} );
					} );
				}
			}
		} );
		jQuery('body').on( 'click', '.el_content_toggle[data-address="' + address + '"] .el_content_toggle_title_value', function() {
			let el = jQuery(this);
			if ( el.hasClass('el_content_toggle_on_value') ) {
				if ( el.closest('.el_content_toggle_button_wrapper').find('.el_content_toggle_field').prop('checked') !== true ) {
					el.closest('.el_content_toggle_button_wrapper').find('.el_content_toggle_field').trigger('click');
				}   
			} else {
				if ( el.closest('.el_content_toggle_button_wrapper').find('.el_content_toggle_field').prop('checked') === true ) {
					el.closest('.el_content_toggle_button_wrapper').find('.el_content_toggle_field').trigger('click');
				}
			}
		} );
	}

	dct_reinit_modules( el ) {
		let $this = this;
		if ( el.parents('.el_content_toggle').find('.et_pb_gallery').length > 0 ) {
			el.parents('.el_content_toggle').find('.et_pb_gallery').each( function() {
				window.et_pb_gallery_init( jQuery(this) );
			} );
		}
		if ( el.parents('.el_content_toggle').find('.dipl_masonry_gallery').length > 0 ) {
			el.parents('.el_content_toggle').find('.dipl_masonry_gallery').each( function() {
				$this.dct_initiate_isotope( jQuery(this).find('.dipl_masonry_gallery_wrapper'), '.dipl_masonry_gallery_item', '.dipl_masonry_gallery_item', '.dipl_masonry_gallery_item_gutter', true );
			} );
		}
		if ( el.parents('.el_content_toggle').find('.el_masonry_gallery').length > 0 ) {
			el.parents('.el_content_toggle').find('.el_masonry_gallery').each( function() {
				$this.dct_initiate_isotope( jQuery(this).find('.el_masonry_gallery_wrapper'), '.el_masonry_gallery_item', '.el_masonry_gallery_item', '.el_masonry_gallery_item_gutter', true );
			} );
		}
		if ( el.parents('.el_content_toggle').find('.dipl_woo_products_category_isotope_container').length > 0 ) {
			el.parents('.el_content_toggle').find('.dipl_woo_products_category_isotope_container').each( function() {
				$this.dct_initiate_isotope( jQuery(this), '.dipl_woo_products_category_isotope_item', '.dipl_woo_products_category_isotope_item', '.dipl_woo_products_category_isotope_item_gutter', true );
			} );
		}
		if ( el.parents('.el_content_toggle').find('.dipl_woo_products_isotope_container').length > 0 ) {
			el.parents('.el_content_toggle').find('.dipl_woo_products_isotope_container').each( function() {
				$this.dct_initiate_isotope( jQuery(this), '.dipl_woo_products_isotope_item', '.dipl_woo_products_isotope_item', '.dipl_woo_products_isotope_item_gutter', true );
			} );
		}
		if ( el.parents('.el_content_toggle').find('.dipl_testimonial_isotope_container').length > 0 ) {
			$this.dct_initiate_isotope( el.parents('.dipl_content_toggle').find('.dipl_testimonial_isotope_container'), '.dipl_testimonial_isotope_item' );
		}
		if ( el.parents('.el_content_toggle').find('.dipl_faq_masonry_container').length > 0 ) {
			$this.dct_initiate_isotope( el.parents('.dipl_content_toggle').find('.dipl_faq_masonry_container'), '.dipl_faq_page_schema_item' );
		}
	}

	dct_initiate_isotope( $container = '', $itemSelector = '', $columnWidth = '', $gutter = '', $imagesLoaded = false ) {
		if ( '' === $container || '' === $itemSelector ) {
			return '';
		}

		let $masonry = {};
		if ( '' !== $columnWidth && '' !== $gutter ) {
			$masonry = { columnWidth: $columnWidth, gutter: $gutter };
		}

		// Options.
		let $isotope = $container.isotope( {
			itemSelector: $itemSelector,
			layoutMode: 'masonry',
			percentPosition: true,
			resize: true,
			masonry: $masonry
		} );

		$isotope.isotope( 'revealItemElements', $container.find( $itemSelector ) );
		if ( $imagesLoaded ) {
			$isotope.imagesLoaded().progress( function() {
				$isotope.isotope('layout');
				$isotope.isotope('reloadItems');
			} );
		}
	}

	render() {
		const props = this.props;

		let utils            = window.ET_Builder.API.Utils,
			TitleHeaderLevel = props.content_toogle_header_level ? props.content_toogle_header_level : 'h5',
			contentOne       = [],
			contentTwo       = [],
			toggleLayout     = [],
			toggleAlignment  = props.toggle_alignment ? props.toggle_alignment : 'center',
			output           = [];

		let contentOneTitle = [];
		if ( '' !== props.content_one_title || props.content_one_title_icon ) {
			let titleOneText = '',
				titleOneIcon = '';
			if ( '' !== props.content_one_title ) {
				titleOneText = <TitleHeaderLevel className="el-content-toggle-title">{props.content_one_title}</TitleHeaderLevel>;
			}
			if ( props.content_one_title_icon ) {
				titleOneIcon = <span className="et-pb-icon">{ utils.processFontIcon(props.content_one_title_icon) }</span>;
			}
			if ( '' !== titleOneText || '' !== titleOneIcon ) {
				contentOneTitle.push(
					<div className="el_content_toggle_title_value el_content_toggle_off_value">
						{ titleOneText }{ titleOneIcon }
					</div>
				);
			}
		}

		let contentTwoTitle = [];
		if ( '' !== props.content_two_title || props.content_two_title_icon ) {
			let titleTwoText = '',
				titleTwoIcon = '';
			if ( '' !== props.content_two_title ) {
				titleTwoText = <TitleHeaderLevel className="el-content-toggle-title">{props.content_two_title}</TitleHeaderLevel>;
			}
			if ( props.content_two_title_icon ) {
				titleTwoIcon = <span className="et-pb-icon">{ utils.processFontIcon(props.content_two_title_icon) }</span>;
			}
			if ( '' !== titleTwoText || '' !== titleTwoIcon ) {
				contentTwoTitle.push(
					<div className="el_content_toggle_title_value el_content_toggle_on_value">
						{ titleTwoText }{ titleTwoIcon }
					</div>
				);
			}
		}

		toggleLayout.push(
			<div className={"el_content_toggle_button_wrapper layout1 el_content_toggle_" + toggleAlignment}>
				{contentOneTitle}
				<div className="el_content_toggle_button">
					<div className="el_content_toggle_button_inner">
						<input className="el_content_toggle_field" type="checkbox" value="" />
						<div className="el_content_toggle_switch"></div>
						<div className="el_content_toggle_bg"></div>
					</div>
				</div>
				{contentTwoTitle}
			</div>
		);

		if ( 'el_content_one_text' === props.select_content_one_type && props.content_one_text ) {
			contentOne.push( <div className="el_content_one_toggle el_content_toggle_text">{props.content_one_text}</div> );
		}
		if ( 'el_content_one_image' === props.select_content_one_type && props.dynamic.content_one_image.hasValue ) {
			contentOne.push(
				<div className="el_content_one_toggle el_content_toggle_image"><div className='et_pb_image_wrap'>
					<img src={props.dynamic.content_one_image.value} alt={props.content_one_image_alt} />
				</div></div>
			);
		}
		if ( 'el_content_one_layout' === props.select_content_one_type && props.__content_one_layout ) {
			contentOne.push( <div className="el_content_one_toggle el_content_toggle_layout" dangerouslySetInnerHTML={ {__html:props.__content_one_layout} } /> );
		}

		if ( 'el_content_two_text' === props.select_content_two_type && props.content_two_text ) {
			contentTwo.push( <div className="el_content_two_toggle el_content_toggle_text">{props.content_two_text}</div> );
		}
		if ( 'el_content_two_image' === props.select_content_two_type && props.dynamic.content_two_image.hasValue ) {
			contentTwo.push(
				<div className="el_content_two_toggle el_content_toggle_image et_pb_image_wrap"><div className='et_pb_image_wrap'>
					<img src={props.dynamic.content_two_image.value} alt={props.content_two_image_alt} />
				</div></div>
			);
		}
		if ( 'el_content_two_layout' === props.select_content_two_type && props.__content_two_layout ) {
			contentTwo.push( <div className="el_content_two_toggle el_content_toggle_layout" dangerouslySetInnerHTML={ {__html: props.__content_two_layout} } /> );
		}

		if ( utils._.isEmpty( utils._.filter( contentOne, Boolean ) ) || utils._.isEmpty( utils._.filter( contentTwo, Boolean ) ) ) {
			toggleLayout = '';            
		}

		if ( utils._.isEmpty( utils._.filter( contentOne, Boolean ) ) && utils._.isEmpty( utils._.filter( contentTwo, Boolean ) ) ) {
			output.push( <h5>No Content in the toggles</h5> );
		} else {
			output.push( <div className="el_content_toggle_wrapper">{toggleLayout}{contentOne}{contentTwo}</div> );
		}
	
		return output;
	}
}

export default EL_ContentToggle;
