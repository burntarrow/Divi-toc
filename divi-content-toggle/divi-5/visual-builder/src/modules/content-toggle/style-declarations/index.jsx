const { isFaIcon, processFontIcon } = window?.divi?.iconLibrary;
const { StyleDeclarations } = window?.divi?.styleLibrary;
  
/**
 * Style declaration for icon.
 *
 * @since 2.0.0
 *
 * @returns {string}
 */
export const iconFontDeclaration = ( {
	attrValue
} ) => {
	const declarations = new StyleDeclarations( {
		returnType: 'string',
		important: {
			'font-family': true,
			'font-weight': true,
		}
	} );
	
	const fontIcon = processFontIcon( attrValue );
	if ( fontIcon ) {
		const fontFamily = isFaIcon( attrValue ) ? 'FontAwesome' : 'ETmodules';
		declarations.add( 'font-family', `"${fontFamily}"` );
		if ( attrValue.weight ) {
			declarations.add( 'font-weight', `${attrValue.weight}` );
		}
	}
	return declarations.value;
};
