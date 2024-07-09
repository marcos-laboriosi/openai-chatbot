import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 ${({ theme }) => theme.spacing.s8};
  border-bottom-width: ${({ theme }) => theme.border.width.thinner};
  border-bottom-color: ${({ theme }) => theme.color.neutral.border.default};
  border-bottom-style: solid;
`;
