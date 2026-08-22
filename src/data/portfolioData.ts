import { 
  ServiceItem, 
  ProblemCard, 
  ProjectItem, 
  AIOpportunity, 
  TimelineEvent, 
  CredibilityPillar 
} from '../types';

export const PERSONAL_INFO = {
  name: "Havovy Cama",
  brandName: "H-AI Solutions",
  tagline: "AI • AUTOMATION • PRODUCTIVITY",
  title: "Founder, H-AI Solutions | AI & Automation Specialist",
  email: "contact@h-aisolutions.com",
  linkedin: "https://www.linkedin.com/in/havovycama",
  photoUrl: "/GeminiAIEnhanced2025.png",
  headline: "Helping Small Businesses Work Smarter with AI",
  heroSubtitle: "I help ambitious SME founders and individuals use AI and automation to reduce repetitive work, improve productivity and build better business processes — without replacing their people.",
  experience: "25+ Years Corporate",
  expertise: "Six Sigma Black Belt • Training • Change Management",
  education: "PhD Metallurgical Eng. • MBA",
  corePhilosophy: [
    "After a successful career in global corporate training, talent development, procurement and process improvement, I am now applying that experience to AI and automation.",
    "My approach is simple: understand the problem first, then find the technology that solves it.",
    "I believe AI should augment people, not simply replace them."
  ],
  journeyQuote: "My career has always combined technology, process improvement and helping people perform better. AI is the next chapter.",
  credibilityMessage: "I am not approaching AI purely as a technology enthusiast. I bring decades of experience understanding people, processes, systems, training and organizational change management."
};

export const TRUST_STRIP = [
  { label: "25+ Years", detail: "Professional Experience" },
  { label: "Six Sigma", detail: "Black Belt Certified" },
  { label: "MBA & PhD", detail: "Business & Engineering" },
  { label: "Training & Change", detail: "Change Management" },
  { label: "Global Corporate", detail: "Enterprise Experience" },
  { label: "AI & Automation", detail: "Practical SME Focus" }
];

