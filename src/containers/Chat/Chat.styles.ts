import styled, { css } from 'styled-components';
import background from '@assets/background.webp';
import backgroundMobile from '@assets/background-mobile.webp';
import { ContainerProps } from './Chat.types';

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  height: calc(100% - 48px);
  justify-content: end;
  align-items: center;

  ${({ theme, $isMessagesEmpty }) =>
    $isMessagesEmpty &&
    css`
      background-image: url(${background});
      background-repeat: no-repeat;
      background-position: 50% calc(50% - ${theme.spacing.s16});
    `}

  @media (max-width: 872px) {
    background-image: url(${backgroundMobile});
    background-position: 50% calc(50% - 100px);
  }
`;

export const SuggestionWrapper = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.s6};

  & > *:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing.s2};
  }

  @media (max-width: 872px) {
    overflow-x: scroll;
    margin: ${({ theme }) => theme.spacing.s2};
    width: -webkit-fill-available;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
