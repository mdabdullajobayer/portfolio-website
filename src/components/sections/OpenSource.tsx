import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function OpenSource() {
  const engineeringNotes = [
    {
      title: "Optimizing Eloquent Query Execution in High-Volume Tables",
      topic: "Database Engineering",
      summary:
        "Practical breakdown of replacing eager-loading N+1 loops and utilizing composite B-tree indexes matching compound WHERE and ORDER BY clauses.",
      tag: "Notes & Practice",
    },
    {
      title: "Enforcing Multi-Tenant Boundaries with Global Query Scopes",
      topic: "System Architecture",
      summary:
        "Architectural notes on preventing tenant data leakage in shared database schemas using automated Laravel model scoping and integration testing.",
      tag: "Architecture Pattern",
    },
    {
      title: "Idempotent Webhook Processing for Payment Gateways",
      topic: "API Reliability",
      summary:
        "Handling duplicated network callbacks and out-of-order delivery gracefully using atomic database locks and persistent transaction signatures.",
      tag: "API Engineering",
    },
  ];

  return (
    <section id="opensource" className="py-20 md:py-28 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Open Source & Writing"
          title="Engineering Notes & Public Work"
          description="Public repositories, architecture summaries, and technical notes from real-world backend implementations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* GitHub Profile Highlight Card */}
          <div className="lg:col-span-5 rounded-xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    GitHub Repositories
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    @mdabdullajobayer
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Explore my public repositories, coding experiments, and utility modules on GitHub. Follow along as I open-source tools and backend patterns.
              </p>

              <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800/80 mb-6 space-y-2 text-xs font-mono text-slate-400">
                <div className="flex items-center justify-between">
                  <span>Profile:</span>
                  <span className="text-slate-200">github.com/mdabdullajobayer</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Primary Languages:</span>
                  <span className="text-slate-200">PHP, TypeScript, JavaScript</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Contributions:</span>
                  <span className="text-emerald-400">Active repositories</span>
                </div>
              </div>
            </div>

            <Button
              href={profileData.github}
              external
              variant="outline"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Visit GitHub Profile
            </Button>
          </div>

          {/* Engineering Notes Grid */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-slate-400 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Technical Notes &amp; Patterns</span>
            </h3>

            {engineeringNotes.map((note, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-cyan-400">
                    {note.topic}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {note.tag}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-white mb-2">
                  {note.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {note.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
