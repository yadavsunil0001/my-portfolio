// Single source of truth for all portfolio content.
// Edit this file to update the site — components read from here.

export const profile = {
  name: "Sunil Kumar Yadav",
  title: "Frontend-focused Senior Software Engineer",
  yearsOfExperience: "9+",
  tagline:
    "Frontend-focused senior software engineer with 9+ years building responsive, high-performance applications in JavaScript, TypeScript, React.js and Node.js — with full-stack and distributed-systems breadth across Go, gRPC and Kubernetes.",
  location: "Bangalore, India",
  email: "yadavsunil00001@gmail.com",
  phone: "+91 9479884913",
  resumeUrl: "/SunilKumarYadav.pdf",
  availability: "Open to opportunities",
  workModes: ["Remote", "Hybrid", "Onsite"],
  openToRelocate: true,
  socials: {
    linkedin: "https://www.linkedin.com/in/yadav-sk",
    github: "https://github.com/yadavsunil0001",
  },
};

// Recruiter-facing "at a glance" snapshot — the essentials a hiring
// manager wants to scan in seconds.
export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "9+", label: "Years of experience" },
  { value: "5", label: "Companies shipped at" },
  { value: "1M+", label: "Users impacted" },
];

export type SnapshotItem = { label: string; value: string };

export const snapshot: SnapshotItem[] = [
  { label: "Current role", value: "Senior Software Engineer · Arista Networks" },
  { label: "Experience", value: "9+ years · Frontend-focused, full-stack breadth" },
  { label: "Education", value: "Integrated PG (CS), IIIT Gwalior" },
  { label: "Location", value: "Bangalore, India · Open to relocate" },
  { label: "Work mode", value: "Remote · Hybrid · Onsite" },
  { label: "Availability", value: "Open to new opportunities" },
];

export const coreStack: string[] = [
  "React.js",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Redux",
  "RxJS",
  "gRPC",
  "Go",
];

export const about = {
  summary: [
    "I'm a frontend-focused senior software engineer with 9+ years building responsive, high-performance web applications in JavaScript, TypeScript, React.js and Node.js.",
    "I'm strong across the modern web stack — component-driven architecture and design systems, scalable state management with Redux and RxJS, and Node.js/Express services with clean REST and gRPC integration. I care deeply about performance, accessibility, and maintainability.",
    "I also bring full-stack and distributed-systems breadth — Go services, microservices, gRPC, Kubernetes, Docker and Elasticsearch — built while delivering large-scale network and enterprise platforms.",
    "I've shipped user-facing products at scale at Arista Networks, Groupon, and Traveloka, consistently accelerating feature delivery.",
  ],
};

