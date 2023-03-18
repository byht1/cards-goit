import React, { FC, useLayoutEffect, useState } from 'react';
import { Box } from 'components/Box';
import { UserButton } from '../UserButton';
import { messageImg } from './img';
import { Element, Img, Line, LogoGoIt, Text, UserPhotoWrapper } from './UserCard.styled';
import { numberFormatting } from 'helpers';

type PropsUserCard = {
  id: number;
  user: string;
  tweets: number;
  followers: number;
  avatar: string;
};

export const UserCard: FC<PropsUserCard> = ({ followers, id, avatar, tweets }) => {
  const [getAction, setGetAction] = useState(
    () => !!JSON.parse(window.localStorage.getItem(id.toString()) ?? 'false')
  );

  useLayoutEffect(() => {
    localStorage.setItem(id.toString(), JSON.stringify(getAction));
  }, [getAction, id]);

  const formatToFollowers = numberFormatting(getAction ? followers + 1 : followers);
  return (
    <Element>
      <Box pt="28px" pl="38px" pr="38px" pb="18px">
        <LogoGoIt />
        <img src={messageImg} alt="message" />
      </Box>
      <Line>
        <UserPhotoWrapper>
          <Img src={avatar} alt="avatar" width={62} height={62} />
        </UserPhotoWrapper>
      </Line>

      <Box
        pt="26px"
        pl="38px"
        pr="38px"
        pb="36px"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Text>{tweets} tweets</Text>
        <Text>{formatToFollowers} Followers</Text>
        <UserButton isAction={getAction} setAction={setGetAction} id={id} />
      </Box>
    </Element>
  );
};
