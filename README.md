# Priyanka Kedare — AI/ML Developer & Data Scientist Portfolio

A modern, responsive, and performance-optimized personal portfolio website for **Priyanka Kedare** — AI/ML Developer, Data Scientist, and Generative AI Enthusiast.

Built with **React**, **Vite**, and **Tailwind CSS**, this portfolio recreates a dark plum and charcoal aesthetic with dusty pink and mauve gradients, rounded cards, delicate glow effects, and a working light/dark mode toggle. All professional and educational details strictly reflect Priyanka's verified resume and experience.

---

## ✨ Features & Architecture

### 1. Aesthetic & Design System
- **Dark Plum & Charcoal Base**: Default dark palette featuring rich deep plum tones (`#0d0713`, `#140c1b`, `#180e22`) with subtle mauve highlights.
- **Dusty Pink & Mauve Accents**: Soft blush gradient action buttons (`#d87fae` to `#b8588f`), glowing card borders, and delicate neural-inspired halo glows.
- **Light/Dark Mode Toggle**: Smooth theme switching with local storage persistence. The light theme features an elegant rosy-cream/soft blush surface with deep plum typography.
- **Responsive Layout**: Designed and verified across desktop, tablet, and mobile breakpoints with an accessible floating pill navbar and slide-out mobile drawer.

### 2. Website Sections
- **Hero Section**:
  - Headline: *AI/ML Developer & Data Scientist* | *Generative AI Enthusiast · RAG · Enterprise Systems*
  - Authentic intro: *"I build AI-powered applications, machine learning solutions, and data-driven systems to solve real-world problems."*
  - Dual action buttons: **Explore My Projects** (smooth scroll) and **Download Resume** (downloads official PDF).
  - Quick **Preview CV** in-page modal to view the verified resume instantly.
  - Profile frame with neural network vectors and plug-and-play support for `/public/profile.jpg`.
  - Floating status pills: *Bizlem AI/ML Developer*, *9.50 MSc CGPA*, and *Generative AI & RAG*.
- **About Me**:
  - Three core cards: **Who I Am**, **What I Build**, and **What Drives Me**.
  - **My Approach** strip: *01 Problem & Data Understanding*, *02 Scalable AI Architecture*, *03 Enterprise Integration*.
  - Key verified stats: *9.50/10 MSc CGPA*, *3 Production Modules*, *5+ Certifications*.
- **Technical Skills**:
  - Categorized skill cards matching the reference screenshot's pill-badge layout:
    1. *Programming & Tools* (Python, SQL, R, JavaScript, Git, VS Code, Jupyter, Colab)
    2. *AI, ML & Deep Learning* (ML, DL, Generative AI, LLMs, RAG, NLP, CNN, LSTM, Transfer Learning, Scikit-learn, TensorFlow, Keras, PyTorch, XGBoost)
    3. *LLM Frameworks & Vector Search* (LangChain, LangGraph, Prompt Engineering, Embeddings, ChromaDB, FAISS, Sentence Transformers)
    4. *Backend & Application Development* (Flask, FastAPI, Streamlit, REST APIs)
    5. *Databases & Enterprise Development* (PostgreSQL, Database Design, Odoo, Python Models)
    6. *Cloud & Data Analytics* (AWS EC2, S3, IAM, Lambda, VPC, Pandas, NumPy, EDA, Matplotlib, Power BI, Tableau)
  - Interactive skill search filter for recruiters.
- **Featured Projects**:
  - **Project 1 (Flagship)**: *AI-Powered News Summarization & Q&A System (RAG)*
    - Details: Retrieval-Augmented Generation, chunking, embeddings, semantic retrieval, context-aware responses, Streamlit UI.
  - **Project 2**: *Neural Networks Ahoy — Ship Classification System*
    - Details: VGG16 CNN transfer learning, maritime image preprocessing, Flask web application.
  - **Project 3**: *WhatsApp Chat Analyzer*
    - Details: Chat parsing, messaging patterns, user activity frequency, Streamlit visualizations.
  - Non-clickable **Coming Soon** badges for repositories and live demos per user instructions (no fabricated links).
  - Illustrated architectural workflow pipelines for each project.
