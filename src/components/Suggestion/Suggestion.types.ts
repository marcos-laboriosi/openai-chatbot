import { ReactNode } from 'react';

export interface SuggestionProps {
  icon: ReactNode;
  text: string;
  onClick: (text: string) => void;
}
