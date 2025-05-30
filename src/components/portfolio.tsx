"use client";

import Details from "./details";
import { FloatingDockDemo } from "./ui/float-bar";
import Timeline from "./ui/timeline";
import Projects from "./ui/projects";

export default function Portfolio() {
  const { name, display } = Details();

  return (
    <div className="min-h-screen bg-black text-gray-400 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-lg font-medium text-white mb-1">{name}</h1>
          <p className="text-xs text-gray-500">{display}</p>
          <div className="w-8 h-px bg-gray-700 mx-auto mt-3" />
        </div>

        <Timeline />
        <Projects />
        <FloatingDockDemo />
      </div>
    </div>
  );
}
