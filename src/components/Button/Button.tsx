import React, { FC, ReactNode } from 'react';
import { Btn, PropsBtn } from './Button.styled';

type PropsButton = PropsBtn & {
  fn: () => void;
  children: ReactNode | string;
};

export const Button: FC<PropsButton> = ({ children, fn, ...props }) => {
  return (
    <Btn type="button" onClick={() => fn()} {...props}>
      {children}
    </Btn>
  );
};
