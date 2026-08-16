import React, { useState } from 'react';
import { X, Check, Play, Database, Bot, Mail, ShieldCheck, ArrowRight, Copy, Layers, Sparkles } from 'lucide-react';

interface WorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WorkflowModal: React.FC<WorkflowModalProps> = ({ isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  if (!isOpen) return null;

  const steps = [
    {
      title: "1. Scheduled Automation Trigger",
      icon: Play,
      badge: "Automation Trigger",
      color: "bg-amber-500",
      description: "A scheduled cron trigger executes daily at 08:00 AM without requiring manual staff intervention.",
      details: "Configured in workflow engine to wake up and fetch current system date (MM-DD) for matching."
    },
    {
      title: "2. Query Cloud Contact Directory",
      icon: Database,
      badge: "Data Source",
      color: "bg-emerald-600",
      description: "Reads the SME contact directory in cloud spreadsheets and filters records matching today's birth date.",
      details: "Extracts recipient Name, Preferred Tone, Relationship Context, and verified Email Address."
    },
    {
      title: "3. Contextual AI Greeting Generation",
      icon: Bot,
      badge: "Generative AI",
      color: "bg-blue-600",
      description: "Sends contact details to AI engine with strict instructions to generate a personalised, warm greeting.",
      details: "Applies tone safeguards and prevents generic, robotic email cliches."
    },
    {
      title: "4. Automated Email Dispatch & Logging",
      icon: Mail,
      badge: "Delivery",
      color: "bg-indigo-600",
      description: "Dispatches the personalised message from the business email with correct subject lines.",
      details: "Includes sender signature and logs execution timestamp back to cloud records to prevent duplicate sending."
    }
  ];

  const samplePrompt = `System: You are an AI assistant for a professional SME founder.
Task: Write a concise, genuine, and warm 3-sentence birthday greeting for [Contact Name].
Context: [Client/Supplier/Team Member since 2022]
Tone: Professional, warm, human. Do not sound generic or overly formal.`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(samplePrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      id="workflow-viewer-modal"
    >
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          id="close-workflow-modal-btn"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <span>Interactive Workflow Blueprint</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            Automated Birthday Email Workflow
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Technology Stack: <span className="font-semibold text-slate-800">Workflow Automation + Cloud Sheets + Generative AI</span>
          </p>
        </div>

        {/* Visual Pipeline Flow Chart */}
        <div className="mb-6 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
            Execution Flow (Click any stage to inspect):
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  id={`workflow-stage-${idx}`}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-white border-blue-500 shadow-sm ring-2 ring-blue-500/20'
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`w-6 h-6 rounded-lg ${s.color} text-white flex items-center justify-center text-xs font-bold`}>
                      {idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold">Node {idx + 1}</span>
                  </div>
                  <div className="text-xs font-bold text-slate-800 line-clamp-1">{s.title.split('.')[1]}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Inspected Node Detail Box */}
        <div className="p-5 rounded-xl bg-white border border-slate-200 mb-6 shadow-2xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 text-xs font-semibold font-mono">
              {steps[activeStep].badge}
            </span>
            <h4 className="font-bold text-base text-slate-900">
              {steps[activeStep].title}
            </h4>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            {steps[activeStep].description}
          </p>
          <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100 font-mono">
            {steps[activeStep].details}
          </div>
        </div>

        {/* AI Prompt Snippet & Safety Guard */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Prompt Template & Safeguards</span>
            </h4>
            <button
              type="button"
              onClick={handleCopyPrompt}
              className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
            >
              {copiedPrompt ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copiedPrompt ? "Copied" : "Copy Template"}</span>
            </button>
          </div>
          <pre className="p-3.5 bg-slate-900 text-slate-200 text-xs rounded-xl font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {samplePrompt}
          </pre>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Tested & Production Ready</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
