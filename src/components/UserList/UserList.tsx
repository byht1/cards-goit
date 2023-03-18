import React, { FC, useState } from 'react';
import usersInstantsData from '../../usersInstantsData.json';
import { UserCard } from './UserCard';
import { List } from './UserList.styled';

type PropsUserList = {};

export const UserList: FC<PropsUserList> = () => {
  const [users] = useState(usersInstantsData);
  return (
    <List>
      {users.map(user => {
        return <UserCard key={user.id} {...user} />;
      })}
    </List>
  );
};
