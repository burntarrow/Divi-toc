/**
 * Divi TOC Module Definition (Divi 5)
 * This file exports the full module schema used by Divi’s builder.
 */

import metadata from './module.json';
import Edit from './edit';
import settingsContent from './settings-content';
import settingsDesign from './settings-design';
import settingsAdvanced from './settings-advanced';
import CustomCSS from './custom-css';
import { Styles } from './styles';
import icon from '../../module-icons';

// Explicit module wrapper name for clarity & export stability
export const TableOfContentsModule = {
  metadata,
  settings: {
    content: settingsContent,
    design: settingsDesign,
    advanced: settingsAdvanced,
  },
  edit: Edit,
  styles: Styles,
  customCss: CustomCSS,
  icon,
};

// Default export for builder runtime compatibility
export default TableOfContentsModule;
