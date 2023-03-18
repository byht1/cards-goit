import styled from 'styled-components';
import { marginAndPaddlingProps, TMarginAndPaddingProps } from 'helpers';

export const WrapperContainer = styled.div<TMarginAndPaddingProps>`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 480px) and (max-width: 767.9px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 480px;
  }
  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }
  @media (min-width: 1440px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 1280px;
  }

  ${p => marginAndPaddlingProps(p)}
`;
