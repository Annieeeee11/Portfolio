import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import Details from "../details";

export function FloatingDockDemo() {
  const { links } = Details();
  return (
    <div>
      <div className="w-8 h-px bg-gray-700 mx-auto mb-4" />
      <div className="flex justify-center">
        <div className="flex items-center justify-center">
          <FloatingDock mobileClassName="translate-y-20" items={links} />
        </div>
      </div>
    </div>
  );
}
