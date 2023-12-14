import React from "react";
import { TerminalIcon } from "@heroicons/react/solid";
import { setup } from "../data";

export default function Setup() {
  return (
    <section id="setup">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <TerminalIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Developer Setup
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here is my preferred setup that I have been using for the last two years.
          </p>
          <div className="content-center">
            {setup.map((setup) => (
              <div className="p-4 w-full">
                <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded ">
                  <div className="inline-flex items-center">
                    <span className="flex-grow flex flex-col pl-4">
                    <p className="font-medium">
                        <span className="title-font font-medium text-white">VsCode Theme: </span>{setup.vscode}
                    </p>
                    <p className="font-medium">
                        <span className="title-font font-medium text-white">Terminal: </span>{setup.terminal}
                    </p>
                    <p className="font-medium">
                        <span className="title-font font-medium text-white">Editor Font: </span>{setup.editor_font}
                    </p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}