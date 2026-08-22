/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { WhatIDo } from './components/WhatIDo';
import { InteractiveAIOpportunities } from './components/InteractiveAIOpportunities';
import { JourneyTimeline } from './components/JourneyTimeline';
import { AboutMe } from './components/AboutMe';
import { CredibilitySection } from './components/CredibilitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [inquiryContext, setInquiryContext] = useState<string>('');

  useEffect(() => {
    const sections = ['home', 'what-i-do', 'ai-solutions', 'about', 'my-journey', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setInquiryContext(`Service: ${serviceTitle}`);
  };

  const handleSelectCategoryForInquiry = (categoryTitle: string) => {
    setInquiryContext(categoryTitle);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. The Problem Section */}
        <ProblemSection />

        {/* 4. What I Do */}
        <WhatIDo onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* 5. Interactive "Where Can AI Help?" */}
        <InteractiveAIOpportunities onSelectCategoryForInquiry={handleSelectCategoryForInquiry} />

        {/* 6. My Journey: From Science & Engineering to AI & Automation */}
        <JourneyTimeline />

        {/* 9. About Me */}
        <AboutMe />

        {/* 10. Credibility Section: Experience That Goes Beyond AI */}
        <CredibilitySection />

        {/* 11. Contact Section */}
        <ContactSection inquiryContext={inquiryContext} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
