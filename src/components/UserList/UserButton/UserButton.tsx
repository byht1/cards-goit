import React, { FC } from 'react';
import { Button } from 'components/Button';

type PropsUserButton = {
  id: number | string;
  isAction: boolean;
  setAction: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserButton: FC<PropsUserButton> = ({ id, isAction, setAction }) => {
  const actionsClick = () => {
    console.log(id);
    setAction(prev => !prev);
  };

  return (
    <Button fn={actionsClick} active={isAction} mt={26}>
      {isAction ? 'Following' : 'Follow'}
    </Button>
  );
};