export type SkillGroup = { label: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Go"],
  },
  {
    label: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Redux", "RxJS", "Less", "Canvas API"],
  },
  {
    label: "Backend & Distributed Systems",
    skills: ["Node.js", "Express", "REST APIs", "gRPC", "Microservices", "Elasticsearch"],
  },
  {
    label: "DevOps & Tooling",
    skills: ["Docker", "Kubernetes", "Jenkins (CI/CD)", "Git", "Gerrit"],
  },
  {
    label: "Testing",
    skills: ["Jest", "React Testing Library"],
  },
  {
    label: "Practices",
    skills: [
      "Responsive design",
      "Web performance (Core Web Vitals)",
      "Accessibility (a11y)",
      "Cross-browser",
      "Design systems",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  highlights: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Developer (Frontend)",
    company: "Arista Networks",
    period: "Jun 2024 – Present",
    highlights: [
      "Built real-time network monitoring dashboards in React, Redux and RxJS, rendering live telemetry and device events streamed over gRPC.",
      "Architected scalable state management and a reusable component library with shared design-system patterns, accelerating feature delivery across multiple network-management modules.",
      "Delivered the frontend for CloudVision, an observability and management platform, improving onboarding and monitoring for thousands of Arista and third-party switches.",
      "Optimized rendering of high-volume telemetry streams and built responsive, accessible UI for a data-dense product.",
      "Automated build and deployment with Jenkins CI/CD and Gerrit-driven code review.",
    ],
    tech: ["React.js", "TypeScript", "Redux", "RxJS", "gRPC", "Rush", "Jenkins", "Gerrit"],
  },
  {
    role: "Principal Member of Technical Staff",
    company: "Oracle Pvt Ltd",
    period: "Apr 2024 – Jun 2024",
    highlights: [
      "Built React.js interface enhancements for a patient-registration workflow integrated with a streaming data backend.",
      "Set up a Flink pipeline to streamline the registration process and improve responsiveness.",
    ],
    tech: ["React.js", "JavaScript", "Kafka", "Flink", "Spring Boot"],
  },
  {
    role: "Software Developer 2",
    company: "Groupon Pvt Ltd",
    location: "Bangalore",
    period: "Jun 2020 – Dec 2023",
    highlights: [
      "Revamped the merchant web interface with Next.js and React.js, delivering a responsive, cross-browser experience that positively impacted over 1M users.",
      "Designed and shipped user-facing features — Pricing Trust, Price & Quantity updates, Fine Print and Creative Content — improving merchant experience and conversion.",
      "Improved page-load performance and Core Web Vitals through SSR and code-splitting in Next.js.",
      "Streamlined merchant onboarding with AI-driven scraping and retrieval of website details, reducing manual effort.",
    ],
    tech: ["Next.js", "React.js", "TypeScript", "Redux", "Less", "Java", "Spring Boot"],
  },
  {
    role: "Senior Software Developer",
    company: "Traveloka India Pvt Ltd",
    period: "Sep 2018 – May 2020",
    highlights: [
      "Engineered a Photoshop-like web tool with React.js and the Canvas API, enabling internal users to generate dynamic promotional images and boosting marketing throughput.",
      "Built a Node.js service to recreate images with dynamic variables, streamlining final promotional content generation.",
    ],
    tech: ["React.js", "JavaScript", "Node.js", "Redux", "CSS3", "MongoDB", "Java", "Spring Boot"],
  },
  {
    role: "Associate Software Developer",
    company: "Strand Life Sciences",
    period: "Jun 2017 – Sep 2018",
    highlights: [
      "Rebuilt the India Biodiversity Portal frontend in React.js (migrating from Groovy on Grails), improving performance and user experience.",
      "Built JAX-RS services and integrated Elasticsearch for fast data retrieval and search.",
    ],
    tech: ["React.js", "JavaScript", "Redux", "CSS3", "JAX-RS", "Java", "Elasticsearch"],
  },
];

export type Project = {
  title: string;
  org: string;
  description: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "CloudVision Network Dashboards",
    org: "Arista Networks",
    description:
      "Real-time network monitoring dashboards rendering live telemetry and device events streamed over gRPC, backed by a reusable design-system component library.",
    tech: ["React.js", "TypeScript", "Redux", "RxJS", "gRPC"],
  },
  {
    title: "Merchant Web Platform",
    org: "Groupon",
    description:
      "Revamped the merchant-facing interface with Next.js and SSR, positively impacting over 1M users while improving Core Web Vitals and conversion.",
    tech: ["Next.js", "React.js", "TypeScript", "Redux", "Less"],
  },
  {
    title: "Dynamic Image Generator",
    org: "Traveloka",
    description:
      "A Photoshop-like web tool using React and the Canvas API that lets users generate dynamic promotional images, with a Node.js service that recreates images from dynamic variables.",
    tech: ["React.js", "Canvas API", "Node.js", "Redux", "MongoDB"],
  },
  {
    title: "India Biodiversity Portal",
    org: "Strand Life Sciences",
    description:
      "Rebuilt the frontend of a national biodiversity platform in React (migrating from Groovy on Grails), with JAX-RS services and Elasticsearch-backed search.",
    tech: ["React.js", "JAX-RS", "Java", "Elasticsearch", "Redux"],
  },
];

export type Achievement = { title: string; detail: string };

export const achievements: Achievement[] = [
  {
    title: "Leadership & Ownership Star Award — Groupon",
    detail: "Honored for the 4th quarter of 2022.",
  },
  {
    title: "GeekOn — Groupon",
    detail: "2nd Rank globally (2021) and 4th Rank in APAC (2022).",
  },
  {
    title: "Merchant Hackathon — Groupon",
    detail: "Secured 1st Rank in 2022 and organised the event in 2023.",
  },
  {
    title: "Research Paper — WISCOM Chennai 2016",
    detail: "Presented a research paper at the WISCOM conference.",
  },
];

export const education = [
  {
    degree: "Integrated Post Graduation, Computer Science",
    institute: "IIIT Gwalior",
    period: "2012 – 2017",
    detail: "GPA: 7.56",
  },
  {
    degree: "12th Class",
    institute: "KV Talbehat",
    period: "2011",
    detail: "94%",
  },
];
