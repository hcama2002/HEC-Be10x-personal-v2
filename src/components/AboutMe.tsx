import React from 'react';
import { ArrowRight, Linkedin, ShieldCheck, HeartHandshake, CheckCircle2, UserCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ProfilePortrait } from './ProfilePortrait';

export const AboutMe: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 md:py-28 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Profile Representation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative card */}
              <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 text-center shadow-xs">
                
                {/* Visual Avatar / Photo Presentation */}
                <ProfilePortrait 
                  allowUpload={true}
                  sizeClass="w-36 h-36 sm:w-44 sm:h-44 mx-auto"
                  showStatusBadge={false}
                  className="mb-6"
                />

                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Havovy Cama
                </h3>
                <p className="text-sm font-medium text-blue-600 mt-0.5 mb-4">
                  Founder, H-AI Solutions
                </p>

                {/* Core Strengths & Credentials Pills */}
                <div className="space-y-2 text-left pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Education: PhD Metallurgical Eng. • MBA</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Expertise: Six Sigma Black Belt • Training • Change Management</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>25+ Years Corporate Leadership & Process Improvement</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Practical AI & Human-in-the-Loop Automation</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Bio Copy & LinkedIn CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
              <span>Background & Principles</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              A Little About Me
            </h2>

            {/* Exactly Specified Paragraphs */}
            <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              <p>
                {PERSONAL_INFO.corePhilosophy[0]}
              </p>
              
              <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-blue-600 text-slate-800 text-base font-medium">
                "{PERSONAL_INFO.corePhilosophy[1]}"
              </div>

              <p>
                {PERSONAL_INFO.corePhilosophy[2]}
              </p>
            </div>

            {/* LinkedIn CTA Button */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="about-linkedin-button"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0a66c2] hover:bg-[#004182] text-white font-semibold text-sm shadow-xs transition-colors"
            >
              <Linkedin className="w-4 h-4 fill-current" />
              <span>Connect with me on LinkedIn →</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
