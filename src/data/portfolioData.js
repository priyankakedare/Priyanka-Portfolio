export const portfolioData = {
  personal: {
    name: "Priyanka Kedare",
    title: "AI/ML Developer | Data Scientist | Generative AI Enthusiast",
    shortBio:
      "I build AI-powered applications, machine learning solutions, and data-driven systems to solve real-world problems.",
    location: "Mumbai, India",
    email: "piyakedare12@gmail.com",
    phone: "9096893780",
    linkedin: "https://www.linkedin.com/in/priyanka-kedare-74274b224/",
    github: "https://github.com/priyankakedare",
    resumeUrl: "/Priyanka_Kedare_Resume.pdf",
    resumeFilename: "Priyanka_Kedare_Resume.pdf",
  },

  aboutCards: [
    {
      id: "who-i-am",
      number: "01",
      title: "Who I Am",
      badge: "Background",
      description:
        "I am an AI/ML Developer with an MSc in Data Science and Big Data Analytics from B.K. Birla College. I enjoy developing practical AI applications and data-driven solutions.",
      icon: "User",
    },
    {
      id: "what-i-build",
      number: "02",
      title: "What I Build",
      badge: "Core Focus",
      description:
        "Machine learning applications, Generative AI and RAG systems, data analytics solutions, and enterprise software workflows.",
      icon: "Cpu",
    },
    {
      id: "what-drives-me",
      number: "03",
      title: "What Drives Me",
      badge: "Philosophy",
      description:
        "Solving real-world problems, learning emerging AI technologies, and building reliable and useful software.",
      icon: "Sparkles",
    },
  ],

  approachSteps: [
    {
      step: "01",
      title: "Understand Problem & Data",
      desc: "Deep analysis of business objectives, data quality, exploratory analysis, and architectural requirements.",
    },
    {
      step: "02",
      title: "Architect Scalable AI",
      desc: "Designing robust ML pipelines, RAG semantic retrieval systems, and contextual LLM workflows.",
    },
    {
      step: "03",
      title: "Deploy & Integrate Workflows",
      desc: "Delivering responsive APIs, enterprise frontend interfaces, and containerized cloud services.",
    },
  ],

  highlights: [
    { label: "MSc CGPA", value: "9.50/10", note: "Data Science & Big Data" },
    { label: "Enterprise Systems", value: "3 Modules", note: "Bizlem Private Ltd" },
    { label: "Industry Certifications", value: "5+", note: "AWS, IBM & Hack2Skill" },
  ],

  skillCategories: [
    {
      id: "prog-tools",
      title: "Programming & Tools",
      icon: "Code2",
      skills: [
        "Python",
        "SQL",
        "R",
        "JavaScript",
        "Git",
        "GitHub",
        "VS Code",
        "Jupyter Notebook",
        "Google Colab",
      ],
    },
    {
      id: "aiml-dl",
      title: "AI, ML & Deep Learning",
      icon: "Brain",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "LLMs",
        "RAG",
        "NLP",
        "CNN",
        "LSTM",
        "Transfer Learning",
        "Predictive Modeling",
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "PyTorch",
        "XGBoost",
      ],
    },
    {
      id: "llm-vector",
      title: "LLM Frameworks & Vector Search",
      icon: "Sparkles",
      skills: [
        "LangChain",
        "LangGraph",
        "Prompt Engineering",
        "Embeddings",
        "ChromaDB",
        "FAISS",
        "Sentence Transformers",
      ],
    },
    {
      id: "backend-app",
      title: "Backend & Application Development",
      icon: "Layers",
      skills: ["Flask", "FastAPI", "Streamlit", "REST APIs"],
    },
    {
      id: "db-enterprise",
      title: "Databases & Enterprise Development",
      icon: "Database",
      skills: ["PostgreSQL", "Database Design", "Odoo", "Python Models"],
    },
    {
      id: "cloud-analytics",
      title: "Cloud & Data Analytics",
      icon: "Cloud",
      skills: [
        "AWS EC2",
        "AWS S3",
        "AWS IAM",
        "AWS Lambda",
        "AWS VPC",
        "Pandas",
        "NumPy",
        "Data Preprocessing",
        "Exploratory Data Analysis",
        "Matplotlib",
        "Power BI",
        "Tableau",
      ],
    },
  ],

  projects: [
    {
      id: "rag-news-qa",
      title: "AI-Powered News Summarization & Q&A System",
      badge: "Featured Generative AI & RAG",
      tagline: "Retrieval-Augmented Generation for AI News & Contextual Question Answering",
      description:
        "Built a Retrieval-Augmented Generation (RAG) application that summarizes AI news and answers user queries using relevant document context.",
      keyContributions: [
        "Implemented document processing, text chunking, embeddings, and semantic retrieval to find relevant context for user questions.",
        "Developed context-aware question answering and news summarization using state-of-the-art LLMs.",
        "Created an interactive Streamlit interface for seamless information retrieval and AI-generated responses.",
      ],
      technologies: ["Python", "LLMs", "RAG", "NLP", "Streamlit", "Vector Databases"],
      hasRepo: false,
      hasDemo: false,
      comingSoonNote: "Repository & live deployment showcase coming soon",
    },
    {
      id: "ship-classification",
      title: "Neural Networks Ahoy — Ship Classification System",
      badge: "Deep Learning & Computer Vision",
      tagline: "Maritime Vessel Image Classification with VGG16 Transfer Learning",
      description:
        "Developed a ship image classification application using a VGG16-based convolutional neural network and transfer learning.",
      keyContributions: [
        "Built a deep learning model utilizing pre-trained VGG16 convolutional neural network and transfer learning to identify ship categories from images.",
        "Applied image preprocessing and model evaluation techniques to support maritime monitoring use cases.",
        "Created a Flask web interface enabling users to upload maritime images and receive immediate predicted ship categories.",
      ],
      technologies: ["Python", "CNN", "VGG16", "TensorFlow/Keras", "Flask", "Deep Learning"],
      hasRepo: false,
      hasDemo: false,
      comingSoonNote: "Model weights & web interface demo coming soon",
    },
    {
      id: "whatsapp-analyzer",
      title: "WhatsApp Chat Analyzer",
      badge: "Data Analytics & NLP",
      tagline: "Interactive Chat Activity, Messaging Patterns & Trend Discovery",
      description:
        "Developed an application to analyze WhatsApp chat exports and discover messaging patterns, user activity, and engagement trends.",
      keyContributions: [
        "Processed exported chat data through text parsing pipelines to extract meaningful communication statistics.",
        "Analyzed message frequency, active users, weekly timelines, and interaction dynamics.",
        "Created rich visualizations and interactive dashboards using Matplotlib, Seaborn, and Streamlit.",
      ],
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
      hasRepo: false,
      hasDemo: false,
      comingSoonNote: "Demo application & code walkthrough coming soon",
    },
  ],

  experience: [
    {
      id: "bizlem",
      role: "AI/ML Developer",
      company: "Bizlem Private Limited",
      location: "Navi Mumbai, India",
      period: "April 2026 – Present",
      isCurrent: true,
      systems: [
        {
          title: "Plant Maintenance System",
          status: "In Development & Active",
          description:
            "Developing maintenance workflows for preventive maintenance, work orders, spare parts tracking, and maintenance analytics, with predictive maintenance features involving anomaly detection and equipment monitoring.",
        },
        {
          title: "Master Production Scheduling (MPS) System",
          status: "Active Workflows",
          description:
            "Developing production planning and capacity management features for production orders, resource allocation, and scheduling, including Gantt charts and API integration.",
        },
        {
          title: "Inventory Management System",
          status: "Active Workflows",
          description:
            "Developing inventory workflows for stock tracking, goods receipt (GRN), material movements, location management, and dispatch verification.",
        },
      ],
    },
    {
      id: "magic-bus",
      role: "AWS Cloud Intern",
      company: "Magic Bus Foundation",
      location: "Thane, India",
      period: "September 2024 – December 2024",
      isCurrent: false,
      systems: [
        {
          title: "Cloud Infrastructure & Deployment Automation",
          status: "Completed",
          description:
            "Gained hands-on experience with AWS services (EC2, IAM, CI/CD) to build and manage scalable cloud infrastructure. Improved automation, security, and monitoring of cloud deployments.",
        },
      ],
    },
    {
      id: "smartbridge",
      role: "AI Developer Intern",
      company: "SmartBridge Educational Services Pvt. Ltd.",
      location: "Remote / Hybrid",
      period: "March 2024 – May 2024",
      isCurrent: false,
      systems: [
        {
          title: "Machine Learning & AI Pipeline Engineering",
          status: "Completed (Google-Powered Externship)",
          description:
            "Built and deployed machine learning models using Python frameworks, worked with AI pipelines, and applied software development and documentation practices. Completed Google-powered AI externship.",
        },
      ],
    },
  ],

  education: [
    {
      id: "msc-ds",
      degree: "M.Sc Data Science and Big Data Analytics",
      institution: "B.K. Birla College, Mumbai",
      period: "2023 – 2025",
      score: "CGPA: 9.50/10",
      highlightScore: true,
      description:
        "Specialized in advanced machine learning, big data architectures, deep learning, statistical modeling, and data analytics pipelines.",
    },
    {
      id: "bsc-it",
      degree: "B.Sc Information Technology",
      institution: "B.K. Birla College, Mumbai",
      period: "2020 – 2023",
      score: "CGPA: 8.78/10",
      highlightScore: false,
      description:
        "Comprehensive foundations in computer science, software engineering, algorithms, database systems, and object-oriented programming.",
    },
  ],

  certifications: [
    {
      id: "aws-ccp",
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "October 2024",
      icon: "Cloud",
      category: "Cloud",
    },
    {
      id: "aws-restart",
      name: "AWS re/Start Graduate",
      issuer: "Amazon Web Services (AWS)",
      date: "October 2024",
      icon: "Cloud",
      category: "Cloud",
    },
    {
      id: "ibm-enterprise-ds",
      name: "Enterprise Data Science in Practice",
      issuer: "IBM",
      date: "March 2024",
      icon: "Brain",
      category: "Data Science",
    },
    {
      id: "ibm-enterprise-ai",
      name: "Getting Started with Enterprise-grade AI",
      issuer: "IBM",
      date: "March 2024",
      icon: "Cpu",
      category: "AI",
    },
    {
      id: "hackathon",
      name: "AI for Bharat Hackathon",
      issuer: "Hack2Skill (Certificate of Participation)",
      date: "June 2026",
      icon: "Award",
      category: "Hackathon",
    },
  ],
};
