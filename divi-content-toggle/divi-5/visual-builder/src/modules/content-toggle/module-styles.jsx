// External dependencies.
import React from 'react';

// Divi dependencies.
const {
	CssStyle,
	StyleContainer,
	CommonStyle
} = window?.divi?.module;

// Local dependencies.
import {
	iconFontDeclaration
} from './style-declarations';
import { cssFields } from './custom-css';

const { getAttrByMode } = window?.divi?.moduleUtils;

/**
 * Module style component for static module.
 */
export const ModuleStyles = ( {
	attrs,
	elements,
	settings,
	orderClass,
	mode,
	state,
	noStyleTag
} ) => {

	const contentOneType = getAttrByMode( attrs?.content_one?.advanced?.type ) ?? 'el_content_one_text';
	const contentTwoType = getAttrByMode( attrs?.content_two?.advanced?.type ) ?? 'el_content_two_text';

	let styles = [];
	if ( 'el_content_one_image' === contentOneType ) {
		styles.push(
			elements.style( {
				attrName: 'contentOneImage',
			} ),
			<CommonStyle
				selector={ orderClass + " .el_content_one_toggle.el_content_toggle_image .et_pb_image_wrap" }
				attr={ attrs?.contentOneImage?.advanced?.alignment ?? {} }
				property="text-align"
			/>
		);
	}
	if ( 'el_content_two_image' === contentTwoType ) {
		styles.push(
			elements.style( {
				attrName: 'contentTwoImage',
			} ),
			<CommonStyle
				selector={ orderClass + " .el_content_two_toggle.el_content_toggle_image .et_pb_image_wrap" }
				attr={ attrs?.contentTwoImage?.advanced?.alignment ?? {} }
				property="text-align"
			/>
		);
	}

	return (
		<StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
			{/* Element: Module. */}
			{ elements.style( {
				attrName:   'module',
				styleProps: {
					disabledOn: {
						disabledModuleVisibility: settings?.disabledModuleVisibility,
					},
				},
			} ) }
			<CssStyle
				selector={orderClass}
				attr={attrs.css}
				cssFields={cssFields}
			/>

			{/* Toggle Title. */}
			{ elements.style( {
				attrName: 'toggle_title',
			} ) }

			{/* Toggle Content. */}
			{ elements.style( {
				attrName: 'content_one',
			} ) }
			{ elements.style( {
				attrName: 'content_two',
			} ) }

			{/* Toggle Title Icon. */}
			<CommonStyle
				selector={ orderClass + " .el_content_toggle_off_value .et-pb-icon" }
				attr={ attrs?.titleOneIcon?.innerContent }
				declarationFunction={ iconFontDeclaration }
			/>
			<CommonStyle
				selector={ orderClass + " .el_content_toggle_on_value .et-pb-icon" }
				attr={ attrs?.titleTwoIcon?.innerContent }
				declarationFunction={ iconFontDeclaration }
			/>
			<CommonStyle
				selector={ orderClass + " .el_content_toggle_title_value .et-pb-icon" }
				attr={ attrs?.titleOneIcon?.advanced?.fontsize ?? {} }
				property="font-size"
			/>
			<CommonStyle
				selector={ orderClass + " .el_content_toggle_title_value .et-pb-icon" }
				attr={ attrs?.titleOneIcon?.advanced?.color ?? {} }
				property="color"
			/>
			
			{/* Toggle Switch Styling. */}
			<CommonStyle
				selector={ orderClass + " .layout1 .el_content_toggle_switch::before" }
				attr={ attrs?.toggle_switch?.advanced?.color_off ?? {} }
				property="background-color"
			/>
			<CommonStyle
				selector={ orderClass + " .layout1 .el_content_toggle_field:checked + .el_content_toggle_switch::before" }
				attr={ attrs?.toggle_switch?.advanced?.color_on ?? {} }
				property="background-color"
			/>
			<CommonStyle
				selector={ orderClass + " .layout1 .el_content_toggle_bg" }
				attr={ attrs?.toggle_switch?.advanced?.bg_color_off ?? {} }
				property="background-color"
			/>
			<CommonStyle
				selector={ orderClass + " .layout1 .el_content_toggle_field:checked ~ .el_content_toggle_bg" }
				attr={ attrs?.toggle_switch?.advanced?.bg_color_on ?? {} }
				property="background-color"
			/>

			{/* Other custom styles. */}
			{ ( styles ) ? styles : null }
		</StyleContainer>
	);
};
