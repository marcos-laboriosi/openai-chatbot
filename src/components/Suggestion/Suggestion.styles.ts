import styled from 'styled-components';

export const Container = styled.div`
  max-width: 270px;
  border-style: solid;
  user-select: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.brand.background.weakest};
  border-radius: ${({ theme }) => theme.border.radius.small};
  border-width: ${({ theme }) => theme.border.width.thinner};
  border-color: ${({ theme }) => theme.color.neutral.border.default};
  padding: ${({ theme }) => theme.spacing.s4};

  @media (max-width: 872px) {
    min-width: 205px;
  }
`;

export const Text = styled.p`
  margin-top: ${({ theme }) => theme.spacing.s1};
  font-size: ${({ theme }) => theme.font.size.s3};
  color: ${({ theme }) => theme.color.neutral.text.default};
  line-height: ${({ theme }) => theme.font.lineHeight.large};
`;
