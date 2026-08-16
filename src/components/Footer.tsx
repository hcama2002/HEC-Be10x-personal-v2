import React from 'react';
import { Mail, Linkedin, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="main-footer"
      className="bg-slate-900 text-white py-12 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold font-mono">
                H
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {PERSONAL_INFO.brandName}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-500 text-center">
            © 2026 Havovy Cama. All rights reserved.
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              id="footer-email-icon-link"
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Send email to Havovy Cama"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin-icon-link"
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-[#0a66c2] transition-colors"
              aria-label="View Havovy Cama on LinkedIn"
            >
              <Linkedin className="w-4 h-4 fill-current" />
            </a>

            <button
              type="button"
              id="footer-back-to-top"
              onClick={handleScrollToTop}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
