const { addAction } = window?.vendor?.wp?.hooks || {};
const { registerModule } = window?.divi?.moduleLibrary || {};

import tableOfContentsModule from './table-of-contents';

addAction?.(
  'divi.moduleLibrary.registerModuleLibraryStore.after',
  'divi-toc',
  () => {
    registerModule?.(tableOfContentsModule.metadata, tableOfContentsModule);
  }
);
