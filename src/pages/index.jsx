import React from "react";
import Layout from "@theme/Layout";
import Footer from "@theme/Footer";

export default function Home() {
  return (
    <Layout
      title={"Deno: the easiest, most secure JavaScript runtime"}
      description="Reference documentation for the Deno runtime and Deno Deploy"
    >
      <div className="flex flex-col px-8 pt-6 mt-20 md:items-center md:justify-center md:flex-row gap-0 md:gap-16 max-w-[1200px] mx-auto mb-24">
        <div className="pb-16 align-middle md:pb-0">
          <div className="mb-16 md:mb-24 text-center">
            <img
              className="w-64 h-64 mb-[-40px] md:mt-[-40px]"
              alt="Deno logo"
              src="/deno-looking-up.svg"
            />
            <h1 className="text-4xl md:text-6xl mb-0">Deno Docs</h1>
          </div>
          <div className="flex flex-col items-stretch gap-8 md:gap-4 lg:gap-8 md:grid md:grid-cols-2">
            <div className="w-full md:w-auto flex flex-col sm:pl-6 py-4 sm:border-l sm:border-solid border-y-0 border-r-0 border-gray-400 dark:border-[var(--runtime)]">
              <h2>Deno Runtime</h2>
              <p className="min-h-20">
                Deno, the open-source runtime for TypeScript and JavaScript.
                Features built-in dev tools, powerful platform APIs, and native
                support for TypeScript and JSX.
              </p>
              <a
                className="border-solid border-[var(--runtime)] font-bold inline-block p-3 px-4 rounded-md w-max text-black bg-[var(--runtime)] hover:text-inherit dark:hover:text-[var(--runtime)] dark:hover:bg-[var(--runtime-dark)] hover:no-underline"
                href="/runtime/manual"
              >
                Deno docs <span aria-hidden="true">-&gt;</span>
              </a>
              <h3 className="mt-16">More about Deno:</h3>
              <div className="grid grid-cols-1 gap-4 md:gap- mt-4">
                <div>
                  <h4 className="mb-1">Deno basics</h4>
                  <p>
                    New to Deno? This is the place to start.{" "}
                    <a
                      className="font-bold inline-block underline"
                      href="/runtime/manual/getting_started/first_steps"
                    >
                      Get started <span aria-hidden="true">-&gt;</span>
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="mb-1">Configuration</h4>
                  <p>
                    Customizations for Deno’s built-in TypeScript compiler,
                    formatter, and linter.{" "}
                    <a
                      className="font-bold inline-block underline"
                      href="/runtime/manual/getting_started/configuration_file"
                    >
                      Deno config <span aria-hidden="true">-&gt;</span>
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="mb-1">Testing in Deno</h4>
                  <p>
                    All about Deno’s built-in test runner for JavaScript or
                    TypeScript code.{" "}
                    <a
                      className="font-bold inline-block underline"
                      href="/runtime/manual/basics/testing/"
                    >
                      More about Testing <span aria-hidden="true">-&gt;</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto flex flex-col sm:pl-6 py-4 sm:border-l sm:border-solid border-y-0 border-r-0 border-gray-400 dark:border-[var(--deploy)]">
              <h2>Deno Deploy</h2>
              <p className="min-h-20">
                Serverless platform for deploying JavaScript code to a fast,
                global edge network. Supports Deno APIs and Node.js / npm
                modules
              </p>
              <a
                className="border-solid border-[var(--deploy)] font-bold inline-block p-3 px-4 rounded-md w-max text-black bg-[var(--deploy)] hover:text-inherit dark:hover:text-[var(--deploy)] dark:hover:bg-[var(--deploy-dark)] hover:no-underline"
                href="/deploy/manual"
              >
                Deploy docs <span aria-hidden="true">-&gt;</span>
              </a>
              <h3 className="mt-16">Deno Deploy APIs:</h3>
              <div className="grid grid-cols-1 gap-4 md:gap- mt-4">
                <div>
                  <h4 className="mb-1">KV</h4>
                  <p>
                    Key/value database built in to the Deno runtime. Simple API,
                    works with zero configuration on Deno Deploy.{" "}
                    <a
                      className="font-bold inline-block underline"
                      href="/kv/manual"
                    >
                      KV docs <span aria-hidden="true">-&gt;</span>
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="mb-1">Cron</h4>
                  <p>
                    Execute code on a configurable schedule at the edge in any
                    time zone.{" "}
                    <a
                      className="font-bold inline-block underline"
                      href="/kv/manual/cron"
                    >
                      Cron docs <span aria-hidden="true">-&gt;</span>
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="mb-1">Queues</h4>
                  <p>
                    Deno’s queueing API for offloading larger workloads or
                    scheduling tasks with guaranteed delivery.{" "}
                    <a
                      className="font-bold inline-block underline"
                      href="/kv/manual/queue_overview"
                    >
                      Cron docs <span aria-hidden="true">-&gt;</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
