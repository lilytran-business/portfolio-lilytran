
import React from 'react';
import { LayoutGrid, TrendingUp, Zap, Settings, Globe, Award, ShieldCheck, Mail, Cpu, BarChart3, Database } from 'lucide-react';
import { Project, Skill, Tool, Experience } from './types';

export const SKILLS: Skill[] = [
  {
    title: "The Logistics of Operations",
    description: "As precise as a customs declaration.",
    strengths: [
      "CRM system management (HubSpot / Salesforce)",
      "ISO 27001 process standardization",
      "Multinational project coordination",
      "Cross-time-zone time management"
    ],
    icon: <Database className="w-8 h-8" />,
    color: "blue"
  },
  {
    title: "The Digital Pulse",
    description: "Creative — but always accountable to the numbers.",
    strengths: [
      "Performance Ads (Meta / Google)",
      "High-conversion WordPress website design",
      "SEO storytelling",
      "Multi-format media content creation"
    ],
    icon: <TrendingUp className="w-8 h-8" />,
    color: "orange"
  },
  {
    title: "The AI-Powered Brain",
    description: "Productivity beyond limits.",
    strengths: [
      "Advanced AI mastery (ChatGPT, MidJourney, Claude)",
      "Workflow automation",
      "Intelligent data analysis (Power BI)",
      "High-speed content production"
    ],
    icon: <Cpu className="w-8 h-8" />,
    color: "mint"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "global-bridge",
    title: "The Global Bridge",
    subtitle: "When International Business Meets Execution Power",
    plot: "Altipeak™ aspired to franchise globally but lacked standardized documentation for a €100,000 package.",
    strategy: "Built a complete Franchise Kit, serving as a clear roadmap for potential investors across 4 continents.",
    result: "Increased partner trust by 30% and built a high-intent investor pipeline.",
    tag: "Expansion",
    color: "blue"
  },
  {
    id: "lead-machine",
    title: "Digital Lead Machine",
    subtitle: "The Art of Opportunity Hunting",
    plot: "Altipeak™ needed to prove its fitness gym model attractiveness in a highly saturated market.",
    strategy: "Engineered a lead acquisition machine using Meta/Google Ads and CRM as a smart warehouse system.",
    result: "Generated 80+ financially qualified hot leads in record time.",
    tag: "Ads & CRM",
    color: "orange"
  },
  {
    id: "organic-revival",
    title: "Organic Revival",
    subtitle: "Awakening a Sleeping Giant with AI & SEO",
    plot: "Many client websites were visually appealing but 'deserted islands'—completely undiscoverable.",
    strategy: "Restructured content using WordPress and AI to respect both readers and Google's algorithms.",
    result: "50% increase in organic traffic and 20+ keywords in Google Top 10 within 3 months.",
    tag: "SEO",
    color: "mint"
  },
  {
    id: "chaos-tamer",
    title: "The Chaos Tamer",
    subtitle: "Bringing Order to Operational Disorder",
    plot: "Administrative nightmare with lost documents and 10-day approval delay cycles.",
    strategy: "Digitized 200+ records (ISO 27001) and built Power BI dashboards to surface operational data.",
    result: "Cut approval time by 50% (down to 5 days) and reduced reporting to 1 day.",
    tag: "Operations",
    color: "blue"
  }
];

export const TOOLS: Tool[] = [
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "HubSpot", icon: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" },
  { name: "Salesforce", icon: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" },
  { name: "Meta Ads", icon: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg" },
  { name: "Google Ads", icon: "https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg" },
  { name: "Power BI", icon: "https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg" },
  { name: "ChatGPT", icon: "https://www.vectorlogo.zone/logos/openai/openai-icon.svg" },
  { name: "Canva", icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
  { name: "CapCut", icon: "https://cdn.worldvectorlogo.com/logos/capcut.svg" },
  { name: "Brevo", icon: "https://www.vectorlogo.zone/logos/brevo/brevo-icon.svg" }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Altipeak™ International",
    role: "Strategic Director Assistant",
    period: "01/2025 – Present",
    summary: "Strategic coordinator and high-execution operator for global franchise expansion. Managing performance marketing across USA, Europe, Asia, and Middle East.",
    achievements: [
      "Standardized €100k Franchise Kit for global investment",
      "Generated 80+ high-quality leads via Meta & Google Ads",
      "Improved operational efficiency by 30% through BI & process optimization",
      "Managed mail-shot campaigns for 9,000+ subscribers"
    ]
  },
  {
    company: "Strategic Freelance Consultant",
    role: "Business Support Specialist",
    period: "2023 – Present",
    summary: "Providing process standardization, data management, and long-term business planning for SMEs.",
    achievements: [
      "Digitized 200+ records (reduced search time by 30%)",
      "Shortened approval cycles from 10 days to 5 days",
      "Increased CRM response rates by 20%",
      "Reduced reporting time from 3 days to 1 day"
    ]
  },
  {
    company: "AI Boost Media, Ltd.",
    role: "Digital Marketing Specialist",
    period: "03/2024 – 03/2025",
    summary: "Built online visibility through WordPress development, full-spectrum SEO, and AI-powered content creation.",
    achievements: [
      "Increased lead conversion rates by 25%",
      "50% organic traffic growth within 3 months",
      "20+ strategic keywords ranked in Google Top 10",
      "Designed 100+ creative assets using AI (MidJourney/Canva)"
    ]
  }
];
