import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#492257]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#df9bc7]">
            Career Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-[#cbb8ce] font-normal leading-relaxed">
            Enterprise software systems, automated maintenance workflows, and cloud infrastructure operations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-[#d87fae] before:via-[#4e265c] before:to-transparent">
          {experience.map((exp, idx) => (
            <div
              key={exp.id}
              className="relative pl-12 sm:pl-20 transition-all duration-300"
            >
              {/* Timeline Node Badge */}
              <div
                className={`absolute left-2.5 sm:left-5.5 -translate-x-1/2 top-4 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  exp.isCurrent
                    ? 'bg-[#d87fae] border-[#fce7f3] shadow-[0_0_15px_rgba(216,127,174,0.8)]'
                    : 'bg-[#1e1127] border-[#552c66] text-[#df9bc7]'
                }`}
              >
                {exp.isCurrent ? (
                  <span className="w-2 h-2 rounded-full bg-gray-950 animate-ping" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#df9bc7]" />
                )}
              </div>

              {/* Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                  exp.isCurrent
                    ? 'bg-[#180e22] border-2 border-[#d87fae]/35 shadow-[0_0_30px_rgba(216,127,174,0.12)]'
                    : 'bg-[#140c1b] border border-[#2b1737] hover:border-[#d87fae]/30'
                }`}
              >
                {/* Header Information */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4 pb-4 border-b border-[#281636]">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#d87fae] to-[#b8588f] text-gray-950">
                          Active Role
                        </span>
                      )}
                    </div>
                    <p className="text-base font-semibold text-[#df9bc7] mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-right text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-gray-300 font-medium">
                      <Calendar size={13} className="text-[#e093bb]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 justify-end">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Subsystems / Contributions List */}
                <div className="space-y-4">
                  {exp.systems.map((sys, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-[#1b1025] border border-[#311b3e] hover:border-[#d87fae]/30 transition-all"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="text-sm font-bold text-gray-100 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#e093bb]" />
                          <span>{sys.title}</span>
                        </h4>

                        <span
                          className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                            sys.status.includes('Development')
                              ? 'bg-amber-950/60 text-amber-300 border border-amber-800/40'
                              : 'bg-[#291738] text-[#f4b9d5] border border-[#3d204e]'
                          }`}
                        >
                          {sys.status}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-400 dark:text-[#cbbed0] leading-relaxed">
                        {sys.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-[#23132e] flex items-center justify-between text-[11px] text-gray-500 font-mono">
                  <span>Bizlem Production & Internships</span>
                  <span className="text-[#a0628e]">Verified against official resume</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
