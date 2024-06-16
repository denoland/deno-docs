# Import Maps

In order for Deno to resolve a _bare specifier_ like `"react"` or `"lodash"`, it
needs to be told where to look for it. Does `"lodash"` refer to an npm module or
does it map to an https URL?

```ts
import lodash from "lodash";
```

Node and npm use `package.json` and the `node_modules` folder to do this
resolution. Deno, on the other hand, uses the
[import map](https://github.com/WICG/import-maps) standard.

To make the above `import lodash from "lodash"` work, add the following to the
[`deno.json` configuration file](../getting_started/configuration_file.md).

```json
{
  "imports": {
    "lodash": "https://esm.sh/lodash@4.17.21"
  }
}
```

The `deno.json` file is auto-discovered and acts (among other things) as an
import map.
[Read more about `deno.json` here](../getting_started/configuration_file.md).

This also works with npm specifiers. Instead of the above, we could have also
written something similar in our `deno.json` configuration file:

```json
{
  "imports": {
    "lodash": "npm:lodash@^4.17"
  }
}
```

## Example - Using the Deno Standard Library

Running the following:

```bash
deno add @std/foo
```

Produces the following:

```json title="deno.json"
{
  "imports": {
    "@std/foo": "jsr:@std/foo@^1.2.3"
  }
}
```

The import can then be used in your script:

```ts title="bar.ts"
import { bar } from "@std/foo";

bar(1, 2);
```

## Example - Using project root for absolute imports

To use your project root for absolute imports:

```json title="deno.json"
{
  "imports": {
    "/": "./",
    "./": "./"
  }
}
```

```ts title="main.ts"
import { MyUtil } from "/util.ts";
```

This causes import specifiers starting with `/` to be resolved relative to the
import map's URL or file path.

## Overriding imports

The other situation where import maps can be very useful is to override imports
in specific modules.

Let's say you want to override a Deno Standard Library package import from
^1.2.3 to the latest in all of your imported modules, but for the
`https://deno.land/x/example/` module you want to use files in a local `patched`
directory. You can do this by using a scope in the import map that looks
something like this:

```json
{
  "imports": {
    "@std/foo": "jsr:@std/foo@^1.2.3"
  },
  "scopes": {
    "https://deno.land/x/example/": {
      "@std/foo": "./patched/mod.ts"
    }
  }
}
```

Additional example if you use project root for absolute imports but want to get rid of the incorrect recommendation from LSP.
You can move the following into scope:

```json
  "scopes": {
    "./": {
      "/": "./",
      "./": "./"
    }
  }
```

## Import Maps are for Applications

It is important to note that import map configuration files are
[only applied for Deno applications][scope], not in the various libraries that
your application code may import. This lets you, the application author, have
final say about what versions of libraries get included in your project.

If you are developing a library, you should instead prefer to use the `deps.ts`
pattern discussed in [Managing Dependencies].

[scope]: https://github.com/WICG/import-maps#scope
[Managing Dependencies]: ../../tutorials/manage_dependencies.md
