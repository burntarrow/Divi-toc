const { addAction } = window?.vendor?.wp?.hooks;

import { ContentToggle, ContentToggleMetadata } from "./content-toggle";

const { registerModule } = window?.divi?.moduleLibrary;

addAction( 'divi.moduleLibrary.registerModuleLibraryStore.after', 'elicus-dct', () => {
	registerModule( ContentToggleMetadata, ContentToggle );
} );
