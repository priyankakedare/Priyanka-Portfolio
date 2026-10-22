import React from 'react';
import { Award, Cloud, Brain, Cpu, CheckCircle2, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud size={20} className="text-[#e093bb]" />;
      case 'Brain':
        return <Brain size={20} className="text-[#e093bb]" />;
      case 'Cpu':
        return <Cpu size={20} className="text-[#e093bb]" />;
      case 'Award':
      default:
        return <Award size={20} className="text-[#e093bb]" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#492257]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#df9bc7]">
            Professional Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Certifications & Training
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-[#cbb8ce] font-normal leading-relaxed">
            Verified technical credentials across cloud architectures, enterprise data science, and national AI challenges.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group p-6 rounded-2xl bg-[#150d1e] dark:bg-[#150d1e] border border-[#2b1737] hover:border-[#d87fae]/40 hover:shadow-[0_0_22px_rgba(216,127,174,0.14)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Category Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#241331] border border-[#3b1f4c] flex items-center justify-center group-hover:border-[#d87fae]/50 transition-colors">
                    {getCertIcon(cert.icon)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#1e1127] text-[#d87fae] border border-[#321a3e]">
                    {cert.category}
                  </span>
                </div>

                {/* Certificate Name & Issuer */}
                <h3 className="text-base font-bold text-gray-100 group-hover:text-pink-200 transition-colors leading-snug">
                  {cert.name}
                </h3>
                <p className="text-xs font-semibold text-[#df9bc7] mt-1.5">
                  {cert.issuer}
                </p>
              </div>

              {/* Date & Verified Badge */}
              <div className="pt-4 mt-5 border-t border-[#23132e] flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Calendar size={12} className="text-[#e093bb]" />
                  {cert.date}
                </span>

                <span className="inline-flex items-center gap-1 text-[11px] text-[#f4b9d5] font-medium">
                  <CheckCircle2 size={12} className="text-[#e093bb]" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
