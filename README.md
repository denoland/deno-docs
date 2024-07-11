# Deno Docs

This repository contains the website running
[docs.deno.com](https://docs.deno.com). The intent of this project is to
centralize all official Deno documentation content in a single website. The Deno
Docs site is built using [Lume](https://lume.land/), an extremely fast static
site generator.

The `docs.deno.com` website is hosted on [Deno Deploy](https://deno.com/deploy).

## Local development

Install [Deno](https://deno.com).

You can then start the local development server with:

```console
deno task serve
```

This will launch a browser window open to
[localhost:3000](http://localhost:3000), where you will see any doc content
changes you make update live. Here redirects will not work. If you want
redirects to work, you need to run:

```console
deno task build
deno task prod
```

Which will start a Deno server on [localhost:8000](http://localhost:8000) used
in production, which handles redirects.

## Editing content

The actual content of the docs site is found mostly in these folders:

- `runtime` - docs for the Deno CLI / runtime
- `deploy` - docs for the Deno Deploy cloud service
- `subhosting` - docs for Deno Subhosting

Most files are [markdown](https://docusaurus.io/docs/markdown-features), but
even markdown files are processed with [MDX](https://mdxjs.com/), which enables
you to use JSX syntax within your markdown files.

Left navigation for the different doc sections are configured in one of these
files:

- `sidebars/runtime.js` - sidebar config for the Runtime section
- `sidebars/deploy.js` - sidebar config for the Deno Deploy section
- `sidebars/kv.js` - sidebar config for the KV section

Static files (like screenshots) can be included directly in the `runtime`,
`deploy`, or `kv` folders, and referenced by relative URLs in your markdown.

Docusaurus provides a number of nice extensions to markdown you might want to
use, like tabs, admonitions, and code blocks.
[Refer to the Docusaurus docs](https://docusaurus.io/docs/markdown-features) for
more details.

## Versioning docs content

Philosophically, we want to maintain as few discrete versions of the
documentation as possible. This will reduce confusion for users (reduce the
number of versions they need to think about), improve search indexing, and help
us maintain the docs by keeping our build times faster.

In general, we should only version the documentation **when we want to
concurrently maintain several versions of the docs**, like for major/LTS
versions. For example - the [Node.js docs](https://nodejs.org/en/docs) are only
versioned for major releases, like `20.x` and `19.x`. We will adopt this pattern
as well, and won't have versioned docs for patch or feature releases.

For additive changes, it should usually be sufficient to indicate which version
a feature or API was released in. For example - in the Node 20 docs, the
[register function](https://nodejs.org/dist/latest-v20.x/docs/api/module.html#moduleregister)
is marked as being added in version `20.6.0`.

When we do want to maintain versioned docs for major releases, we currently plan
to use [Docusaurus versions](https://docusaurus.io/docs/versioning).

## Including version numbers in code and content

It may occasionally be desirable to dynamically include the current Deno CLI or
standard library version in content or code samples. We can accomplish this
using the `replacements.json` file at the root of this repository.

Any values you would like to change once, and then have appear dynamically in a
number of generated files, should be included in `replacements.json`.

In code samples (fenced with backticks), you can include a `$` character,
followed by the replacement variable name, directly within the code sample. When
the markdown is transformed, the current version number will be replaced within
it.

```ts
import { copy } from "https://deno.land/std@$STD_VERSION/fs/copy.ts";
```

## Contribution

We are very grateful for any help you can offer to improve Deno's documentation!
For any small copy changes or fixes, please feel free to
[submit a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
directly to the `main` branch of this repository.

For larger changes, please
[create a GitHub issue first](https://github.com/denoland/deno-docs/issues) to
describe your proposed updates. It will be better to get feedback on your
concept first before going to the trouble of writing a large number of docs!

Over time, we will add more in the way of linting and formatting to the pull
request process. But for now, you should merely ensure that `npm run build`
succeeds without error before submitting a pull request. This will ensure that
there are no broken links or invalid MDX syntax in the content you have
authored.

## Examples

[Deno by Example](https://docs.deno.com/examples) is a collection of small
snippets showcasing various functions of the APIs implemented in Deno.

- Examples are written in TypeScript
- Each example should be a single file, no more than 50 lines
- Each example should be a self-contained unit, and should depend on no
  dependencies other than Deno builtins and the standard library, unless a
  third-party library is strictly required.
- Each example should be runnable without additional dependencies on all systems
  (exceptions can be made for platform specific functionality)
- Examples should be introduce at most one (or in exceptional cases two or
  three) concepts in Deno / Web APIs. Existing concepts should be linked to.
- Code should be kept _really simple_, and should be easy to read and understand
  by anyone. Do not use complicated code constructs, or hard to follow builtins
  like `Array.reduce`
- Concepts introduced in an example should be explained

### Adding an example

To add an example, create a file in the `by-example` directory. The file name
should be a short description of the example (in kebab case) and the contents
should be the code for the example. The file should be in the `.ts` format. The
file should start with a JSDoc style multi line comment that describes the
example:

```ts
/**
 * @title HTTP server: Hello World
 * @difficulty intermediate
 * @tags cli, deploy
 * @run --allow-net <url>
 * @group Basics
 *
 * An example of a HTTP server that serves a "Hello World" message.
 */
```

You should add a title, a difficulty level (`beginner` or `intermediate`), and a
list of tags (`cli`, `deploy`, `web` depending on where an example is runnable).
The `@run` tag should be included if the example can be run locally by just
doing `deno run <url>`. If running requires permissions, add these:

```ts
/**
 * ...
 * @run --allow-net --allow-read <url>
 */
```

After the pragmas, you can add a description of the example. This is optional,
but recommended for most examples. It should not be longer than one or two
lines. The description shows up at the top of the example in the example page,
and in search results.

After the JS Doc comment, you can write the code. Code can be prefixed with a
comment that describes the code. The comment will be rendered next to the code
in the example page.

## Reference docs

The reference docs are generated via the `deno doc` subcommand. To generate the
reference docs locally, in the `reference_gen` directory, run:

```console
deno task types
deno task doc
```

This will generate the reference docs, and you can use the `serve` or `build`
tasks.

## Special thanks for historical contributions

This repository was created using content from the
[Deno Manual](https://github.com/denoland/manual), a project contributed to by
hundreds of developers since 2018. You can view a list of historical
contributors to the Deno documentation in this repository and the manual with
this command:

```
git shortlog -s -n
```

## Deployment

The `docs.deno.com` site is updated with every push to the `main` branch, which
should be done via pull request to this repository.

## License

MIT
