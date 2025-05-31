"use client";

import Details from "./details";
import { FloatingDockDemo } from "./ui/float-bar";
import Timeline from "./ui/timeline";
import Projects from "./ui/projects";
import { Tech } from "./ui/tech";
import { HireMe } from "./ui/hire-me";
import AboutMe from "./about_me";

export default function Portfolio() {
  const { name, display } = Details();

  return (
    <div className="min-h-screen bg-black text-gray-400 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-between mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src="/_.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          <div>
          <h2 className="text-lg text-center font-medium text-white ml-6">
              {name}
            </h2>
          </div>
          <div className="select-none font-medium text-xs w-fit  border px-1.5 py-0.5 rounded-md flex gap-0.5 items-center border-green-400 text-green-400">
            <span className="animate-pulse"></span>
            Available for hire
          </div>
        </div>
        <div className="w-8 h-px bg-gray-700 mx-auto mb-4" />
        <AboutMe />
        <div className="w-8 h-px bg-gray-700 mx-auto mb-4 mt-4" />
        <Timeline />
        <Projects />
        <div className="w-8 h-px bg-gray-700 mx-auto mb-4 mt-4" />
        <Tech />
        <HireMe />
        <FloatingDockDemo />
      </div>
    </div>
  );
}
