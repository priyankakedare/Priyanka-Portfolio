import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#df9bc7]">
            Academic Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Education
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-[#cbb8ce] font-normal leading-relaxed">
            Graduate and undergraduate degrees with continuous academic distinction in Data Science and Information Technology.
          </p>
        </div>

        {/* Two Elegant Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu) => (
            <div
              key={edu.id}
              className={`group p-8 rounded-3xl transition-all duration-300 relative flex flex-col justify-between ${
                edu.highlightScore
                  ? 'bg-gradient-to-br from-[#1a0f23] via-[#150d1e] to-[#120818] border-2 border-[#d87fae]/40 shadow-[0_0_28px_rgba(216,127,174,0.15)] hover:border-[#d87fae]/70'
                  : 'bg-[#140c1b] border border-[#2b1737] hover:border-[#d87fae]/35'
              }`}
            >
              <div>
                {/* Header with Icon and Period */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#231530] border border-[#3f2250] flex items-center justify-center text-[#e093bb] group-hover:scale-105 transition-transform">
                    <GraduationCap size={24} />
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#1d1026] text-gray-300 border border-[#301a3e]">
                    <Calendar size={12} className="text-[#e093bb]" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-[#df9bc7] mt-1 flex items-center gap-1.5">
                    <MapPin size={13} />
                    <span>{edu.institution}</span>
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-400 dark:text-[#cfc0d3] leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* CGPA Score Banner */}
              <div className="pt-6 mt-6 border-t border-[#261533] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-[#e093bb]" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-300">
                    Graduation Standing:
                  </span>
                </div>

                <div
                  className={`px-3.5 py-1.5 rounded-full font-mono text-sm font-bold flex items-center gap-1.5 ${
                    edu.highlightScore
                      ? 'bg-gradient-to-r from-[#d87fae] to-[#b8588f] text-gray-950 shadow-[0_0_15px_rgba(216,127,174,0.4)]'
                      : 'bg-[#22132d] text-[#f4b9d5] border border-[#391e4a]'
                  }`}
                >
                  {edu.highlightScore && <Sparkles size={13} />}
                  <span>{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
