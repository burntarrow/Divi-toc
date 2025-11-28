import { ContentToggleEdit } from './edit';
import metadata from './module.json';
import moduleDefaultRenderAttributes from './module-default-render-attributes.json';
import { conversionOutline } from './conversion-outline';
import { SettingsAdvanced } from './settings-advanced';
import { SettingsContent } from './settings-content';
import { SettingsDesign } from './settings-design';

export const ContentToggleMetadata = metadata;

export const ContentToggle = {
	metadata: ContentToggleMetadata,
	defaultAttrs: moduleDefaultRenderAttributes,
	renderers: {
		edit: ContentToggleEdit,
	},
	settings: {
		content: SettingsContent,
		design: SettingsDesign,
		advanced: SettingsAdvanced,
	},
	conversionOutline,
};
