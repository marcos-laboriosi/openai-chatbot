import OpenAI from 'openai';
import { useEffect } from 'react';
import { sendAssistantMessage, store } from '@store/messages';
import { Messages } from '@components';

const openai = new OpenAI({
  dangerouslyAllowBrowser: true,
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

export const useMessageHandlerAI = (messages: Messages) => {
  useEffect(() => {
    if (messages.at(-1)?.loading) {
      const messagesWithoutTime = messages.map(({ role, content }) => ({
        role,
        content,
      }));

      openai.beta.chat.completions
        .stream({
          model: 'gpt-3.5-turbo',
          messages: messagesWithoutTime,
        })
        .on('message', (message) => {
          store.dispatch(sendAssistantMessage(message.content as string));
        });
    }
  }, [messages]);
};
