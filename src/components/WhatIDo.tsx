import React, { useState } from 'react';
import { ArrowRight, Sparkles, Workflow, GraduationCap, BrainCircuit, Target, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface WhatIDoProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const WhatIDo: React.FC<WhatIDoProps> = ({ onSelectServiceForInquiry }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-blue-600" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-indigo-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-emerald-600" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-sky-600" />;
      case 'Target':
        return <Target className="w-6 h-6 text-rose-600" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-amber-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section 
      id="what-i-do" 
      className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Services & Capabilities</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            How I Can Help
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Practical AI and automation engagements tailored to real business workflows — designed to free up capacity without complicating your tech stack.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-2xs hover:shadow-sm hover:border-blue-300/80 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-blue-50/50 transition-transform">
                  {getIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4 font-normal">
                  {service.shortDescription}
                </p>
              </div>

              {/* Action Trigger */}
              <div className="pt-3 border-t border-slate-100">
                <button
                  type="button"
                  id={`learn-more-btn-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-700 hover:underline transition-all"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForInquiry={(title) => {
          onSelectServiceForInquiry(title);
          const contactSec = document.querySelector('#contact');
          if (contactSec) {
            contactSec.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </section>
  );
};
