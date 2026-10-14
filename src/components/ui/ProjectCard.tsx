import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/projects";
import { Badge } from "./Badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 overflow-hidden hover:shadow-xl hover:shadow-cyan-950/20">
      {/* Visual Header / Engineering Mockup bar */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/60" />
          </div>
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            {project.category}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {project.isProprietary ? (
            <span className="text-[11px] font-mono text-amber-400/90 bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded">
              Client Software
            </span>
          ) : (
            <span className="text-[11px] font-mono text-emerald-400/90 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
              Open Source
            </span>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
            <Link href={`/projects/${project.slug}`} className="focus:outline-none">
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            {project.tagline}
          </p>

          {/* Problem vs Solution Overview */}
          <div className="mt-5 space-y-3 bg-slate-950/40 p-3.5 rounded-lg border border-slate-800/50 text-xs">
            <div>
              <span className="font-semibold text-slate-300 block mb-1">
                Problem:
              </span>
              <p className="text-slate-400 line-clamp-2">{project.problem}</p>
            </div>
            <div className="border-t border-slate-800/60 pt-2">
              <span className="font-semibold text-cyan-300 block mb-1">
                Engineering Approach:
              </span>
              <p className="text-slate-400 line-clamp-2">{project.solution}</p>
            </div>
          </div>

          {/* Key Decisions preview */}
          {project.keyDecisions && project.keyDecisions.length > 0 && (
            <div className="mt-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                Key Decision
              </span>
              <p className="text-xs text-slate-300 bg-slate-900/90 p-2.5 rounded border border-slate-800/80">
                {project.keyDecisions[0]}
              </p>
            </div>
          )}
        </div>

        {/* Technologies & Footer Actions */}
        <div className="mt-6 pt-5 border-t border-slate-800/80">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 && (
              <Badge variant="outline">+{project.technologies.length - 5}</Badge>
            )}
          </div>

          <div className="flex items-center justify-between">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:underline"
            >
              <span>Architecture Details</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View GitHub repository for ${project.title}`}
                className="text-slate-400 hover:text-white transition-colors p-1.5 rounded hover:bg-slate-800"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
