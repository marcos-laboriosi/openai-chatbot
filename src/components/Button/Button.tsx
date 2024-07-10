import { FC } from 'react';
import * as Styled from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({ onClick, children, variant }) => {
  const isPrimary = variant === 'primary';

  return (
    <Styled.Button onClick={onClick} $isPrimary={isPrimary}>
      {children}
    </Styled.Button>
  );
};
