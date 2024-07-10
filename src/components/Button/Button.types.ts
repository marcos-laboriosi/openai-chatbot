import { MouseEventHandler, ReactNode } from 'react';

export interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

export interface StyledButtonProps {
  $isPrimary: boolean;
}
