"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, LayoutTemplate } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const isTerminal = pathname === "/terminal";

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors text-sm tracking-tight"
          >
            <span className="w-7 h-7 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 flex items-center justify-center font-mono font-bold text-xs shadow-sm">
              VR
            </span>
            <span className="font-medium hidden sm:inline">Vikas U Rao</span>
          </Link>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden md:inline">Open to roles</span>
            <span className="md:hidden">Available</span>
          </span>
        </div>

        {!isTerminal && (
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
            <a
              href="#experience"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Skills
            </a>
            <a
              href="#education"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Education
            </a>
          </nav>
        )}

        <div className="flex items-center gap-2">
          <Link
            href={isTerminal ? "/" : "/terminal"}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-900/70 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-all"
            aria-label="Toggle portfolio mode"
          >
            {isTerminal ? (
              <>
                <LayoutTemplate size={14} />
                <span>Visual UI</span>
              </>
            ) : (
              <>
                <Terminal size={14} />
                <span>Terminal</span>
              </>
            )}
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
