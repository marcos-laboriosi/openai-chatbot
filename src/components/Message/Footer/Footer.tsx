import { FC } from 'react';
import * as Styled from './Footer.styles';
import { FooterProps } from './Footer.types';

export const Footer: FC<FooterProps> = ({
  repliedTime,
  copiedSuccessfully,
  isRoleAssistant,
  onClickCopy,
}) => {
  return (
    <Styled.MessageFooter>
      <Styled.Time>{repliedTime}</Styled.Time>
      {isRoleAssistant &&
        (copiedSuccessfully ? (
          <Styled.SuccessIcon />
        ) : (
          <Styled.CopyIcon onClick={onClickCopy} />
        ))}
    </Styled.MessageFooter>
  );
};
