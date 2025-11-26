# Divi TOC

Divi TOC is a Divi 5 extension that adds a Table of Contents module to the Divi Builder. Drop the plugin folder into `wp-content/plugins`, activate it, and the **Divi TOC** module becomes available in the Divi 5 modules list.

Key features:
- Supports H1–H6 selection with defaults for H2–H5.
- Optional page title inclusion and custom content selectors.
- Ignore headings by CSS class, minimum heading threshold with fallback message, and nested or flat list rendering.
- Smooth scrolling with offset, scrollspy highlighting, per-item copy-link buttons, collapsible sections, responsive dropdown mode, sticky presets, and back-to-top helpers.
- Multiple visual presets (simple, numbered, tree, card, accordion, floating, boxed, raw) and design controls for bullets, indentation, icons, and active styles.

## Development

```
npm install
npm run build
npm test
```

Build outputs:
- `build/divi-toc-builder.js` – Divi 5 builder registration bundle.
- `build/divi-toc-frontend.js` – front-end/runtime behaviors.
- `assets/css/divi-toc.css` – extracted styles for both builder preview and front-end.

> Note: if your environment blocks scoped package downloads, configure npm with an accessible registry before running `npm install`.
