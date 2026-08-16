import React from 'react';
import { X, CheckCircle, ArrowRight, Sparkles, Workflow, GraduationCap, BrainCircuit } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ 
  service, 
  onClose, 
  onSelectServiceForInquiry 
}) => {
  if (!service) return null;

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
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      id="service-detail-modal"
    >
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          id="close-service-modal-button"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
            {getIcon(service.iconName)}
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-mono">
              H-AI Service Overview
            </span>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="space-y-4 mb-6 text-slate-600 text-sm leading-relaxed">
          <p className="font-medium text-slate-900 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            {service.shortDescription}
          </p>
          <p>{service.detailedDescription}</p>
        </div>

        {/* Key Benefits */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Key Outcomes & Benefits
          </h4>
          <ul className="space-y-2">
            {service.keyBenefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deliverables */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Typical Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.exampleDeliverables.map((item, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium">
                • {item}
              </div>
            ))}
          </div>
        </div>

        {/* Modal Action CTA */}
        <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            <span className="font-medium text-slate-700">Ideal for:</span> {service.idealFor}
          </div>
          <button
            type="button"
            id="service-modal-inquire-button"
            onClick={() => {
              onSelectServiceForInquiry(service.title);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-xs transition-colors"
          >
            <span>Inquire About This</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
