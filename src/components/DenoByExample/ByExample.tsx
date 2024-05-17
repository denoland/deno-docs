import React from "react";
import Layout from "@theme/Layout";
import Footer from "@theme/Footer";
import {
  DIFFICULTIES,
  ExampleSnippet,
  parseExample,
  TAGS,
} from "../../plugins/deno-by-example/example";
import CodeBlock from "@theme/CodeBlock";

export default function ByExample({ example, examplesList }) {
  const { name, content } = example;

  const parsed = parseExample(name, content);

  const {
    id,
    title,
    description,
    difficulty,
    tags,
    additionalResources,
    run,
    playground,
    files,
  } = parsed;

  const freshProps = {
    url: {
      origin: "https://github.com/denoland/deno-docs/blob/main/by-example/",
      pathname: id,
    },
    data: [
      parsed,
      content,
    ],
  };

  return (
    <Layout
      title={"Deno: the easiest, most secure JavaScript runtime"}
      description="Reference documentation for the Deno runtime and Deno Deploy"
    >
      <h1>By Example</h1>

      <style>
        {/*css*/ `
          pre { --ifm-pre-line-height: 1.7em; }
          code {
            --ifm-pre-padding: 1.5rem 1rem;
          }
          @media (min-width: 40rem) {
            code {
              --ifm-pre-padding: 2rem;
            }
          }
          .theme-code-block {
            --ifm-leading: 0;
            & pre {
              --ifm-pre-border-radius: 0;
            }
          }
          .nocopy .clean-btn {
            display: none!important;
          }
          .nocopy,
          .nocopy > * {
            height: 100%;
          }
          .copy-all {
            opacity: 0.5!important;
            z-index: 1;
            transform: translateY(1rem);
          }
        `}
      </style>

      <ExamplePage {...freshProps} />

      <Footer />
    </Layout>
  );
}

function ExamplePage(props: PageProps<Data>) {
  if (props.data === null) {
    return <div>404 Example Not Found</div>;
  }
  const [example, content] = props.data;
  const url = `${props.url.origin}${props.url.pathname}${
    example.files.length > 1 ? "/main" : ""
  }`;

  const contentNoCommentary = example.files.map((file) =>
    file.snippets.map((snippet) => snippet.code).join("\n")
  ).join("\n");

  const description = (example.description || example.title) +
    " -- Deno by example is a collection of annotated examples for how to use Deno, and the various features it provides.";

  return (
    <div className="Page" title={`${example.title} - Deno by Example`}>
      {
        /* <Head>
        <link rel="stylesheet" href="/gfm.css" />
        <meta name="description" content={description} />
      </Head> */
      }
      <main className="max-w-screen-lg mx-auto p-4">
        <div className="flex gap-2 items-center">
          <p
            className="italic m-0 mr-2"
            title={DIFFICULTIES[example.difficulty].description}
          >
            {DIFFICULTIES[example.difficulty].title}
          </p>
          <div className="flex gap-2 items-center">
            {example.tags.map((tag) => (
              <span
                className="text-xs italic py-0.5 px-2 rounded-md"
                title={TAGS[tag].description}
                key={TAGS[tag].title}
              >
                {TAGS[tag].title}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="mt-10 mb-0 text-3xl font-bold">{example.title}</h1>
          <a
            href={url}
            className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-300 text-slate-900"
          >
            Edit
          </a>
        </div>
        {example.description && <p className="mt-10">{example.description}</p>}
        <div className="relative block">
          <CopyButton text={contentNoCommentary} />
        </div>
        {example.files.map((file) => (
          <div className="mt-10" key={file.name}>
            {file.snippets.map((snippet, i) => (
              <SnippetComponent
                key={i}
                firstOfFile={i === 0}
                lastOfFile={i === file.snippets.length - 1}
                filename={file.name}
                snippet={snippet}
              />
            ))}
          </div>
        ))}
        <div>
          {example.run && (
            <>
              <p className="mt-16">
                Run{" "}
                <a href={url} className="hover:underline focus:underline">
                  this example
                </a>{" "}
                locally using the Deno CLI:
              </p>
              <CodeBlock language="ts">
                {example.run.startsWith("deno")
                  ? example.run.replace("<url>", url)
                  : "deno run " + example.run.replace("<url>", url)}
              </CodeBlock>
            </>
          )}
          {example.playground && (
            <div className="col-span-3 mt-8">
              <p className="text-gray-700">
                Try this example in a Deno Deploy playground:
              </p>
              <p className="mt-3">
                <a
                  className="py-2 px-4 bg-black inline-block text-white text-base rounded-md opacity-90 hover:opacity-100"
                  href={example.playground}
                  target="_blank"
                  rel="noreferrer"
                >
                  Deploy
                </a>
              </p>
            </div>
          )}
          {example.additionalResources.length > 0 && (
            <div className="col-span-3 mt-12 pt-6 border-t-1 border-gray-200">
              <p>Additional resources:</p>
              <ul className="list-disc list-inside mt-1">
                {example.additionalResources.map(([link, title]) => (
                  <li
                    className="text-gray-700 hover:text-gray-900"
                    key={link + title}
                  >
                    <a className="hover:underline focus:underline" href={link}>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function SnippetComponent(props: {
  filename: string;
  firstOfFile: boolean;
  lastOfFile: boolean;
  snippet: ExampleSnippet;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-10 gap-x-8">
      <div
        className={`italic select-none text-xs ${
          props.snippet.text ? "pt-[2.2rem] md:pt-9 pb-4 md:pb-0 " : " "
        } ${props.snippet.code ? "col-span-3" : "col-span-full"}`}
      >
        {props.snippet.text}
      </div>
      <div
        className={`col-span-7 relative ${
          props.snippet.code.length === 0 ? "hidden sm:block" : ""
        }`}
      >
        {props.filename && (
          <span
            className={`font-mono text-xs absolute -top-3 left-4 bg-[var(--ifm-code-background)] z-10 p-1 rounded-sm ${
              props.firstOfFile ? "block" : "block sm:hidden"
            }`}
          >
            {props.filename}
          </span>
        )}
        <div className="-mx-4 h-full sm:mx-0 overflow-scroll sm:overflow-hidden relative gfm-highlight">
          {props.snippet.code && (
            <div className="nocopy h-full">
              <CodeBlock language="ts">{props.snippet.code}</CodeBlock>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function CopyButton(props: { text: string }) {
  return (
      <button
        onClick={() => navigator?.clipboard?.writeText(props.text)}
        type="button"
        aria-label="Copy code to clipboard"
        title="Copy"
      className="clean-btn copy-all absolute right-2 top-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-2 py-1 rounded-md "
      >
      <svg viewBox="0 0 24 24" width="15" height="15"><path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path></svg>
      </button>
  );
}
