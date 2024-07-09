import styled, { css, keyframes } from 'styled-components';
import {
  ContainerProps,
  LoadingProps,
  MessageWrapperProps,
  StyledMessageProps,
} from './Message.types';
import { ReactComponent as DefaultLoading } from '@assets/loading.svg';

const fade = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`;

export const Container = styled.div<ContainerProps>`
  ${({ theme, $isRoleAssistant }) => css`
    display: flex;
    margin-bottom: ${theme.spacing.s3};
    justify-content: ${$isRoleAssistant ? 'start' : 'end'};
    flex-direction: ${$isRoleAssistant ? 'row-reverse' : 'row'};
    animation-name: ${fade};
    animation-duration: ${$isRoleAssistant ? '0.5s' : '0'};
    animation-timing-function: linear;
  `}
`;

const receivingAnimation = keyframes`
 0% { opacity: 0; transform: translateX(10px); }
 100% { opacity: 1; transform: translateX(0); }
`;

export const MessageWrapper = styled.div<MessageWrapperProps>`
  ${({ theme, $isRoleAssistant }) => css`
    display: flex;
    flex-direction: column;
    align-items: ${$isRoleAssistant ? 'start' : 'end'};
    margin-right: ${theme.spacing.s2};
    animation-name: ${receivingAnimation};
    animation-duration: ${$isRoleAssistant ? '0.5s' : '0'};
    animation-timing-function: linear;
  `}
`;

const receivedMessageStyle = css`
  background-color: ${({ theme }) => theme.color.brand.background.weakest};
  color: ${({ theme }) => theme.color.brand.text.default};
  max-width: 542px;
`;

const sendedMessageStyle = css`
  background-color: ${({ theme }) => theme.color.brand.background.default};
  color: ${({ theme }) => theme.color.neutral.text.inverted};
  max-width: 400px;
`;

export const Message = styled.div<StyledMessageProps>`
  ${({ theme, $isRoleAssistant }) => css`
    padding: ${theme.spacing.s2} ${theme.spacing.s3};
    margin-bottom: ${theme.spacing.s1};
    border-radius: ${theme.border.radius.small};
    font-size: ${theme.font.size.s3};

    ${$isRoleAssistant ? receivedMessageStyle : sendedMessageStyle}
  `}
`;

export const Time = styled.span`
  font-size: ${({ theme }) => theme.font.size.s2};
  color: ${({ theme }) => theme.color.neutral.text.weak};
`;

export const Loading = styled(DefaultLoading)<LoadingProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: initial;
  margin-left: ${({ theme }) => theme.spacing.s4};
`;
