import React from 'react';
import { Award, Briefcase, GraduationCap, Shield, Cpu, Clock, Users } from 'lucide-react';
import { TRUST_STRIP } from '../data/portfolioData';

export const TrustStrip: React.FC = () => {
  const credentials = [
    {
      title: "25+ Years",
      subtitle: "Professional Experience",
      icon: Clock,
    },
    {
      title: "Six Sigma",
      subtitle: "Black Belt Certified",
      icon: Award,
    },
    {
      title: "Training & Change",
      subtitle: "Change Management",
      icon: Users,
    },
    {
      title: "MBA & PhD",
      subtitle: "Business & Engineering",
      icon: GraduationCap,
    },
    {
      title: "Global Corporate",
      subtitle: "Enterprise Leadership",
      icon: Shield,
    },
    {
      title: "AI & Automation",
      subtitle: "Practical SME Focus",
      icon: Cpu,
    },
  ];

  return (
    <section 
      id="trust-strip"
      className="bg-slate-900 text-white py-10 border-y border-slate-800"
      aria-label="Professional Credentials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 items-center">
          {credentials.map((cred, index) => {
            const IconComponent = cred.icon;
            return (
              <div 
                key={cred.title + index}
                id={`trust-badge-${index}`}
                className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/80 hover:border-blue-500/40 transition-all group"
              >
                <div className="p-2 rounded-lg bg-slate-800 text-sky-400 group-hover:text-blue-400 mb-2 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="font-bold text-base sm:text-lg text-white tracking-tight leading-tight">
                  {cred.title}
                </span>
                <span className="text-xs text-slate-400 mt-1 font-medium">
                  {cred.subtitle}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
