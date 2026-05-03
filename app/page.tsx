import { portfolioData } from "@/lib/data";

export default function TerminalPage() {
  return (
    <div className="font-mono max-w-4xl mx-auto flex flex-col gap-6 pb-20">
      <div className="mb-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">{portfolioData.name}</h1>
        <p className="text-gray-600 dark:text-gray-400">{portfolioData.terminalTagline}</p>
      </div>

      <section>
        <div className="flex mb-2">
          <span className="text-gray-500 mr-2">$</span>
          <span className="text-gray-900 dark:text-gray-100 font-semibold">cat about.txt</span>
        </div>
        <div className="text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-gray-300 dark:border-gray-800 whitespace-pre-wrap">
          {portfolioData.about}
        </div>
      </section>

      <section>
        <div className="flex mb-2">
          <span className="text-gray-500 mr-2">$</span>
          <span className="text-gray-900 dark:text-gray-100 font-semibold">ls -l ./experience</span>
        </div>
        <div className="text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-gray-300 dark:border-gray-800">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="mb-4 last:mb-0">
              <div className="text-gray-900 dark:text-gray-200 font-bold">{exp.role} @ {exp.company}</div>
              <div className="text-gray-500 text-sm mb-2">{exp.period}</div>
              <ul className="list-disc list-inside pl-4 mb-2 text-gray-600 dark:text-gray-400">
                {exp.bulletPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 text-sm">
                {exp.techUsed.map((tech, i) => (
                  <span key={i} className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex mb-2">
          <span className="text-gray-500 mr-2">$</span>
          <span className="text-gray-900 dark:text-gray-100 font-semibold">ls -l ./projects</span>
        </div>
        <div className="text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-gray-300 dark:border-gray-800 space-y-6">
          {portfolioData.projects.map((project, idx) => (
            <div key={project.id} className="p-4 bg-gray-100 dark:bg-gray-900/50 rounded-md border border-gray-300 dark:border-gray-800">
              <h3 className="text-xl text-gray-900 dark:text-gray-100 font-bold mb-1">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">{project.technicalSummary}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-transparent text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                    {tech.name}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm font-semibold">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    [repository]
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    [live demo]
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex mb-2">
          <span className="text-gray-500 mr-2">$</span>
          <span className="text-gray-900 dark:text-gray-100 font-semibold">cat skills.json</span>
        </div>
        <div className="text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-gray-300 dark:border-gray-800">
          <div className="flex flex-wrap gap-2 text-sm">
            {portfolioData.skills.map((skill, i) => (
              <span key={i} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-700 font-medium">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex mb-2">
          <span className="text-gray-500 mr-2">$</span>
          <span className="text-gray-900 dark:text-gray-100 font-semibold">contact --info</span>
        </div>
        <div className="text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-gray-300 dark:border-gray-800">
          <ul className="space-y-1">
            <li><span className="text-gray-500 w-24 inline-block">Email:</span> <a href={`mailto:${portfolioData.email}`} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">{portfolioData.email}</a></li>
            {portfolioData.socials.github && (
              <li><span className="text-gray-500 w-24 inline-block">GitHub:</span> <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">{portfolioData.socials.github}</a></li>
            )}
            {portfolioData.socials.linkedin && (
              <li><span className="text-gray-500 w-24 inline-block">LinkedIn:</span> <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">{portfolioData.socials.linkedin}</a></li>
            )}
          </ul>
        </div>
      </section>

      <div className="flex mt-4">
        <span className="text-gray-500 mr-2 text-xl font-bold animate-pulse">_</span>
      </div>
    </div>
  );
}
