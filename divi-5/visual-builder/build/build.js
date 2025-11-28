(()=>{
  const hooks = (window?.vendor?.wp?.hooks) || (window.wp?.hooks);
  const addAction = hooks?.addAction;
  const React = window?.vendor?.React || window.React;
  const divi = window?.divi || {};
  const { registerModule } = divi?.moduleLibrary || {};
  const { ModuleContainer, CssStyle, StyleContainer, textOptionsClassnames } = divi?.module || {};
  const { Fragment, createElement } = React || {};

  const metadata = {
    slug: "divi_toc",
    name: "Divi TOC",
    title: "Divi TOC",
    titles: "Divi TOC",
    category: "layout",
    moduleIcon: "divi/module-list",
    attributes: {
      module: {
        type: "object",
        selector: "{{selector}}",
        default: {
          meta: {
            adminLabel: {
              desktop: { value: "Divi TOC" }
            }
          }
        }
      },
      content: {
        type: "object",
        selector: "{{selector}} .divi-toc-placeholder"
      },
      includePageTitle: {
        type: "boolean",
        default: false
      },
      headingLevels: {
        type: "array",
        items: {
          type: "string"
        },
        default: ["h2", "h3", "h4", "h5"]
      },
      nested: {
        type: "boolean",
        default: true
      }
    },
    style: [],
    script: []
  };

  const defaultAttrs = {
    module: {
      meta: {
        adminLabel: {
          desktop: { value: "Divi TOC" }
        }
      }
    },
    content: {},
    includePageTitle: false,
    headingLevels: ["h2", "h3", "h4", "h5"],
    nested: true
  };

  const ModuleStyles = ({ attrs, elements, settings, orderClass, mode, state, noStyleTag }) => {
    return createElement(
      StyleContainer,
      { mode, state, noStyleTag },
      elements?.style?.({
        attrName: 'module',
        styleProps: {
          disabledOn: {
            disabledModuleVisibility: settings?.disabledModuleVisibility,
          },
        },
      }),
      createElement(CssStyle, {
        selector: orderClass,
        attr: attrs?.css,
        cssFields: [],
      })
    );
  };

  const ModuleScriptData = ({ elements }) => createElement(
    Fragment,
    null,
    elements?.scriptData?.({ attrName: 'module' })
  );

  const moduleClassnames = ({ classnamesInstance, attrs }) => {
    classnamesInstance?.add?.(
      textOptionsClassnames?.(attrs?.module?.advanced?.text, { orientation: false })
    );
  };

  const SettingsContent = () => null;
  const SettingsDesign = () => null;
  const SettingsAdvanced = () => null;

  const TableOfContentsEdit = ({ attrs, elements, id, name }) => createElement(
    ModuleContainer,
    {
      attrs,
      elements,
      id,
      name,
      scriptDataComponent: ModuleScriptData,
      stylesComponent: ModuleStyles,
      classnamesFunction: moduleClassnames,
    },
    createElement('nav', { className: 'divi-toc-placeholder' }, 'Table of Contents placeholder')
  );

  const TableOfContents = {
    metadata,
    defaultAttrs,
    renderers: { edit: TableOfContentsEdit },
    settings: {
      content: SettingsContent,
      design: SettingsDesign,
      advanced: SettingsAdvanced,
    },
  };

  addAction?.('divi.moduleLibrary.registerModuleLibraryStore.after', 'divi-toc', () => {
    registerModule?.(metadata, TableOfContents);
  });
})();
