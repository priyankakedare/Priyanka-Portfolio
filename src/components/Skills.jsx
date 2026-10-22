import React, { useState } from 'react';
import {
  Code2,
  Brain,
  Sparkles,
  Layers,
  Database,
  Cloud,
  Search,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [filterQuery, setFilterQuery] = useState('');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={20} className="text-[#e093bb]" />;
      case 'Brain':
        return <Brain size={20} className="text-[#e093bb]" />;
      case 'Sparkles':
        return <Sparkles size={20} className="text-[#e093bb]" />;
      case 'Layers':
        return <Layers size={20} className="text-[#e093bb]" />;
      case 'Database':
        return <Database size={20} className="text-[#e093bb]" />;
      case 'Cloud':
        return <Cloud size={20} className="text-[#e093bb]" />;
      default:
        return <Sparkles size={20} className="text-[#e093bb]" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#492257]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#d87fae]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching reference */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#df9bc7]">
            Core Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-[#cbb8ce] font-normal">
            Specialized toolkit spanning generative AI, machine learning pipelines, enterprise backend services, and cloud engineering.
          </p>

          {/* Quick Skill Search / Filter Bar */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search skills (e.g., RAG, Python, LangChain, AWS)..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs rounded-full bg-[#180e22] border border-[#331c41] text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#d87fae] focus:ring-1 focus:ring-[#d87fae]/50 transition-all"
              />
              {filterQuery && (
                <button
                  onClick={() => setFilterQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Skill Groups Grid (Matching reference screenshot card design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const matchesQuery = (skill) =>
              !filterQuery || skill.toLowerCase().includes(filterQuery.toLowerCase());
            const filteredSkills = category.skills.filter(matchesQuery);

            if (filterQuery && filteredSkills.length === 0) {
              return null;
            }

            return (
              <div
                key={category.id}
                className="group p-6 rounded-2xl bg-[#160d1e] dark:bg-[#160d1e] border border-[#2b1736] hover:border-[#d87fae]/40 hover:shadow-[0_0_22px_rgba(216,127,174,0.14)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Title with Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#241432] border border-[#3c1f4e] flex items-center justify-center shrink-0 group-hover:border-[#d87fae]/40 transition-colors">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-100 group-hover:text-pink-200 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[11px] text-[#9b6a97]">
                        {category.skills.length} core technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills Pill Badges (matching screenshot's small pill tags) */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => {
                      const isHighlighted =
                        filterQuery &&
                        skill.toLowerCase().includes(filterQuery.toLowerCase());

                      return (
                        <span
                          key={skill}
                          className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                            isHighlighted
                              ? 'bg-gradient-to-r from-[#d87fae] to-[#b8588f] text-gray-950 font-semibold ring-2 ring-pink-300'
                              : 'bg-[#1f1329] text-[#e5d4e7] border border-[#351e44] hover:bg-[#2b1938] hover:border-[#d87fae]/50 hover:text-white'
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-[#23132e] flex items-center justify-between text-[11px] text-gray-500">
                  <span>Source: Resume & Bizlem</span>
                  <span className="text-[#a0628e] font-mono">100% verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
