import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Clock,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Workflow,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#612a55]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#df9bc7]">
            Applied Engineering & Research
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-[#cbb8ce] font-normal leading-relaxed">
            Hands-on machine learning architectures, Generative AI & RAG retrieval systems, computer vision classifiers, and conversation analytics.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-10">
          {projects.map((project, index) => {
            const isFlagship = index === 0;

            return (
              <div
                key={project.id}
                className={`relative rounded-3xl overflow-hidden transition-all duration-300 p-6 sm:p-8 lg:p-10 ${
                  isFlagship
                    ? 'bg-gradient-to-br from-[#1c1026] via-[#150d1e] to-[#120919] border-2 border-[#d87fae]/40 shadow-[0_0_35px_rgba(216,127,174,0.18)]'
                    : 'bg-[#150d1d] border border-[#2d193a] hover:border-[#d87fae]/40 hover:shadow-[0_0_25px_rgba(216,127,174,0.12)]'
                }`}
              >
                {/* Top Badge bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-[#281636]">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`text-xs px-3.5 py-1.5 rounded-full font-semibold flex items-center gap-1.5 ${
                        isFlagship
                          ? 'bg-gradient-to-r from-[#d87fae] to-[#b8588f] text-gray-950 shadow-sm'
                          : 'bg-[#261533] text-[#f4b9d5] border border-[#3f2250]'
                      }`}
                    >
                      <Sparkles size={13} />
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      0{index + 1} / 03
                    </span>
                  </div>

                  {/* Non-clickable Coming Soon badges per instructions */}
                  <div className="flex items-center gap-2">
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#1d1126] text-gray-400 border border-[#351e44] cursor-not-allowed select-none"
                      title="Verified repo coming soon"
                    >
                      <Github size={13} />
                      <span>Code: Coming Soon</span>
                    </div>

                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#1d1126] text-gray-400 border border-[#351e44] cursor-not-allowed select-none"
                      title="Live deployment coming soon"
                    >
                      <ExternalLink size={13} />
                      <span>Demo: Coming Soon</span>
                    </div>
                  </div>
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Descriptions and Contributions */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-[#e093bb]">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-[#d3c4d7] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Contributions */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs uppercase tracking-wider font-bold text-[#b583af] flex items-center gap-2">
                        <Workflow size={14} />
                        <span>Key Implementation Details</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {project.keyContributions.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-[#cfc0d3] leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d87fae] mt-2 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-3">
                      <h4 className="text-xs uppercase tracking-wider font-bold text-[#8f6189] mb-2.5">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-lg font-medium bg-[#21142c] text-[#f2cfe0] border border-[#39214a]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Architecture Preview */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl p-5 bg-[#120a18] border border-[#2b1738] shadow-inner relative overflow-hidden space-y-4">
                      <div className="flex items-center justify-between text-xs pb-3 border-b border-[#23132e]">
                        <span className="font-mono text-[#df9bc7] font-semibold">
                          Architecture Workflow
                        </span>
                        <span className="text-[11px] text-gray-500 font-mono">
                          {isFlagship ? 'RAG Engine' : index === 1 ? 'VGG16 Transfer' : 'Chat Pipeline'}
                        </span>
                      </div>

                      {/* Schematic Visual Flow */}
                      {index === 0 && (
                        <div className="space-y-2.5 py-1 text-xs font-mono">
                          <div className="p-2.5 rounded-lg bg-[#1c1024] border border-[#331c40] flex items-center justify-between">
                            <span className="text-gray-300">1. AI News Ingestion</span>
                            <span className="text-[11px] text-pink-300 font-sans px-2 py-0.5 rounded bg-[#2c173c]">Document Preprocessing</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#1c1024] border border-[#331c40] flex items-center justify-between">
                            <span className="text-gray-300">2. Text Chunking & Embeddings</span>
                            <span className="text-[11px] text-pink-300 font-sans px-2 py-0.5 rounded bg-[#2c173c]">Vector Database</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#1c1024] border border-[#331c40] flex items-center justify-between">
                            <span className="text-gray-300">3. Semantic Query Retrieval</span>
                            <span className="text-[11px] text-pink-300 font-sans px-2 py-0.5 rounded bg-[#2c173c]">Top-K Context</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-gradient-to-r from-[#291638] to-[#1f112b] border border-[#d87fae]/40 flex items-center justify-between text-white font-semibold">
                            <span>4. LLM Context-Aware Response</span>
                            <span className="text-[11px] text-[#f4b9d5] font-sans px-2 py-0.5 rounded bg-[#3c1e50]">Streamlit UI</span>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="space-y-2.5 py-1 text-xs font-mono">
                          <div className="p-2.5 rounded-lg bg-[#1c1024] border border-[#331c40] flex items-center justify-between">
                            <span className="text-gray-300">1. Maritime Vessel Input</span>
                            <span className="text-[11px] text-pink-300 font-sans px-2 py-0.5 rounded bg-[#2c173c]">Flask Upload</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#1c1024] border border-[#331c40] flex items-center justify-between">
                            <span className="text-gray-300">2. Preprocessing & Normalization</span>
                            <span className="text-[11px] text-pink-300 font-sans px-2 py-0.5 rounded bg-[#2c173c]">NumPy / Keras</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#1c1024] border border-[#331c40] flex items-center justify-between">
                            <span className="text-gray-300">3. Pre-trained VGG16 CNN</span>
                            <span className="text-[11px] text-pink-300 font-sans px-2 py-0.5 rounded bg-[#2c173c]">Transfer Learning</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-gradient-to-r from-[#291638] to-[#1f112b] border border-[#d87fae]/40 flex items-center justify-between text-white font-semibold">
                            <span>4. Category Prediction Output</span>
                            <span className="text-[11px] text-[#f4b9d5] font-sans px-2 py-0.5 rounded bg-[#3c1e50]">Web Results</span>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="space-y-2.5 py-1 text-xs font-mono">
                          <div className="p-2.5 rounded-lg bg-[#1c1024] border border-[#331c40] flex items-center justify-between">
                            <span className="text-gray-300">1. WhatsApp Raw Chat Export</span>
                            <span className="text-[11px] text-pink-300 font-sans px-2 py-0.5 rounded bg-[#2c173c]">Regex Parser</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#1c1024] border border-[#331c40] flex items-center justify-between">
                            <span className="text-gray-300">2. Pattern & Activity Extraction</span>
                            <span className="text-[11px] text-pink-300 font-sans px-2 py-0.5 rounded bg-[#2c173c]">Pandas Timelines</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#1c1024] border border-[#331c40] flex items-center justify-between">
                            <span className="text-gray-300">3. Visualization Engine</span>
                            <span className="text-[11px] text-pink-300 font-sans px-2 py-0.5 rounded bg-[#2c173c]">Matplotlib / Seaborn</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-gradient-to-r from-[#291638] to-[#1f112b] border border-[#d87fae]/40 flex items-center justify-between text-white font-semibold">
                            <span>4. Engagement Dashboard</span>
                            <span className="text-[11px] text-[#f4b9d5] font-sans px-2 py-0.5 rounded bg-[#3c1e50]">Streamlit UI</span>
                          </div>
                        </div>
                      )}

                      <div className="pt-2 flex items-center justify-between text-[11px] text-gray-500 border-t border-[#23132e]">
                        <span className="flex items-center gap-1 text-[#d87fae]">
                          <CheckCircle2 size={12} />
                          Verified Project in Resume
                        </span>
                        <span>{project.technologies[0]} Stack</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
