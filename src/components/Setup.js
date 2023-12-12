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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
          {setup.map((setup) => (
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {setup.vscode}
                  </h1>
                   <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {setup.terminal}
                  </h2>
                  <p className="leading-relaxed">{setup.editor}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}