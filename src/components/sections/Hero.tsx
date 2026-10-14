import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowRight,
  Download,
  MapPin,
  Database,
  Server,
  Code2,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Hero() {
  const techPills = [
    "PHP",
    "Laravel",
    "React",
    "Next.js",
    "MySQL",
    "PostgreSQL",
    "REST APIs",
    "Docker",
    "Linux VPS",
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineering Roles &amp; Projects</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Building Software That Solves{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Real Business Problems.
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              I&apos;m{" "}
              <strong className="text-white font-semibold">
                {profileData.name}
              </strong>
              , a software developer focused on building web applications, business software,
              APIs, and SaaS solutions with Laravel, PHP, React, and modern web
              technologies.
            </p>

            {/* Metadata Bar */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profileData.location}</span>
              </div>
              <span className="text-slate-700">&bull;</span>
              <div className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-indigo-400" />
                <span>{profileData.experienceYears} Experience</span>
              </div>
              <span className="text-slate-700">&bull;</span>
              <div className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <span>Backend &amp; Database Focus</span>
              </div>
            </div>

            {/* Technology Highlights */}
            <div className="mt-6 flex flex-wrap gap-2">
              {techPills.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Button href="#projects" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                View Projects
              </Button>
              <Button href="#contact" variant="secondary" icon={<Mail className="w-4 h-4" />}>
                Contact Me
              </Button>
              {profileData.hasResumeFile ? (
                <Button
                  href={profileData.resumeUrl}
                  external
                  variant="outline"
                  icon={<Download className="w-4 h-4" />}
                >
                  Download CV
                </Button>
              ) : (
                <Button
                  href="#contact"
                  variant="outline"
                  icon={<Download className="w-4 h-4" />}
                >
                  Request Resume
                </Button>
              )}
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-400">Profiles:</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="text-xs font-mono">GitHub</span>
              </a>
              <span className="text-slate-700">&bull;</span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="text-xs font-mono">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Engineering System Visual Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-800 bg-slate-900/90 shadow-2xl overflow-hidden font-mono text-xs">
              {/* Window Header */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 text-slate-400 text-[11px]">
                    engineer@abdullah-jobayer: ~
                  </span>
                </div>
                <span className="text-[10px] text-cyan-400/80 border border-cyan-500/20 px-2 py-0.5 rounded bg-cyan-950/30">
                  PHP 8.2 / Next.js
                </span>
              </div>

              {/* Terminal / Architecture Spec Display */}
              <div className="p-5 space-y-4 text-slate-300 bg-slate-950/80 leading-relaxed">
                <div>
                  <span className="text-cyan-400">$</span>{" "}
                  <span className="text-white">cat stack.config.json</span>
                </div>

                <div className="p-3 bg-slate-900/90 rounded border border-slate-800 text-[11px] text-slate-300 space-y-1">
                  <p className="text-indigo-300 font-semibold">&#123;</p>
                  <p className="pl-4">
                    <span className="text-slate-400">&quot;developer&quot;:</span>{" "}
                    <span className="text-emerald-300">&quot;Abdullah Jobayer&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">&quot;focus&quot;:</span>{" "}
                    <span className="text-amber-300">&quot;Business Software &amp; APIs&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">&quot;backend&quot;:</span>{" "}
                    <span className="text-cyan-300">[&quot;Laravel&quot;, &quot;PHP&quot;, &quot;REST APIs&quot;]</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">&quot;frontend&quot;:</span>{" "}
                    <span className="text-cyan-300">[&quot;React&quot;, &quot;Next.js&quot;, &quot;Tailwind&quot;]</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">&quot;database&quot;:</span>{" "}
                    <span className="text-cyan-300">[&quot;MySQL&quot;, &quot;PostgreSQL&quot;, &quot;Indexing&quot;]</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">&quot;architecture&quot;:</span>{" "}
                    <span className="text-cyan-300">[&quot;Multi-Tenant&quot;, &quot;ERP&quot;, &quot;SaaS&quot;]</span>
                  </p>
                  <p className="text-indigo-300 font-semibold">&#125;</p>
                </div>

                <div>
                  <span className="text-cyan-400">$</span>{" "}
                  <span className="text-white">php artisan check:readiness</span>
                </div>

                <div className="text-[11px] space-y-1 text-slate-400">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>&bull; Database integrity checks</span>
                    <span className="text-emerald-400 font-bold">[PASSED]</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>&bull; API endpoint authentication</span>
                    <span className="text-emerald-400 font-bold">[PASSED]</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>&bull; N+1 query regression guard</span>
                    <span className="text-emerald-400 font-bold">[ACTIVE]</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>&bull; Multi-tenant schema boundary</span>
                    <span className="text-emerald-400 font-bold">[VERIFIED]</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Clean Architecture Principles</span>
                  </span>
                  <span className="text-emerald-400 font-mono">0 errors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
