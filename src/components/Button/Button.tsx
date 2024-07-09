import { FC } from 'react';
import * as Styled from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({ onClick, icon, children }) => {
  return (
    <Styled.Button onClick={onClick}>
      {icon && <Styled.IconWrapper>{icon}</Styled.IconWrapper>}
      {children}
    </Styled.Button>
  );
};
