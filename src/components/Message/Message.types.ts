import { ReactNode } from 'react';

export type MessageRole = 'user' | 'assistant';

export interface MessageProps {
  children: ReactNode;
  time: string;
  role: MessageRole;
  loading: boolean;
}

export interface ContainerProps {
  $isRoleAssistant: boolean;
}
export interface LoadingProps {
  $isFullyLoaded: boolean;
}

export interface MessageWrapperProps extends ContainerProps {}

export interface StyledMessageProps extends ContainerProps {}
