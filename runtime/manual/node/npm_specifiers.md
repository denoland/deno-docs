# `npm:` specifiers

Since version 1.28, Deno has native support for importing npm packages. This is
done by importing using `npm:` specifiers. For example the following code:

```ts
import { emojify } from "npm:node-emoji@2";

console.log(emojify(":t-rex: :heart: NPM"));
```

Can be run with:

```sh
$ deno run main.js
🦖 ❤️ NPM
```

When doing this, no `npm install` is necessary and no `node_modules` folder is
created. These packages are also subject to the same
[permissions](../basics/permissions.md) as other code in Deno.

npm specifiers have the following format:

```
npm:<package-name>[@<version-requirement>][/<sub-path>]
```

Several examples using popular npm modules can be found in our
[tutorials](/runtime/tutorials) section.

## TypeScript types

Many packages ship with types, which will be available to Deno's TypeScript
compiler without configuration.

```ts
import chalk from "npm:chalk@5";
```

Some packages do not include types. However, you can specify their types with a
[`@deno-types`](../advanced/typescript/types.md) directive. For example, using a
[`@types`](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html#definitelytyped--types)
package:

```ts
// @deno-types="npm:@types/express@^4.17"
import express from "npm:express@^4.17";
```

### Module resolution

The official TypeScript compiler `tsc` supports different
[moduleResolution](https://www.typescriptlang.org/tsconfig#moduleResolution)
settings. Deno only supports the modern `node16` resolution. Unfortunately many
NPM packages fail to correctly provide types under node16 module resolution,
which can result in `deno check` reporting type errors that `tsc` does not
report.

If a default export from an `npm:` import appears to have a wrong type (with the
right type seemingly being available under the `.default` property), it's most
likely that the package provides incorrect types under node16 module resolution
for imports from ESM. You can verify this by checking if the error also occurs
with `tsc --module node16` and `"type": "module"` in `package.json` or by
consulting the [Are the types wrong?](https://arethetypeswrong.github.io/)
website (particularly the "node16 from ESM" row).

If you want to use a package that doesn't support TypeScript's node16 module
resolution, you can:

1. Use a [CDN](./cdns.md), that rebuilds the packages for Deno support, rather
   than using an `npm:` specifier.
2. Ignore type errors with`// @ts-expect-error` or `// @ts-ignore`.

### Including Node types

Node ships with many built-in types like `Buffer` that might be referenced in an
npm package's types. To load these, you must add a types reference directive to
the `@types/node` package:

```ts
/// <reference types="npm:@types/node" />
```

Note that it is fine to not specify a version for this in most cases because
Deno will try to keep it in sync with its internal Node code, but you can always
override the version used if necessary.

## npm executable scripts

npm packages with `bin` entries can be executed from the command line without an
`npm install` using a specifier in the following format:

```
npm:<package-name>[@<version-requirement>][/<binary-name>]
```

For example:

```sh
$ deno run --allow-read npm:cowsay@1.5.0 Hello there!
 ______________
< Hello there! >
 --------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

$ deno run --allow-read npm:cowsay@1.5.0/cowthink What to eat?
 ______________
( What to eat? )
 --------------
        o   ^__^
         o  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## `--node-modules-dir` flag

`npm:` specifiers resolve npm packages to a central global npm cache. This works
well in most cases and is ideal since it uses less space and doesn't require a
node_modules directory. That said, you may find cases where an npm package
expects itself to be executing from a `node_modules` directory. To improve
compatibility and support those packages, you can use the `--node-modules-dir`
flag.

For example, given `main.ts`:

```ts
import chalk from "npm:chalk@5";

console.log(chalk.green("Hello"));
```

Running this script with a `--node-modules-dir` like so...

```sh
deno run --node-modules-dir main.ts
```

...will create a `node_modules` folder in the current directory with a similar
folder structure to npm.

![screenshot of generated node_modules folder](../images/node_modules_dir.png)

Note that this is all done automatically when calling `deno run` and there is no
separate install command necessary.

Alternatively, if you wish to disable the creation of a `node_modules` directory
entirely, you can set this flag to false (ex. `--node-modules-dir=false`) or add
a `"nodeModulesDir": false` entry to your deno.json configuration file to make
the setting apply to the entire directory tree.

In the case where you want to modify the contents of the `node_modules`
directory before execution, you can run `deno cache` with `--node-modules-dir`,
modify the contents, then run the script.

For example:

```sh
deno cache --node-modules-dir main.ts
deno run --allow-read=. --allow-write=. scripts/your_script_to_modify_node_modules_dir.ts
deno run --node-modules-dir main.ts
```
