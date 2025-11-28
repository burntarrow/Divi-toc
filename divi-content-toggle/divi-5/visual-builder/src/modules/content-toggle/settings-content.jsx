import React, { useEffect, useState } from 'react';
import { __ } from '@wordpress/i18n';

const {
	Select,
	TextContainer,
	UploadContainer,
	TextAreaContainer,
	IconPickerContainer,
} = window?.divi?.fieldLibrary;
const { GroupContainer } = window?.divi?.modal;
const {
	AdminLabelGroup,
	BackgroundGroup,
	FieldContainer,
	LinkGroup,
} = window?.divi?.module;
const { useFetch } = window?.divi?.rest;

/**
 * Content Settings panel for the Static Module.
 */
export const SettingsContent = ({ attrs, defaultSettingsAttrs }) => {

	const [ contentLayouts, setContentLayouts ] = useState( {} );

	const {
		fetch,
	} = useFetch();

	// Get dynamic data.
	useEffect( () => {
		// Get post types / Divi default rest endpoint.
		fetch( {
			method:    'GET',
			restRoute: '/divi/v1/module-data/blog/posts',
			data:      {
				postType: 'et_pb_layout',
				postsPerPage: -1
			}
		} ).then( ( response ) => {

			if ( response?.posts && (response.posts).length > 0 ) {
				let layouts = { "-1": { label: 'Select Layout' } };
				( response.posts ).map( (layout) => {
					layouts[ layout.id ] = { label: layout.title };
				} );
				
				// Set layouts. 
				setContentLayouts( layouts );
			}

			// setPostTypes( value );
		} ).catch( error => {
			// TODO feat(D5, Logger) - We need to introduce a new logging system to log errors/rejections/etc.
			// eslint-disable-next-line no-console
			console.log( error );
		} );
	}, [] );

	return (
		<React.Fragment>
			{/* Content One. */}
			<GroupContainer id="contentOne"
				title={ __( 'Content One', 'divi-content-toggle' ) }
			>
				<FieldContainer
					attrName="content_one.innerContent.title"
					label={ __( 'Toggle Title', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.content_one?.innerContent?.title }
					description={ __( 'Here you can input the text to be used for the toggle title of Content One.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false } }
				>
					<TextContainer />
				</FieldContainer>
				<FieldContainer
					attrName="titleOneIcon.innerContent"
					label={ __( 'Toggle Title Icon', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.titleOneIcon?.innerContent }
					description={ __( 'Here you can select the icon to be used for the toggle title of Content One.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false } }
				>
					<IconPickerContainer />
				</FieldContainer>
				<FieldContainer
					attrName="content_one.advanced.type"
					defaultAttr={defaultSettingsAttrs?.content_one?.advanced?.type}
					label={ __( 'Content Type', 'divi-content-toggle' ) }
					description={ __( 'Here you can choose the Content One type.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false } }
				>
					<Select options={ { 
						'el_content_one_text'   : { label: __( 'Text', 'divi-content-toggle' ) },
						'el_content_one_image'  : { label: __( 'Image', 'divi-content-toggle' ) },
						'el_content_one_layout' : { label: __( 'Layout', 'divi-content-toggle' ) },
					} } />
				</FieldContainer>
				<FieldContainer
					attrName="content_one.innerContent.content"
					defaultAttr={ defaultSettingsAttrs?.content_one?.innerContent?.content }
					label={ __( 'Content', 'divi-content-toggle') }
					description={ __( 'Here you can input the text to be used as content for Content One.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false } }
					visible={ ({ attrs })  => {
						return 'el_content_one_text' === ( attrs?.content_one?.advanced?.type?.desktop?.value || 'el_content_one_text' );
					} }
				>
					<TextAreaContainer />
				</FieldContainer>
				<FieldContainer
					attrName="contentOneImage.innerContent" subName="src"
					label={ __( 'Image', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.contentOneImage?.innerContent }
					description={ __( 'Upload an image to display on frontside of your flip box.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false, hover: false, dynamicContent: { type: 'image' } } }
					visible={ ( { attrs } )  => {
						return 'el_content_one_image' === ( attrs?.content_one?.advanced?.type?.desktop?.value || 'el_content_one_text' );
					} }
				>
					<UploadContainer />
				</FieldContainer>
				<FieldContainer
					attrName="contentOneImage.innerContent" subName="alt"
					label={ __( 'Image Alt Text', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.contentOneImage?.innerContent }
					description={ __( 'Here you can input the text to be used for the image as HTML ALT text.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false, hover: false } }
					visible={ ( { attrs } )  => {
						return 'el_content_one_image' === ( attrs?.content_one?.advanced?.type?.desktop?.value || 'el_content_one_text' );
					} }
				>
					<TextContainer />
				</FieldContainer>
				<FieldContainer
					attrName="content_one.advanced.layout"
					label={ __( 'Select Layout', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.content_one?.advanced?.layout }
					description={ __( 'Here you can choose the layout saved in your Divi library to be used for the Content One.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false } }
					visible={ ( { attrs } )  => {
						return 'el_content_one_layout' === ( attrs?.content_one?.advanced?.type?.desktop?.value || 'el_content_one_text' );
					} }
				>
					<Select options={ contentLayouts } />
				</FieldContainer>
			</GroupContainer>
			{/* Content Two. */}
			<GroupContainer id="contentTwo"
				title={ __( 'Content Two', 'divi-content-toggle' ) }
			>
				<FieldContainer
					attrName="content_two.innerContent.title"
					label={ __( 'Toggle Title', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.content_two?.innerContent?.title }
					description={ __( 'Here you can input the text to be used for the toggle title of Content Two.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false } }
				>
					<TextContainer />
				</FieldContainer>
				<FieldContainer
					attrName="titleTwoIcon.innerContent"
					label={ __( 'Toggle Title Icon', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.titleTwoIcon?.innerContent }
					description={ __( 'Here you can select the icon to be used for the toggle title of Content Two.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false } }
				>
					<IconPickerContainer />
				</FieldContainer>
				<FieldContainer
					attrName="content_two.advanced.type"
					label={ __( 'Content Type', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.content_two?.advanced?.type }
					description={ __( 'Here you can choose the Content Two type.', 'divi-content-toggle' ) }
					features={{ sticky: false, responsive: false }}
				>
					<Select options={ { 
						'el_content_two_text'   : { label: __( 'Text', 'divi-content-toggle' ) }, 
						'el_content_two_image'  : { label: __( 'Image', 'divi-content-toggle' ) }, 
						'el_content_two_layout' : { label: __( 'Layout', 'divi-content-toggle' ) },
					} } />
				</FieldContainer>
				<FieldContainer
					attrName="content_two.innerContent.content"
					label={ __( 'Content', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.content_two?.innerContent?.content }
					description={ __( 'Here you can input the text to be used as content for Content Two.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false } }
					visible={ ( { attrs } )  => {
						return 'el_content_two_text' === ( attrs?.content_two?.advanced?.type?.desktop?.value || 'el_content_two_text' );
					} }
				>
					<TextAreaContainer />
				</FieldContainer>
				<FieldContainer
					attrName="contentTwoImage.innerContent" subName="src"
					label={ __( 'Image', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.contentTwoImage?.innerContent }
					description={ __( 'Upload an image to display on frontside of your flip box.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false, hover: false, dynamicContent: { type: 'image' } } }
					visible={ ({ attrs })  => {
						return 'el_content_two_image' === ( attrs?.content_two?.advanced?.type?.desktop?.value || 'el_content_two_text' );
					} }
				>
					<UploadContainer />
				</FieldContainer>
				<FieldContainer
					attrName="contentTwoImage.innerContent" subName="alt"
					label={ __( 'Image Alt Text', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.contentTwoImage?.innerContent }
					description={ __( 'Here you can input the text to be used for the image as HTML ALT text.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false, hover: false } }
					visible={ ( { attrs } )  => {
						return 'el_content_two_image' === ( attrs?.content_two?.advanced?.type?.desktop?.value || 'el_content_two_text' );
					} }
				>
					<TextContainer />
				</FieldContainer>
				<FieldContainer
					attrName="content_two.advanced.layout"
					label={ __( 'Select Layout', 'divi-content-toggle' ) }
					defaultAttr={ defaultSettingsAttrs?.content_two?.advanced?.layout }
					description={ __( 'Here you can choose the layout saved in your Divi library to be used for the Content Two.', 'divi-content-toggle' ) }
					features={ { sticky: false, responsive: false } }
					visible={ ( { attrs } )  => {
						return 'el_content_two_layout' === ( attrs?.content_two?.advanced?.type?.desktop?.value || 'el_content_two_text' );
					} }
				>
					<Select options={ contentLayouts } />
				</FieldContainer>
			</GroupContainer>
			
			<LinkGroup />
			<BackgroundGroup />
			<AdminLabelGroup
				defaultGroupAttr={defaultSettingsAttrs?.module?.meta?.adminLabel ?? {}}
			/>
		</React.Fragment>
	);
}
