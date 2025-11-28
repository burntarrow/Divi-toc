import React, { useEffect, useState } from 'react';
import { isEmpty, filter } from 'lodash';

import { ModuleStyles } from './module-styles';
import { ModuleScriptData } from './module-script-data';
import { moduleClassnames } from './module-classnames';

const { useFetch } = window?.divi?.rest;
const { getAttrByMode } = window?.divi?.moduleUtils;
const { ModuleContainer } = window?.divi?.module;
const { processFontIcon } = window?.divi?.iconLibrary;

export const ContentToggleEdit = ( {
	attrs,
	elements,
	id,
	name,
} ) => {

	const {
		fetch,
	} = useFetch();

	const [ layoutOneContent, setLayoutOneContent ] = useState( '' );
	const [ layoutTwoContent, setLayoutTwoContent ] = useState( '' );

	// Get types of content.
	const content_one_type  = getAttrByMode( attrs?.content_one?.advanced?.type ) ?? 'el_content_one_text';
	const content_two_type  = getAttrByMode( attrs?.content_two?.advanced?.type ) ?? 'el_content_two_text';

	const content_one_layout = getAttrByMode( attrs?.content_one?.advanced?.layout ) ?? '-1';
	const content_two_layout = getAttrByMode( attrs?.content_two?.advanced?.layout ) ?? '-1';

	// Get post types / Divi default rest endpoint.
	async function getLayoutContent( layoutId ) {
		return await fetch( {
			method:    'GET',
			restRoute: '/elicus/v1/dct-modules/content-toggle',
			data:      { id: layoutId }
		} ).then( ( response ) => {
			// console.log( 'ssss::: ', response );
			return response;
		} ).catch( error => {
			// TODO feat(D5, Logger) - We need to introduce a new logging system to log errors/rejections/etc.
			// eslint-disable-next-line no-console
			console.log( error );
		} );
	}

	// Get dynamic data.
	useEffect( () => {
		( async () =>  {
			if ( 'el_content_one_layout' === content_one_type && 0 < parseInt( content_one_layout ) ) {
				// Get the content.
				let response = await getLayoutContent( content_one_layout );
				setLayoutOneContent( response );
			} else {
				setLayoutOneContent( '' );
			}
		} ) ();
	}, [content_one_type, content_one_layout] );

	// Get dynamic data.
	useEffect( () => {
		( async () =>  {
			if ( 'el_content_two_layout' === content_two_type && 0 < parseInt( content_two_layout ) ) {
				// Get the content.
				let response = await getLayoutContent( content_two_layout );
				setLayoutTwoContent( response );
			} else {
				setLayoutTwoContent( '' );
			}
		} ) ();
	}, [content_two_type, content_two_layout] );

	let contentOne      = [],
		contentTwo      = [],
		contentOneTitle = [],
		contentTwoTitle = [],
		toggleLayout    = [];

	// Get switch alignment.
	const toggleAlignment         = getAttrByMode( attrs?.toggle_switch?.advanced?.alignment ) ?? 'center';
	const ToggleTitleHeadingLevel = getAttrByMode( attrs?.toggle_title?.decoration?.font?.font )?.headingLevel ?? 'h5';

	// Get content one title.
	const content_one_title = getAttrByMode( attrs?.content_one?.innerContent?.title ) ?? '';
	const content_one_icon  = getAttrByMode( attrs?.titleOneIcon?.innerContent ) ?? {};
	if ( ! isEmpty( content_one_title ) || content_one_icon?.unicode ) {
		let titleOneText = '',
			titleOneIcon = '';
		if ( ! isEmpty( content_one_title ) ) {
			titleOneText = <ToggleTitleHeadingLevel className="el-content-toggle-title">{ content_one_title }</ToggleTitleHeadingLevel>;
		}
		if ( content_one_icon?.unicode ) {
			titleOneIcon = <span className="et-pb-icon">{ processFontIcon( content_one_icon ) }</span>;
		}
		if ( ! isEmpty( titleOneText ) || ! isEmpty( titleOneIcon ) ) {
			contentOneTitle.push(
				<div className="el_content_toggle_title_value el_content_toggle_off_value">
					{ titleOneText }{ titleOneIcon }
				</div>
			);
		}
	}

	// Get content two title.
	const content_two_title = getAttrByMode( attrs?.content_two?.innerContent?.title ) ?? '';
	const content_two_icon  = getAttrByMode( attrs?.titleTwoIcon?.innerContent ) ?? {};
	if ( ! isEmpty( content_two_title ) || content_two_icon?.unicode ) {
		let titleTwoText = '',
			titleTwoIcon = '';
		if ( ! isEmpty( content_two_title ) ) {
			titleTwoText = <ToggleTitleHeadingLevel className="el-content-toggle-title">{ content_two_title }</ToggleTitleHeadingLevel>;
		}
		if ( content_two_icon?.unicode ) {
			titleTwoIcon = <span className="et-pb-icon">{ processFontIcon( content_two_icon ) }</span>;
		}
		contentTwoTitle.push(
			<div className="el_content_toggle_title_value el_content_toggle_on_value">
				{ titleTwoText }{ titleTwoIcon }
			</div>
		);
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

	// Check and get layout content.
	const content_one_text  = getAttrByMode( attrs?.content_one?.innerContent?.content ) ?? '';
	const content_two_text  = getAttrByMode( attrs?.content_two?.innerContent?.content ) ?? '';
	if ( 'el_content_one_text' === content_one_type && ! isEmpty( content_one_text ) ) {
		contentOne.push( <div className="el_content_one_toggle el_content_toggle_text">{ content_one_text }</div> );
	}
	if ( 'el_content_one_image' === content_one_type ) {
		const contentOneImage = elements.render( {
			attrName: 'contentOneImage',
		} );
		if ( contentOneImage ) {
			contentOne.push(
				<div className="el_content_one_toggle el_content_toggle_image"><div className='et_pb_image_wrap'>
					{ contentOneImage }
				</div></div>
			);
		}
	}
	if ( 'el_content_one_layout' === content_one_type && ! isEmpty( layoutOneContent ) ) {
		contentOne.push( <div className="el_content_one_toggle el_content_toggle_layout" dangerouslySetInnerHTML={ { __html: layoutOneContent } } /> );
	}

	if ( 'el_content_two_text' === content_two_type && ! isEmpty( content_two_text ) ) {
		contentTwo.push( <div className="el_content_two_toggle el_content_toggle_text">{ content_two_text }</div> );
	}
	if ( 'el_content_two_image' === content_two_type ) {
		const contentTwoImage = elements.render( {
			attrName: 'contentTwoImage',
		} );
		if ( contentTwoImage ) {
			contentTwo.push(
				<div className="el_content_two_toggle el_content_toggle_image"><div className='et_pb_image_wrap'>
					{ contentTwoImage }
				</div></div>
			);
		}
	}
	if ( 'el_content_two_layout' === content_two_type && ! isEmpty( layoutTwoContent ) ) {
		contentTwo.push( <div className="el_content_two_toggle el_content_toggle_layout" dangerouslySetInnerHTML={ { __html: layoutTwoContent } } /> );
	}

	return (
		<ModuleContainer
			attrs={attrs}
			elements={elements}
			id={id}
			name={name}
			scriptDataComponent={ModuleScriptData}
			stylesComponent={ModuleStyles}
			classnamesFunction={moduleClassnames}
		>
			{ ( ! isEmpty( filter( contentOne, Boolean ) ) && ! isEmpty( filter( contentTwo, Boolean ) ) ) ?
				<div className="el_content_toggle_wrapper">{toggleLayout}{contentOne}{contentTwo}</div>
			:
				<h5>No Content in the toggles</h5>
			}
		</ModuleContainer>
	);
}
