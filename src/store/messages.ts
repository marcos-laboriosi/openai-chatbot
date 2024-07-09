import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { getCurrentTime } from '@utils/time';
import { MessagesInitialState } from './types';

const initialState: MessagesInitialState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    sendUserMessage: (state, action: PayloadAction<string>) => {
      state.messages = [
        ...state.messages,
        {
          content: action.payload,
          role: 'user',
          loading: false,
          time: getCurrentTime(),
        },
        {
          content: '',
          role: 'assistant',
          loading: true,
          time: getCurrentTime(),
        },
      ];
    },
    sendAssistantMessage: (state, action: PayloadAction<string>) => {
      state.messages = [
        ...state.messages.slice(0, -1),
        {
          loading: false,
          content: action.payload,
          role: 'assistant',
          time: getCurrentTime(),
        },
      ];
    },
    clearMessages: (state) => {
      state.messages = initialState.messages;
    },
  },
});

export const { sendUserMessage, sendAssistantMessage, clearMessages } =
  messagesSlice.actions;

export const store = configureStore({
  reducer: messagesSlice.reducer,
});
