import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      id="floating-back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-30 p-3 rounded-2xl bg-slate-900/90 hover:bg-blue-600 text-white shadow-lg backdrop-blur-xs border border-slate-700 transition-all animate-in fade-in duration-200 active:scale-95"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
