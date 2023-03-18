import { FC, ReactNode } from 'react';
import { TMarginAndPaddingProps } from 'helpers';
import { WrapperContainer } from './Container.styled';

type PropsContainer = TMarginAndPaddingProps & {
  children: ReactNode;
};

export const Container: FC<PropsContainer> = ({ children, ...props }) => {
  return <WrapperContainer {...props}>{children}</WrapperContainer>;
};
