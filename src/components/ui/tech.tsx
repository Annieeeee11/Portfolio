import Details from "@/components/details";

export const Tech = () => {
  const { techlist } = Details();

  return (
    <div>
      <div
        className="flex items-center justify-center gap-4 mb-4 mt-0 flex-wrap"
      >
        {techlist.map((tech) => (
          <div 
            key={tech.name} 
            className="group relative"
          >
            {tech.icon}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {tech.name}
            </div>
          </div>
        ))}
      </div>
      <div className="w-8 h-px bg-gray-700 mx-auto mb-4" />
    </div>
  );
};
