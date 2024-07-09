import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { ChatLog, InputBox, Suggestion } from '@components';
import { sendUserMessage, store } from '@store/messages';
import { RootState } from '@store/types';
import { clearInputBox } from '@utils/chat';
import { ReactComponent as ArtificialIntelligenceIcon } from '@assets/ai-icon.svg';
import { ReactComponent as EngineIcon } from '@assets/engine-icon.svg';
import { ReactComponent as FunctionIcon } from '@assets/function-icon.svg';
import { useMessageHandlerAI } from '@hooks/useMessageHandlerAI';
import { ChatProps } from './Chat.types';
import * as Styled from './Chat.styles';

export const Chat: FC<ChatProps> = () => {
  const [inputBoxValue, setInputBoxValue] = useState('');
  const messages = useSelector((state: RootState) => state.messages);
  const isMessagesEmpty = !messages.length;

  useMessageHandlerAI(messages);

  const handleSubmit = () => {
    store.dispatch(sendUserMessage(inputBoxValue));
    clearInputBox();
  };

  const handleClickSuggestion = (text: string) =>
    store.dispatch(sendUserMessage(text));

  return (
    <Styled.Container $isMessagesEmpty={isMessagesEmpty} role='main'>
      <ChatLog messages={messages} />
      {isMessagesEmpty && (
        <Styled.SuggestionWrapper>
          <Suggestion
            icon={<ArtificialIntelligenceIcon />}
            text='Me diga sobre a diferença de um modelo de linguagem generalista e um modelo especializado.'
            onClick={handleClickSuggestion}
          />
          <Suggestion
            icon={<EngineIcon />}
            text='Poderia me explicar melhor o processo de Fine-Tuning e um modelo de linguagem?'
            onClick={handleClickSuggestion}
          />
          <Suggestion
            icon={<FunctionIcon />}
            text='O que seria uma function e como ela impacta uma inteligência artificial?'
            onClick={handleClickSuggestion}
          />
        </Styled.SuggestionWrapper>
      )}
      <InputBox
        id='input-box'
        onInput={setInputBoxValue}
        submit={handleSubmit}
        value={inputBoxValue}
      />
    </Styled.Container>
  );
};
