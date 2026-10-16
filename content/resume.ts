import type { IconName } from "@/components/Icon";

// Everything on the page comes from this file. It mirrors David Mutch's résumé
// (public/David_Mutch_Resume.pdf), so update both together.

export const profile = {
  name: "David Mutch",
  title: "Senior Software Engineer",
  headline: "React, TypeScript, Node.js, Python, Web Architecture & Cloud",
  location: "Billings, MT",
  phone: "(281) 560-3942",
  phoneHref: "tel:+12815603942",
  email: "davidmutch1989@gmail.com",
  resume: "/David_Mutch_Resume.pdf",
  intro:
    "I build modern, scalable web applications across Insurance, FinTech, and Software Consulting, from frontend architecture and REST APIs to cloud deployment, and I lead the teams that ship them.",
  summary: [
    "Senior Software Engineer with extensive experience in Web Development, Frontend Architecture, Backend Integration, and scalable software solutions across Insurance, FinTech, and Software Consulting environments. Strong background building modern web applications using React, TypeScript, Vue.js, JavaScript, Node.js, and Python, with experience developing REST APIs, data-driven interfaces, and cloud-based solutions.",
    "Experienced in Frontend Performance, responsive design, accessibility, data visualization, application architecture, technical documentation, and maintainable software development. Strong collaborator across engineering, product, UX, and business teams, translating requirements and user feedback into practical technical solutions while maintaining usability, scalability, and performance.",
    "Hands-on experience across AWS, GCP, Docker, Kubernetes, CI/CD, PostgreSQL, MySQL, MongoDB, Redis, GraphQL, and modern development tooling. Recognized for technical ownership, mentoring, collaboration, continuous improvement, adaptability, and leading engineering initiatives from technical design through execution.",
  ],
};

// Quick facts on the hero profile card.
export const quickFacts = [
  { label: "Experience", value: "Building for the web since 2011" },
  { label: "Industries", value: "Insurance, FinTech, Consulting" },
  { label: "Focus", value: "Frontend architecture, APIs, cloud" },
  { label: "Education", value: "B.S. Computer Science, Montana State University" },
];

export const focusAreas = [
  {
    title: "Frontend Architecture",
    icon: "layout",
    body: "Modern web apps in React, TypeScript, and Vue.js, built on reusable patterns with responsive design, accessibility, and frontend performance in mind.",
  },
  {
    title: "Backend & APIs",
    icon: "server",
    body: "REST APIs and GraphQL services in Node.js and Python that connect user-facing applications with backend systems, financial services, and external services.",
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    body: "Cloud-based development and deployment workflows on AWS and GCP with Docker, Kubernetes, and CI/CD.",
  },
  {
    title: "Technical Leadership",
    icon: "users",
    body: "Leading design and architecture discussions, mentoring engineers through code reviews, and turning business requirements into maintainable solutions.",
  },
] as const;

// Chips on the hero profile card.
export const coreStack = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "GraphQL",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
];

export type Role = {
  title: string;
  company: string;
  start: string;
  end: string;
  industry: string;
  bullets: string[];
  stack: string[];
};

