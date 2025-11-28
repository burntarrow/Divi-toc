import metadata from './module.json';
import defaultAttrs from './module-default-render-attributes.json';
import Edit from './edit';
import settingsContent from './settings-content';
import settingsDesign from './settings-design';
import settingsAdvanced from './settings-advanced';

const TableOfContentsModule = {
  metadata,
  defaultAttrs,
  renderers: {
    edit: Edit,
  },
  settings: {
    content: settingsContent,
    design: settingsDesign,
    advanced: settingsAdvanced,
  },
};

export default TableOfContentsModule;
