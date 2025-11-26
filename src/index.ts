/**
 * Divi TOC – Module Registration Entry
 *
 * This file ensures the module is discoverable by the Divi 5 builder.
 * It loads the module definition, metadata, and exposes it to Divi’s
 * global registration API.
 */

import moduleJson from './components/table-of-contents-module/module.json';
import { TableOfContentsModule } from './components/table-of-contents-module';

// For Divi’s global builder registry
declare const window: any;

// Register module with Divi 5 (builder side only)
if (typeof window !== 'undefined' && window.etBuilderExtensions) {
  window.etBuilderExtensions.registerModule(moduleJson.slug, {
    metadata: moduleJson,
    module: TableOfContentsModule,
  });
}

// Export for builder entry & future extension
export default TableOfContentsModule;
export { TableOfContentsModule };
