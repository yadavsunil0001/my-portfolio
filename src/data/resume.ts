// Single source of truth for all portfolio content.
// Edit this file to update the site — components read from here.

export const profile = {
  name: "Sunil Kumar Yadav",
  title: "Fullstack Web Developer",
  yearsOfExperience: "8+",
  tagline:
    "Fullstack engineer with 8+ years building scalable web platforms — from React/Next frontends to Java & Node backends.",
  location: "Bangalore, India",
  email: "yadavsunil00001@gmail.com",
  phone: "+91 9479884913",
  resumeUrl: "/SunilKumarYadav.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/yadav-sk",
    github: "https://github.com/yadav-sk",
  },
};

export const about = {
  summary: [
    "I'm a Fullstack Web Developer with over 8 years of experience designing and shipping production software across networking, e-commerce, travel, and life-sciences domains.",
    "I've worked across the stack — building rich React/Next.js frontends and robust Java, Spring Boot, and Node.js backends — and I enjoy turning complex problems into reliable, user-facing products.",
  ],
};

export type SkillGroup = { label: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      "JavaScript",
      "React.js",
      "Next.js",
      "Redux",
      "RxJS",
      "React Testing Library",
      "gRPC",
      "CSS3",
      "Tailwind",
      "Stylus",
      "HTML5",
    ],
  },
  {
    label: "Backend",
    skills: ["Java", "Node.js", "Spring Boot", "JAX-RS", "Dropwizard", "Express"],
  },
  {
    label: "Database",
    skills: ["PostgreSQL", "MySQL", "Elasticsearch", "MongoDB"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "Docker", "Kubernetes", "Jenkins", "Kibana", "Gerrit", "Figma", "Kafka", "Flink"],
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
    role: "Software Developer",
    company: "Arista Networks",
    period: "Jun 2024 – Present",
    highlights: [
      "Contribute to the CloudVision platform team, focusing on onboarding and monitoring of Arista and third-party switches.",
      "Improved network observability and multi-vendor compatibility by designing scalable solutions for switch lifecycle management.",
    ],
    tech: ["React.js", "Redux", "RxJS", "gRPC", "Jenkins", "Gerrit"],
  },
  {
    role: "Principal Member of Technical Staff",
    company: "Oracle Pvt Ltd",
    period: "Apr 2024 – Jun 2024",
    highlights: [
      "Set up the initial Flink pipeline to streamline the patient registration process.",
    ],
    tech: ["React.js", "Kafka", "Flink", "Spring Boot"],
  },
  {
    role: "Software Developer 2",
    company: "Groupon Pvt Ltd",
    location: "Bangalore",
    period: "Jun 2020 – Dec 2023",
    highlights: [
      "Campaign Editor — designed and implemented features including Pricing Trust, price/quantity updates, fine print, and creative content.",
      "AI Deal Creation — streamlined merchant onboarding by leveraging AI to scrape and retrieve details from merchant websites.",
      "Merchant Advisor — revamped the merchant web interface, positively impacting over 1M users.",
    ],
    tech: ["Next.js", "React.js", "Java", "Spring Boot", "Dropwizard", "Redux", "Node.js", "MySQL", "Docker", "Kubernetes"],
  },
  {
    role: "Senior Software Developer",
    company: "Traveloka India Pvt Ltd",
    period: "Sep 2018 – May 2020",
    highlights: [
      "Engineered a Photoshop-like internal tool for generating dynamic promotional images using React.js and the Canvas library.",
      "Built a robust backend process to recreate images with dynamic variables for final promotional content.",
    ],
    tech: ["React.js", "Java", "Redux", "Spring Boot", "Node.js", "MongoDB", "CSS3"],
  },
  {
    role: "Associate Software Developer",
    company: "Strand Life Sciences",
    period: "Jun 2017 – Sep 2018",
    highlights: [
      "Migrated the India Biodiversity Portal from a legacy Groovy on Grails system to a modern JAX-RS + React.js architecture.",
      "Used Elasticsearch as a secondary data source to enhance retrieval efficiency and speed.",
    ],
    tech: ["JAX-RS", "React.js", "Java", "Redux", "Elasticsearch", "CSS3"],
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
    title: "AI Deal Creation",
    org: "Groupon",
    description:
      "Streamlined the merchant onboarding flow by using AI to scrape and extract business details directly from merchant websites, cutting manual data entry.",
    tech: ["Java", "Dropwizard", "React.js", "Redux", "Node.js", "MySQL"],
  },
  {
    title: "Merchant Advisor",
    org: "Groupon",
    description:
      "Revamped the merchant-facing web interface, improving usability and positively impacting over 1M users.",
    tech: ["React.js", "Java", "Spring Boot", "Redux", "Node.js", "Docker", "Kubernetes"],
  },
  {
    title: "Dynamic Image Generator",
    org: "Traveloka",
    description:
      "A Photoshop-like internal tool that lets users generate dynamic promotional images on an HTML Canvas, with a backend that recreates images using dynamic variables.",
    tech: ["React.js", "Canvas", "Java", "Spring Boot", "Node.js", "MongoDB"],
  },
  {
    title: "India Biodiversity Portal",
    org: "Strand Life Sciences",
    description:
      "Led the migration of a national biodiversity platform from legacy Groovy on Grails to a modern JAX-RS + React architecture, with Elasticsearch-backed search.",
    tech: ["JAX-RS", "React.js", "Java", "Elasticsearch", "Redux"],
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
    degree: "Integrated Post Graduation in Computer Science",
    institute: "IIIT Gwalior",
    period: "Jul 2012 – May 2017",
    detail: "CGPA: 7.56",
  },
];
