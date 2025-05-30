import Details from "../details";

export default function Projects() {
  const { handleClick, projects } = Details();
  return (
    <div className="space-y-3 mb-7">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-900/30 border border-gray-800/50 p-4 hover:border-gray-700/50 rounded-lg hover:bg-gray-900/50 transition-all duration-200 group transform hover:scale-[1.02] cursor-pointer"
          onClick={() => {
            handleClick(project.link);
          }}
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xs font-medium text-white group-hover:text-gray-300 transition-colors">
              {project.name}
            </h3>
            <span className="text-xs text-gray-600">{project.year}</span>
          </div>
          <p className="text-xs text-gray-500 mb-2 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {project.tech.split(", ").map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-0.5 text-xs bg-gray-800/50 text-gray-400 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
