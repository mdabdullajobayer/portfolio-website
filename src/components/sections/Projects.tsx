"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Info } from "lucide-react";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Pharmacy Management SaaS",
    "ERP & Business Management Software",
    "E-commerce Applications",
    "Database Performance Optimization",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeading
            eyebrow="Portfolio & Systems"
            title="Featured Engineering Projects"
            description="Real software projects emphasizing database architecture, API engineering, business domain rules, and query optimization."
            className="mb-0"
          />

          {/* Privacy & Commercial Code Notice */}
          <div className="inline-flex items-center gap-2 p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-400 max-w-sm">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              Client SaaS code is proprietary. Architecture breakdowns and redacted schemas are available for review.
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeCategory === cat
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-sm"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
