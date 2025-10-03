"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  ExternalLink,
  Code,
  Briefcase,
  User,
  Menu,
  X,
} from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllExperience, setShowAllExperience] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const sectionTransitionClass = (id: string) =>
    activeSection === id
      ? "opacity-100 translate-y-0"
      : "opacity-40 translate-y-4";

  useEffect(() => {
    const sectionIds = ["about", "experience", "skills", "projects", "contact"];
    const root = document.getElementById("scroll-container") || undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0]?.target as HTMLElement | undefined;
        if (top?.id) {
          setActiveSection(top.id);
        }
      },
      { root, threshold: [0.5, 0.75] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Salesforce",
      description:  "Senior Solution Architect - EMEA Practices",
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
      tech: ["Salesforce Platform", "Sales Cloud", "Service Cloud", "Experience Cloud", "Marketing Cloud", "Mulesoft", "Dell Boomi", "Informatica Cloud","Heroku"],
      link: "#",
    },
  ];

  const experience = [
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

  const skillsByCategory: { title: string; items: string[] }[] = [
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
      items: [
        "SQL",
        "PostgreSQL",
        "MongoDB",
        "ETL",
        "Data Modeling",
      ],
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
      items: [
        "Agile",
        "Scrum",
        "Kanban",
        "SAFe",
        "CAPM",
        "Stakeholder Management",
      ],
    },
  ];

  return (
    <div
      id="scroll-container"
      className={`h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory transition-colors duration-300 ${
        darkMode ? "dark bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-lg bg-opacity-80 border-b dark:border-gray-800 border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Manuel Tejeiro Del Río</div>
          <div className="flex items-center gap-3 md:gap-6">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-controls="main-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className={`relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                activeSection === "about" ? "text-blue-600 dark:text-blue-400" : ""
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:transition-all after:duration-300 ${
                activeSection === "about" ? "after:bg-blue-600 dark:after:bg-blue-400" : "after:bg-transparent"
              }`}
            >
              About
            </button>
            <button
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              className={`relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                activeSection === "experience" ? "text-blue-600 dark:text-blue-400" : ""
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:transition-all after:duration-300 ${
                activeSection === "experience" ? "after:bg-blue-600 dark:after:bg-blue-400" : "after:bg-transparent"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
              className={`relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                activeSection === "skills" ? "text-blue-600 dark:text-blue-400" : ""
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:transition-all after:duration-300 ${
                activeSection === "skills" ? "after:bg-blue-600 dark:after:bg-blue-400" : "after:bg-transparent"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className={`relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                activeSection === "projects" ? "text-blue-600 dark:text-blue-400" : ""
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:transition-all after:duration-300 ${
                activeSection === "projects" ? "after:bg-blue-600 dark:after:bg-blue-400" : "after:bg-transparent"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className={`relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                activeSection === "contact" ? "text-blue-600 dark:text-blue-400" : ""
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:transition-all after:duration-300 ${
                activeSection === "contact" ? "after:bg-blue-600 dark:after:bg-blue-400" : "after:bg-transparent"
              }`}
            >
              Contact
            </button>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t dark:border-gray-800 border-gray-200">
            <div id="main-menu" className="px-6 py-3 space-y-2 bg-white/80 dark:bg-black/60 backdrop-blur">
              {[
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                    setMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 rounded-lg px-3 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    activeSection === item.id ? "text-blue-600 dark:text-blue-400" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      

      {/* About Section */}
      <section
        className={`pt-32 pb-20 px-6 snap-start min-h-screen flex items-center transition-all duration-500 ${sectionTransitionClass("about")}`}
        id="about"
      >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 flex items-center gap-3">
              <User className="text-blue-400" />
              About
            </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="flex-1">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Hi, I&apos;m Manuel
              </h1>
              <p className="text-2xl md:text-3xl text-gray-90 dark:text-gray-90 mb-8">
                Salesforce Architect
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/tejeirodelrio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 text-gray-90 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/manueltejeirodelrio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 text-gray-90 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:hola@manueltejeiro.com"
                  className="p-3 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 text-gray-90 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="w-64 h-64 rounded-full overflow-hidden ring-2 ring-blue-400/30">
              <Image
                src="/pic.png"
                alt="Profile photo"
                width={256}
                height={256}
                priority
                className="w-64 h-64 object-cover"
              />
            </div>
          </div>
            <div className="grid md:grid-cols-1 gap-12">
              <div className="space-y-6">
                <p className="text-xl text-gray-90 dark:text-gray-90">
                  With 15+ years of IT experience and 11+ focused in Salesforce,
                  I am passionate about helping customers achieve their vision
                  and goals using the Salesforce platform. As an experienced
                  Architect at Salesforce, I provide platform expertise and best
                  practice guidance on multiple Salesforce clouds and related
                  industry products, as well as strategize key enterprise
                  architecture tenants such as integration and data. I am always
                  eager to learn and update my skills and knowledge, as
                  evidenced by my multiple certifications in enterprise
                  architecture (TOGAF 10), project management (CAPM, PSM I,
                  SAFe), implementation (Salesforce, Azure, AWS), and ITSM
                  (ITIL). I enjoy solving business problems in an efficient and
                  scalable way, mixing different technologies and enhancing
                  customer engagement, service, and marketing automation.
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* Experience Section */}
      <section
        className={`py-20 px-6 snap-start min-h-screen flex items-center transition-all duration-500 ${sectionTransitionClass("experience")}`}
        id="experience"
      >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 flex items-center gap-3">
              <Briefcase className="text-blue-400" />
              Professional Experience
            </h2>
            <div className="space-y-8">
              {(showAllExperience ? experience : experience.slice(0, 3)).map((exp, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-400 pl-6 py-4"
                >
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-blue-400 mb-2 text-lg">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-gray-80 dark:text-gray-40 text-base">{exp.description}</p>
                </div>
              ))}
              {!showAllExperience && experience.length > 3 && (
                <button
                  onClick={() => setShowAllExperience(true)}
                  className="mt-8 px-6 py-3 rounded-lg bg-surface hover:bg-surface-hover border border-surface-border text-surface-foreground transition-all duration-300 hover:shadow-card-lg dark:bg-surface-dark dark:hover:bg-surface-dark-hover dark:border-surface-dark-border dark:text-surface-dark-foreground w-full"
                >
                  Show More Experience
                </button>
              )}
              {showAllExperience && (
                <button
                  onClick={() => setShowAllExperience(false)}
                  className="mt-8 px-6 py-3 rounded-lg bg-surface hover:bg-surface-hover border border-surface-border text-surface-foreground transition-all duration-300 hover:shadow-card-lg dark:bg-surface-dark dark:hover:bg-surface-dark-hover dark:border-surface-dark-border dark:text-surface-dark-foreground w-full"
                >
                  Show Less
                </button>
              )}
            </div>
          </div>
        </section>

        
      {/* Skills Section */}
      <section
        className={`py-20 px-6 snap-start min-h-screen flex items-center transition-all duration-500 ${sectionTransitionClass("skills")}`}
        id="skills"
      >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 flex items-center gap-3">
              <User className="text-blue-400" />
              Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsByCategory.map((cat) => (
                <div
                  key={cat.title}
                  className="rounded-xl p-6 bg-surface hover:bg-surface-hover border border-surface-border text-surface-foreground shadow-card-sm transition-all duration-300 hover:shadow-card-lg hover:scale-105 dark:bg-surface-dark dark:hover:bg-surface-dark-hover dark:border-surface-dark-border dark:text-surface-dark-foreground"
                >
                  <h3 className="text-2xl font-semibold mb-4">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/30 dark:bg-primary/20 dark:text-primary dark:border-primary/30 dark:hover:bg-primary/30 dark:hover:border-primary/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      
      {/* Projects Section */}
      <section
        className={`py-20 px-6 snap-start min-h-screen flex items-center transition-all duration-500 ${sectionTransitionClass("projects")}`}
        id="projects"
      >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 flex items-center gap-3">
              <Code className="text-blue-400" />
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="rounded-xl p-6 bg-surface hover:bg-surface-hover border border-surface-border text-surface-foreground shadow-card-sm transition-all duration-300 hover:shadow-card-lg hover:scale-105 dark:bg-surface-dark dark:hover:bg-surface-dark-hover dark:border-surface-dark-border dark:text-surface-dark-foreground"
                >
                  <h3 className="text-3xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-800 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/30 dark:bg-primary/20 dark:text-primary dark:border-primary/30 dark:hover:bg-primary/30 dark:hover:border-primary/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



      {/* Contact Section */}
      <section
        className={`py-20 pb-32 px-6 snap-start min-h-screen flex items-center transition-all duration-500 ${sectionTransitionClass("contact")}`}
        id="contact"
      >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
              <Mail className="text-blue-400" />
              Contact
            </h2>
            <div className="space-y-6 text-gray-90 dark:text-gray-90">
              <p>
                Feel free to reach out via email:
                {" "}
                <a
                  href="mailto:hola@manueltejeiro.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  hola@manueltejeiro.com
                </a>
              </p>

              <div className="flex gap-4 text-gray-300 dark:text-gray-90">
                <a
                  href="https://github.com/tejeirodelrio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/manueltejeirodelrio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Linkedin size={24} />
                  
                </a>
                <a
                  href="mailto:hola@manueltejeiro.com"
                  className="p-3 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 text-gray-90 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 border-t border-gray-800 py-4 bg-white/80 dark:bg-black/80 backdrop-blur-lg z-40">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p className="text-gray-700 dark:text-gray-400">© 2025 Manuel Tejeiro Del Río. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
