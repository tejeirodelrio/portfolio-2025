export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export const projects: Project[] = [
  {
    title: "Salesforce",
    description: "Senior Solution Architect - EMEA Practices",
    tech: ["Field Service", "Nonprofit Cloud", "Education Cloud"],
    link: "#",
  },
  {
    title: "Boehringer Ingelheim",
    description: "Platform Architect",
    tech: ["Veeva CRM", "Service Cloud", "Einstein Analytics", "Salesforce Platform"],
    link: "#",
  },
  {
    title: "Coca-Cola Europacific Partners",
    description: "Platform Architect",
    tech: [
      "Salesforce Platform",
      "Sales Cloud",
      "Service Cloud",
      "Experience Cloud",
      "Marketing Cloud",
      "Mulesoft",
      "Dell Boomi",
      "Informatica Cloud",
      "Heroku",
    ],
    link: "#",
  },
];

export const experience: Experience[] = [
  {
    role: "Senior Salesforce Solution Architect, Field Service & Voice, EMEA Practices",
    company: "Salesforce",
    period: "Aug 2025 - Present",
    description:
      "Digital transformation, roadmaps and architecture, best-practice guidance across Education/Non Profit, integration & data strategy, governance.",
  },
  {
    role: "Senior Salesforce Solution Architect, EMEA Social Impact Practice",
    company: "Salesforce",
    period: "Mar 2022 - Aug 2025",
    description:
      "Built architecture blueprints, provided platform expertise, and guided integration/data and governance for impact-focused customers.",
  },
  {
    role: "Salesforce Platform Lead & Technical Architect",
    company: "Boehringer Ingelheim",
    period: "Apr 2021 - Mar 2022",
    description:
      "Owned platform governance and standards, led platform operations, drove automation and DevOps, and coordinated with partners/stakeholders.",
  },
  {
    role: "Salesforce Platform Architect",
    company: "Coca-Cola Europacific Partners",
    period: "Jan 2018 - Nov 2020",
    description:
      "Ensured scalable multi‑org platform (60k+ users), improved release quality, redefined standards/frameworks, and led key portal/mobile projects.",
  },
  {
    role: "Salesforce Solution Architect",
    company: "Omega CRM",
    period: "Sep 2015 - Dec 2017",
    description:
      "Trusted advisor and Scrum Master; delivered Sales/Service/Analytics implementations, integrations, and pre‑sales solutions for multiple clients.",
  },
  {
    role: "Salesforce Consultant",
    company: "Consultia IT (Axa Assistance)",
    period: "Oct 2014 - Sep 2015",
    description:
      "Owned Service Cloud environment, delivered Communities/Sites features, built integrations, and trained stakeholders.",
  },
  {
    role: "Veeva & Salesforce Admin",
    company: "Accenture (Novartis)",
    period: "Mar 2013 - Oct 2014",
    description:
      "Supported Veeva CRM roll‑out, enhanced CRM (sharing, profiles, Apex/Visualforce), built Oracle integrations, and trained EU users.",
  },
  {
    role: "Software Architecture",
    company: "Accenture (FREMAP)",
    period: "Nov 2009 - May 2014",
    description:
      "Responsible for legacy architecture modernization and new web architecture development. Windows and Linux administration",
  },
];

export const skillsByCategory: SkillCategory[] = [
  {
    title: "Salesforce",
    items: [
      "Sales Cloud",
      "Service Cloud",
      "Experience Cloud",
      "Field Service",
      "Nonprofit Cloud",
      "Education Cloud",
      "Apex",
      "Lightning Web Components (LWC)",
      "Flows",
      "Platform Events",
      "Integration (REST/SOAP/OAuth)",
      "Data Modeling & Security",
      "Identity & Access (SSO/SAML/OIDC)",
    ],
  },
  {
    title: "Development",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Next.js",
      "REST APIs",
      "GraphQL",
      "Testing (Jest)",
      "CI/CD",
    ],
  },
  {
    title: "Database",
    items: ["SQL", "PostgreSQL", "MongoDB", "ETL", "Data Modeling"],
  },
  {
    title: "Cloud",
    items: [
      "Salesforce Platform",
      "AWS",
      "Azure",
      "Heroku",
      "MuleSoft",
      "GitHub Actions",
    ],
  },
  {
    title: "Project Management",
    items: ["Agile", "Scrum", "Kanban", "SAFe", "CAPM", "Stakeholder Management"],
  },
];