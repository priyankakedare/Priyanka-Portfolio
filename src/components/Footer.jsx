import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#291736] bg-[#0c0712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo / Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1e1127] border border-[#d87fae]/40 flex items-center justify-center font-bold text-xs text-[#f4b9d5]">
              pk
            </div>
            <span className="text-sm font-semibold text-gray-200">
              Priyanka Kedare
            </span>
          </div>

          {/* Prompt-mandated tagline */}
          <p className="text-xs text-gray-400 text-center sm:text-left flex items-center gap-1.5 flex-wrap justify-center">
            <span>Designed with curiosity and built with code by Priyanka Kedare.</span>
          </p>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#180e22] text-gray-400 hover:text-[#d87fae] border border-[#2e193b] hover:border-[#d87fae]/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#180e22] text-gray-400 hover:text-[#d87fae] border border-[#2e193b] hover:border-[#d87fae]/50 transition-colors"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-full bg-[#180e22] text-gray-400 hover:text-[#d87fae] border border-[#2e193b] hover:border-[#d87fae]/50 transition-colors"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#20122e] text-[#f4b9d5] hover:bg-[#d87fae] hover:text-gray-950 border border-[#3b1e4f] transition-all ml-2"
              title="Back to Top"
              aria-label="Back to top of page"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1c0f24] text-center text-[11px] text-gray-600">
          <span>&copy; {new Date().getFullYear()} Priyanka Kedare &middot; AI/ML Developer &amp; Data Scientist &middot; All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
