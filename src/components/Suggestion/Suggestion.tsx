import { FC } from 'react';
import * as Styled from './Suggestion.styles';
import { SuggestionProps } from './Suggestion.types';

export const Suggestion: FC<SuggestionProps> = ({ icon, text, onClick }) => (
  <Styled.Container onClick={() => onClick(text)}>
    {icon}
    <Styled.Text>{text}</Styled.Text>
  </Styled.Container>
);
