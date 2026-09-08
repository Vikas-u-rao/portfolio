import { portfolioData } from "@/lib/data";
import {
  Mail,
  ExternalLink,
  Code2,
  FileText,
  MapPin,
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  Layers,
  Terminal,
} from "lucide-react";
import Link from "next/link";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  return (
    <div className="flex flex-col gap-28 md:gap-32 pb-24">
      {/* Hero Section */}
      <section className="flex flex-col gap-8 pt-4 md:pt-12" id="about">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
            <MapPin size={14} className="text-zinc-500" />
            <span>Bengaluru, India</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for SWE Roles</span>
          </div>
        </div>

        <div className="flex flex-col gap-5 max-w-4xl">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            {portfolioData.name}
          </h1>
          <p className="text-2xl sm:text-3xl font-medium text-zinc-700 dark:text-zinc-300 leading-snug">
            Software Developer building backend services, full-stack systems, automation pipelines, and AI applications.
          </p>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            {portfolioData.about}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {portfolioData.resumeUrl && (
            <a
              href={portfolioData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity shadow-sm"
            >
              <FileText size={16} />
              <span>Resume PDF</span>
              <ArrowUpRight size={14} className="opacity-70" />
            </a>
          )}
          <a
            href={`mailto:${portfolioData.email}`}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 transition-colors"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 transition-colors"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 transition-colors"
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section className="flex flex-col gap-8" id="experience">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2.5">
            <Briefcase size={20} className="text-zinc-500" />
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Work Experience
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">01 // CAREER</span>
        </div>

        <div className="flex flex-col gap-6">
          {portfolioData.experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-9 rounded-2xl bg-zinc-100/40 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/70 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col gap-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">
                    {exp.role}
                  </h3>
                  <div className="text-base font-medium text-zinc-700 dark:text-zinc-300 mt-0.5">
                    {exp.company}
                    {exp.location && (
                      <span className="text-zinc-400 dark:text-zinc-500"> &bull; {exp.location}</span>
                    )}
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 px-3 py-1 rounded-md bg-zinc-200/60 dark:bg-zinc-800/60 self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2.5 text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
                {exp.bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 leading-relaxed">
                    <span className="text-zinc-400 dark:text-zinc-600 select-none mt-1">&mdash;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {exp.techUsed && exp.techUsed.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60">
                  {exp.techUsed.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-md"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="flex flex-col gap-8" id="projects">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2.5">
            <Code2 size={20} className="text-zinc-500" />
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Featured Projects
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">02 // CODE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="group p-7 sm:p-9 rounded-2xl bg-zinc-100/40 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/70 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    {project.tags.slice(0, 2).join(" / ")}
                  </span>
                  {project.status === "live" && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Active
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.technicalSummary}
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-200/60 dark:bg-zinc-800/60 rounded-md"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs font-mono">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                    >
                      <GithubIcon size={15} />
                      <span>Source</span>
                      <ArrowUpRight size={13} className="opacity-70" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                      <ArrowUpRight size={13} className="opacity-70" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Architecture Section */}
      <section className="flex flex-col gap-8" id="skills">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2.5">
            <Layers size={20} className="text-zinc-500" />
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Technical Skills & Architecture
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">03 // STACK</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {portfolioData.skillCategories?.map((categoryGroup, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-100/40 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/70 flex flex-col gap-4"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {categoryGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {categoryGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs sm:text-sm font-mono rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      {portfolioData.education && portfolioData.education.length > 0 && (
        <section className="flex flex-col gap-8" id="education">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2.5">
              <GraduationCap size={20} className="text-zinc-500" />
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Education
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-500">04 // ACADEMICS</span>
          </div>

          <div className="flex flex-col gap-4">
            {portfolioData.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-9 rounded-2xl bg-zinc-100/40 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-medium text-zinc-700 dark:text-zinc-300 mt-1">
                    {edu.institution}
                    {edu.location && (
                      <span className="text-zinc-400 dark:text-zinc-500"> &bull; {edu.location}</span>
                    )}
                  </p>
                </div>
                <div className="flex sm:flex-col sm:items-end gap-2 font-mono text-xs sm:text-sm">
                  <span className="px-3 py-1 rounded-md bg-zinc-200/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300">
                    {edu.period}
                  </span>
                  {edu.gpa && (
                    <span className="text-zinc-500 dark:text-zinc-400 font-semibold">
                      {edu.gpa}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Terminal Mode Callout */}
      <section className="p-8 sm:p-10 rounded-2xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-1.5 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider">
            <Terminal size={14} />
            <span>Interactive Console</span>
          </div>
          <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">
            Prefer keyboard navigation?
          </h3>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Explore experience, skills, and projects through the interactive CLI terminal mode.
          </p>
        </div>
        <Link
          href="/terminal"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-mono font-medium bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          <Terminal size={16} />
          <span>Launch Terminal</span>
          <ArrowUpRight size={14} />
        </Link>
      </section>
    </div>
  );
}
