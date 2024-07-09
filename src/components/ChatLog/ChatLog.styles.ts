import styled from 'styled-components';

export const Scroll = styled.div`
  margin-top: ${({ theme }) => theme.spacing.s12};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scroll-behavior: smooth;
  width: 832px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  flex-direction: column-reverse;
  overflow-anchor: auto !important;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 872px) {
    width: auto;
  }
`;

export const ChatLog = styled.div`
  display: flex;
  flex-direction: column;
`;
