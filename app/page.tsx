import { portfolioData } from "@/lib/data";
import { Mail, ExternalLink, Code2 } from "lucide-react";

// Simple SVG icons
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-20 pb-20 font-sans">
      {/* Hero Section */}
      <section className="mt-8 flex flex-col gap-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text pb-2">
          {portfolioData.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-semibold max-w-2xl">
          {portfolioData.tagline}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
          {portfolioData.about}
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all font-semibold shadow-md shadow-blue-500/20">
            <Mail size={18} /> Email Me
          </a>
          <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-xl transition-all font-semibold">
            <GithubIcon size={18} /> GitHub
          </a>
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-xl transition-all font-semibold">
            <LinkedinIcon size={18} /> LinkedIn
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
          Experience
        </h2>
        <div className="space-y-8">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-blue-500/20 dark:border-blue-500/30">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1.5 shadow-[0_0_12px_rgba(59,130,246,0.6)]"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{exp.role}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">{exp.company}</p>
              <p className="text-sm text-gray-500 font-medium mb-4">{exp.period}</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {exp.bulletPoints.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-blue-500/60 mt-1">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <div className="w-8 h-1 bg-purple-500 rounded-full"></div>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="group relative flex flex-col justify-between p-7 rounded-3xl bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800/60 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1.5 transition-all duration-300">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.technicalSummary}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg">
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-5 pt-4 mt-auto">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-sm flex items-center gap-2 font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Code2 size={18} /> Source Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-sm flex items-center gap-2 font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <div className="w-8 h-1 bg-green-500 rounded-full"></div>
          Skills & Tools
        </h2>
        <div className="flex flex-wrap gap-3">
          {portfolioData.skills.map((skill, i) => (
            <div key={i} className="px-5 py-2.5 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm font-semibold text-gray-800 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all cursor-default">
              {skill.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
