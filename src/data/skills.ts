export interface SkillItem {
  name: string;
  level?: "Primary" | "Experienced" | "Familiar";
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Development",
    description: "Core server-side engineering, business logic orchestration, and robust API development.",
    skills: [
      { name: "PHP", level: "Primary", description: "Modern PHP 8+, OOP, design patterns" },
      { name: "Laravel", level: "Primary", description: "Eloquent ORM, Queues, Service Providers, Middlewares, Events" },
      { name: "Node.js", level: "Familiar", description: "Express and lightweight scripting utilities" },
      { name: "Go (Golang)", level: "Familiar", description: "GIN framework, and lightweight REST APIs" },
      { name: "Java & Spring Boot", level: "Familiar", description: "OOP backend architecture, dependency injection, and RESTful web services" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, component-driven user interfaces and modern web applications.",
    skills: [
      { name: "React", level: "Primary", description: "Hooks, state management, reusable component design" },
      { name: "Next.js", level: "Experienced", description: "App Router, Server & Client Components, SEO optimization" },
      { name: "TypeScript", level: "Experienced", description: "Type safety, interfaces, strict configuration" },
      { name: "JavaScript (ES6+)", level: "Primary", description: "Async/await, DOM APIs, modern ECMAScript features" },
      { name: "Tailwind CSS", level: "Primary", description: "Utility-first responsive layouts, tokens & design systems" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description: "Schema design, relational constraints, indexing strategies, and data integrity.",
    skills: [
      { name: "MySQL", level: "Primary", description: "Relational schema modeling, foreign keys, indexing & transactions" },
      { name: "PostgreSQL", level: "Experienced", description: "Advanced queries, indexing, constraints, data types" },
      { name: "SQLite", level: "Experienced", description: "Embedded development and local testing databases" },
      { name: "Query Optimization", level: "Experienced", description: "Analyzing EXPLAIN plans, eliminating N+1 queries, composite indexing" },
    ],
  },
  {
    id: "architecture",
    title: "Architecture & Systems",
    description: "Designing scalable domain architectures for complex business management requirements.",
    skills: [
      { name: "Multi-Tenant Architecture", level: "Experienced", description: "Tenant isolation, database-per-tenant vs shared schema patterns" },
      { name: "ERP & Business Systems", level: "Experienced", description: "Inventory management, ledger entries, invoicing, and auditing" },
      { name: "SaaS Application Design", level: "Experienced", description: "Role-Based Access Control (RBAC), subscription & plan structures" },
      { name: "API Integration", level: "Primary", description: "Payment gateways, SMS services, webhooks, and third-party APIs" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    description: "Server provisioning, web servers, environment hardening, and containerization.",
    skills: [
      { name: "Linux Administration", level: "Experienced", description: "Ubuntu server management, SSH, systemd services, cron jobs" },
      { name: "VPS Deployment", level: "Experienced", description: "Setting up production environments on DigitalOcean/Linode/AWS VPS" },
      { name: "Nginx & Apache", level: "Experienced", description: "Virtual hosts, reverse proxying, SSL/TLS certificates with Let's Encrypt" },
      { name: "Docker", level: "Experienced", description: "Containerizing PHP, Node, and database services via Compose" },
      { name: "Git & Version Control", level: "Primary", description: "Git branching, merge conflict resolution, pull request workflows" },
    ],
  },
  {
    id: "performance",
    title: "Performance & Reliability",
    description: "Application profiling, caching layers, and database throughput improvement.",
    skills: [
      // add monitoring and logging skills using open telemetry, signoz, and laravel pulse telecope etc
      { name: "Monitoring & Logging", level: "Experienced", description: "Implementing observability with OpenTelemetry, Signoz, and Laravel Pulse" },
      { name: "Application Profiling", level: "Experienced", description: "Identifying bottlenecks in code execution and database queries" },
      { name: "Database Indexing", level: "Experienced", description: "Designing optimal indexes for frequent filtering and join queries" },
      { name: "Application Caching", level: "Experienced", description: "Redis/file caching for heavy queries, settings, and session state" },
      { name: "Background Jobs & Queues", level: "Experienced", description: "Offloading intensive tasks like emails, report generation, and data exports" },
    ],
  },
];

