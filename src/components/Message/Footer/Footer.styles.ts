import styled from 'styled-components';
import { ReactComponent as DefaultCopyIcon } from '@assets/copy-icon.svg';
import { ReactComponent as DefaultSuccessIcon } from '@assets/success-icon.svg';
import { ReactComponent as DefaultTicketIcon } from '@assets/ticket-icon.svg';

export const MessageFooter = styled.footer`
  display: flex;
`;

export const CopyIcon = styled(DefaultCopyIcon)`
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacing.s2};
`;

export const TicketIcon = styled(DefaultTicketIcon)`
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacing.s1};
`;

export const SuccessIcon = styled(DefaultSuccessIcon)`
  margin-left: ${({ theme }) => theme.spacing.s2};
`;

export const Time = styled.span`
  font-size: ${({ theme }) => theme.font.size.s2};
  color: ${({ theme }) => theme.color.neutral.text.weak};
`;
