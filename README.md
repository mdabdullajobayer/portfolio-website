# Abdullah Jobayer — Professional Developer Portfolio

> **Software Developer** | 2+ Years Experience | Dhaka, Bangladesh  
> Primary Stack: **PHP, Laravel, React, Next.js, MySQL, PostgreSQL, REST APIs, Linux & Docker** (Also familiar with **Go** & **Java Spring Boot**)  
> GitHub: [github.com/mdabdullajobayer](https://github.com/mdabdullajobayer)  
> LinkedIn: [linkedin.com/in/mdabdullahjobayer](https://linkedin.com/in/mdabdullahjobayer)

---

## 1. Overview

This is a production-ready, dark, engineering-focused developer portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

The site is designed specifically for:
1. **Job Applications:** Emphasizing backend architecture, domain logic ownership, database design, and real-world software delivery.
2. **Freelancing:** Clear presentation of solved business problems across SaaS, ERP systems, and E-commerce.
3. **Personal Branding & Open Source:** Highlighting verified GitHub repositories, technical engineering notes, and query optimization experience.

---

## 2. Technology Stack & Key Decisions

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript with strict type checking
- **Styling:** Tailwind CSS v4 with dark charcoal/navy engineering palette (`#090d16`)
- **Icons:** Lucide React & accessible custom brand SVGs (GitHub, LinkedIn)
- **Rendering Strategy:** React Server Components (RSC) by default; Client Components restricted strictly to interactive widgets (mobile drawer, category filter, clipboard interaction)
- **SEO & Performance:** Fully static pre-rendering, sitemap.xml, robots.txt, Open Graph meta tags, 0ms layout shift system font stack, accessible ARIA attributes, and keyboard navigation.

---

## 3. Project Structure

```text
├── public/
│   ├── documents/               # Place Abdullah_Jobayer_Resume.pdf here
│   └── images/                  # Project screenshots and assets
├── src/
│   ├── app/
│   │   ├── globals.css          # Theme tokens, custom utilities, dark styling
│   │   ├── layout.tsx           # Root layout, metadata, viewport configuration
│   │   ├── not-found.tsx        # Custom 404 error page
│   │   ├── page.tsx             # Portfolio homepage assembling all sections
│   │   ├── robots.ts            # Dynamic robots.txt route
│   │   ├── sitemap.ts           # Dynamic sitemap.xml route
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx     # Deep-dive project details template
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Responsive header with mobile menu & CV trigger
│   │   │   └── Footer.tsx       # Semantic footer with dynamic copyright & links
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Headline, verified bio, terminal architecture visual
│   │   │   ├── About.tsx        # Engineering pillars and business alignment
│   │   │   ├── Projects.tsx     # Filterable project showcase with cards
│   │   │   ├── Skills.tsx       # Categorized skills without fake progress bars
│   │   │   ├── Experience.tsx   # Chronological career timeline & responsibilities
│   │   │   ├── OpenSource.tsx   # GitHub highlights and engineering notes
│   │   │   └── Contact.tsx      # Contact invitation, copy-to-clipboard, direct mail
│   │   └── ui/
│   │       ├── Badge.tsx        # Technology badges
│   │       ├── Button.tsx       # Accessible button/link component
│   │       ├── Icons.tsx        # Clean SVG brand icons (GitHub, LinkedIn)
│   │       ├── ProjectCard.tsx  # Reusable card with problem/solution breakdown
│   │       └── SectionHeading.tsx # Reusable section title & eyebrow badge
│   ├── data/
│   │   ├── profile.ts           # Developer profile details, bio, links, and flags
│   │   ├── projects.ts          # Project specifications, problems, solutions, architecture
│   │   ├── skills.ts            # Grouped technical competencies (Backend, DB, DevOps, etc.)
│   │   └── experience.ts        # Career timeline items, accomplishments, and tech stack
│   └── lib/
│       └── utils.ts             # Lightweight utility functions
├── package.json
├── tsconfig.json
└── README.md
```

---

## 4. Prerequisites

- **Node.js:** v18.18.0+ or v20+ (tested on Node v26)
- **npm:** v9+ (or pnpm / yarn)

---

## 5. Local Setup & Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Linting
```bash
npm run lint
```

### 4. Run TypeScript Check
```bash
npx tsc --noEmit
```

### 5. Build for Production
```bash
npm run build
```

### 6. Run Production Server Locally
```bash
npm run start
```

---

## 6. How to Update Content (Decoupled Data Architecture)

Content is separated from presentation in `src/data/`:

### A. Updating Profile Details (`src/data/profile.ts`)
- Update email address, bio paragraphs, social URLs, or current location.
- When your official PDF resume is available, place it in `public/documents/Abdullah_Jobayer_Resume.pdf` and set `hasResumeFile: true`.

### B. Adding / Editing Projects (`src/data/projects.ts`)
Each project object includes:
- `slug`: URL slug for `/projects/[slug]`
- `title` & `tagline`: Project name and elevator pitch
- `category`: Filters on the portfolio homepage
- `problem` & `solution`: Clear business problem and engineering solution
- `myContribution`: Your specific role and ownership
- `technologies`: Array of technologies used
- `keyDecisions`: Critical architectural choices
- `architectureDetails`: Multi-point breakdown of patterns (e.g. tenant scoping, FIFO depletion)
- `outcomes`: Quantifiable or verified business impact
- `githubUrl` & `liveUrl`: Links (can be set to `null` for proprietary client code)

### C. Updating Skills (`src/data/skills.ts`)
- Grouped into: *Backend*, *Frontend*, *Databases*, *Architecture*, *DevOps*, and *Performance*.
- Categorized by level: `Primary`, `Experienced`, or `Familiar`.
- No arbitrary skill percentages or progress bars.

### D. Updating Career History (`src/data/experience.ts`)
- Edit company names, dates, responsibilities, accomplishments, and technologies used.

---

## 7. Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)
1. Push this repository to GitHub under your account (`mdabdullajobayer`).
2. Log in to [vercel.com](https://vercel.com) and import the repository.
3. Framework preset: **Next.js**.
4. Build command: `npm run build`.
5. Output directory: default (`.next`).
6. Click **Deploy**.

### Option 2: Deploy to a Linux VPS (Ubuntu / Nginx / PM2)
1. SSH into your VPS:
   ```bash
   ssh user@your-server-ip
   ```
2. Clone repository & install dependencies:
   ```bash
   git clone https://github.com/mdabdullajobayer/portfolio.git
   cd portfolio
   npm install
   npm run build
   ```
3. Run with PM2 process manager:
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start -- -p 3000
   pm2 save
   pm2 startup
   ```
4. Configure Nginx reverse proxy (`/etc/nginx/sites-available/portfolio`):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://127.0.0.1:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
5. Secure with Let's Encrypt SSL:
   ```bash
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

---

## 8. Missing Information Checklist for Abdullah Jobayer

Before deploying live to your custom domain, review and supply:

- [ ] **Official Resume PDF:** Add `Abdullah_Jobayer_Resume.pdf` to `public/documents/` and set `hasResumeFile: true` in `src/data/profile.ts`.
- [ ] **Contact Email:** Verify or update `email` in `src/data/profile.ts`.
- [ ] **Company Names in Experience:** If you wish to specify exact legal employer names, update `company` fields in `src/data/experience.ts`.
- [ ] **Production Domain:** Once you purchase/configure your production domain, update `baseUrl` in `src/app/sitemap.ts` and metadata URLs.
- [ ] **Project Screenshots:** Optional screenshots can be added to `public/images/projects/` and linked to project detail pages.
