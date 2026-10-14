"use client";

import { profileData } from "@/data/profile";
import { ArrowUp, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-slate-950 font-mono text-sm">
              {profileData.initials}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                {profileData.name}
              </p>
              <p className="text-xs text-slate-400 font-mono">
                {profileData.title} &bull; {profileData.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#top"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-xs font-mono p-1 rounded hover:bg-slate-900"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 font-mono">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Built with Next.js, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

