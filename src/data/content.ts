export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  icon?: string; // Optional icon path
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

export const bioDescription = `With over 12 years of Salesforce expertise and 16+ years in IT, I specialize in guiding organizations through complex digital transformations as a Senior Salesforce Solution Architect at Salesforce. My focus lies in developing architecture blueprints, providing platform expertise, and delivering best-practice guidance. Collaborating with teams across EMEA, I contribute to creating robust governance models, integrating key enterprise architecture tenants, and leveraging innovative Salesforce features to drive success.
                Passionate about solving business challenges with scalable, efficient solutions, I enable organizations to achieve their vision. My work emphasizes strategic platform governance, automation, and reducing technical debt to support sustainable growth. By combining technical depth with a customer-centric approach, I contribute to enhancing engagement, service delivery, and operational efficiency across industries.`;


export const experience: Experience[] = [
  {
    role: "Senior Salesforce Solution Architect, EMEA Practices",
    company: "Salesforce",
    period: "Mar 2022 - Present",
    description:
      "I have successfully driven digital transformation initiatives for various clients, focusing on Salesforce solutions tailored to their unique challenges. Developed comprehensive roadmaps and architecture blueprints that align with clients' strategic visions. Offered best practice guidance on Education and Nonprofit Cloud as well as Field Service, senhancing solution effectiveness. Innovated with new platform features, ensuring clients remain at the forefront of technology advancements.",
    icon: "/salesforce_logo.jpeg",
  },
  {
    role: "Salesforce Platform Lead & Technical Architect",
    company: "Boehringer Ingelheim",
    period: "Apr 2021 - Mar 2022",
    description:
      "I successfully guided the Salesforce platform as a Technical Architect, achieving notable advancements in governance and automation. Established control measures for access, licenses, and permissions, ensuring compliance and security across the multi-org landscape. Served as a key technical resource, mentoring team members and driving knowledge sharing within the SFDC Center of Excellence. Engaged in solution architecture for new applications, collaborating with enterprise architecture teams to align with business goals.",
    icon: "/boehringer_ingelheim_logo.jpeg",
  },
  {
    role: "Salesforce Platform Architect",
    company: "Coca-Cola Europacific Partners",
    period: "Jan 2018 - Nov 2020",
    description:
      "I successfully transformed the Salesforce platform at Coca-Cola European Partners, achieving remarkable improvements in user satisfaction and system performance. Implemented a streamlined release process that reduced deployment issues by over 30%. Enhanced team collaboration by providing guidance on Salesforce capabilities, fostering a culture of trust. Played a key role in launching an iOS app and e-commerce portal, driving user engagement and satisfaction.",
    icon: "/coca_cola_europacific_partners_logo.jpeg",
  },
  {
    role: "Salesforce Solution Architect",
    company: "Omega CRM",
    period: "Sep 2015 - Dec 2017",
    description:
      "I successfully led transformative Salesforce projects, enhancing client operations and driving growth. Served as Scrum Master for a custom Territory Management engine, ensuring project alignment with client goals. Drove the implementation of Sales Cloud and Service Cloud, resulting in improved client engagement and efficiency. Fostered a culture of knowledge sharing within the team, elevating expertise in integration and data management.",

    icon: "/omega_crm_logo.jpeg",
  }
  ,
  {
    role: "Salesforce Consultant",
    company: "Consultia IT (Axa Assistance)",
    period: "Oct 2014 - Sep 2015",
    description:
      "I effectively managed a Salesforce Service Cloud environment, delivering impactful solutions and driving stakeholder engagement. Prioritized and translated business requirements into actionable deliverables, ensuring timely project completion. Developed integrations with external systems, enhancing overall functionality and user experience. Trained stakeholders on best practices, fostering a culture of continuous improvement and collaboration.",

    icon: "/consultia_it_logo.jpeg",
  },
  {
    role: "Veeva & Salesforce Admin",
    company: "Accenture (Novartis)",
    period: "Mar 2013 - Oct 2014",
    description:
      "I successfully contributed to Novartis's Salesforce implementation as a Veeva & Salesforce Admin at Accenture, achieving significant user engagement and system efficiency. Streamlined the Veeva CRM rollout for multiple European countries, ensuring a smooth transition. Created and optimized data integrations with Oracle, enhancing data flow and reporting capabilities. Developed strong relationships with users, providing training and rapid issue resolution to maximize CRM utilization.",
    icon: "/accenture_logo.jpeg",
  },
  {
    role: "Software Architecture",
    company: "Accenture (FREMAP)",
    period: "Nov 2009 - May 2014",
    description:
      "I successfully transformed the software architecture landscape for Sociedad de Prevención de FREMAP, driving significant operational improvements. Increased user productivity by developing .NET applications for automated data management and document processing. Enhanced system performance by optimizing Active Directory Policies and migrating legacy scripts to PowerShell. Reduced administrative workload through centralized printer management, creating a user-friendly application for printer assignment.",
    icon: "/accenture_logo.jpeg",
  },
];

export const skillsByCategory: SkillCategory[] = [
  {
    title: "Salesforce",
    items: [
      "Salesforce Architecture",
      "Salesforce Solution Architecture",
      "Salesforce Platform",
      "Salesforce Development",
      "Agentforce",
      "Salesforce Data Cloud",
      "Salesforce Industries",
      "Salesforce Service Cloud",
      "Salesforce Field Service",
      "Salesforce Education Cloud",
      "Salesforce Nonprofit Cloud",
      "Salesforce B2B Commerce",
      "Salesforce Marketing Cloud",
      "Salesforce Sales Cloud",
      "Salesforce Experience Cloud",
      "Salesforce CRM Analytics",
      "Heroku"
    ],
  },
  {
    title: "Software Development & Architecture",
    items: [
      "Enterprise Architecture",
      "TOGAF",
      "Data Management",
      "Data Migration",
      "Data Architecture",
      "Cloud Computing",
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "DevOps",
      "CI/CD",
      "IT Integration",
      "Software Development Life Cycle (SDLC)",
      "Application Lifecycle Management",
      "Shell Scripting",
      "Unix Administration",
      ".NET Framework",
      "Windows System Administration",
      "Web Components",
      "Java",
      "C#",
      "SQL",
      "Web Services"
    ],
  },
  {
    title: "Project Management & Consulting",
    items: [
      "Digital Transformation",
      "Consulting",
      "Pre-Sales Technical Consulting",
      "Stakeholder Management",
      "Platform Governance",
      "Roadmap Development",
      "Requirements Prioritization",
      "Technical Leadership",
      "Release Management",
      "Agile Methodologies",
      "Technical Debt Management",
      "End User Training",
    ],
  },
];
