import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Server,
  Database,
  Layers,
  Terminal,
  Layout,
  Briefcase,
  CheckCircle2,
  Cpu,
} from "lucide-react";

export function About() {
  const businessDomains = [
    { name: "HRM & People Operations", desc: "Employee tracking, attendance & policies" },
    { name: "Payroll Systems", desc: "Salary calculation, deductions & pay slips" },
    { name: "CRM Platforms", desc: "Lead funnels, client communications & history" },
    { name: "Point of Sale (POS)", desc: "Fast counter billing, barcodes & cash handling" },
    { name: "Inventory Management", desc: "Batch depletion, warehouse transfers & audits" },
    { name: "Enterprise ERP", desc: "Multi-branch ledgers & synchronized workflows" },
  ];

  const coreFocusAreas = [
    {
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      title: "Backend Engineering",
      description:
        "Building Laravel applications, RESTful APIs, reusable business logic, validation, authorization, and maintainable application architectures.",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-indigo-400" />,
      title: "Business Application Development",
      description:
        "Developing features and workflows for HRM, Payroll, CRM, POS, Inventory Management, and ERP platforms.",
    },
    {
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      title: "Database Design & Optimization",
      description:
        "Designing relational database schemas, improving query performance, and maintaining data integrity across business-critical operations.",
    },
    {
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      title: "SaaS & System Architecture",
      description:
        "Working with multi-tenant application design, tenant isolation, permissions, and scalable business software structures.",
    },
    {
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      title: "Full-Stack Development",
      description:
        "Building responsive interfaces with React and Next.js while integrating them with backend services and APIs.",
    },
    {
      icon: <Terminal className="w-5 h-5 text-indigo-400" />,
      title: "Integrations & Deployment",
      description:
        "Working with third-party APIs, payment integrations, Linux VPS environments, Nginx, Docker, and production troubleshooting.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Engineering Focus & Experience"
          title="Building Business Software That Solves Real Operational Problems"
          description="2+ years of professional experience translating real-world operational workflows into reliable architectures, clean database models, and maintainable software."
        />

        {/* Narrative & Domain Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I’m a Software Developer with 2+ years of professional experience building business applications, ERP systems, RESTful APIs, and SaaS platforms. My primary technology stack includes <strong>PHP, Laravel, React, Next.js, and relational databases</strong>, with practical experience spanning backend engineering, full-stack development, database optimization, and production deployment.
            </p>
            <p>
              I have worked across multiple business domains, including <strong>Human Resource Management (HRM), Payroll, Customer Relationship Management (CRM), Point of Sale (POS), Inventory Management, and ERP systems</strong>. Working with these systems has helped me understand how software connects business operations, financial workflows, employee management, customer relationships, and inventory processes.
            </p>
            <p>
              My engineering approach starts with understanding the underlying business requirements and translating them into reliable application architecture, structured database models, and maintainable code. I enjoy solving problems involving complex business rules, data consistency, role-based access control, multi-branch operations, API integrations, and application performance.
            </p>
          </div>

          {/* Business Domains Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-cyan-400">
                Business Domains Handled
              </h3>
            </div>
            <div className="space-y-3">
              {businessDomains.map((domain, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/70 flex items-start justify-between gap-3"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      {domain.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {domain.desc}
                    </p>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Engineering Focus Grid */}
        <div className="mb-14">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Core Engineering Focus
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Areas of technical ownership and day-to-day architectural responsibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFocusAreas.map((focus, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                      {focus.icon}
                    </div>
                    <h4 className="text-base font-semibold text-white">
                      {focus.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {focus.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ownership & Continuous Learning Philosophy Callout */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 mb-3">
              <span>Continuous Growth &amp; Ownership</span>
            </div>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
              Beyond my core Laravel and PHP stack, I’m expanding my backend engineering knowledge through <strong>Go</strong> and <strong>Java Spring Boot</strong>.
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              I value clear technical decisions, maintainable code, continuous learning, and taking ownership of problems from requirement analysis to production delivery. My goal is to build dependable software that simplifies business operations, handles real-world complexity, and delivers measurable value to the people who use it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
