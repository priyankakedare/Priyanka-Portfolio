import React from 'react';
import { User, Cpu, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { aboutCards, approachSteps, highlights } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'User':
        return <User size={22} className="text-[#e093bb]" />;
      case 'Cpu':
        return <Cpu size={22} className="text-[#e093bb]" />;
      case 'Sparkles':
        return <Sparkles size={22} className="text-[#e093bb]" />;
      default:
        return <Sparkles size={22} className="text-[#e093bb]" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#3a1d48]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching screenshot layout */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#df9bc7]">
            Professional Overview
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-[#cbb8ce] font-normal leading-relaxed">
            I am an AI/ML Developer and Data Scientist with an MSc in Data Science and Big Data Analytics,
            currently engineering enterprise AI systems, maintenance workflows, and RAG architectures at Bizlem Private Limited.
          </p>
        </div>

        {/* Three Core Cards: Who I Am, What I Build, What Drives Me */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {aboutCards.map((card) => (
            <div
              key={card.id}
              className="group relative p-7 rounded-2xl transition-all duration-300 bg-[#160d1e] dark:bg-[#160d1e] border border-[#2f1b3b] hover:border-[#d87fae]/50 hover:shadow-[0_0_25px_rgba(216,127,174,0.18)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#231530] border border-[#3f2250] group-hover:border-[#d87fae]/50 transition-colors">
                    {getIcon(card.icon)}
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#8f6189] px-2.5 py-1 rounded-full bg-[#1e1127] border border-[#301a3c]">
                    {card.number}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#d179af]">
                    {card.badge}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                    {card.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 dark:text-[#d3c4d7] leading-relaxed pt-2">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#251532] flex items-center gap-1.5 text-xs text-[#df9bc7] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Verified in Resume</span>
                <CheckCircle2 size={13} />
              </div>
            </div>
          ))}
        </div>

        {/* My Approach Row (Matching screenshot pill design) */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#b583af]">
              My Engineering Approach
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {approachSteps.map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#140c1b]/80 border border-[#291735] hover:border-[#d87fae]/30 transition-all"
              >
                <div className="px-2.5 py-1 rounded-lg bg-[#271536] text-[#f4b9d5] font-mono text-xs font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-200">{item.title}</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Stats Row (matching screenshot stats counter bar) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-gradient-to-r from-[#170e20] via-[#1c1126] to-[#170e20] border border-[#311c3e]">
          {highlights.map((h, idx) => (
            <div
              key={idx}
              className={`text-center py-2 ${
                idx < highlights.length - 1 ? 'sm:border-r border-[#2d1a3a]' : ''
              }`}
            >
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#fce7f3] via-[#e5a8c9] to-[#d87fae] bg-clip-text text-transparent">
                {h.value}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-200 mt-1">
                {h.label}
              </p>
              <p className="text-[11px] text-[#b583af] mt-0.5">{h.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
