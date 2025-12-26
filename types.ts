// Import React to resolve React.ReactNode
import React from 'react';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  plot: string;
  strategy: string;
  result: string;
  tag: string;
  color: string;
}

export interface Skill {
  title: string;
  description: string;
  strengths: string[];
  icon: React.ReactNode;
  color: string;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
}