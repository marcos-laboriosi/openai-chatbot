import { ChangeEvent } from 'react';
import type { KeyboardEvent } from 'react';
import { SendButton } from '@components';
import * as Styled from './InputBox.styles';
import { InputBoxProps } from './InputBox.types';

export const InputBox = ({
  submit,
  onInput,
  id,
  value,
  placeholder = 'Enter your message...',
}: InputBoxProps) => {
  const handleInput = (event: ChangeEvent<HTMLDivElement>) =>
    onInput(event.currentTarget.innerText);

  const handleEnterPress = (event: KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    submit();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const isEnterKeyPressed = event.key === 'Enter';
    const isShiftKeyPressed = event.shiftKey;

    if (isEnterKeyPressed && !isShiftKeyPressed) handleEnterPress(event);
  };

  return (
    <Styled.SpacingWrapper>
      <Styled.FieldWrapper>
        <Styled.InputBox
          id={id}
          role='textbox'
          contentEditable='plaintext-only'
          onInput={handleInput}
          onKeyDown={handleKeyDown}
        />
        {!value && <Styled.Placeholder>{placeholder}</Styled.Placeholder>}
      </Styled.FieldWrapper>
      <SendButton onClick={submit} />
    </Styled.SpacingWrapper>
  );
};
