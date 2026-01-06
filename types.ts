
import React from 'react';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Added Message interface to resolve import error in ChatBot.tsx
export interface Message {
  role: 'user' | 'model';
  text: string;
}
