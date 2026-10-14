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
    title: "Multi-Tenant Pharmacy Management SaaS",
    tagline: "Cloud-based SaaS for multi-branch pharmacies with batch tracking, expiry monitoring, and POS billing.",
    category: "Pharmacy Management SaaS",
    problem:
      "Independent pharmacies and multi-outlet dispensaries required a secure, centralized system to track medicine batches, enforce FIFO inventory depletion to avoid selling expired drugs, and manage high-volume counter sales without network lag.",
    solution:
      "Architected a multi-tenant web application featuring tenant isolation, real-time inventory ledger updates, barcode scanning POS, automated expiry alerts, and role-based permissions for cashiers, pharmacists, and managers.",
    myContribution:
      "Led the backend architecture in Laravel and database design in MySQL. Designed the multi-tenant scoping logic, built RESTful endpoints for the POS interface, engineered the batch depletion algorithms, and built responsive administrative views in React.",
    technologies: ["PHP", "Laravel", "MySQL", "React", "REST APIs", "Tailwind CSS", "Linux VPS"],
    keyDecisions: [
      "Implemented automatic global query scoping at the Eloquent model layer to enforce strict tenant isolation across all tables.",
      "Wrapped multi-item point-of-sale checkouts in atomic database transactions to eliminate partial stock deductions during peak retail hours.",
      "Scheduled background queue jobs for nightly medicine expiry re-indexing and automated low-stock alert generation.",
    ],
    outcomes: [
      "Streamlined POS checkout speed with predictable sub-second transaction processing.",
      "Eliminated manual medicine expiry tracking errors through automated threshold monitoring.",
      "Enabled business owners to manage multiple pharmacy outlets under a unified dashboard.",
    ],
    githubUrl: "https://github.com/mdabdullajobayer",
    liveUrl: null, // Proprietary client software; live credentials available upon request for private demo
    isProprietary: true,
    featured: true,
    architectureDetails: [
      {
        title: "Tenant Scoping Pattern",
        description: "Enforces tenant_id isolation across all Eloquent queries via global model scopes, preventing cross-tenant data leakage.",
      },
      {
        title: "Batch Depletion (FIFO)",
        description: "Stock transactions deduct from the earliest expiring batch first, maintaining data integrity in high-frequency sales.",
      },
      {
        title: "Role-Based Access Control",
        description: "Granular permissions restricting POS discounts, stock adjustments, and financial audits by user roles.",
      },
    ],
  },
  {
    slug: "erp-business-management-software",
    title: "ERP & Multi-Warehouse Business Management System",
    tagline: "Integrated ERP core handling multi-warehouse inventory, procurement workflows, and double-entry ledger recording.",
    category: "ERP & Business Management Software",
    problem:
      "Growing distribution businesses faced synchronization errors between procurement, multi-warehouse stock transfers, invoicing, and accounting ledgers, leading to stock discrepancies and delayed monthly reconciliations.",
    solution:
      "Developed a comprehensive business management system connecting requisition workflows, purchase orders, multi-warehouse stock transfers, and automated journal voucher creation for double-entry bookkeeping.",
    myContribution:
      "Designed the relational database schema in MySQL/PostgreSQL with strict foreign key constraints. Implemented the core business logic in Laravel, including approval hierarchies, stock ledger logging, and comprehensive RESTful reporting endpoints.",
    technologies: ["Laravel", "PHP", "MySQL", "PostgreSQL", "React", "REST APIs", "Nginx"],
    keyDecisions: [
      "Designed an immutable transaction ledger pattern: stock and financial balances are never modified directly, but recorded as audit-logged credit/debit entries.",
      "Created transactional transfer locks to ensure items in transit between warehouses cannot be duplicated or sold prematurely.",
      "Utilized eager loading and database aggregation queries to generate balance sheets and ledger reports efficiently.",
    ],
    outcomes: [
      "Unified purchasing, inventory tracking, and invoicing into a single audited workflow.",
      "Prevented ledger discrepancies with automated accounting voucher generation upon order delivery.",
      "Delivered real-time multi-warehouse stock visibility for operational leadership.",
    ],
    githubUrl: "https://github.com/mdabdullajobayer",
    liveUrl: null,
    isProprietary: true,
    featured: true,
    architectureDetails: [
      {
        title: "Immutable Stock Ledger",
        description: "All inventory movements (inward, outward, damage, transfer) write append-only log entries to ensure audit trail accuracy.",
      },
      {
        title: "Multi-Step Approval Workflows",
        description: "Configurable threshold approvals where high-value purchase orders require manager and director authorizations.",
      },
      {
        title: "Optimized Aggregate Reporting",
        description: "Pre-indexed date partitions and optimized SQL views powering responsive financial balance reports.",
      },
    ],
  },
  {
    slug: "ecommerce-order-management-backend",
    title: "Scalable E-Commerce & Order Management Engine",
    tagline: "High-reliability backend for online stores handling order processing, cart management, and payment webhooks.",
    category: "E-commerce Applications",
    problem:
      "Online retail platforms face inventory race conditions during flash promotions, cart abandonment caused by slow API checkouts, and missed order status updates due to unstable external payment webhooks.",
    solution:
      "Engineered an order management and checkout backend with optimistic and pessimistic locking mechanisms, idempotent webhook listeners, cart persistence, and asynchronous notification queues.",
    myContribution:
      "Built the Laravel REST API layer, designed the order state machine (pending, paid, processing, dispatched, cancelled), implemented webhook verification handlers, and deployed the stack onto Linux VPS with Nginx.",
    technologies: ["PHP", "Laravel", "MySQL", "REST APIs", "Docker", "Linux VPS", "Nginx"],
    keyDecisions: [
      "Implemented database row locking (`selectForUpdate`) during checkout finalization to prevent overselling low-inventory SKUs.",
      "Built idempotent webhook handlers using unique transaction hashes to guard against duplicate payment capture callbacks.",
      "Offloaded transactional email receipt generation and SMS notifications to asynchronous background queues.",
    ],
    outcomes: [
      "Zero inventory discrepancies recorded during concurrent customer order placements.",
      "Resilient webhook architecture with automated retry capabilities for flaky external network calls.",
      "Fast API response latency maintained under concurrent shopping traffic.",
    ],
    githubUrl: "https://github.com/mdabdullajobayer",
    liveUrl: null,
    isProprietary: false,
    featured: true,
    architectureDetails: [
      {
        title: "Order State Machine",
        description: "Rigid status progression rules preventing orders from skipping required payment confirmation or fulfillment stages.",
      },
      {
        title: "Idempotent Webhooks",
        description: "Ensures duplicate HTTP callbacks from payment gateways never trigger duplicate database charges or inventory drops.",
      },
      {
        title: "Asynchronous Queue Pipeline",
        description: "Separates real-time HTTP checkout responses from third-party notification delivery services.",
      },
    ],
  },
  {
    slug: "database-query-optimization-initiative",
    title: "Database Performance & Query Optimization Engineering",
    tagline: "Diagnosing bottlenecks, refactoring relational queries, and designing composite indexes for high-volume datasets.",
    category: "Database Performance Optimization",
    problem:
      "As transaction history grew into hundreds of thousands of records, reporting queries and operational search endpoints experienced severe latency spikes, table locking, and occasional database connection timeouts.",
    solution:
      "Conducted systemic slow-query profiling using EXPLAIN analysis, eliminated N+1 ORM query patterns, redesigned indexing strategies, and restructured heavy analytical queries.",
    myContribution:
      "Led the profiling and query refactoring process. Replaced expensive full-table scans with composite indexes, restructured Eloquent relationships to use explicit eager loading, and introduced query result caching for semi-static settings.",
    technologies: ["MySQL", "PostgreSQL", "Laravel", "Database Indexing", "EXPLAIN Analysis"],
    keyDecisions: [
      "Replaced dynamic SQL date functions in `WHERE` clauses with static bounding ranges, allowing MySQL to leverage existing B-tree indexes.",
      "Added composite indexes tailored to match the compound filtering patterns frequently executed by operational staff.",
      "Eliminated nested Eloquent N+1 loops by enforcing strict eager loading in development environments (`Model::preventLazyLoading()`).",
    ],
    outcomes: [
      "Transformed expensive multi-second query execution times down to predictable sub-100ms response intervals.",
      "Significantly reduced database CPU spikes during business-hour reporting generation.",
      "Eliminated query timeouts across primary transactional tables.",
    ],
    githubUrl: "https://github.com/mdabdullajobayer",
    liveUrl: null,
    isProprietary: false,
    featured: false,
    architectureDetails: [
      {
        title: "EXPLAIN Query Analysis",
        description: "Systematic review of execution plans to turn 'type: ALL' table scans into targeted 'type: ref' or 'range' index seeks.",
      },
      {
        title: "Composite Index Ordering",
        description: "Calculated index column ordering following equality-first and range-last principles for high selectivity.",
      },
      {
        title: "N+1 Detection",
        description: "Integrated automated detection preventing unindexed relational loops from reaching production deployments.",
      },
    ],
  },
];