export const PROBLEMS_DATA: ProblemCard[] = [
  {
    id: "repetitive-work",
    title: "Too Much Repetitive Work",
    copy: "Manual, repetitive tasks consume valuable time that could be spent on customers, strategy and growth.",
    iconName: "ClockAlert",
    impactNote: "Owners and teams get bogged down in administrative tasks instead of high-value client work."
  },
  {
    id: "tool-overload",
    title: "Too Many AI Tools",
    copy: "Hundreds of competing AI apps, models and platforms make it difficult to know what is actually useful.",
    iconName: "Layers",
    impactNote: "Sifting through hype leads to tool fatigue and fragmented subscriptions without real ROI."
  },
  {
    id: "no-plan",
    title: "No Clear Implementation Plan",
    copy: "Knowing about AI is not the same as integrating it into the way your business works.",
    iconName: "GitFork",
    impactNote: "Isolated experiments fail to become dependable, repeatable business processes."
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-training",
    title: "AI Training",
    shortDescription: "Help individuals and teams develop practical AI skills they can immediately use in their work.",
    detailedDescription: "Hands-on, jargon-free coaching rooted in 25+ years of corporate talent development. We teach you and/or your staff how to use AI tools safely, ethically, and productively in day-to-day responsibilities.",
    iconName: "GraduationCap",
    keyBenefits: [
      "Demystify AI for non-technical team members",
      "Establish responsible and secure data usage guidelines",
      "Empower employees rather than making them fearful of displacement"
    ],
    exampleDeliverables: [
      "Tailored interactive team training workshops",
      "Step-by-step practical AI playbooks & reference guides",
      "1-on-1 coaching for founders and key operators"
    ],
    idealFor: "Individuals (of all ages and experiences) and companies wanting their teams to confidently adopt AI with best practices."
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    shortDescription: "Identify key decision-maker contacts for B2B sales outreach and targeted job applications.",
    detailedDescription: "Leverage AI and automated discovery workflows to systematically find and verify high-value contacts. Whether sourcing qualified prospects to grow your sales pipeline or identifying hiring managers and recruiters for strategic job applications, we build targeted outreach frameworks with personalized messaging.",
    iconName: "Target",
    keyBenefits: [
      "Precision contact discovery for B2B sales prospecting and strategic job applications",
      "Generate hyper-personalized outreach drafts that get opened and answered",
      "Save 10+ hours per week of manual web searching and list building"
    ],
    exampleDeliverables: [
      "Automated Sales Prospect & Account Discovery Pipelines",
      "Targeted Hiring Manager & Recruiter Contact Matcher",
      "Personalized Outreach Email & LinkedIn Message Playbooks"
    ],
    idealFor: "Founders growing sales pipelines and ambitious professionals targeting high-impact career opportunities."
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    shortDescription: "Design simple, customised AI-powered solutions around real business problems.",
    detailedDescription: "End-to-end scoping and delivery of bespoke AI-assisted solutions tailored to your unique operational domain—focusing on simplicity, reliability, and clear business outcomes.",
    iconName: "BrainCircuit",
    keyBenefits: [
      "Purpose-built around your specific operational pain point",
      "Prioritises simplicity over fragile over-engineering",
      "Designed for ease of maintenance by your internal staff"
    ],
    exampleDeliverables: [
      "Tailored AI assistants with your business context",
      "Personal and Business Website Development and Maintenance",
      "Custom reporting & document processing pipelines",
      "Specialised lead triage and enquiry classification flows"
    ],
    idealFor: "SMEs with a clear operational bottleneck that off-the-shelf tools don't address."
  },
  {
    id: "ai-productivity",
    title: "AI Productivity",
    shortDescription: "Identify practical opportunities where AI can save time and improve the way you work.",
    detailedDescription: "We analyze your everyday administrative bottlenecks, document handling, and communication flows to uncover exact, low-friction areas where generative AI tools can immediately reclaim hours each week.",
    iconName: "Sparkles",
    keyBenefits: [
      "Eliminate manual drafting and summarisation bottlenecks",
      "Standardise templates for consistent quality",
      "Immediate, practical productivity gains without complex tech stacks"
    ],
    exampleDeliverables: [
      "Operational AI Opportunity Audit",
      "Customised Prompt Libraries for your team",
      "Document summarisation and extraction recipes"
    ],
    idealFor: "SME owners and solopreneurs looking to reduce administrative drag."
  },
  {
    id: "process-automation",
    title: "Process Automation",
    shortDescription: "Turn repetitive manual tasks into automated workflows using modern automation engines and AI.",
    detailedDescription: "Connect your existing software stack (cloud spreadsheets, email systems, CRMs, forms) into seamless, automated background workflows that handle routine data transfers and notifications reliably.",
    iconName: "Workflow",
    keyBenefits: [
      "Zero manual data re-entry between systems",
      "24/7 background execution of repetitive operations",
      "Human-in-the-loop safeguards for critical steps"
    ],
    exampleDeliverables: [
      "Automated webhook & workflow pipelines",
      "Automated client milestone & notification triggers",
      "Cross-app data sync and structured logging"
    ],
    idealFor: "Businesses running recurring multi-step administrative or customer procedures."
  },
  {
    id: "change-management",
    title: "Change Management",
    shortDescription: "Assess AI readiness, optimize underlying workflows, and remove non-financial obstacles to adoption.",
    detailedDescription: "Experienced guidance using change management tools to help individuals and SMEs assess readiness for adopting AI to boost productivity. We review current business processes to identify improvements that make AI tools significantly more effective, remove non-financial roadblocks affecting change, and support updating company policies and procedures to embed new practices.",
    iconName: "Compass",
    keyBenefits: [
      "Assess AI adoption readiness for individuals and SME teams",
      "Review and optimize business processes for maximum AI effectiveness",
      "Identify and eliminate non-financial obstacles affecting change",
      "Update SME policies and procedures to reflect new operational processes"
    ],
    exampleDeliverables: [
      "Individual and organisational change readiness assessment for AI adoption",
      "Process Improvement & AI Opportunity Review",
      "Change Enablement & Roadblock Removal Strategy",
      "Updated SME Policies & Operating Procedures Framework"
    ],
    idealFor: "Individuals and SMEs seeking a structured, low-friction approach to adopting AI and embedding new ways of working."
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "birthday-workflow",
    title: "Automated Birthday Email Workflow",
    technology: "Cloud Automation + Sheets + AI",
    description: "An automated workflow that checks a contact list for birthdays and sends personalised birthday greetings automatically.",
    status: "Completed",
    ctaText: "View Workflow",
    ctaAction: "open_modal",
    highlights: [
      "Daily cron trigger checks contact records for current date match",
      "AI node drafts tailored, warm congratulatory messages with tone control",
      "Automated email dispatch via secure SMTP with logging to cloud database",
      "Error handling and duplicate notification prevention built-in"
    ]
  },
  {
    id: "sme-productivity",
    title: "AI Productivity Solutions for SMEs",
    technology: "AI + Automation",
    description: "Practical AI solutions designed to help small businesses reduce repetitive work and improve productivity.",
    status: "Work in Progress",
    ctaText: "Coming Soon",
    ctaAction: "coming_soon",
    highlights: [
      "End-to-end framework for identifying high-ROI SME automation tasks",
      "Pre-configured templates for common administrative workflows",
      "Clear human-in-the-loop validation checklists"
    ]
  },
  {
    id: "learning-toolkit",
    title: "AI Learning & Productivity Toolkit",
    technology: "Generative AI + Prompt Systems",
    description: "A practical collection of AI workflows, methods and techniques designed to help teams get more value from AI.",
    status: "Work in Progress",
    ctaText: "Coming Soon",
    ctaAction: "coming_soon",
    highlights: [
      "Step-by-step guides for effective daily AI prompts",
      "Document synthesis and content structuring workflows",
      "Curated visual & communication workflow cheat-sheets"
    ]
  }
];

