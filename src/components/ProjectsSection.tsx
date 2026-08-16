import React, { useState } from 'react';
import { ArrowRight, Workflow, Sparkles, Clock, CheckCircle2, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { WorkflowModal } from './WorkflowModal';

export const ProjectsSection: React.FC = () => {
  const [isWorkflowModalOpen, setIsWorkflowModalOpen] = useState<boolean>(false);

  const handleProjectAction = (action?: 'open_modal' | 'coming_soon') => {
    if (action === 'open_modal') {
      setIsWorkflowModalOpen(true);
    }
  };

  return (
    <section 
      id="ai-solutions" 
      className="py-20 md:py-28 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Portfolio & Prototypes</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            What I've Been Building
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real, practical implementations and toolkits built to solve specific operational bottlenecks.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => {
            const isCompleted = project.status === 'Completed';
            return (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl p-7 border flex flex-col justify-between transition-all ${
                  isCompleted
                    ? 'bg-slate-50/70 border-blue-200 shadow-xs hover:shadow-md hover:border-blue-300'
                    : 'bg-white border-slate-200 shadow-2xs hover:shadow-xs'
                }`}
              >
                <div>
                  {/* Status Badge & Tech */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold font-mono text-blue-600 bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100/60">
                      {project.technology}
                    </span>

                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                        isCompleted
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="space-y-2 mb-6">
                      {project.highlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card CTA */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  {isCompleted ? (
                    <button
                      type="button"
                      id={`project-cta-${project.id}`}
                      onClick={() => handleProjectAction(project.ctaAction)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold transition-all shadow-xs"
                    >
                      <span>{project.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="w-full flex items-center justify-between text-xs text-slate-400 font-medium py-1">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span>Work in Progress</span>
                      </span>
                      <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-500 font-semibold text-[11px]">
                        {project.ctaText}
                      </span>
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Workflow Viewer Modal */}
      <WorkflowModal
        isOpen={isWorkflowModalOpen}
        onClose={() => setIsWorkflowModalOpen(false)}
      />
    </section>
  );
};
