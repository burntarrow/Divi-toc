// External dependencies.
import React from 'react';

// Divi dependencies.
const {
	AttributesGroup,
	CssGroup,
	IdClassesGroup,
	PositionSettingsGroup,
	ScrollSettingsGroup,
	TransitionGroup,
	VisibilitySettingsGroup,
} = window?.divi?.module;

import { cssFields } from './custom-css';

export const SettingsAdvanced = () => (
	<React.Fragment>
		<IdClassesGroup />
		<CssGroup
			mainSelector=".el_content_toggle"
			cssFields={cssFields} // This is the list of CSS fields.
		/>
		<AttributesGroup />
		<VisibilitySettingsGroup />
		<TransitionGroup />
		<PositionSettingsGroup />
		<ScrollSettingsGroup />
	</React.Fragment>
);