export const AI_OPPORTUNITIES: AIOpportunity[] = [
  {
    id: "emails",
    title: "Emails",
    iconName: "Mail",
    opportunity: "Draft, summarise and categorise routine emails.",
    concreteExample: "Automatically categorise incoming enquiries into urgent vs general, generate high-quality context-aware initial draft replies, and produce bullet-point summaries of long email threads.",
    typicalSMEChallenge: "Spending 1–2 hours daily crafting repetitive replies and sifting through crowded inboxes.",
    automationApproach: "AI draft assistant + email classification filters that save drafts ready for one-click human review.",
    estimatedTimeSaving: "Up to 5–8 hours per week across a small team"
  },
  {
    id: "data-entry",
    title: "Data Entry",
    iconName: "FileSpreadsheet",
    opportunity: "Extract information from documents and automatically update spreadsheets or databases.",
    concreteExample: "Extract invoice numbers, line items, and totals from PDF receipts or supplier invoices directly into spreadsheets or accounting systems without manual typing.",
    typicalSMEChallenge: "Manually re-typing order numbers, receipts, and client forms into multiple software tools.",
    automationApproach: "Optical character extraction + AI document parser connected directly to your spreadsheets.",
    estimatedTimeSaving: "Up to 4–6 hours per week"
  },
  {
    id: "research",
    title: "Research",
    iconName: "Search",
    opportunity: "Summarise large amounts of information and produce structured research notes.",
    concreteExample: "Synthesise competitor offerings, industry regulations, supplier comparisons, or lengthy industry reports into concise executive summaries and comparison tables.",
    typicalSMEChallenge: "Hours lost reading through lengthy documentation or browsing dozens of web pages.",
    automationApproach: "Deep research workflows with citations and prompt-engineered synthesis matrices.",
    estimatedTimeSaving: "Up to 3–5 hours per project"
  },
  {
    id: "marketing",
    title: "Marketing",
    iconName: "Megaphone",
    opportunity: "Generate first drafts of social posts, emails and marketing ideas.",
    concreteExample: "Transform a single customer case study or product update into LinkedIn posts, a newsletter snippet, and FAQ entries tailored to your brand voice in minutes.",
    typicalSMEChallenge: "Staring at a blank page struggling to find time for consistent marketing output.",
    automationApproach: "Brand-aligned prompt templates that produce structured first drafts ready for quick polish.",
    estimatedTimeSaving: "Up to 3–4 hours per week"
  },
  {
    id: "customer-enquiries",
    title: "Customer Enquiries",
    iconName: "MessageSquare",
    opportunity: "Use AI to classify enquiries and prepare suggested responses.",
    concreteExample: "When a customer submits a support form, AI analyses the sentiment, identifies the required department, and prepares an accurate response based on your standard operating procedures.",
    typicalSMEChallenge: "Slow response times during peak periods leading to frustrated prospective clients.",
    automationApproach: "Intelligent triage system routing alerts to the right person with a recommended solution attached.",
    estimatedTimeSaving: "Up to 50% reduction in response time"
  },
  {
    id: "reports",
    title: "Reports",
    iconName: "FileText",
    opportunity: "Turn raw information into structured summaries and reports.",
    concreteExample: "Ingest weekly sales numbers, client notes, or operational updates to produce clean, well-formatted stakeholder reports with key trends highlighted.",
    typicalSMEChallenge: "Spending Friday afternoons collating raw numbers into presentation-ready documents.",
    automationApproach: "Automated aggregation scripts that draft structured executive briefs on schedule.",
    estimatedTimeSaving: "Up to 2–4 hours per reporting cycle"
  },
  {
    id: "administration",
    title: "Administration",
    iconName: "Briefcase",
    opportunity: "Automate repetitive data movement between applications.",
    concreteExample: "When a new client signs up on your website, create a folder, generate custom onboarding documents, log the contact in your CRM, and notify your team automatically.",
    typicalSMEChallenge: "Manual copy-pasting across disparate tools resulting in missed steps or delays.",
    automationApproach: "Workflow pipelines triggering instant multi-app handoffs.",
    estimatedTimeSaving: "Up to 3–6 hours per week"
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    iconName: "Target",
    opportunity: "Identify and research decision-maker contacts for B2B sales and job applications.",
    concreteExample: "Automatically discover target companies, verify key contact profiles (executives, sales prospects, or hiring managers), and draft tailored outreach messages customized to their latest news or job postings.",
    typicalSMEChallenge: "Spending hours manually scouring LinkedIn, company directories, and job boards without verified contact info.",
    automationApproach: "Automated prospect enrichment pipelines + custom qualification filters + tailored outreach drafts.",
    estimatedTimeSaving: "Up to 5–8 hours per week"
  },
  {
    id: "training",
    title: "Training",
    iconName: "GraduationCap",
    opportunity: "Upskill your team with practical, secure, and role-specific AI workflows.",
    concreteExample: "Conduct tailored hands-on workshops and build team prompt playbooks so staff safely integrate AI into their daily writing, spreadsheet analysis, and customer service without fear or data leaks.",
    typicalSMEChallenge: "Employees either avoid AI due to lack of confidence or use it haphazardly without standard guidelines.",
    automationApproach: "Hands-on team training workshops + custom prompt libraries + AI data safety guidelines.",
    estimatedTimeSaving: "Immediate team confidence + 2–4 hours saved per employee weekly"
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "1987–1990",
    institutionOrRole: "University of Cambridge",
    title: "MA Tripos, Natural Sciences",
    category: "Education"
  },
  {
    year: "1990–1991",
    institutionOrRole: "University of Bristol",
    title: "MSc, Physics",
    category: "Education"
  },
  {
    year: "1991–1994",
    institutionOrRole: "University of Leeds",
    title: "PhD, Metallurgical Engineering",
    category: "Education"
  },
  {
    year: "2002–2004",
    institutionOrRole: "Executive Business Education",
    title: "MBA (Master of Business Administration)",
    description: "Advanced strategic management, organizational behavior, financial modeling, and corporate leadership.",
    category: "Education"
  },
  {
    year: "1994–2004",
    institutionOrRole: "Cambridge, Leeds, Alcan International & Innoval Technology",
    title: "Research & Scientific Career",
    description: "Deep technical rigor, scientific experimentation, and materials engineering research.",
    category: "Scientific Career"
  },
  {
    year: "2005–2023",
    institutionOrRole: "Cummins Inc.",
    title: "Business Process Improvement, Procurement, Training & Talent Development",
    description: "Leading enterprise process transformation, change management, supply chain optimization, and global talent coaching.",
    category: "Corporate Leadership"
  },
  {
    year: "2007–2008",
    institutionOrRole: "Cummins Inc. (Six Sigma)",
    title: "Six Sigma Black Belt",
    description: "Led cross-functional and global process improvement projects with measurable operational impact.",
    category: "Corporate Leadership"
  },
  {
    year: "2026–Present",
    institutionOrRole: "H-AI Solutions",
    title: "Founder — H-AI Solutions",
    description: "Delivering practical AI, automation, team training and productivity solutions for ambitious SMEs and individuals.",
    category: "Founder"
  }
];

