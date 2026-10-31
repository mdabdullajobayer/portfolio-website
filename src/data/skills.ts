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
    description: "Server-side architecture, domain business logic, and RESTful API development.",
    skills: [
      { name: "PHP", level: "Primary", description: "Modern PHP 8+, object-oriented architecture, design patterns" },
      { name: "Laravel", level: "Primary", description: "Eloquent ORM, Queues, Service Providers, Middlewares, Events" },
      { name: "RESTful APIs", level: "Primary", description: "Resource controllers, API authentication, validation & rate limiting" },
      { name: "Node.js", level: "Familiar", description: "Express utilities and lightweight backend scripting" },
      { name: "Go (Golang)", level: "Familiar", description: "Additional learning: concurrent routines and lightweight services" },
      { name: "Java & Spring Boot", level: "Familiar", description: "Additional learning: OOP backend concepts and RESTful services" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Responsive user interface implementation paired with backend REST services.",
    skills: [
      { name: "React", level: "Primary", description: "Functional components, state hooks, reusable component design" },
      { name: "Next.js", level: "Primary", description: "App Router, Server and Client Components, layout architecture" },
      { name: "JavaScript (ES6+)", level: "Primary", description: "Modern ECMAScript, async/await, DOM APIs" },
      { name: "Tailwind CSS", level: "Experienced", description: "Utility-first responsive styling and component themes" },
      { name: "TypeScript", level: "Experienced", description: "Type safety, interfaces, strict compiler configuration" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Data Modeling",
    description: "Relational schema design, referential integrity, and query optimization.",
    skills: [
      { name: "MySQL", level: "Primary", description: "Relational modeling, foreign keys, transactions, and indexing" },
      { name: "PostgreSQL", level: "Experienced", description: "Relational schemas, constraints, and analytical queries" },
      { name: "SQLite", level: "Experienced", description: "Local development and testing databases" },
      { name: "Query Optimization", level: "Experienced", description: "EXPLAIN plan review, composite indexing, and N+1 query elimination" },
    ],
  },
  {
    id: "architecture",
    title: "Business Domains & Architecture",
    description: "Translating business processes into structured operational software.",
    skills: [
      { name: "Business Systems (HRM, Payroll, CRM, POS)", level: "Experienced", description: "Employee workflows, billing, customer data, and sales operations" },
      { name: "ERP & Inventory Management", level: "Experienced", description: "Procurement, multi-warehouse stock tracking, and audit ledgers" },
      { name: "SaaS & Multi-Tenant Design", level: "Experienced", description: "Tenant isolation, role-based access control (RBAC), and permissions" },
      { name: "Payment & Third-Party APIs", level: "Experienced", description: "Payment gateway webhooks, SMS providers, and external services" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    description: "Server administration, web servers, containerization, and source control.",
    skills: [
      { name: "Git & Version Control", level: "Primary", description: "Collaborative Git workflows, branching, code reviews, and PRs" },
      { name: "Linux Administration", level: "Experienced", description: "Ubuntu VPS environment setup, SSH, service management" },
      { name: "Nginx & Apache", level: "Experienced", description: "Virtual hosts, reverse proxying, SSL/TLS configuration" },
      { name: "Docker", level: "Experienced", description: "Containerizing web applications and databases using Compose" },
    ],
  },
  {
    id: "performance",
    title: "Performance & Reliability",
    description: "Query profiling, caching layers, and asynchronous processing.",
    skills: [
      { name: "Database Indexing Strategies", level: "Experienced", description: "Designing composite indexes for frequent filter and sort clauses" },
      { name: "Application Caching", level: "Experienced", description: "Redis and file caching for configuration and heavy queries" },
      { name: "Background Jobs & Queues", level: "Experienced", description: "Asynchronous queues for emails, report generation, and notifications" },
    ],
  },
];
