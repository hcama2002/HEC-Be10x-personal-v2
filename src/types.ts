export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  keyBenefits: string[];
  exampleDeliverables: string[];
  idealFor: string;
}

export interface ProblemCard {
  id: string;
  title: string;
  copy: string;
  iconName: string;
  impactNote: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  technology: string;
  description: string;
  status: 'Completed' | 'Work in Progress';
  ctaText: string;
  ctaAction?: 'open_modal' | 'coming_soon';
  highlights?: string[];
}

export interface AIOpportunity {
  id: string;
  title: string;
  iconName: string;
  opportunity: string;
  concreteExample: string;
  typicalSMEChallenge: string;
  automationApproach: string;
  estimatedTimeSaving: string;
}

export interface TimelineEvent {
  year: string;
  institutionOrRole: string;
  title: string;
  description?: string;
  category: 'Education' | 'Scientific Career' | 'Corporate Leadership' | 'Founder';
}

export interface CredibilityPillar {
  title: string;
  description: string;
  iconName: string;
}
