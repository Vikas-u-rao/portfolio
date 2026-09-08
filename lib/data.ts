import { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  name: "Vikas U Rao",
  tagline: "Software developer building backend services, full-stack web applications, automation tools, and AI-enabled systems.",
  terminalTagline: "Software Developer | Python, Java, JavaScript, React, Next.js, FastAPI, PostgreSQL",
  about: "Software developer with hands-on experience building backend services, full-stack web applications, automation tools, and AI-enabled systems. Skilled in Python, Java, JavaScript, React, Next.js, FastAPI, PostgreSQL, cloud infrastructure, and CI/CD, with experience designing, testing, and deploying practical software solutions.",
  email: "vikasurao2004@gmail.com",
  resumeUrl: "/Vikas_U_Rao-Resume.pdf",
  socials: {
    github: "https://github.com/Vikas-u-rao",
    linkedin: "https://linkedin.com/in/vikas-u-rao"
  },
  education: [
    {
      institution: "Bangalore Institute of Technology",
      degree: "Master of Computer Applications",
      period: "Nov. 2025 – Apr 2027",
      location: "Bengaluru, India",
      gpa: "CGPA: 8.2"
    }
  ],
  skills: [
    { name: "Python" },
    { name: "Java" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "SQL" },
    { name: "HTML/CSS" },
    { name: "React" },
    { name: "Next.js" },
    { name: "FastAPI" },
    { name: "Flask" },
    { name: "Streamlit" },
    { name: "Gradio" },
    { name: "spaCy" },
    { name: "Microsoft Presidio" },
    { name: "Redis" },
    { name: "PostgreSQL" },
    { name: "Prisma" },
    { name: "Docker" },
    { name: "Git" },
    { name: "GitHub Actions" },
    { name: "Azure" },
    { name: "Cloudflare R2" },
    { name: "Google Cloud Platform" }
  ],
  skillCategories: [
    {
      category: "Languages",
      items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS"]
    },
    {
      category: "Frameworks & Web",
      items: ["FastAPI", "Next.js", "React", "Express", "Flask", "Streamlit", "Gradio"]
    },
    {
      category: "AI, NLP & Systems",
      items: ["Microsoft Presidio", "spaCy NLP", "LLM Integration", "RAG & Grounding", "Redis", "PostgreSQL", "Prisma"]
    },
    {
      category: "Cloud, DevOps & Tools",
      items: ["Docker", "Azure", "Cloudflare R2", "Google Cloud Platform", "GitHub Actions", "Git", "VS Code"]
    }
  ],
  projects: [
    {
      id: "pii-anonymization",
      title: "PII Anonymization Gateway",
      shortDescription: "A production-grade gateway to detect and anonymize sensitive personal information before sending data to external LLMs.",
      technicalSummary: "Engineered a gateway to detect and anonymize sensitive personal information before sending data to external LLM services, with reversible mappings for restoring anonymized responses. Integrated Microsoft Presidio and spaCy NLP to detect 15+ PII categories (names, emails, payment data, and Indian identifiers such as PAN, Aadhaar, GST, and Passport). Developed a FastAPI backend with Redis-based session management for stateful de-anonymization.",
      visualAssets: {
        screenshots: [],
        thumbnail: ""
      },
      techStack: [
        { name: "Python" },
        { name: "FastAPI" },
        { name: "Microsoft Presidio" },
        { name: "spaCy" },
        { name: "Gradio" },
        { name: "Redis" }
      ],
      tags: ["backend", "nlp", "llm", "security", "data-privacy"],
      liveUrl: "https://huggingface.co/spaces/VikasURao/pii-anonymization-gateway",
      repoUrl: "https://github.com/Vikas-u-rao/pii-anonymization",
      status: "live"
    },
    {
      id: "autonomous-research-agent",
      title: "Autonomous Research Agent",
      shortDescription: "Hybrid local-cloud research agent that decomposes complex questions, performs concurrent searches, and generates grounded reports.",
      technicalSummary: "Built a hybrid local-cloud research agent that decomposes complex questions, performs concurrent web searches, and identifies contradictions across retrieved sources. Designed a 4-stage pipeline for decomposition, research, contradiction detection, and report generation with configurable Fast and Deep execution modes. Integrated Gemini API with Google Search Grounding for source-backed reports with citations.",
      visualAssets: {
        screenshots: [],
        thumbnail: ""
      },
      techStack: [
        { name: "Python" },
        { name: "Streamlit" },
        { name: "Ollama/Groq" },
        { name: "Gemini API" },
        { name: "FastAPI" }
      ],
      tags: ["ai", "agents", "llm", "python"],
      repoUrl: "https://github.com/Vikas-u-rao/AutoResearch-Agent",
      status: "live"
    },
    {
      id: "resume-qr-stamper",
      title: "Resume QR Stamper",
      shortDescription: "Python web application for stamping customizable, scannable QR codes onto resume PDFs without altering original formatting.",
      technicalSummary: "Built a Python + Streamlit application for generating and stamping customizable, scannable QR codes onto existing resume PDFs while preserving the original document layout. Implemented PDF placement visualization with configurable corner positioning, margins, logo embedding, color customization, URL validation, and batch PDF processing.",
      visualAssets: {
        screenshots: [],
        thumbnail: ""
      },
      techStack: [
        { name: "Python" },
        { name: "Streamlit" },
        { name: "PyPDF" },
        { name: "ReportLab" },
        { name: "OpenCV" },
        { name: "QR Code" }
      ],
      tags: ["python", "automation", "pdf", "tools"],
      liveUrl: "https://resumeqrstamper.streamlit.app/",
      repoUrl: "https://github.com/Vikas-u-rao/resume-qr-stamper",
      status: "live"
    },
    {
      id: "mutantfix",
      title: "MutantFix — AI Mutation Testing",
      shortDescription: "AI-powered mutation test improvement tool that generates targeted tests to eliminate test suite blind spots.",
      technicalSummary: "Identifies coverage blind spots in unit test suites using Stryker mutation testing, leverages LLMs to synthesize targeted unit test cases, and automatically validates each generated test by rerunning mutation testing to ensure it provably kills the surviving mutant.",
      visualAssets: {
        screenshots: [],
        thumbnail: ""
      },
      techStack: [
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Stryker" },
        { name: "LLMs" },
        { name: "Testing" }
      ],
      tags: ["ai", "testing", "automation", "typescript"],
      repoUrl: "https://github.com/Vikas-u-rao/mutantfix",
      status: "live"
    }
  ],
  experience: [
    {
      company: "Freelance / Client Projects",
      role: "Freelance Full-Stack Developer",
      period: "Jun 2026 – Aug 2026",
      location: "Remote",
      bulletPoints: [
        "Architected a full inquiry and lead management system for a real estate client using Next.js, Zod, Prisma/Postgres, and Cloudflare Turnstile, with automated email notifications via Resend.",
        "Delivered and maintained Next.js/Prisma real estate websites and Viewora, a two-container Azure-deployed eyewear e-commerce platform (Next.js + Express) with Razorpay payment integration.",
        "Implemented a GitHub Actions CI/CD pipeline with gated deployments and a Cloudflare R2 image delivery architecture to improve deployment reliability and reduce backend load.",
        "Automated product data collection for a Shopify-based client store using Shopify’s public JSON API, eliminating repetitive manual data entry."
      ],
      techUsed: [
        { name: "Next.js" },
        { name: "Express" },
        { name: "Prisma" },
        { name: "PostgreSQL" },
        { name: "Azure" },
        { name: "Cloudflare R2" },
        { name: "GitHub Actions" },
        { name: "Resend" }
      ]
    },
    {
      company: "Pranava MedLegal Solutions (India) Pvt. Ltd.",
      role: "Software Intern",
      period: "Aug 2025 – Dec 2025",
      location: "Bengaluru, India",
      bulletPoints: [
        "Developed a Patient Demographics Extractor achieving around 90% accuracy by identifying and structuring key patient details from unstructured medical text.",
        "Contributed to an internal automation framework for extracting structured data from PDFs and automating medical worksheet processing.",
        "Implemented an evaluation framework and pipeline to automate testing and validation of extraction stages using an LLM-as-a-Judge methodology."
      ],
      techUsed: [
        { name: "Python" },
        { name: "FastAPI" },
        { name: "LLMs" },
        { name: "spaCy" },
        { name: "Data Extraction" },
        { name: "Automation" }
      ]
    }
  ]
};
