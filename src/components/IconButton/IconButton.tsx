import { FC } from 'react';
import * as Styled from './IconButton.styles';
import { IconButtonProps } from './IconButton.types';

export const IconButton: FC<IconButtonProps> = ({
  onClick,
  icon,
  children,
}) => {
  return (
    <Styled.Button onClick={onClick}>
      {icon && <Styled.IconWrapper>{icon}</Styled.IconWrapper>}
      {children}
    </Styled.Button>
  );
};
