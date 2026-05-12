import { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  name: "Vikas U Rao",
  tagline: "Master of Computer Applications student and Software Engineer.",
  terminalTagline: "Software Engineer | Python, JavaScript, Java",
  about: "I am an MCA student at Bangalore Institute of Technology and a Software Engineer. I specialize in Python, REST API development, backend architectures, automation pipelines, and integrating LLMs for data extraction and anonymization.",
  email: "vikasurao2004@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/Vikas-u-rao",
    linkedin: "https://linkedin.com/in/vikas-u-rao"
  },
  skills: [
    { name: "Python" },
    { name: "JavaScript" },
    { name: "Java" },
    { name: "SQL" },
    { name: "HTML/CSS" },
    { name: "Flask" },
    { name: "FastAPI" },
    { name: "Streamlit" },
    { name: "Gradio" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "Bitbucket" },
    { name: "Jira" },
    { name: "Google Cloud Platform" }
  ],
  projects: [
    {
      id: "pii-anonymization",
      title: "PII Anonymization Gateway",
      shortDescription: "A production-grade gateway to detect and anonymize PII.",
      technicalSummary: "Engineered a gateway to detect and anonymize PII before processing sensitive data with LLMs. Integrated Microsoft Presidio and spaCy NLP. Built a FastAPI backend with Redis-based session management.",
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
      tags: ["backend", "nlp", "llm", "security"],
      liveUrl: "https://huggingface.co/spaces/VikasURao/pii-anonymization-gateway",
      repoUrl: "https://github.com/Vikas-u-rao/pii-anonymization",
      status: "live"
    },
    {
      id: "ai-thumbnail-metadata",
      title: "AI Thumbnail & Metadata Generator",
      shortDescription: "Generates YouTube thumbnails and metadata using AI models.",
      technicalSummary: "Integrates OpenRouter for text generation and Hugging Face for image generation. Features a modular Python architecture with a user-friendly Gradio web interface.",
      visualAssets: {
        screenshots: [],
        thumbnail: ""
      },
      techStack: [
        { name: "Python" },
        { name: "OpenRouter API" },
        { name: "Hugging Face API" },
        { name: "Gradio" }
      ],
      tags: ["ai", "python", "frontend"],
      liveUrl: "https://huggingface.co/spaces/VikasURao/AI-Thumbnail-Metadata-Generator",
      repoUrl: "https://github.com/Vikas-u-rao/ai-thumbnail-meta",
      status: "live"
    },
    {
      id: "amazon-sentiment",
      title: "Amazon Review Sentiment Analyzer",
      shortDescription: "Manifest V3 Chrome extension for client-side sentiment analysis.",
      technicalSummary: "Built a Chrome extension performing fully client-side sentiment analysis of Amazon product reviews. Integrated cached Transformers.js DistilBERT pipeline for responsive UX.",
      visualAssets: {
        screenshots: [],
        thumbnail: ""
      },
      techStack: [
        { name: "JavaScript" },
        { name: "Chrome Extensions API" },
        { name: "ONNX Runtime Web" },
        { name: "Transformers.js" }
      ],
      tags: ["frontend", "ml", "browser-extension"],
      repoUrl: "https://github.com/Vikas-u-rao/sentiment-analysis",
      status: "live"
    }
  ],
  experience: [
    {
      company: "Pranava MedLegal Solutions (India) Pvt. Ltd.",
      role: "Software Intern",
      period: "Aug. 2025 - Dec. 2025",
      bulletPoints: [
        "Developed a Patient Demographics Extractor achieving around 90% accuracy.",
        "Contributing to an internal automation framework for extracting structured data from PDFs.",
        "Developing an evaluation framework and pipeline to automate testing using an LLM-as-a-Judge methodology.",
        "Implemented modules for PDF-to-image conversion, document classification, and case aggregation."
      ],
      techUsed: [
        { name: "Python" },
        { name: "LLMs" },
        { name: "Data Extraction" },
        { name: "Automation" }
      ]
    }
  ]
};

