import React, { useState } from 'react';
import { Mail, Linkedin, ArrowRight, Copy, Check, Send, Sparkles, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  inquiryContext?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ inquiryContext = '' }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [customTopic, setCustomTopic] = useState(inquiryContext || 'General Inquiry');
  const [userNote, setUserNote] = useState('');

  const emailSubject = encodeURIComponent(`Inquiry from Website: ${customTopic}`);
  const emailBody = encodeURIComponent(
    `Hello Havovy,\n\nI visited your portfolio website and would like to explore how AI and automation can help my business.\n\nArea of interest: ${customTopic}\n${userNote ? `Details: ${userNote}\n\n` : ''}Best regards,`
  );

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const topics = [
    'AI Productivity Opportunity',
    'Process & Workflow Automation',
    'AI Team Training',
    'Custom AI Solution',
    'General Exploration'
  ];

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Value Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
              <span>Get in Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Let's Find an Opportunity for AI to Save You Time
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Have a repetitive process that takes too much time? Let's explore whether AI or automation could help.
            </p>

            {/* Direct Contact Cards */}
            <div className="w-full space-y-3.5 mb-8">
              {/* Email Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Email</div>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`} 
                      id="contact-email-direct-link"
                      className="text-sm sm:text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium hover:bg-slate-100 transition-colors self-start sm:self-auto"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* LinkedIn Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0a66c2] flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">LinkedIn Profile</div>
                    <a 
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="contact-linkedin-direct-link"
                      className="text-sm sm:text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      linkedin.com/in/havovycama
                    </a>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin-visit-btn"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium hover:bg-slate-100 transition-colors self-start sm:self-auto"
                >
                  <span>Open</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick response note */}
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Prompt, thoughtful reply within 24 business hours. No spam, no aggressive sales pitch.</span>
            </div>
          </div>

          {/* Right Column: Pre-Formatted Inquiry Form / Conversation Starter */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span>Start a Conversation</span>
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Choose your area of interest to generate a pre-addressed email directly to Havovy:
            </p>

            {/* Quick Topic Selector */}
            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Topic of Discussion:
              </label>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setCustomTopic(t)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      customTopic === t
                        ? 'bg-slate-900 text-white shadow-2xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional note */}
            <div className="mb-6">
              <label htmlFor="user-note-input" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Brief description of your current process (optional):
              </label>
              <textarea
                id="user-note-input"
                rows={3}
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                placeholder="e.g. We spend hours manually summarizing invoices into spreadsheets every Monday..."
                className="w-full rounded-xl bg-white border border-slate-200 p-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <a
                href={mailtoLink}
                id="start-conversation-button"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-xs transition-all active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Start a Conversation</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-direct-cta"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-xs transition-all"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0a66c2] fill-current" />
                <span>Or message on LinkedIn</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
