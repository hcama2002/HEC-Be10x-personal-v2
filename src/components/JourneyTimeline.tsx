import React from 'react';
import { GraduationCap, FlaskConical, Briefcase, Award, Sparkles, ArrowRight } from 'lucide-react';
import { TIMELINE_EVENTS, PERSONAL_INFO } from '../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  const getTimelineIcon = (category: string) => {
    switch (category) {
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-blue-600" />;
      case 'Scientific Career':
        return <FlaskConical className="w-4 h-4 text-indigo-600" />;
      case 'Corporate Leadership':
        return <Briefcase className="w-4 h-4 text-emerald-600" />;
      case 'Founder':
        return <Sparkles className="w-4 h-4 text-sky-400" />;
      default:
        return <Award className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section 
      id="my-journey" 
      className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Career Milestones</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            From Science & Engineering to AI & Automation
          </h2>
          
          {/* Highlight Quote */}
          <div className="p-4 rounded-xl bg-white border border-blue-100 text-slate-800 text-sm sm:text-base font-medium shadow-2xs">
            "{PERSONAL_INFO.journeyQuote}"
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl">
          {/* Vertical Connecting Line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-7 w-0.5 bg-slate-200" aria-hidden="true" />

          <div className="space-y-6">
            {TIMELINE_EVENTS.map((event, index) => {
              const isFounder = event.category === 'Founder';
              return (
                <div 
                  key={event.year + index} 
                  id={`timeline-event-${index}`}
                  className="relative flex items-start gap-4 md:gap-7 group"
                >
                  {/* Node Circle */}
                  <div className={`w-8 h-8 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 z-10 transition-all ${
                    isFounder 
                      ? 'bg-slate-900 text-white shadow-md ring-4 ring-blue-500/20' 
                      : 'bg-white border border-slate-200 shadow-2xs group-hover:border-blue-300'
                  }`}>
                    {getTimelineIcon(event.category)}
                  </div>

                  {/* Content Box */}
                  <div className={`flex-1 p-5 md:p-6 rounded-2xl border transition-all ${
                    isFounder 
                      ? 'bg-white border-blue-300 shadow-sm ring-1 ring-blue-500/10' 
                      : 'bg-white border-slate-200 shadow-2xs group-hover:shadow-xs'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <span className="font-mono text-xs font-bold text-blue-600">
                        {event.year}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        {event.category}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      {event.title}
                    </h3>

                    <div className="text-sm font-medium text-slate-600 mt-0.5">
                      {event.institutionOrRole}
                    </div>

                    {event.description && (
                      <p className="text-xs sm:text-sm text-slate-500 mt-2.5 leading-relaxed font-normal">
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
