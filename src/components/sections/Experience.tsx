import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career Timeline"
          title="Professional Experience"
          description="Software engineering roles, project ownership, and delivered milestones across web and SaaS systems."
        />

        <div className="relative border-l border-slate-800 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experiences.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline dot */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  item.isCurrent
                    ? "bg-cyan-500 border-slate-950 ring-4 ring-cyan-500/20"
                    : "bg-slate-800 border-slate-950"
                }`}
              />

              {/* Card Container */}
              <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-colors">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl font-bold text-white">
                        {item.role}
                      </h3>
                      {item.isCurrent && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                          Current Role
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-cyan-400 mt-1">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.period}</span>
                    </div>
                    <span className="text-slate-700">&bull;</span>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.companyLocation}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {item.summary}
                </p>

                {/* Two-column Responsibilities and Accomplishments */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800/60">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-400 shrink-0 mt-0.5">&bull;</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800/60">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 font-semibold">
                      Engineering Highlights
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                      {item.accomplishments.map((acc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{acc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack used */}
                <div className="pt-4 border-t border-slate-800/70 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-slate-400 mr-2">
                    Technologies:
                  </span>
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
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