export const CREDIBILITY_PILLARS: CredibilityPillar[] = [
  {
    title: "Global Corporate Experience",
    description: "Decades of proven leadership in multinational environments driving operational excellence.",
    iconName: "Globe"
  },
  {
    title: "Training & Change Management",
    description: "Deep expertise upskilling teams, leading organizational change, and ensuring smooth adoption of new workflows.",
    iconName: "Users"
  },
  {
    title: "Process Improvement",
    description: "Systematic elimination of waste, friction, and bottlenecks in day-to-day business operations.",
    iconName: "TrendingUp"
  },
  {
    title: "Six Sigma Black Belt",
    description: "Certified Black Belt methodology applied to ensure high repeatability, data-driven quality, and measurable ROI.",
    iconName: "Award"
  },
  {
    title: "Procurement & Commercial",
    description: "Practical commercial perspective ensuring every automation delivers real business value.",
    iconName: "CheckCircle2"
  },
  {
    title: "Knowledge Management",
    description: "Structuring organisational knowledge so information is easily retrieved, secured, and applied.",
    iconName: "BookOpen"
  },
  {
    title: "AI & Automation",
    description: "Hands-on implementation of modern generative AI workflows and robust workflow orchestration pipelines.",
    iconName: "Cpu"
  },
  {
    title: "Continuous Learning",
    description: "Active, continuous testing and evaluation of the rapidly evolving AI landscape.",
    iconName: "Compass"
  }
];
