import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { ChatLog, InputBox } from '@components';
import { sendUserMessage, store } from '@store/messages';
import { RootState } from '@store/types';
import { clearInputBox } from '@utils/chat';
import { useMessageHandlerAI } from '@hooks/useMessageHandlerAI';
import { ChatProps } from './Chat.types';
import * as Styled from './Chat.styles';

export const Chat: FC<ChatProps> = () => {
  const [inputBoxValue, setInputBoxValue] = useState('');
  const messages = useSelector((state: RootState) => state.messages);
  const isMessagesEmpty = !messages.length;

  useMessageHandlerAI(messages);

  const handleSubmit = async () => {
    store.dispatch(sendUserMessage(inputBoxValue));
    clearInputBox();
  };

  return (
    <Styled.Container $isMessagesEmpty={isMessagesEmpty} role='main'>
      <ChatLog messages={messages} />
      <InputBox
        id='input-box'
        onInput={setInputBoxValue}
        submit={handleSubmit}
        value={inputBoxValue}
      />
    </Styled.Container>
  );
};
