import React from "react";
import { TerminalIcon, DesktopComputerIcon } from "@heroicons/react/solid";
import { resources } from "../data";

export default function Resources() {
  return (
    <section id="resources">
      <div className="container px-5 py-10 mx-auto text-center">
        <DesktopComputerIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
        Resources
        </h1>
        <div className="flex flex-wrap m-4">
          {resources.map((resources) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{resources.title}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="resource"
                    src={resources.icon}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {resources.summary}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {resources.link}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
