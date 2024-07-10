import styled from 'styled-components';

export const TextArea = styled.textarea`
  min-height: 68px;
  border-style: solid;
  padding: ${({ theme }) => theme.spacing.s2} ${({ theme }) => theme.spacing.s4};
  border-radius: ${({ theme }) => theme.border.radius.small};
  border-width: ${({ theme }) => theme.border.width.thinner};
  border-color: ${({ theme }) => theme.color.neutral.border.default};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.brand.text.weak};
    opacity: 1;
  }
`;

export const Label = styled.label`
  margin-bottom: ${({ theme }) => theme.spacing.s1};
`;
