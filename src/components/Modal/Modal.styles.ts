import styled from 'styled-components';

export const RelativeWrapper = styled.div`
  position: relative;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.neutral.background.inverted};
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.2;
`;

export const Modal = styled.div`
  width: 438px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  border-radius: ${({ theme }) => theme.border.radius.small};
  border-width: ${({ theme }) => theme.border.width.thinner};
  border-color: ${({ theme }) => theme.color.neutral.border.default};
  font-size: ${({ theme }) => theme.font.size.s3};
  background-color: ${({ theme }) => theme.color.brand.background.weakest};
  color: ${({ theme }) => theme.color.brand.text.default};

  @media (max-width: 872px) {
    width: 316px;
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.s4} ${({ theme }) => theme.spacing.s5};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-style: solid;
  border-bottom-width: ${({ theme }) => theme.border.width.thinner};
  border-bottom-color: ${({ theme }) => theme.color.neutral.border.default};
  padding: ${({ theme }) => theme.spacing.s4} ${({ theme }) => theme.spacing.s5};

  & > span {
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }

  & > svg {
    cursor: pointer;
  }
`;

export const Footer = styled.footer`
  display: flex;
  border-top-style: solid;
  flex-direction: row-reverse;
  border-top-width: ${({ theme }) => theme.border.width.thinner};
  border-top-color: ${({ theme }) => theme.color.neutral.border.default};
  padding: ${({ theme }) => theme.spacing.s4} ${({ theme }) => theme.spacing.s5};

  & > button:last-child {
    margin-right: ${({ theme }) => theme.spacing.s2};
  }
`;
