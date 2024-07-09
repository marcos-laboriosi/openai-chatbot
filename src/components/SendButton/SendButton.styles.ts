import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: end;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border: none;
  background-color: ${({ theme }) => theme.color.brand.background.default};
  border-radius: ${({ theme }) => theme.border.radius.small};
  margin-left: ${({ theme }) => theme.spacing.s3};
`;
