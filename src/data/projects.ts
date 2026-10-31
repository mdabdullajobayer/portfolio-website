export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  problem: string;
  solution: string;
  myContribution: string;
  technologies: string[];
  keyDecisions: string[];
  outcomes?: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  isProprietary?: boolean;
  featured: boolean;
  architectureDetails: {
    title: string;
    description: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "pharmacy-management-saas",
    title: "Multi-Tenant Pharmacy Management System",
    tagline: "Web-based pharmacy management system supporting batch tracking, expiry monitoring, and POS billing.",
    category: "Pharmacy Management Software",
    problem:
      "Retail pharmacies and dispensary branches require systematic methods to track batch numbers, enforce FIFO stock depletion to prevent selling expired medicines, and manage counter billing.",
    solution:
      "Developed a web-based business management system featuring tenant scoping, inventory ledger recording, barcode POS checkout, expiry threshold alerts, and role-based access control.",
    myContribution:
      "Developed backend modules in Laravel and relational database schemas in MySQL. Implemented tenant query scoping, RESTful endpoints for the POS interface, batch deduction logic, and administrative UI components in React.",
    technologies: ["PHP", "Laravel", "MySQL", "React", "REST APIs", "Tailwind CSS"],
    keyDecisions: [
      "Applied global query scoping at the Eloquent model layer to enforce tenant isolation across multi-branch tables.",
      "Wrapped multi-item point-of-sale checkouts in database transactions to maintain atomic inventory deduction.",
      "Configured scheduled background tasks for medicine expiry checks and low-stock notification triggers.",
    ],
    outcomes: [
      "Implemented batch-level FIFO inventory deduction rules for prescription and OTC medicines.",
      "Integrated automated expiry threshold alerts for store inventory reviews.",
      "Provided multi-branch data separation under a centralized administrative backend.",
    ],
    githubUrl: null, // Proprietary business software; specific source code is not public
    liveUrl: null,
    isProprietary: true,
    featured: true,
    architectureDetails: [
      {
        title: "Tenant Scoping Pattern",
        description: "Enforces tenant_id isolation across Eloquent queries to separate data across independent pharmacy accounts.",
      },
      {
        title: "Batch Depletion (FIFO)",
        description: "Stock deduction algorithm deducts from earliest-expiring medicine batches first to support inventory accuracy.",
      },
      {
        title: "Role-Based Access Control",
        description: "Granular permissions restricting POS discounts, stock adjustments, and administrative reports by role.",
      },
    ],
  },
  {
    slug: "erp-business-management-software",
    title: "ERP & Multi-Warehouse Business Management System",
    tagline: "Integrated business management system for multi-warehouse inventory, procurement, and ledger recording.",
    category: "ERP & Business Management Systems",
    problem:
      "Distribution businesses face operational friction between purchasing, inter-warehouse transfers, customer invoicing, and accounting records, resulting in stock discrepancies and delayed reconciliations.",
    solution:
      "Built an integrated business software core connecting purchase orders, multi-warehouse stock movements, and journal voucher creation for bookkeeping.",
    myContribution:
      "Designed normalized relational database schemas in MySQL and PostgreSQL with foreign key constraints. Implemented business logic in Laravel for approval steps, stock ledger logging, and RESTful reporting endpoints.",
    technologies: ["PHP", "Laravel", "MySQL", "PostgreSQL", "React", "REST APIs"],
    keyDecisions: [
      "Adopted an audit-logged transaction ledger pattern where inventory movements record explicit credit/debit entries.",
      "Implemented transactional locks for items in transit between warehouses to maintain accurate stock states.",
      "Utilized eager loading and database aggregation queries to generate ledger and inventory balance reports.",
    ],
    outcomes: [
      "Connected procurement, warehouse stock transfers, and invoicing into an audited operational flow.",
      "Automated accounting voucher entry generation when purchase and sales orders are fulfilled.",
      "Enabled operational teams to view consolidated multi-warehouse stock balances.",
    ],
    githubUrl: null, // Proprietary business software
    liveUrl: null,
    isProprietary: true,
    featured: true,
    architectureDetails: [
      {
        title: "Immutable Stock Ledger",
        description: "Inventory movements (receipts, issues, adjustments, transfers) write audit log entries for historical tracking.",
      },
      {
        title: "Multi-Step Approval Workflows",
        description: "Configurable approval levels where purchase orders require designated manager reviews.",
      },
      {
        title: "Aggregate Reporting Queries",
        description: "Indexed date columns and aggregate SQL queries powering financial and stock summary reports.",
      },
    ],
  },
  {
    slug: "ecommerce-order-management-backend",
    title: "E-Commerce & Order Management Backend",
    tagline: "Backend services for online ordering, cart management, and payment gateway webhook processing.",
    category: "SaaS & Web Applications",
    problem:
      "Online order processing requires reliable inventory locking during checkout, resilient webhook handlers for external payment confirmations, and asynchronous notification delivery.",
    solution:
      "Built an order processing backend with database transaction locking, idempotent payment webhook verification, cart persistence, and background queue handling.",
    myContribution:
      "Developed Laravel RESTful API endpoints, implemented order status state transitions, integrated webhook listeners with signature checks, and built database migrations in MySQL.",
    technologies: ["PHP", "Laravel", "MySQL", "REST APIs", "Git"],
    keyDecisions: [
      "Utilized database row locking (`selectForUpdate`) during checkout to maintain inventory integrity during concurrent checkouts.",
      "Implemented idempotent webhook handlers using transaction reference checks to guard against duplicated payment callbacks.",
      "Offloaded transactional email confirmations and SMS alerts to asynchronous background queues.",
    ],
    outcomes: [
      "Implemented transactional checkout flows preventing overselling during order placement.",
      "Built idempotent webhook listeners with signature verification for payment status updates.",
      "Separated real-time checkout responses from background notification processing.",
    ],
    githubUrl: null, // Client business software; specific source code is private
    liveUrl: null,
    isProprietary: true,
    featured: true,
    architectureDetails: [
      {
        title: "Order State Transition Rules",
        description: "Strict status progression preventing orders from skipping required payment confirmation or dispatch stages.",
      },
      {
        title: "Idempotent Webhook Handler",
        description: "Validates payment signatures and tracks processed callback IDs to avoid duplicate order charges.",
      },
      {
        title: "Background Queue Processing",
        description: "Asynchronous task queue handles email receipts and external notifications outside the main HTTP request loop.",
      },
    ],
  },
  {
    slug: "database-query-optimization-initiative",
    title: "Database Performance & Query Optimization",
    tagline: "Profiling slow queries, refactoring Eloquent ORM calls, and designing composite indexes for relational tables.",
    category: "Database Performance & Optimization",
    problem:
      "As database tables grew with operational history, reporting queries and operational search endpoints experienced latency spikes and table locking caused by missing indexes and unoptimized ORM queries.",
    solution:
      "Profiled queries using EXPLAIN execution plans, eliminated N+1 query patterns, refactored dynamic date filters, and added targeted composite indexes.",
    myContribution:
      "Analyzed slow query logs, identified missing indexes on joined foreign keys and timestamp columns, and refactored Eloquent relationships to use explicit eager loading.",
    technologies: ["MySQL", "PostgreSQL", "Laravel", "Database Indexing", "EXPLAIN Analysis"],
    keyDecisions: [
      "Replaced dynamic SQL date functions on indexed columns with static bounding timestamp ranges to enable index seeks.",
      "Added composite indexes matching compound filtering and sorting clauses frequently executed by reporting dashboards.",
      "Enforced explicit eager loading across nested relationships to prevent N+1 query regressions.",
    ],
    outcomes: [
      "Turned full table scans into targeted index seeks on high-frequency operational queries.",
      "Eliminated redundant database queries across dashboard views by eager-loading related models.",
      "Structured composite index strategies aligned with production search and filtering patterns.",
    ],
    githubUrl: null, // Technical optimization work performed across business software projects
    liveUrl: null,
    isProprietary: true,
    featured: false,
    architectureDetails: [
      {
        title: "EXPLAIN Plan Review",
        description: "Evaluated query execution plans to identify unindexed full table scans and refine key utilization.",
      },
      {
        title: "Composite Index Ordering",
        description: "Structured compound index columns to match equality filtering first and range conditions second.",
      },
      {
        title: "Eager Loading Enforcement",
        description: "Audited relational queries to replace per-iteration queries with batched relational joins.",
      },
    ],
  },
];
