import styled, { css, keyframes } from 'styled-components';
import {
  ContainerProps,
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
    max-width: -webkit-fill-available;
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
  background-color: ${({ theme }) => theme.color.brand.background.weak};
  color: ${({ theme }) => theme.color.brand.text.strong};
  width: 542px;
  max-width: -webkit-fill-available;

  @media (max-width: 872px) {
    width: 334px;
  }
`;

const sendedMessageStyle = css`
  background-color: ${({ theme }) => theme.color.brand.background.default};
  color: ${({ theme }) => theme.color.neutral.text.inverted};
  width: 400px;
  max-width: -webkit-fill-available;

  @media (max-width: 872px) {
    width: 238px;
  }
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

export const Loading = styled(DefaultLoading)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: initial;
  margin-left: ${({ theme }) => theme.spacing.s4};
`;
