import { FC } from 'react';
import { Message } from '@components';
import * as Styled from './ChatLog.styles';
import { ChatLogProps } from './ChatLog.types';

export const ChatLog: FC<ChatLogProps> = ({ messages, onReport }) => {
  return (
    <Styled.Scroll>
      <Styled.ChatLog role='log'>
        {messages.map((message, index) => (
          <Message
            key={index}
            time={message.time}
            role={message.role}
            loading={message.loading}
            onReport={onReport}
          >
            {message.content}
          </Message>
        ))}
      </Styled.ChatLog>
    </Styled.Scroll>
  );
};
