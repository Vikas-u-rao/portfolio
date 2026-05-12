"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, LayoutTemplate } from "lucide-react";

export function ModeSwitcher() {
  const pathname = usePathname();
  const isTerminal = pathname === "/terminal";

  return (
    <Link
      href={isTerminal ? "/" : "/terminal"}
      className="p-2 mr-2 flex items-center gap-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors text-sm font-medium border border-gray-200 dark:border-gray-800"
      aria-label="Toggle portfolio mode"
    >
      {isTerminal ? (
        <>
          <LayoutTemplate size={18} />
          <span className="hidden sm:inline">Visual UI</span>
        </>
      ) : (
        <>
          <Terminal size={18} />
          <span className="hidden sm:inline">Terminal Mode</span>
        </>
      )}
    </Link>
  );
}
