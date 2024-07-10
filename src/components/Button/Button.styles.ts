import styled, { css } from 'styled-components';
import { StyledButtonProps } from './Button.types';

const primaryButtonSnippet = css`
  background-color: ${({ theme }) => theme.color.brand.background.default};
  color: ${({ theme }) => theme.color.brand.text.weakest};
`;

const secondaryButtonSnippet = css`
  background-color: ${({ theme }) => theme.color.brand.background.weakest};
  color: ${({ theme }) => theme.color.brand.text.default};
  border-width: ${({ theme }) => theme.border.width.thinner};
  border-color: ${({ theme }) => theme.color.neutral.border.default};
  border-style: solid;
`;

export const Button = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  height: 36px;
  border-radius: ${({ theme }) => theme.border.radius.small};
  padding: 0 ${({ theme }) => theme.spacing.s4};
  font-size: ${({ theme }) => theme.font.size.s3};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  ${({ $isPrimary }) =>
    $isPrimary ? primaryButtonSnippet : secondaryButtonSnippet}

  &:hover {
    opacity: 0.9;
  }
`;
