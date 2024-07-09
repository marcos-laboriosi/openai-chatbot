import { MessageRole } from '@components/Message';

export type MessageItem = {
  content: string;
  time: string;
  role: MessageRole;
  loading: boolean;
};

export type Messages = MessageItem[];

export interface ChatLogProps {
  messages: Messages;
}