// Newest role first.
export const experience: Role[] = [
  {
    title: "Senior Software Engineer",
    company: "Centare",
    start: "07/2020",
    end: "Present",
    industry: "Software Consulting / Technology Services",
    bullets: [
      "Provided technical leadership across software-development initiatives, translating business and product requirements into scalable, maintainable technical solutions.",
      "Led technical design and architecture discussions covering frontend applications, backend services, REST APIs, databases, cloud infrastructure, and deployment workflows.",
      "Designed and developed modern web applications using React, TypeScript, JavaScript, Node.js, and Python.",
      "Established reusable frontend architecture and development patterns supporting maintainability, scalability, usability, and consistent engineering practices.",
      "Collaborated with product managers, UX designers, engineers, and business stakeholders to define requirements and deliver production-ready solutions.",
      "Mentored engineers through code reviews, technical guidance, documentation, troubleshooting, and development best practices.",
      "Designed and integrated REST APIs and GraphQL services connecting frontend applications with backend systems and external services.",
      "Contributed to cloud and DevOps initiatives using AWS, GCP, Docker, Kubernetes, and CI/CD technologies.",
      "Supported automated unit and integration testing while promoting technical documentation, maintainability, and continuous improvement.",
      "Worked on frontend performance, responsive design, accessibility, and application scalability across evolving software products.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Vue.js",
      "JavaScript",
      "Node.js",
      "Python",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "CI/CD",
      "Git",
      "GitHub Actions",
      "Jenkins",
      "Jira",
      "Confluence",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "FastPay",
    start: "08/2016",
    end: "06/2020",
    industry: "FinTech / Financial Services / Payments",
    bullets: [
      "Developed software solutions supporting financial and payment-related business workflows within a FinTech environment.",
      "Designed and implemented web application functionality using JavaScript, React, TypeScript, Node.js, and modern web-development practices.",
      "Built and integrated REST APIs connecting user-facing applications with backend financial services and internal systems.",
      "Worked with relational and NoSQL databases to support application functionality, reporting, and data-driven workflows.",
      "Participated in application architecture and technical-design decisions focused on scalability, maintainability, reliability, and performance.",
      "Collaborated with product managers, engineers, and business stakeholders to translate financial-product requirements into technical solutions.",
      "Implemented unit and integration testing to improve software quality and support reliable application releases.",
      "Participated in code reviews, technical documentation, debugging, production support, and continuous improvement initiatives.",
      "Supported cloud-based development and deployment workflows using Docker, AWS, CI/CD, and Git.",
      "Progressed from Software Engineer to Senior Software Engineer, taking on increasing responsibility for technical design, implementation, and engineering collaboration.",
    ],
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
      "Git",
      "CI/CD",
      "Unit testing",
      "Integration testing",
    ],
  },
  {
    title: "Software Engineer",
    company: "CoverHound",
    start: "08/2011",
    end: "07/2016",
    industry: "Insurance / InsurTech",
    bullets: [
      "Developed and maintained web applications supporting digital insurance workflows and customer-facing experiences.",
      "Built frontend functionality using JavaScript, HTML5, and CSS3 with a focus on usability and responsive web development.",
      "Integrated frontend applications with backend services and REST APIs supporting insurance-related application workflows.",
      "Worked across frontend and backend components to retrieve, process, and display application data.",
      "Participated in software design, development, debugging, testing, code reviews, and production issue resolution.",
      "Collaborated with product and engineering team members to translate business requirements into maintainable software solutions.",
      "Contributed to application performance, scalability, documentation, and continuous improvement of development practices.",
    ],
    stack: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "SQL",
      "Git",
      "Web Development",
      "Backend Integration",
      "Unit Testing",
    ],
  },
];

export const education = {
  school: "Montana State University",
  location: "Bozeman, MT",
  degree: "Bachelor of Science in Computer Science",
  date: "May 2011",
};

export const skillGroups: { name: string; icon: IconName; items: string[] }[] = [
  {
    name: "Languages",
    icon: "code",
    items: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
  },
  {
    name: "Frontend",
    icon: "layout",
    items: [
      "React",
      "Vue.js",
      "Next.js",
      "Redux",
      "Vite",
      "Webpack",
      "Sass",
      "Tailwind CSS",
      "Responsive Design",
      "Accessibility",
      "UI/UX",
    ],
  },
  {
    name: "Backend",
    icon: "server",
    items: ["Node.js", "Express.js", "FastAPI", "Django", "REST APIs", "GraphQL"],
  },
  {
    name: "Databases & Data",
    icon: "database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Data Visualization"],
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins"],
  },
  {
    name: "Architecture & Engineering",
    icon: "layers",
    items: [
      "Frontend Architecture",
      "Backend Development",
      "System Architecture",
      "Frontend Performance",
      "Performance Optimization",
      "Scalability",
      "Unit Testing",
      "Integration Testing",
      "Technical Documentation",
      "Code Review",
      "Maintainability",
    ],
  },
  {
    name: "Leadership & Collaboration",
    icon: "users",
    items: [
      "Technical Leadership",
      "Mentoring",
      "Coaching",
      "Team Collaboration",
      "Project Management",
      "Stakeholder Communication",
      "Product Collaboration",
      "User Feedback",
      "Technical Design",
      "Continuous Improvement",
      "Continuous Learning",
      "Innovation",
      "Ownership",
      "Execution",
    ],
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
