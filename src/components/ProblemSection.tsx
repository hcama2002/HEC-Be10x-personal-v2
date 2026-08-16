import React, { useState } from 'react';
import { Clock, Layers, GitFork, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PROBLEMS_DATA } from '../data/portfolioData';

export const ProblemSection: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClockAlert':
        return <Clock className="w-6 h-6 text-amber-600" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-blue-600" />;
      case 'GitFork':
        return <GitFork className="w-6 h-6 text-indigo-600" />;
      default:
        return <HelpCircle className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section 
      id="problem-section" 
      className="py-20 md:py-28 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>The Small Business Reality</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            AI is powerful. But where do you actually start?
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Many small businesses know they should be using AI, but don't know which tools to use, where AI can genuinely save time, or how to turn experiments into repeatable processes.
          </p>
        </div>

        {/* 3 Interactive Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS_DATA.map((problem) => {
            const isHovered = activeCardId === problem.id;
            return (
              <motion.div
                key={problem.id}
                id={`problem-card-${problem.id}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setActiveCardId(problem.id)}
                onMouseLeave={() => setActiveCardId(null)}
                className={`p-8 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isHovered 
                    ? 'bg-slate-50/80 border-blue-200 shadow-md' 
                    : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-6">
                    {getIcon(problem.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                    {problem.title}
                  </h3>

                  {/* Exact Copy */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {problem.copy}
                  </p>
                </div>

                {/* The Practical Impact Note */}
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{problem.impactNote}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transition statement */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 p-3 px-5 rounded-xl bg-blue-50/80 border border-blue-100 text-blue-900 text-sm font-medium">
            <span className="font-semibold text-blue-700">The Solution:</span>
            <span>Focus on real workflows first, eliminate the noise, and deploy AI where it actually produces ROI.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
