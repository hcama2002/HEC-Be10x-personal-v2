import React from 'react';
import { 
  Globe, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Cpu, 
  Compass,
  ShieldCheck
} from 'lucide-react';
import { CREDIBILITY_PILLARS, PERSONAL_INFO } from '../data/portfolioData';

export const CredibilitySection: React.FC = () => {
  const getCredIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-indigo-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-amber-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-sky-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-purple-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-teal-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section 
      id="credibility" 
      className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Differentiators</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Experience That Goes Beyond AI
          </h2>

          {/* User Required Core Message */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 text-slate-800 text-base sm:text-lg leading-relaxed shadow-2xs">
            <p className="font-semibold text-slate-900">
              "{PERSONAL_INFO.credibilityMessage}"
            </p>
          </div>
        </div>

        {/* 8 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CREDIBILITY_PILLARS.map((pillar, index) => (
            <div
              key={pillar.title + index}
              id={`credibility-pillar-${index}`}
              className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-3.5">
                {getCredIcon(pillar.iconName)}
              </div>

              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5">
                {pillar.title}
              </h3>

              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
