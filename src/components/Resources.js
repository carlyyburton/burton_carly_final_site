import React from "react";
import { DesktopComputerIcon } from "@heroicons/react/solid";
import { resources } from "../data";

export default function Resources() {
  return (
    <section id="resources">
      <div className="container mx-auto text-center">
        <DesktopComputerIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
        Resources
        </h1>
        <div className="flex flex-wrap -m-4">
          {resources.map((resource) => (
            <a
              href={resource.link}
              className="sm:w-1/2 w-100 p-4">

              <div className="flex relative">

                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-50 hover:opacity-100">
                  <img
                    alt="resource"
                    src={resource.icon}
                    className="w-8 inline-block mb-4"/>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {resource.title}
                  </h1>
                   <h2 className="tracking-widest text-m title-font font-medium text-green-400 mb-1">
                    {resource.summary}
                  </h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
