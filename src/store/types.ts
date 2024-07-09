import { Messages } from '@components';
import { store } from './messages';

export interface MessagesInitialState {
  messages: Messages;
}

export type RootState = ReturnType<typeof store.getState>;
