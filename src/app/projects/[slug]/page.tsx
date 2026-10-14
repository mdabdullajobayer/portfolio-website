import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Terminal,
  Cpu,
  Database,
  FileCode,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Abdullah Jobayer",
    };
  }

  return {
    title: `${project.title} | Abdullah Jobayer - Software Developer`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} - Software Engineering Deep Dive`,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all projects</span>
            </Link>
          </div>

          {/* Project Header */}
          <header className="border-b border-slate-800 pb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-wide px-3 py-1 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                {project.category}
              </span>
              {project.isProprietary ? (
                <span className="text-xs font-mono px-3 py-1 rounded bg-amber-950/40 text-amber-300 border border-amber-800/40">
                  Proprietary Client Architecture
                </span>
              ) : (
                <span className="text-xs font-mono px-3 py-1 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-800/40">
                  Open Source Project
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              {project.tagline}
            </p>

            {/* Tech Stack Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  external
                  variant="secondary"
                  icon={<GithubIcon className="w-4 h-4" />}
                >
                  View GitHub Profile / Repo
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  external
                  variant="primary"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Live Deployment
                </Button>
              )}
              <Button href="/#contact" variant="outline">
                Discuss This Architecture
              </Button>
            </div>
          </header>

          {/* Core Case Study Sections */}
          <div className="py-12 space-y-14">
            {/* 1. Problem & Solution Overview */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-5 h-5 text-rose-400" />
                  <h2 className="text-lg font-bold text-white">
                    The Problem &amp; Challenge
                  </h2>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  <h2 className="text-lg font-bold text-white">
                    Engineering Solution
                  </h2>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </section>

            {/* 2. My Actual Contribution */}
            <section className="p-8 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2.5 mb-4">
                <FileCode className="w-5 h-5 text-indigo-400" />
                <h2 className="text-xl font-bold text-white">
                  My Role &amp; Hands-On Contribution
                </h2>
              </div>
              <p className="text-base text-slate-200 leading-relaxed">
                {project.myContribution}
              </p>
            </section>

            {/* 3. Key Engineering Decisions */}
            <section>
              <div className="flex items-center gap-2.5 mb-6">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl font-bold text-white">
                  Key Engineering Decisions
                </h2>
              </div>
              <div className="space-y-4">
                {project.keyDecisions.map((decision, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-lg bg-slate-900/50 border border-slate-800 flex items-start gap-4"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/60 font-mono text-xs shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {decision}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Architecture Deep-Dive Components */}
            {project.architectureDetails && project.architectureDetails.length > 0 && (
              <section>
                <div className="flex items-center gap-2.5 mb-6">
                  <Database className="w-5 h-5 text-indigo-400" />
                  <h2 className="text-xl font-bold text-white">
                    System Architecture Patterns
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.architectureDetails.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-base font-semibold text-white mb-2">
                          {detail.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {detail.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 5. Verified Outcomes & Business Value */}
            {project.outcomes && project.outcomes.length > 0 && (
              <section className="p-8 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex items-center gap-2.5 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h2 className="text-xl font-bold text-white">
                    Delivered Outcomes &amp; System Impact
                  </h2>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.outcomes.map((outcome, idx) => (
                    <li
                      key={idx}
                      className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80 text-sm text-slate-300 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Bottom Navigation CTA */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all projects</span>
            </Link>

            <Button href="/#contact" variant="primary">
              Discuss this project with Abdullah
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
