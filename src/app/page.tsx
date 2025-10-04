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

import { Experience, projects, experience, skillsByCategory } from "@/data/content";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const sectionTransitionClass = (id: string) =>
    id === "about" || activeSection === id
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
        if (top?.id && top.id !== "about") {
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
              <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8">
                Salesforce Architect
              </p>
              <div className="flex gap-4 opacity-100 relative z-10">
                <a
                  href="https://github.com/tejeirodelrio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/manueltejeirodelrio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:hola@manueltejeiro.com"
                  className="p-3 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300"
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
                <p className="text-xl text-gray-600 dark:text-gray-400">
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
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(showAllExperience ? experience : experience.slice(0, 4)).map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedExperience(exp)}
                    className="group p-6 bg-surface hover:bg-surface-hover border border-surface-border text-surface-foreground transition-all duration-300 hover:shadow-card-lg dark:bg-surface-dark dark:hover:bg-surface-dark-hover dark:border-surface-dark-border dark:text-surface-dark-foreground rounded-xl text-left"
                  >
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:text-blue-500">
                      {exp.company}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">
                      {exp.role}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {exp.period}
                    </p>
                    <div className="mt-4 flex items-center text-blue-500 text-sm font-medium">
                      View Details
                      <ExternalLink size={16} className="ml-1" />
                    </div>
                  </button>
                ))}
              </div>
              {!showAllExperience && experience.length > 4 && (
                <button
                  onClick={() => setShowAllExperience(true)}
                  className="mt-8 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 w-full text-gray-600 dark:text-gray-400"
                >
                  Show More Experience
                </button>
              )}
              {showAllExperience && (
                <button
                  onClick={() => setShowAllExperience(false)}
                  className="mt-8 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 w-full text-gray-600 dark:text-gray-400"
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
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">{cat.title}</h3>
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
                  <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/30 dark:bg-primary/20 dark:text-primary dark:border-primary/30 dark:hover:bg-primary/30 dark:hover:border-primary/40 transition-colors"
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
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
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

              <div className="flex gap-4 opacity-100 relative z-10">
                <a
                  href="https://github.com/tejeirodelrio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/manueltejeirodelrio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:hola@manueltejeiro.com"
                  className="p-3 rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 border-t border-gray-800 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-lg z-40">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p className="text-gray-700 dark:text-gray-400 text-xs">© 2025 Manuel Tejeiro Del Río. All rights reserved.</p>
        </div>
      </footer>
      {/* Experience Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setSelectedExperience(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X size={20} />
            </button>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {selectedExperience.company}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {selectedExperience.role}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                {selectedExperience.period}
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {selectedExperience.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
