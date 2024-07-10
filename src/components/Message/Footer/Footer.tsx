import { FC } from 'react';
import * as Styled from './Footer.styles';
import { FooterProps } from './Footer.types';

export const Footer: FC<FooterProps> = ({
  repliedTime,
  copiedSuccessfully,
  isRoleAssistant,
  onCopy,
  onReport,
}) => {
  return (
    <Styled.MessageFooter>
      <Styled.Time>{repliedTime}</Styled.Time>
      {isRoleAssistant && (
        <>
          {copiedSuccessfully ? (
            <Styled.SuccessIcon />
          ) : (
            <Styled.CopyIcon onClick={onCopy} />
          )}
          <Styled.TicketIcon onClick={onReport} />
        </>
      )}
    </Styled.MessageFooter>
  );
};
