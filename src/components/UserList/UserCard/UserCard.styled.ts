import styled from 'styled-components';
import { GoItLogo } from './img';

export const Element = styled.li`
  position: relative;

  background: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoGoIt = styled(GoItLogo)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Line = styled.div`
  position: relative;
  margin-top: -18px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;

    transform: translateY(-50%);

    width: 100%;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const UserPhotoWrapper = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  overflow: hidden;

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #ae7be3,
    inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Img = styled.img`
  width: 62px;
  height: 62px;
`;

export const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;

  &:not(:first-child) {
    margin-top: 16px;
  }
`;
