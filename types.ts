import React from 'react';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}