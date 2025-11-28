import React from 'react';
import { __ } from '@wordpress/i18n';

const {
	Range,
	ColorPickerContainer,
	ButtonOptionsContainer
} = window?.divi?.fieldLibrary;
const {
	AnimationGroup,
	BorderGroup,
	BoxShadowGroup,
	FiltersGroup,
	FontGroup,
	SizingGroup,
	SpacingGroup,
	TransformGroup,
	FieldContainer,
	getTextAlignOptions,
} = window?.divi?.module;

const { GroupContainer } = window?.divi?.modal;

/**
 * Design Settings panel for the Static Module.
 */
export const SettingsDesign = ({ attrs, defaultSettingsAttrs }) => {

	return (
		<React.Fragment>
			{/* Toggle Switch Styling. */}
			<GroupContainer id="toggleSwitchStyling"
				title={ __( 'Toggle Switch Styling', 'divi-content-toggle' ) }
			>
				<FieldContainer
					attrName="toggle_switch.advanced.alignment"
					label={ __( 'Switch Alignment', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.toggle_switch?.advanced?.alignment }
					description={ __( 'Here you can select the alignment of the toggle switch in the left, right, or center of the module.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false } }
				>
					<ButtonOptionsContainer showLabel={ false }
						options={ getTextAlignOptions( { excludeOptions: ['justify'] } ) }
					/>
				</FieldContainer>
				<FieldContainer
					attrName="toggle_switch.advanced.color_off"
					label={ __( 'Switch Color(OFF State)', 'divi-content-toggle' ) }
					description={ __( 'Here you can select the custom color to be used for the circular switch icon during OFF state.', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.toggle_switch?.advanced?.color_off }
					features={ { sticky: false, responsive: false, hover: true } }
				>
					<ColorPickerContainer />
				</FieldContainer>
				<FieldContainer
					attrName="toggle_switch.advanced.color_on"
					label={ __( 'Switch Color(ON State)', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.toggle_switch?.advanced?.color_on }
					description={ __( 'Here you can select the custom color to be used for the circular switch icon during On state.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false, hover: true } }
				>
					<ColorPickerContainer />
				</FieldContainer>
				<FieldContainer
					attrName="toggle_switch.advanced.bg_color_off"
					defaultAttr={ defaultSettingsAttrs?.toggle_switch?.advanced?.bg_color_off }
					label={ __( 'Switch Background Color(OFF State)', 'divi-content-toggle' ) }
					description={ __( 'Here you can select the custom color to be used for the switch background during OFF state.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false, hover: true } }
				>
					<ColorPickerContainer />
				</FieldContainer>
				<FieldContainer
					attrName="toggle_switch.advanced.bg_color_on"
					defaultAttr={ defaultSettingsAttrs?.toggle_switch?.advanced?.bg_color_on }
					label={ __( 'Switch Background Color(ON State)', 'divi-content-toggle' ) }
					description={ __( 'Here you can select the custom color to be used for the switch background during On state.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false, hover: true } }
				>
					<ColorPickerContainer />
				</FieldContainer>
			</GroupContainer>
			{/* Toggle Title Text Setting. */}
			<GroupContainer id="toggleTitleStyling"
				title={ __( 'Toggle Title Text Setting', 'divi-content-toggle' ) }
			>
				<FieldContainer
					attrName="toggle_title.decoration.font"
					defaultGroupAttr={ defaultSettingsAttrs?.toggle_title?.decoration?.font }
					fieldLabel={ __( 'Title', 'divi-content-toggle' ) }
					features={ { responsive: false, sticky: false, hover: false } }
				>
					<FontGroup grouped={false} fields={ { headingLevel: { render: true }, textAlign: { render: false } } } />
				</FieldContainer>
			</GroupContainer>
			{/* Toggle Title Icon (for both, title one and two) Setting. */}
			<GroupContainer id="toggleTitleIconStyling"
				title={ __( 'Toggle Title Icon Setting', 'divi-content-toggle' ) }
			>
				<FieldContainer
					attrName="titleOneIcon.advanced.fontsize"
					label={ __( 'Icon Font Size', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.titleOneIcon?.advanced?.fontsize }
					description={ __( 'Control the size of the icon by increasing or decreasing the font size.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: true, hover: false } }
				>
					<Range min={1} max={250} step={1} allowedUnits="px" defaultUnit="px" />
				</FieldContainer>
				<FieldContainer
					attrName="titleOneIcon.advanced.color"
					label={ __( 'Icon Color', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.titleOneIcon?.advanced?.color }
					description={ __( 'Here you can define a custom color for your icon.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: true, hover: true } }
				>
					<ColorPickerContainer />
				</FieldContainer>
			</GroupContainer>
			{/* Content One Text Setting. */}
			<GroupContainer id="contentOneTextSetting"
				title={ __( 'Content One Text Setting', 'divi-content-toggle' ) }
				visible={ 'el_content_one_text' === ( attrs?.content_one?.advanced?.type?.desktop?.value || 'el_content_one_text' ) }
			>
				<FieldContainer
					attrName="content_one.decoration.font"
					defaultGroupAttr={ defaultSettingsAttrs?.content_one?.decoration?.font }
					fieldLabel={ __( 'Content One', 'divi-content-toggle' ) }
					features={ { responsive: false, sticky: false, hover: false } }
				>
					<FontGroup grouped={false} fields={ { headingLevel: { render: false } } } />
				</FieldContainer>
			</GroupContainer>
			{/* Content Two Text Setting. */}
			<GroupContainer id="contentTwoTextSetting"
				title={ __( 'Content Two Text Setting', 'divi-content-toggle' ) }
				visible={ 'el_content_two_text' === ( attrs?.content_two?.advanced?.type?.desktop?.value || 'el_content_two_text' ) }
			>
				<FieldContainer
					attrName="content_two.decoration.font"
					defaultGroupAttr={ defaultSettingsAttrs?.content_two?.decoration?.font }
					fieldLabel={ __( 'Content Two', 'divi-content-toggle' ) }
					features={ { responsive: false, sticky: false, hover: false } }
				>
					<FontGroup grouped={false} fields={ { headingLevel: { render: false } } } />
				</FieldContainer>
			</GroupContainer>
			{/* Content One Image Setting. */}
			<GroupContainer id="contentOneImageSetting"
				title={ __( 'Content One Image Setting', 'divi-content-toggle' ) }
				visible={ 'el_content_one_image' === ( attrs?.content_one?.advanced?.type?.desktop?.value || 'el_content_one_text' ) }
			>
				<SpacingGroup grouped={ false }
					attrName="contentOneImage.decoration.spacing"
					fieldLabel={ __( 'Image', 'divi-content-toggle' ) }
					defaultGroupAttr={ defaultSettingsAttrs?.contentOneImage?.decoration?.spacing }
					description={ __( 'Padding adds extra space to the inside of the element, increasing the distance between the edge of the element and its inner contents.', 'divi-content-toggle' ) }
					fields={ { margin: { render: false } } }
				/>
				<SizingGroup grouped={false}
					attrName="contentOneImage.decoration.sizing"
					fieldLabel={ __( 'Image', 'divi-content-toggle' ) }
					features={ { responsive: false, sticky: false, hover: false } }
					defaultGroupAttr={defaultSettingsAttrs?.contentOneImage?.decoration?.sizing}
					fields={ {
						width: { component: { props: { defaultUnit: "%", max: 100, min: 1 } } },
						height: { render: false }, maxWidth: { render: false }, alignment: { render: false }, 
						minHeight: { render: false }, maxHeight: { render: false }
					} }
				/>
				<FieldContainer
					attrName="contentOneImage.advanced.alignment"
					label={ __( 'Image Alignment', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.contentOneImage?.advanced?.alignment }
					description={ __( 'Here you can select the alignment of the image in the left, right, or center of the content.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false } }
				>
					<ButtonOptionsContainer showLabel={ false }
						options={ getTextAlignOptions( { excludeOptions: ['justify'] } ) }
					/>
				</FieldContainer>
				<BorderGroup grouped={false}
					attrName="contentOneImage.decoration.border"
					fieldLabel={ __( 'Image', 'divi-content-toggle' ) }
					defaultGroupAttr={ defaultSettingsAttrs?.contentOneImage?.decoration?.border }
				/>
				<BoxShadowGroup grouped={false}
					attrName="contentOneImage.decoration.boxShadow"
					fieldLabel={ __( 'Image', 'divi-content-toggle' ) }
					defaultGroupAttr={ defaultSettingsAttrs?.contentOneImage?.decoration?.boxShadow }
				/>
			</GroupContainer>
			{/* Content Two Image Setting. */}
			<GroupContainer id="contentTwoImageSetting"
				title={ __( 'Content Two Image Setting', 'divi-content-toggle' ) }
				visible={ 'el_content_two_image' === ( attrs?.content_two?.advanced?.type?.desktop?.value || 'el_content_two_text' ) }
			>
				<SpacingGroup grouped={ false }
					attrName="contentTwoImage.decoration.spacing"
					fieldLabel={ __( 'Image', 'divi-content-toggle' ) }
					defaultGroupAttr={ defaultSettingsAttrs?.contentTwoImage?.decoration?.spacing }
					description={ __( 'Padding adds extra space to the inside of the element, increasing the distance between the edge of the element and its inner contents.', 'divi-content-toggle' ) }
					fields={ { margin: { render: false } } }
				/>
				<SizingGroup grouped={false}
					attrName="contentTwoImage.decoration.sizing"
					fieldLabel={ __( 'Image', 'divi-content-toggle' ) }
					features={ { responsive: false, sticky: false, hover: false } }
					defaultGroupAttr={defaultSettingsAttrs?.contentTwoImage?.decoration?.sizing}
					fields={ {
						width: { component: { props: { defaultUnit: "%", max: 100, min: 1 } } },
						height: { render: false }, maxWidth: { render: false }, alignment: { render: false }, 
						minHeight: { render: false }, maxHeight: { render: false }
					} }
				/>
				<FieldContainer
					attrName="contentTwoImage.advanced.alignment"
					label={ __( 'Image Alignment', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.contentTwoImage?.advanced?.alignment }
					description={ __( 'Here you can select the alignment of the image in the left, right, or center of the content.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false } }
				>
					<ButtonOptionsContainer showLabel={ false }
						options={ getTextAlignOptions( { excludeOptions: ['justify'] } ) }
					/>
				</FieldContainer>
				<BorderGroup grouped={false}
					attrName="contentTwoImage.decoration.border"
					fieldLabel={ __( 'Image', 'divi-content-toggle' ) }
					defaultGroupAttr={ defaultSettingsAttrs?.contentTwoImage?.decoration?.border }
				/>
				<BoxShadowGroup grouped={false}
					attrName="contentTwoImage.decoration.boxShadow"
					fieldLabel={ __( 'Image', 'divi-content-toggle' ) }
					defaultGroupAttr={ defaultSettingsAttrs?.contentTwoImage?.decoration?.boxShadow }
				/>
			</GroupContainer>

			<SizingGroup />
			<SpacingGroup />
			<BorderGroup />
			<BoxShadowGroup />
			<FiltersGroup />
			<TransformGroup />
			<AnimationGroup />
		</React.Fragment>
	);
};
