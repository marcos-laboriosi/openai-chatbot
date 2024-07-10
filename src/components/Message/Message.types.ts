export type MessageRole = 'user' | 'assistant';

export interface MessageProps {
  children: string;
  time: string;
  role: MessageRole;
  loading: boolean;
  onReport: () => void;
}

export interface ContainerProps {
  $isRoleAssistant: boolean;
}

export interface MessageWrapperProps extends ContainerProps {}

export interface StyledMessageProps extends ContainerProps {}
