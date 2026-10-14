export interface ProfileData {
  name: string;
  initials: string;
  title: string;
  experienceYears: string;
  location: string;
  headline: string;
  bio: string[];
  github: string;
  linkedin: string;
  email: string;
  resumeUrl: string;
  hasResumeFile: boolean;
  coreHighlights: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Abdullah Jobayer",
  initials: "AJ",
  title: "Software Developer",
  experienceYears: "2+ Years",
  location: "Dhaka, Bangladesh",
  headline: "Building Software That Solves Real Business Problems.",
  bio: [
    "I’m a Software Developer with 2+ years of professional experience building business applications, ERP systems, RESTful APIs, and SaaS platforms. My primary technology stack includes PHP, Laravel, React, Next.js, and relational databases, with practical experience spanning backend engineering, full-stack development, database optimization, and production deployment.",
    "I have worked across multiple business domains, including Human Resource Management (HRM), Payroll, Customer Relationship Management (CRM), Point of Sale (POS), Inventory Management, and ERP systems. Working with these systems has helped me understand how software connects business operations, financial workflows, employee management, customer relationships, and inventory processes.",
    "My engineering approach starts with understanding the underlying business requirements and translating them into reliable application architecture, structured database models, and maintainable code. I enjoy solving problems involving complex business rules, data consistency, role-based access control, multi-branch operations, API integrations, and application performance.",
    "Beyond my core Laravel and PHP stack, I’m expanding my backend engineering knowledge through Go and Java Spring Boot. I value clear technical decisions, maintainable code, continuous learning, and taking ownership of problems from requirement analysis to production delivery.",
  ],
  github: "https://github.com/mdabdullajobayer",
  linkedin: "https://linkedin.com/in/mdabdullahjobayer",
  email: "abdullahjobayer.dev@gmail.com", // Configurable email address
  resumeUrl: "/documents/Abdullah_Jobayer_Resume.pdf",
  hasResumeFile: false, // Flag indicating whether an actual resume PDF has been dropped in public/documents/
  coreHighlights: [
    {
      label: "Experience",
      value: "2+ Years",
      description: "Building production web applications and APIs",
    },
    {
      label: "Primary Stack",
      value: "Laravel & React",
      description: "Robust PHP backends paired with modern reactive frontends",
    },
    {
      label: "Database Focus",
      value: "MySQL & PostgreSQL",
      description: "Schema design, index strategies & query optimization",
    },
    {
      label: "Deployment",
      value: "Linux & Docker",
      description: "Configured VPS setups, Nginx reverse proxies & CI basics",
    },
  ],
};

