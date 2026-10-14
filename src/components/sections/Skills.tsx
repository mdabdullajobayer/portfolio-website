import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Server,
  Layout,
  Database,
  Layers,
  Terminal,
  Zap,
} from "lucide-react";

export function Skills() {
  const categoryIcons: Record<string, React.ReactNode> = {
    backend: <Server className="w-5 h-5 text-cyan-400" />,
    frontend: <Layout className="w-5 h-5 text-indigo-400" />,
    databases: <Database className="w-5 h-5 text-cyan-400" />,
    architecture: <Layers className="w-5 h-5 text-indigo-400" />,
    devops: <Terminal className="w-5 h-5 text-cyan-400" />,
    performance: <Zap className="w-5 h-5 text-indigo-400" />,
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Capabilities"
          title="Skills & Engineering Competencies"
          description="Grouped by domain without arbitrary percentages or progress bars. Highlighting hands-on technologies used in production systems."
        />

        {/* Legend for transparency */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono mb-8 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-slate-400">
          <span className="font-semibold text-slate-300">Proficiency Levels:</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-slate-300">Primary</span> &mdash; Daily core stack
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <span className="text-slate-300">Experienced</span> &mdash; Used in production projects
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-500" />
            <span className="text-slate-300">Familiar</span> &mdash; Working conceptual knowledge
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col justify-between rounded-xl bg-slate-900/70 border border-slate-800/90 p-6 hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                    {categoryIcons[category.id] || (
                      <Server className="w-5 h-5 text-cyan-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/60"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                              skill.level === "Primary"
                                ? "bg-cyan-950/50 text-cyan-300 border-cyan-800/50"
                                : skill.level === "Experienced"
                                ? "bg-indigo-950/50 text-indigo-300 border-indigo-800/50"
                                : "bg-slate-800/60 text-slate-400 border-slate-700/60"
                            }`}
                          >
                            {skill.level}
                          </span>
                        )}
                      </div>
                      {skill.description && (
                        <p className="mt-1 text-xs text-slate-400 leading-normal">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
