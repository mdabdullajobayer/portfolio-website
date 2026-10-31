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
    id: "software-developer-vida",
    role: "Software Developer",
    company: "Vida Technology",
    companyLocation: "Dhaka, Bangladesh",
    period: "February 2025 – Present",
    isCurrent: true,
    employmentType: "Full-time",
    summary:
      "Software development focusing on PHP/Laravel backend engineering, business applications, RESTful APIs, and database design.",
    responsibilities: [
      "Develop and maintain business application features and workflows in PHP and Laravel.",
      "Design relational database schemas and queries in MySQL and PostgreSQL with referential integrity.",
      "Build and integrate RESTful APIs for frontend web applications and external services.",
      "Collaborate on codebase maintenance, feature improvements, and deployment workflows.",
    ],
    accomplishments: [
      "Delivered operational software modules adhering to structured business logic and validation rules.",
      "Optimized complex queries and improved database schema design for business-critical features.",
      "Implemented secure API endpoints and third-party service integrations.",
    ],
    technologies: ["PHP", "Laravel", "React", "Next.js", "MySQL", "PostgreSQL", "REST APIs", "Git"],
  },
  {
    id: "software-developer-code-witchers",
    role: "Software Developer",
    company: "Code Witchers",
    companyLocation: "Dhaka, Bangladesh",
    period: "March 2024 – February 2025",
    isCurrent: false,
    employmentType: "Full-time",
    summary:
      "Backend and full-stack software development for business management systems, ERP modules, and client web applications.",
    responsibilities: [
      "Developed backend controllers, models, and service layer logic using PHP and Laravel.",
      "Implemented database migrations, model relationships, and transactional queries in MySQL.",
      "Built responsive user interface components using React, JavaScript, and Tailwind CSS.",
      "Participated in code reviews, API contract discussions, and system maintenance.",
    ],
    accomplishments: [
      "Contributed to core business logic and modules across HRM, inventory, and management systems.",
      "Built reusable API endpoints and integrated payment and third-party webhook handlers.",
      "Collaborated with cross-functional team members to deliver client projects on schedule.",
    ],
    technologies: ["PHP", "Laravel", "JavaScript", "React", "MySQL", "REST APIs", "Tailwind CSS", "Git"],
  },
];
