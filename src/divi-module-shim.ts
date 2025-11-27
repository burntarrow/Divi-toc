// Minimal shim for the Divi 5 module package. This keeps local builds working
// without fetching the private @elegantthemes/module package. At runtime inside
// Divi, the global ET_Builder API will exist; the shim attempts to call it
// when available and otherwise no-ops for local development/testing.

export type ModuleSettingsDefinition<TAttrs = Record<string, any>> = Record<
  string,
  any
> & {
  label?: string;
  slug?: string;
  settings?: Record<string, any>;
};

export type ModuleStylesFunction<TAttrs = Record<string, any>> = (args: {
  attrs: TAttrs;
}) => Record<string, any>;

export type ModuleCustomCssDefinition = Record<string, any>;

function registerWithApi(
  api: any,
  slug: string,
  definition: Record<string, any>,
): boolean {
  if (!api) {
    return false;
  }

  // Divi expects an ETBuilderModule-like object with a slug.
  const moduleDef = {
    slug: definition?.metadata?.slug ?? slug,
    ...definition,
  };

  // Divi 5 style: API.registerModules([...])
  if (typeof api.registerModules === 'function') {
    api.registerModules([moduleDef]);
    return true;
  }

  // Older / alternative: API.Modules.register([...])
  if (api.Modules && typeof api.Modules.register === 'function') {
    api.Modules.register([moduleDef]);
    return true;
  }

  return false;
}

export function registerModule(
  slug: string,
  definition: Record<string, any>,
): void {
  const win = globalThis as any;

  // 1. If ET_Builder.API is already available, register immediately.
  if (win.ET_Builder?.API) {
    const ok = registerWithApi(win.ET_Builder.API, slug, definition);
    if (ok) {
      return;
    }
  }

  // 2. Listen for the Divi builder API ready event (recommended in docs).
  if (typeof win.addEventListener === 'function') {
    win.addEventListener('et_builder_api_ready', (event: any) => {
      const api = event?.detail || win.ET_Builder?.API;
      registerWithApi(api, slug, definition);
    });
  }

  // 3. Fallbacks for older Divi / compatibility.
  const globalRegister =
    win?.ETBuilderModule?.registerModule || win?.et_pb_register_module;

  if (typeof globalRegister === 'function') {
    const moduleDef = {
      slug: definition?.metadata?.slug ?? slug,
      ...definition,
    };
    globalRegister(slug, moduleDef);
  } else if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(
      `[Divi TOC] registerModule shim invoked for "${slug}" but no global Divi register function or API was found.`,
    );
  }
}
