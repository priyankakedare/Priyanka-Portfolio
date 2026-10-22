import React, { useState } from 'react';
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Brain,
  Code2,
  FileText,
  CheckCircle2,
  RefreshCw,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  const avatarStyles = [
    { id: 'anime-recolored', src: '/anime-recolored.jpg', label: 'Reference Anime (Recolored)' },
    { id: 'anime-gen', src: '/anime-girl.jpg', label: 'Anime Illustration' },
    { id: 'realistic', src: '/ai-girl.png', label: 'Realistic AI Girl' },
  ];

  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);

  const cycleAvatar = () => {
    setCurrentAvatarIndex((prev) => (prev + 1) % avatarStyles.length);
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambient Glow Gradients (Dark Plum & Dusty Mauve) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#9b5387]/15 via-[#68335b]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#d87fae]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#3a1d48]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide bg-[#21142c] dark:bg-[#21142c] border border-[#d87fae]/25 text-[#f4b9d5] shadow-sm">
              <Sparkles size={13} className="text-[#e093bb] animate-pulse" />
              <span>Hi, I'm Priyanka Kedare</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.15]">
                AI/ML Developer &{' '}
                <span className="bg-gradient-to-r from-[#d87fae] via-[#e5a8c9] to-[#b8588f] bg-clip-text text-transparent">
                  Data Scientist
                </span>
              </h1>
              <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-[#b8588f] dark:text-[#df9bc7]">
                Generative AI Enthusiast &middot; RAG &middot; Enterprise Systems
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-[#d3c4d7] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              "{personal.shortBio}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              {/* Explore My Projects */}
              <button
                onClick={() => handleScrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#d87fae] to-[#b8588f] text-gray-950 hover:brightness-110 shadow-[0_0_20px_rgba(216,127,174,0.35)] hover:shadow-[0_0_28px_rgba(216,127,174,0.55)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore My Projects</span>
                <ArrowRight size={16} />
              </button>

              {/* Download Resume Button */}
              <a
                href={personal.resumeUrl}
                download={personal.resumeFilename}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-[#1d1226] hover:bg-[#281835] text-[#f2cfe0] border border-[#3e234c] hover:border-[#d87fae]/60 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
                title="Download Priyanka Kedare's Resume PDF"
              >
                <Download size={16} className="text-[#e093bb]" />
                <span>Download Resume</span>
              </a>

              {/* Quick CV Preview Button */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full text-xs font-medium text-gray-400 hover:text-pink-300 transition-colors"
                title="Quick preview resume"
              >
                <FileText size={15} />
                <span>Preview CV</span>
              </button>
            </div>

            {/* Social Icons matching reference */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Connect:</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#1c1125] text-[#f2cfe0] hover:text-[#d87fae] border border-[#331c40] hover:border-[#d87fae]/50 hover:shadow-[0_0_12px_rgba(216,127,174,0.3)] transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#1c1125] text-[#f2cfe0] hover:text-[#d87fae] border border-[#331c40] hover:border-[#d87fae]/50 hover:shadow-[0_0_12px_rgba(216,127,174,0.3)] transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-full bg-[#1c1125] text-[#f2cfe0] hover:text-[#d87fae] border border-[#331c40] hover:border-[#d87fae]/50 hover:shadow-[0_0_12px_rgba(216,127,174,0.3)] transition-all duration-200"
                aria-label="Email Priyanka"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual / Profile Element (matching reference image framing) */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6">
            <div className="relative w-[300px] sm:w-[370px] h-[400px] sm:h-[470px]">
              {/* Outer Glow Halo (Plum and Dusty Pink) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#994473]/35 via-[#b8588f]/25 to-[#693451]/20 rounded-3xl blur-2xl -z-10 animate-pulse-subtle" />

              {/* Decorative Orbital AI Grid / Node Rings */}
              <div className="absolute -top-6 -right-6 w-28 h-28 border border-dashed border-[#d87fae]/30 rounded-full animate-spin [animation-duration:25s] pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 border border-dotted border-[#8f6189]/40 rounded-full animate-spin [animation-duration:35s] pointer-events-none" />

              {/* Main Image Container (Rounded 3XL with subtle plum border & inner shadow) */}
              <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#241331] via-[#160d1f] to-[#0f0716] border-2 border-[#d87fae]/35 hover:border-[#d87fae]/70 shadow-2xl relative group transition-all duration-500">
                <img
                  key={avatarStyles[currentAvatarIndex].src}
                  src={avatarStyles[currentAvatarIndex].src}
                  onError={(e) => {
                    e.target.src = '/profile.jpg';
                  }}
                  alt="Priyanka Kedare — AI/ML Developer & Data Scientist"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-all duration-700"
                />

                {/* Subtle Plum Gradient Overlay at bottom for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0714]/85 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label & Avatar Switcher */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                  <div>
                    <span className="font-semibold text-xs sm:text-sm text-white drop-shadow-md block">
                      Priyanka Kedare
                    </span>
                    <span className="text-[10px] text-pink-300/90 font-mono">
                      {avatarStyles[currentAvatarIndex].label}
                    </span>
                  </div>

                  {/* Switch Avatar Button */}
                  <button
                    onClick={cycleAvatar}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#1a0e23]/90 hover:bg-[#2b173a] text-pink-200 border border-[#d87fae]/40 shadow-md backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95"
                    title="Click to toggle avatar style"
                  >
                    <RefreshCw size={10} className="text-[#e093bb]" />
                    <span>Switch</span>
                  </button>
                </div>
              </div>

              {/* Floating Badge 1: Top Right (9.50 MSc CGPA) - Positioned with high z-index and no clipping */}
              <div className="absolute -top-3.5 -right-3.5 z-20 bg-[#160d20]/95 border border-[#d87fae]/50 backdrop-blur-md px-4 py-1.5 rounded-2xl shadow-xl flex items-center gap-2 transform hover:scale-105 transition-transform">
                <Sparkles size={14} className="text-[#e093bb]" />
                <span className="text-xs font-bold text-[#f5dded] tracking-wide">9.50 MSc CGPA</span>
              </div>

              {/* Floating Badge 2: Bottom Left (Current Role: Bizlem) - Fully visible, no clipping */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-[#160d20]/95 border border-[#d87fae]/50 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 transform hover:scale-105 transition-transform">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Current Role</p>
                  <p className="text-xs font-semibold text-white">AI/ML Developer @ Bizlem</p>
                </div>
              </div>

              {/* Floating Badge 3: Mid-Right (Generative AI & RAG) */}
              <div className="absolute top-1/2 -right-5 -translate-y-1/2 z-20 hidden sm:flex items-center gap-1.5 bg-[#160d20]/95 border border-[#d87fae]/40 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg text-[11px] font-medium text-pink-200 transform hover:scale-105 transition-transform">
                <Brain size={13} className="text-[#e093bb]" />
                <span>RAG & LLMs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
