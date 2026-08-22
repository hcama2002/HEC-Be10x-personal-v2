import React from 'react';
import { ArrowRight, MessageSquare, Bot, Cpu, CheckCircle, Sparkles, Workflow, ShieldCheck, Zap, Send, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ProfilePortrait } from './ProfilePortrait';

export const Hero: React.FC = () => {
  const handleScrollTo = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-100/70 via-slate-50 to-white border-b border-slate-200/60"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M0 32L32 32M32 0L32 32" fill="none" stroke="#0f172a" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6"
              id="hero-eyebrow"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{PERSONAL_INFO.tagline}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6"
              id="hero-main-headline"
            >
              {PERSONAL_INFO.headline}
            </motion.h1>

            {/* Supporting Text */}
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal"
              id="hero-supporting-text"
            >
              {PERSONAL_INFO.heroSubtitle}
            </motion.p>

            {/* Call to Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                type="button"
                id="hero-primary-cta"
                onClick={() => handleScrollTo('#ai-solutions')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
              >
                <span>Explore My AI Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent('Inquiry: Start a Conversation - AI & Automation')}&body=${encodeURIComponent('Hello Havovy,\n\nI would like to start a conversation about practical AI and automation opportunities for my business.\n\nBest regards,')}`}
                id="hero-secondary-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100/80 text-slate-800 font-semibold text-base border border-slate-200 shadow-xs hover:border-slate-300 transition-all active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Start a Conversation</span>
              </a>
            </motion.div>

            {/* Experience, Expertise, Education Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 pt-6 border-t border-slate-200/90 flex flex-wrap gap-x-8 gap-y-4"
              id="hero-credentials-row"
            >
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider font-mono">Experience</span>
                <span className="text-sm font-bold text-slate-900 mt-0.5">{PERSONAL_INFO.experience}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider font-mono">Expertise</span>
                <span className="text-sm font-bold text-slate-900 mt-0.5">{PERSONAL_INFO.expertise}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider font-mono">Education</span>
                <span className="text-sm font-bold text-slate-900 mt-0.5">{PERSONAL_INFO.education}</span>
              </div>
            </motion.div>

            {/* Micro value badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Human-in-the-loop workflows</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Practical & fast implementation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Zero vendor lock-in</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Professional Portrait & Interactive Process Node Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-md"
              id="hero-portrait-card"
            >
              {/* Outer Glow & Background Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl blur-xl" />

              {/* Main Card Container */}
              <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-7 overflow-hidden">
                
                {/* SVG Connected Process Nodes (Subtle Animated Lines) */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Animated connecting line 1 */}
                    <path 
                      d="M 50 80 Q 200 40 340 100" 
                      stroke="#93c5fd" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4"
                      className="animate-flow"
                    />
                    {/* Animated connecting line 2 */}
                    <path 
                      d="M 60 320 Q 200 360 340 300" 
                      stroke="#93c5fd" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4"
                      className="animate-flow"
                    />
                  </svg>
                </div>

                {/* Portrait Header & Presentation */}
                <div className="flex flex-col items-center text-center relative z-10">
                  
                  {/* Portrait Graphic & Badge */}
                  <ProfilePortrait 
                    allowUpload={true}
                    sizeClass="w-36 h-36 sm:w-40 sm:h-40"
                    showStatusBadge={true}
                    className="mb-5"
                  />

                  {/* Name and Core Title */}
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                    {PERSONAL_INFO.name}
                  </h2>
                  <p className="text-sm text-blue-600 font-medium mt-0.5">
                    {PERSONAL_INFO.title}
                  </p>

                  {/* Connected Workflow Badges */}
                  <div className="w-full mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 gap-2.5 text-left">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                      <div className="p-1.5 rounded-lg bg-blue-100/70 text-blue-700 mt-0.5">
                        <Workflow className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-slate-800">Process First</div>
                        <div className="text-[10px] text-slate-500 leading-tight">Fix workflow before tech</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                      <div className="p-1.5 rounded-lg bg-emerald-100/70 text-emerald-700 mt-0.5">
                        <Zap className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-slate-800">Human Augmentation</div>
                        <div className="text-[10px] text-slate-500 leading-tight">Empower your people</div>
                      </div>
                    </div>
                  </div>

                  {/* Credibility quote snippet */}
                  <div className="w-full mt-3 p-3 rounded-xl bg-slate-50 text-slate-700 border border-slate-200/70 text-xs text-center font-medium leading-relaxed">
                    "AI should turn from something you experiment with into something you actually use every day to save hours."
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
