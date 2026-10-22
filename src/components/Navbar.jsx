import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-[#0e0914]/85 backdrop-blur-md border-b border-[#2d1b38]/70 py-3 shadow-lg shadow-black/20'
            : 'bg-[#faf5f8]/90 backdrop-blur-md border-b border-[#ebdbe5] py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Monogram Logo (matching reference 'vm' -> 'pk') */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Priyanka Kedare - Return to home"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm tracking-tight transition-all duration-300 ${
                darkMode
                  ? 'bg-gradient-to-br from-[#231730] to-[#120a1a] text-[#f4b9d5] border border-[#d87fae]/30 group-hover:border-[#d87fae] group-hover:shadow-[0_0_15px_rgba(216,127,174,0.35)]'
                  : 'bg-[#faeef4] text-[#b8588f] border border-[#d87fae]/40 group-hover:border-[#b8588f] group-hover:shadow-md'
              }`}
            >
              pk
            </div>
            <span
              className={`font-semibold text-sm tracking-wide hidden sm:inline-block transition-colors ${
                darkMode ? 'text-gray-200 group-hover:text-pink-300' : 'text-gray-800 group-hover:text-pink-600'
              }`}
            >
              Priyanka Kedare
            </span>
          </a>

          {/* Floating Pill Desktop Navigation Bar */}
          <nav
            className={`hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              darkMode
                ? 'bg-[#180f22]/90 border border-[#2e1d3b] text-gray-300 shadow-inner'
                : 'bg-white/90 border border-[#ecdce7] text-gray-700 shadow-sm'
            }`}
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? darkMode
                        ? 'bg-[#2f1b3d] text-[#f8cde2] shadow-sm font-semibold'
                        : 'bg-[#f7eaf2] text-[#a04377] font-semibold'
                      : darkMode
                      ? 'hover:text-pink-300 hover:bg-[#231530]/60 text-gray-300'
                      : 'hover:text-pink-700 hover:bg-pink-50 text-gray-600'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle & "Let's Talk" */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d87fae]/50 ${
                darkMode
                  ? 'bg-[#1e1329] text-pink-300 hover:bg-[#2b1b3b] border border-[#372247]'
                  : 'bg-pink-100 text-pink-700 hover:bg-pink-200 border border-pink-200'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* "Let's Talk" Button (styled exactly like reference) */}
            <button
              onClick={() => handleNavClick('#contact')}
              className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                darkMode
                  ? 'bg-gradient-to-r from-[#d87fae] to-[#b8588f] text-gray-950 hover:brightness-110 shadow-[0_0_16px_rgba(216,127,174,0.3)] hover:shadow-[0_0_22px_rgba(216,127,174,0.5)]'
                  : 'bg-gradient-to-r from-[#b8588f] to-[#994473] text-white hover:brightness-105 shadow-sm'
              }`}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={13} />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                darkMode
                  ? 'text-gray-300 hover:bg-[#20152c]'
                  : 'text-gray-700 hover:bg-pink-100'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden mt-3 p-4 rounded-2xl border shadow-xl transition-all duration-200 ${
              darkMode
                ? 'bg-[#150d1e] border-[#311c3e] text-gray-200'
                : 'bg-white border-pink-200 text-gray-800'
            }`}
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? darkMode
                        ? 'bg-[#2a1738] text-pink-300 font-semibold'
                        : 'bg-pink-100 text-pink-800 font-semibold'
                      : darkMode
                      ? 'hover:bg-[#1f132a] text-gray-300'
                      : 'hover:bg-pink-50 text-gray-700'
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-3 mt-2 border-t border-[#2e1d3b] flex gap-2">
                <button
                  onClick={() => {
                    handleNavClick('#contact');
                  }}
                  className={`w-full py-2.5 rounded-xl text-center text-xs font-semibold ${
                    darkMode
                      ? 'bg-gradient-to-r from-[#d87fae] to-[#b8588f] text-gray-950'
                      : 'bg-[#b8588f] text-white'
                  }`}
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
