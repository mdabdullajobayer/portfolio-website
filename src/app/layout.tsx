import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Abdullah Jobayer | Software Developer",
  description:
    "Software Developer with 2+ years of experience specializing in PHP, Laravel, React, Next.js, relational databases, SaaS architectures, and API engineering.",
  keywords: [
    "Abdullah Jobayer",
    "Software Developer",
    "Laravel Developer",
    "PHP Developer",
    "Next.js Developer",
    "Full Stack Developer Dhaka",
    "SaaS Architecture",
    "REST APIs",
    "PostgreSQL",
    "MySQL",
    "Go",
    "Spring Boot",
    "Java",
  ],
  authors: [{ name: "Abdullah Jobayer", url: "https://github.com/mdabdullajobayer" }],
  creator: "Abdullah Jobayer",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abdullah Jobayer | Software Developer",
    description:
      "Software Developer building robust web applications, business software, APIs, and SaaS solutions with Laravel, PHP, React, and modern web technologies.",
    siteName: "Abdullah Jobayer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Jobayer | Software Developer",
    description:
      "Software Developer focused on building web applications, business software, APIs, and SaaS solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
