// Run divi.moduleLibrary.getPossibleModuleConversionOutline('el_content_toggle/D4_MODULE_SHORTCODE');
const { convertFontIcon } = window?.divi?.conversion;
const { spacingValueConversionFunctionMap } = window.divi.module;

export const conversionOutline = {
	advanced: {
		admin_label: 'module.meta.adminLabel',
		animation: 'module.decoration.animation',
		box_shadow: {
			content_one_image: 'contentOneImage.decoration.boxShadow',
            content_two_image: 'contentTwoImage.decoration.boxShadow',
			default: 'module.decoration.boxShadow'
		},
		disabled_on: 'disabledOn',
		module: 'module',
		overflow: 'module.decoration.overflow',
		position_fields: 'module.decoration.position',
		scroll: 'module.decoration.scroll',
		sticky: 'module.decoration.sticky',
		text_shadow: {
			default: 'text.textShadow'
		},
		transform: 'module.decoration.transform',
		transition: 'module.decoration.transition',
		z_index: 'module.decoration.zIndex',
		fonts: {
			content_toogle_header: 'toggle_title.decoration.font',
			content_toogle_content_one: 'content_one.decoration.font',
			content_toogle_content_two: 'content_two.decoration.font'
		},
		max_width: 'module.decoration.sizing',
		borders: {
			content_one_image: "contentOneImage.decoration.border",
            content_two_image: "contentTwoImage.decoration.border",
			default: 'module.decoration.border'
		},
		margin_padding: 'module.decoration.spacing',
		background: 'module.decoration.background',
		height: 'sizing',
		link_options: 'module.advanced.link'
	},
	css: {
		before: 'css.*.before',
		main_element: 'css.*.mainElement',
		after: 'css.*.after',
		free_form: 'css.*.freeForm'
	},
	module: {
		content_one_title: 'content_one.innerContent.title.*',
		content_one_title_icon: 'titleOneIcon.innerContent.*',
		select_content_one_type: 'content_one.advanced.type.*',
		content_one_text: 'content_one.innerContent.content.*',
		content_one_image: 'contentOneImage.innerContent.*.src',
		content_one_image_alt: 'contentOneImage.innerContent.*.alt',
		select_content_one_layout: 'content_one.advanced.layout.*',
		content_two_title: 'content_two.innerContent.title.*',
		content_two_title_icon: 'titleTwoIcon.innerContent.*',
		select_content_two_type: 'content_two.advanced.type.*',
		content_two_text: 'content_two.innerContent.content.*',
		content_two_image: 'contentTwoImage.innerContent.*.src',
        content_two_image_alt: 'contentTwoImage.innerContent.*.alt',
		select_content_two_layout: 'content_two.advanced.layout.*',
		toggle_alignment: 'toggle_switch.advanced.alignment.*',
		switch_color_off: 'toggle_switch.advanced.color_off.*',
		switch_color_on: 'toggle_switch.advanced.color_on.*',
		switch_bg_color_off: 'toggle_switch.advanced.bg_color_off.*',
		switch_bg_color_on: 'toggle_switch.advanced.bg_color_on.*',
        title_icon_font_size: "titleOneIcon.advanced.fontsize.*",
        title_icon_color: 'titleOneIcon.advanced.color.*',
        content_one_image_custom_padding: 'contentOneImage.decoration.spacing.*.padding',
		content_one_image_alignment: 'frontImage.advanced.alignment.*',
        content_two_image_custom_padding: "contentTwoImage.decoration.spacing.*.padding",
		content_two_image_alignment: 'backImage.advanced.alignment.*'
	},
	valueExpansionFunctionMap: {
		content_one_title_icon: convertFontIcon,
		content_two_title_icon: convertFontIcon,
		content_one_image_custom_padding: spacingValueConversionFunctionMap.padding,
		content_two_image_custom_padding: spacingValueConversionFunctionMap.padding
	}
};
