import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resources from "./components/Resources";
import Setup from "./components/Setup";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">

      <About />
      <Projects />
      <Skills />
      <Resources />
      <Setup />
      {/*<Navbar />



     */}
    </main>
  );
}