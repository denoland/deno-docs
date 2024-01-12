// Include main doc categories on most pages
const mainMenu = [];

const sidebars = {
  runtime: mainMenu,

  runtimeGuideHome: mainMenu.concat([
    {
      type: "html",
      value: "<div>Getting Started</div>",
      className: "section-header",
    },
    {
      type: "doc",
      label: "Quick Start",
      id: "manual/index",
    },
    {
      type: "category",
      label: "Deno Basics",
      items: [
        "manual/getting_started/first_steps",
        "manual/getting_started/setup_your_environment",
        "manual/getting_started/command_line_interface",
        "manual/getting_started/configuration_file",
        "manual/getting_started/web_frameworks",
        "manual/basics/permissions",
        "manual/basics/standard_library",
        "manual/basics/import_maps",
        "manual/basics/env_variables",
        "manual/basics/debugging_your_code",
        "manual/basics/connecting_to_databases",
        "manual/basics/react",
        "manual/getting_started/installation",
      ],
    },
    {
      type: "html",
      value: "<div>Tutorials and Examples</div>",
      className: "section-header",
    },
    {
      type: "category",
      label: "Basic Examples",
      items: [
        "tutorials/hello_world",
        "tutorials/manage_dependencies",
        "tutorials/fetch_data",
        "tutorials/read_write_files",
        "tutorials/hashbang",
      ],
    },
    {
      type: "category",
      label: "Advanced Examples",
      items: [
        "tutorials/unix_cat",
        "tutorials/http_server",
        "tutorials/file_server",
        "tutorials/tcp_echo",
        "tutorials/subprocess",
        "tutorials/os_signals",
        "tutorials/file_system_events",
        "tutorials/module_metadata",
      ],
    },
    {
      type: "category",
      label: "npm Module Examples",
      items: [
        "tutorials/how_to_with_npm/apollo",
        "tutorials/how_to_with_npm/express",
        "tutorials/how_to_with_npm/mongoose",
        "tutorials/how_to_with_npm/mysql2",
        "tutorials/how_to_with_npm/planetscale",
        "tutorials/how_to_with_npm/prisma",
        "tutorials/how_to_with_npm/react",
        "tutorials/how_to_with_npm/redis",
        "tutorials/how_to_with_npm/vue",
      ],
    },
    {
      type: "link",
      label: "More on Deno by Example",
      href: "https://examples.deno.land",
    },
    {
      type: "html",
      value: "<div>Modules and APIs</div>",
      className: "section-header",
    },
    {
      type: "category",
      label: "Using & Publishing Modules",
      items: [
        "manual/basics/modules/index",
        "manual/basics/modules/reloading_modules",
        "manual/basics/modules/private",
        "manual/basics/modules/proxies",
        "manual/basics/modules/integrity_checking",
        "manual/advanced/publishing/index",
        "manual/advanced/publishing/dnt",
      ],
    },
    {
      type: "category",
      label: "Deno Runtime APIs",
      items: [
        "manual/runtime/builtin_apis",
        "manual/runtime/http_server_apis",
        "manual/runtime/permission_apis",
        "manual/runtime/import_meta_api",
        "manual/runtime/ffi_api",
        "manual/runtime/program_lifecycle",
        "manual/runtime/stability",
      ],
    },
    {
      type: "category",
      label: "Web Platform APIs",
      items: [
        "manual/runtime/web_platform_apis",
        "manual/runtime/location_api",
        "manual/runtime/web_storage_api",
        "manual/runtime/workers",
      ],
    },
    {
      type: "category",
      label: "Interop with Node.js & npm",
      items: [
        "manual/node/index",
        "manual/node/npm_specifiers",
        "manual/node/node_specifiers",
        "manual/node/package_json",
        "manual/node/cdns",
        "manual/node/faqs",
        "manual/node/migrate",
        "manual/references/cheatsheet",
        {
          type: "doc",
          label: "Supported Node APIs and globals",
          id: "manual/node/compatibility",
        },
      ],
    },
    {
      type: "category",
      label: "JSX and DOM APIs",
      items: [
        "manual/advanced/jsx_dom/overview",
        "manual/advanced/jsx_dom/jsx",
        "manual/advanced/jsx_dom/css",
        "manual/advanced/jsx_dom/twind",
        "manual/advanced/jsx_dom/jsdom",
        "manual/advanced/jsx_dom/deno_dom",
        "manual/advanced/jsx_dom/linkedom",
      ],
    },
    {
      type: "html",
      value: "<div>Development Tools</div>",
      className: "section-header",
    },
    {
      type: "category",
      label: "CLI Command Reference",
      items: [
        "manual/tools/index",
        "manual/tools/unstable_flags",
        {
          type: "doc",
          label: "deno bench",
          id: "manual/tools/benchmarker",
        },
        {
          type: "doc",
          label: "deno compile",
          id: "manual/tools/compiler",
        },
        {
          type: "doc",
          label: "deno info",
          id: "manual/tools/dependency_inspector",
        },
        {
          type: "doc",
          label: "deno doc",
          id: "manual/tools/documentation_generator",
        },
        {
          type: "doc",
          label: "deno fmt",
          id: "manual/tools/formatter",
        },
        {
          type: "doc",
          label: "deno init",
          id: "manual/tools/init",
        },
        {
          type: "doc",
          label: "deno jupyter",
          id: "manual/tools/jupyter",
        },
        {
          type: "doc",
          label: "deno lint",
          id: "manual/tools/linter",
        },
        {
          type: "doc",
          label: "deno repl",
          id: "manual/tools/repl",
        },
        {
          type: "doc",
          label: "deno install",
          id: "manual/tools/script_installer",
        },
        {
          type: "doc",
          label: "deno task",
          id: "manual/tools/task_runner",
        },
        {
          type: "doc",
          label: "deno vendor",
          id: "manual/tools/vendor",
        },
      ],
    },
    {
      type: "category",
      label: "Testing",
      items: [
        "manual/basics/testing/index",
        "manual/basics/testing/assertions",
        "manual/basics/testing/coverage",
        "manual/basics/testing/mocking",
        "manual/basics/testing/sanitizers",
        "manual/basics/testing/documentation",
        "manual/basics/testing/behavior_driven_development",
        "manual/basics/testing/snapshot_testing",
      ],
    },
    {
      type: "category",
      label: "Visual Studio Code",
      items: [
        "manual/references/vscode_deno/index",
        "manual/references/vscode_deno/testing_api",
      ],
    },
    {
      type: "category",
      label: "Language Server",
      items: [
        "manual/advanced/language_server/overview",
        "manual/advanced/language_server/imports",
        "manual/advanced/language_server/testing_api",
      ],
    },
    {
      type: "html",
      value: "<div>Advanced Topics</div>",
      className: "section-header",
    },
    {
      type: "category",
      label: "Deploying & Embedding Deno",
      items: [
        "manual/advanced/deploying_deno/index",
        "manual/advanced/deploying_deno/aws_lightsail",
        "manual/advanced/deploying_deno/cloudflare_workers",
        "manual/advanced/deploying_deno/digital_ocean",
        "manual/advanced/deploying_deno/google_cloud_run",
        "manual/advanced/deploying_deno/kinsta",
        "manual/advanced/continuous_integration",
        "manual/advanced/embedding_deno",
      ],
    },
    {
      type: "category",
      label: "TypeScript in Deno",
      items: [
        "manual/advanced/typescript/overview",
        "manual/advanced/typescript/types",
        "manual/advanced/typescript/configuration",
        "manual/advanced/typescript/migration",
        "manual/advanced/typescript/faqs",
      ],
    },
    {
      type: "category",
      label: "WebAssembly",
      items: [
        "manual/runtime/webassembly/index",
        "manual/runtime/webassembly/using_wasm",
        "manual/runtime/webassembly/using_streaming_wasm",
        "manual/runtime/webassembly/wasm_resources",
      ],
    },
    {
      type: "html",
      value: "<div>Contributing and Support</div>",
      className: "section-header",
    },
    {
      type: "category",
      label: "Contributing to Deno",
      items: [
        "manual/references/contributing/index",
        "manual/references/contributing/architecture",
        "manual/references/contributing/building_from_source",
        "manual/references/contributing/profiling",
        "manual/references/contributing/release_schedule",
        "manual/references/contributing/style_guide",
        "manual/references/contributing/web_platform_tests",
      ],
    },
    "manual/help",
    {
      type: "html",
      value: "<div>Reference</div>",
      className: "section-header",
    },
    {
      type: "link",
      label: "Full API Reference",
      href: "https://deno.land/api?unstable=true",
    },
    {
      type: "link",
      label: "Std. Library",
      href: "https://www.deno.land/std",
    },
  ]),
};

module.exports = sidebars;
