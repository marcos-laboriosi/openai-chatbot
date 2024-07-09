import styled from 'styled-components';

export const FieldWrapper = styled.div`
  position: relative;
  height: fit-content;
  width: 100%;
  background: ${({ theme }) => theme.color.neutral.background.weak};
`;

export const InputBox = styled.div`
  outline-style: none;
  overflow-y: auto;
  max-height: 96px;
  color: ${({ theme }) => theme.color.neutral.text.weak};

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: ${({ theme }) => theme.border.radius.large};
    background: ${({ theme }) => theme.color.neutral.background.default};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.neutral.background.strong};
    background-clip: content-box;
    border: 1.5px solid transparent;
    border-radius: ${({ theme }) => theme.border.radius.large};
  }
`;

export const Placeholder = styled.p`
  position: absolute;
  user-select: none;
  pointer-events: none;
  white-space: nowrap;
  left: 0;
  top: 0;
  color: ${({ theme }) => theme.color.neutral.text.weak};
`;

export const SpacingWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 832px;
  margin-bottom: ${({ theme }) => theme.spacing.s6};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  background: ${({ theme }) => theme.color.neutral.background.weak};
  padding: ${({ theme }) => `${theme.spacing.s2} ${theme.spacing.s4}`};

  @media (max-width: 872px) {
    width: -webkit-fill-available;
    margin-left: ${({ theme }) => theme.spacing.s2};
    margin-right: ${({ theme }) => theme.spacing.s2};
    margin-bottom: ${({ theme }) => theme.spacing.s6};
  }
`;
