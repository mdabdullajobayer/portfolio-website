import { speakingTalks } from "@/data/speaking";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Presentation,
  ArrowUpRight,
  Sparkles,
  Bot,
  Search,
  Layers,
  Mic,
} from "lucide-react";

export function PublicSpeaking() {
  const talk = speakingTalks[0];

  const iconMap: Record<number, React.ReactNode> = {
    0: <Search className="w-4 h-4 text-cyan-400" />,
    1: <Bot className="w-4 h-4 text-indigo-400" />,
    2: <Layers className="w-4 h-4 text-cyan-400" />,
  };

  return (
    <section id="speaking" className="py-20 md:py-28 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Public Speaking"
          title="Technical Talks & Presentations"
          description="Slide presentations and talks on modern web development, backend engineering patterns, and practical AI workflows."
        />

        <div className="rounded-2xl bg-slate-900/60 border border-slate-800/90 overflow-hidden shadow-2xl">
          {/* Header Bar */}
          <div className="px-6 py-5 border-b border-slate-800/80 bg-slate-950/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 shrink-0 mt-1 sm:mt-0">
                <Presentation className="w-5 h-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Featured Slide Deck
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-rose-950/50 text-rose-300 border border-rose-800/60">
                    <Mic className="w-3 h-3 text-rose-400" />
                    Presented at {talk.event}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {talk.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  {talk.subtitle} &bull; Speaker: <span className="text-slate-200 font-medium">{talk.speaker}</span>
                </p>
              </div>
            </div>

            <Button
              href={talk.slidesUrl}
              external
              variant="outline"
              size="sm"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Open in Google Slides
            </Button>
          </div>

          {/* Embedded Slide Player */}
          <div className="p-4 sm:p-6 lg:p-8 bg-slate-950/50">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-800/90 shadow-2xl bg-black">
              <iframe
                src={talk.embedUrl}
                title={`${talk.title} - Presented at ${talk.event}`}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Tags and Talk Overview */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/70">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-slate-400 mr-2">
                  Topics:
                </span>
                {talk.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>

              <span className="text-xs font-mono text-slate-400">
                Delivered at {talk.event} &bull; Click slides to navigate
              </span>
            </div>

            {/* Key Topics Breakdown */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {talk.keyTopics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-slate-950 border border-slate-800">
                      {iconMap[idx] || <Layers className="w-4 h-4 text-cyan-400" />}
                    </div>
                    <h4 className="text-sm font-semibold text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
