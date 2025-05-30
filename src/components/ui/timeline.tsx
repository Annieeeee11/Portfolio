import Details from "../details";

export default function Timeline() {
    const { timeline } = Details();
  return (
    <div>
      <div className="relative mb-8">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-600" />
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-10">

                  <div className="absolute left-3 top-1.5 w-3 h-3 rounded-full bg-gray-400 shadow-[0_0_8px_rgba(156,163,175,0.5)]" />
                  
                  <div className="bg-gray-800/30 backdrop-blur-sm p-4 hover:bg-gray-800/40 transition-all duration-200 group transform border border-transparent hover:border-gray-700/50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xs font-medium text-gray-200 group-hover:text-white transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-xs text-gray-400">{item.company}</p>
                      </div>
                      <span className="text-xs text-gray-500">{item.year}</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}