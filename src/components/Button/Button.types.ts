import { MouseEventHandler, ReactNode } from 'react';

export interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  icon?: ReactNode;
}