- **Professional Experience**:
  - Compact timeline with current role at **Bizlem Private Limited** (April 2026 – Present | Navi Mumbai):
    - *Plant Maintenance System*: Maintenance workflows, spare parts, analytics, and predictive maintenance (anomaly detection & equipment monitoring in development).
    - *Master Production Scheduling (MPS) System*: Production planning, capacity management, Gantt charts, API integration.
    - *Inventory Management System*: Stock tracking, GRN, material movements, location management, dispatch verification.
  - **AWS Cloud Intern** at Magic Bus Foundation (Sept 2024 – Dec 2024).
  - **AI Developer Intern** at SmartBridge Educational Services (March 2024 – May 2024).
- **Education**:
  - **M.Sc Data Science and Big Data Analytics** — B.K. Birla College, Mumbai | **CGPA: 9.50/10** (2023–2025).
  - **B.Sc Information Technology** — B.K. Birla College, Mumbai | **CGPA: 8.78/10** (2020–2023).
- **Certifications**:
  - AWS Certified Cloud Practitioner — AWS (Oct 2024)
  - AWS re/Start Graduate — AWS (Oct 2024)
  - Enterprise Data Science in Practice — IBM (March 2024)
  - Getting Started with Enterprise-grade AI — IBM (March 2024)
  - AI for Bharat Hackathon — Hack2Skill (June 2026)
- **Contact Section**:
  - *"Let's Build Something Intelligent"*
  - Direct links & copy tools: Email (`piyakedare12@gmail.com`), LinkedIn, GitHub.
  - Form validation for Name, Email, and Message.
  - Direct `mailto:` client fallback with pre-populated subject and body, plus informative feedback on serverless/backend integration.
- **Footer**:
  - *"Designed with curiosity and built with code by Priyanka Kedare."*
  - Social media icons and smooth Back-to-Top button.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- npm (v10+ recommended)

### Quick Run
1. Navigate to the project directory:
   ```bash
   cd "C:\Users\Priyanka\.gemini\antigravity\scratch\priyanka-portfolio"
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

```
priyanka-portfolio/
├── public/
│   ├── Priyanka_Kedare_Resume.pdf  # Verified resume source of truth
│   ├── resume.pdf                  # Direct download alias
│   └── profile.jpg                 # (Optional) Drop custom photo here to replace avatar
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Floating pill navigation, logo, theme toggle
│   │   ├── Hero.jsx                # Introduction, call-to-actions, portrait & AI nodes
│   │   ├── About.jsx               # Who I Am, What I Build, What Drives Me, Approach
│   │   ├── Skills.jsx              # Categorized skill pill tags with search filter
│   │   ├── Projects.jsx            # 3 detailed cards with architecture workflows
│   │   ├── Experience.jsx          # Bizlem & Internships timeline
│   │   ├── Education.jsx           # MSc (9.50 CGPA) & BSc cards
│   │   ├── Certifications.jsx      # AWS, IBM, Hack2Skill badges
│   │   ├── Contact.jsx             # Form validation, direct channels, mailto trigger
│   │   ├── Footer.jsx              # Monogram, quote, social links, back-to-top
│   │   └── ResumeModal.jsx         # Embedded PDF preview modal
│   ├── data/
│   │   └── portfolioData.js        # Single source of truth for all content & links
│   ├── App.jsx                     # Root application container & theme state
│   ├── index.css                   # Tailwind styles, custom scrollbar & dark plum theme
│   └── main.jsx                    # React entry point
├── index.html                      # HTML root, Google Fonts (Plus Jakarta Sans & Playfair)
├── tailwind.config.js              # Custom dark plum, dusty pink & mauve palette
├── postcss.config.js               # PostCSS configuration
├── vite.config.js                  # Vite server & build configuration
└── package.json                    # Dependencies & build scripts
```

---

## 🎨 Customization Guide

### 1. Adding Your Real Profile Photo
To display your personal picture in the hero section:
- Place your photo inside `public/profile.jpg`.
- The website will automatically detect it and render it with an elegant filter and glowing halo ring. If no file is provided, it falls back to the minimalist AI neural nodes vector avatar.

### 2. Updating Contact Form Backend (Optional)
Currently, form submissions validate input and launch the user's default email client with pre-filled content. To submit emails directly in the background:
- Use an email API such as [Resend](https://resend.com) or [EmailJS](https://www.emailjs.com).
- Update `handleSubmit` in `src/components/Contact.jsx`.

### 3. Adding Live Project URLs
When your GitHub repositories or live Streamlit/HuggingFace demos are ready:
- Open `src/data/portfolioData.js`.
- Update `hasRepo: true`, `githubUrl: "https://..."`, `hasDemo: true`, and `demoUrl: "https://..."`.
