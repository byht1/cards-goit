import { marginAndPaddlingProps, TMarginAndPaddingProps } from 'helpers';
import styled from 'styled-components';

export type PropsBtn = TMarginAndPaddingProps & {
  active?: boolean;
};

export const Btn = styled.button<PropsBtn>`
  padding: 14px 28px;

  border-radius: 10px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  text-align: center;

  background-color: ${p => (p.active ? '#5CD3A8' : '#EBD8FF')};
  color: #373737;

  transition: 250ms linear;

  ${p => marginAndPaddlingProps(p)}

  &:hover {
    /* background-color: ${p => (p.active ? '#EBD8FF' : '#5CD3A8')}; */
    background-color: #d3a9ff;
  }
`;
