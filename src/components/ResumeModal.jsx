import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
    >
      <div
        className="w-full max-w-4xl h-[88vh] rounded-3xl bg-[#140c1b] border border-[#3b1e4f] shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2a1738] bg-[#1a0f23]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#281537] border border-[#402052] flex items-center justify-center text-[#e093bb]">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-100 flex items-center gap-2">
                <span>Priyanka Kedare — Official Resume</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#291738] text-pink-300">
                  PDF
                </span>
              </h3>
              <p className="text-xs text-gray-400">
                MSc Data Science (9.50 CGPA) &middot; AI/ML Developer @ Bizlem
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.resumeUrl}
              download={personal.resumeFilename}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#d87fae] to-[#b8588f] text-gray-950 hover:brightness-110 shadow-sm transition-all"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#231530] text-gray-300 hover:text-pink-300 border border-[#371f45] transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink size={16} />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#231530] text-gray-400 hover:text-white border border-[#371f45] transition-colors ml-1"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body / Embedded PDF */}
        <div className="flex-1 w-full bg-[#0d0712] relative overflow-hidden">
          <iframe
            src={`${personal.resumeUrl}#toolbar=1&navpanes=0`}
            title="Priyanka Kedare Resume Preview"
            className="w-full h-full border-0"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#261533] bg-[#170e20] flex items-center justify-between text-xs text-gray-400">
          <span className="flex items-center gap-1 text-[#df9bc7]">
            <CheckCircle2 size={13} />
            Source of Truth: Original Resume PDF
          </span>
          <button
            onClick={onClose}
            className="text-xs text-gray-400 hover:text-pink-300"
          >
            Press ESC to close
          </button>
        </div>
      </div>
    </div>
  );
}
