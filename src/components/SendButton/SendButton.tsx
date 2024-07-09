import { FC } from 'react';
import { ReactComponent as SendIcon } from '@assets/send-icon.svg';
import * as Styled from './SendButton.styles';
import { SendButtonProps } from './SendButton.types';

export const SendButton: FC<SendButtonProps> = ({ onClick }) => {
  return (
    <Styled.Button onClick={onClick}>
      <SendIcon />
    </Styled.Button>
  );
};
