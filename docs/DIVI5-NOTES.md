# Divi 5 Integration Notes

This plugin mirrors the Divi 5 contract used by the working **divi-content-toggle** plugin:

- **Server bootstrap** – `divi-5/divi5-toc.php` loads Composer autoload, then on `init` calls `DiviTOC\Divi5\Server\Modules\Modules::register()`.
- **Dependency tree hook** – `Modules::register()` attaches `Modules::register_dependencies()` to `divi_module_library_modules_dependency_tree`, adding the `TableOfContents` dependency (implements `DependencyInterface`).
- **Module registration** – `TableOfContents::load()` calls `ModuleRegistration::register_module()` using the module folder that holds `module.json` and registers the PHP `render_callback`.
- **Builder assets** – `divi5-toc.php` enqueues the Visual Builder bundle via `divi_visual_builder_assets_before_enqueue_scripts`, pointing at `divi-5/visual-builder/build/build.js` with React/WordPress externals.
- **JS registration** – `divi-5/visual-builder/src/modules/index.js` waits for the module library store (`divi.moduleLibrary.registerModuleLibraryStore.after`) and calls `registerModule(metadata, implementation)` for the Table of Contents module defined in `src/modules/table-of-contents`.
- **Slug consistency** – The module slug is `divi_toc` across `module.json`, the PHP module registration, and the JS metadata.
