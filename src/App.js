import React from "react";
import About from "./components/About";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Resources />
      <Setup />
    </main>
  );
}