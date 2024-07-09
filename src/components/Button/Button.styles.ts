import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  height: 30px;
  border-radius: ${({ theme }) => theme.border.radius.xlarge};
  padding: 0 ${({ theme }) => theme.spacing.s2};
  color: ${({ theme }) => theme.color.neutral.text.default};
  font-size: ${({ theme }) => theme.font.size.s2};

  &:hover {
    background-color: ${({ theme }) => theme.color.neutral.background.weak};
    & > div {
      color: ${({ theme }) => theme.color.neutral.text.default};
    }
  }

  &:active {
    background: none;
    color: ${({ theme }) => theme.color.neutral.text.strong};
    border-width: ${({ theme }) => theme.border.width.thinner};
    border-color: ${({ theme }) => theme.color.neutral.border.weak};
    border-style: solid;
    & > div {
      color: ${({ theme }) => theme.color.neutral.text.strong};
    }
  }
`;

export const IconWrapper = styled.div`
  margin-right: ${({ theme }) => theme.spacing.s1};
  color: ${({ theme }) => theme.color.neutral.icon.weak};
`;
