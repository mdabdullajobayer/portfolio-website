export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyLocation: string;
  period: string;
  isCurrent: boolean;
  employmentType: "Full-time" | "Contract" | "Freelance";
  summary: string;
  responsibilities: string[];
  accomplishments: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "software-developer-current",
    role: "Software Developer",
    company: "Software Engineering & Tech Solutions", // Editable placeholder: replace with your primary employer name
    companyLocation: "Dhaka, Bangladesh",
    period: "2023 - Present",
    isCurrent: true,
    employmentType: "Full-time",
    summary:
      "Core software development focused on building, scaling, and maintaining enterprise web applications, RESTful APIs, and SaaS platforms using PHP, Laravel, and React.",
    responsibilities: [
      "Develop and maintain production business software modules including inventory tracking, billing, and order management.",
      "Design normalized relational database schemas in MySQL and PostgreSQL with strict referential integrity.",
      "Build secure RESTful APIs consumed by React and Next.js frontends and third-party webhook integrations.",
      "Identify application and query performance bottlenecks; optimize slow queries using EXPLAIN plans and composite indexing.",
      "Deploy and maintain web applications on Linux VPS environments utilizing Nginx, Apache, and Docker.",
    ],
    accomplishments: [
      "Engineered multi-tenant scoping logic ensuring isolated customer environments across high-volume operational systems.",
      "Streamlined slow transactional queries, significantly reducing database server load during peak reporting hours.",
      "Implemented resilient payment gateway webhooks with automated idempotency and error logging.",
    ],
    technologies: ["PHP", "Laravel", "React", "Next.js", "MySQL", "PostgreSQL", "REST APIs", "Linux VPS", "Nginx", "Docker"],
  },
  {
    id: "junior-software-developer",
    role: "Junior Web Developer",
    company: "Digital Systems & Web Development", // Editable placeholder: replace with earlier company or freelance practice
    companyLocation: "Dhaka, Bangladesh",
    period: "2022 - 2023",
    isCurrent: false,
    employmentType: "Full-time",
    summary:
      "Assisted in full-stack web application development, custom business websites, database migrations, and responsive user interface implementation.",
    responsibilities: [
      "Implemented backend controllers, Eloquent ORM relationships, and input validation rules in Laravel.",
      "Built responsive, mobile-first frontend interfaces using HTML5, modern CSS/Tailwind, and JavaScript/React.",
      "Created database seeds, migrations, and schema updates for client project deployments.",
      "Collaborated with project managers to translate client specifications into functional software features.",
    ],
    accomplishments: [
      "Delivered multiple commercial client websites and internal management portals on schedule.",
      "Reduced frontend styling inconsistencies by building modular, reusable UI components.",
    ],
    technologies: ["PHP", "Laravel", "JavaScript", "React", "MySQL", "Tailwind CSS", "Git"],
  },
];

