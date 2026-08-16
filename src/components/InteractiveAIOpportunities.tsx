import React, { useState } from 'react';
import { 
  Mail, 
  FileSpreadsheet, 
  Search, 
  Megaphone, 
  MessageSquare, 
  FileText, 
  Briefcase, 
  Target, 
  GraduationCap,
  Sparkles, 
  ArrowRight, 
  Clock, 
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AI_OPPORTUNITIES } from '../data/portfolioData';

interface InteractiveAIOpportunitiesProps {
  onSelectCategoryForInquiry: (categoryTitle: string) => void;
}

export const InteractiveAIOpportunities: React.FC<InteractiveAIOpportunitiesProps> = ({ 
  onSelectCategoryForInquiry 
}) => {
  const [selectedId, setSelectedId] = useState<string>('emails');

  const selectedItem = AI_OPPORTUNITIES.find((item) => item.id === selectedId) || AI_OPPORTUNITIES[0];

  const getCategoryIcon = (iconName: string, isSelected: boolean) => {
    const iconClass = isSelected ? "text-white" : "text-indigo-600";
    switch (iconName) {
      case 'Mail':
        return <Mail className={`w-4 h-4 ${iconClass}`} />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className={`w-4 h-4 ${iconClass}`} />;
      case 'Search':
        return <Search className={`w-4 h-4 ${iconClass}`} />;
      case 'Megaphone':
        return <Megaphone className={`w-4 h-4 ${iconClass}`} />;
      case 'MessageSquare':
        return <MessageSquare className={`w-4 h-4 ${iconClass}`} />;
      case 'FileText':
        return <FileText className={`w-4 h-4 ${iconClass}`} />;
      case 'Briefcase':
        return <Briefcase className={`w-4 h-4 ${iconClass}`} />;
      case 'Target':
        return <Target className={`w-4 h-4 ${iconClass}`} />;
      case 'GraduationCap':
        return <GraduationCap className={`w-4 h-4 ${iconClass}`} />;
      default:
        return <Sparkles className={`w-4 h-4 ${iconClass}`} />;
    }
  };

  const handleInquireThis = () => {
    onSelectCategoryForInquiry(`Opportunity: ${selectedItem.title}`);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="ai-opportunities"
      className="py-20 md:py-28 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">
            <span>Interactive Assessment</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Where Could AI Save You Time?
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Select a task you or your team regularly spend hours on to see how practical, human-first AI workflows can eliminate repetitive drag.
          </p>
        </div>

        {/* Unified Card Container / Box containing all buttons and active result */}
        <div className="max-w-5xl bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-sm accent-glow">
          
          {/* Box Header & Buttons Tray (All buttons contained directly inside the box) */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                Select a business task:
              </span>
              <span className="text-xs text-indigo-600 font-semibold">
                9 practical SME workflows
              </span>
            </div>

            {/* Buttons Tray */}
            <div 
              className="p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-wrap gap-2 sm:gap-2.5" 
              role="tablist" 
              aria-label="Task categories"
            >
              {AI_OPPORTUNITIES.map((category) => {
                const isSelected = category.id === selectedId;
                return (
                  <button
                    key={category.id}
                    id={`ai-opp-button-${category.id}`}
                    role="tab"
                    aria-selected={isSelected}
                    type="button"
                    onClick={() => setSelectedId(category.id)}
                    className={`interactive-tag inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold cursor-pointer active:scale-95 border transition-all ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-200 hover:text-indigo-600 hover:bg-indigo-50/50'
                    }`}
                  >
                    {getCategoryIcon(category.iconName, isSelected)}
                    <span>{category.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Animated Opportunity Result Display (inside the same box) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedItem.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              id={`opportunity-panel-${selectedItem.id}`}
              className="rounded-2xl border border-indigo-100 bg-gradient-to-b from-indigo-50/40 via-slate-50/60 to-white p-6 sm:p-7 shadow-xs"
            >
              {/* Header inside Panel */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-xs shrink-0">
                    {getCategoryIcon(selectedItem.iconName, true)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 font-mono">
                      Target AI Opportunity
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {selectedItem.opportunity}
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold self-start sm:self-auto shrink-0">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{selectedItem.estimatedTimeSaving}</span>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-6 border-b border-slate-200/80">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                    <span>The Typical Bottleneck</span>
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                    {selectedItem.typicalSMEChallenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                    <span>Practical AI & Automation Approach</span>
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                    {selectedItem.automationApproach}
                  </p>
                </div>
              </div>

              {/* Concrete Real-World Example */}
              <div className="pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Concrete Example in Practice
                </h4>
                <div className="p-4 sm:p-5 rounded-xl bg-indigo-50/60 border border-indigo-100 shadow-2xs">
                  <p className="text-sm text-indigo-950 leading-relaxed font-normal italic">
                    "{selectedItem.concreteExample}"
                  </p>
                </div>
              </div>

              {/* CTA footer inside card */}
              <div className="mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500 font-medium">
                  Ready to test this in your specific business workflow?
                </span>
                <button
                  type="button"
                  id="opportunity-inquire-cta"
                  onClick={handleInquireThis}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold transition-colors shadow-xs"
                >
                  <span>Explore this for your business</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

