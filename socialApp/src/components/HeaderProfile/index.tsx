/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  InfoPeople,
  Name,
  Email,
  SocialInfos,
  Stats,
  Number,
  Description,
} from './styles';

export interface HeaderProfileProps {
  id: number;
  userPhoto: string;
  userName: string;
  userEmail: string;
  following: number;
  followers: number;
  numberPhotos: string;
}

interface Props {
  data: HeaderProfileProps;
}

const HeaderProfile: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Header>
        <Image
          style={{ width: 80, height: 80 }}
          source={{ uri: data.userPhoto }}
        />
        <InfoPeople>
          <Name>{data.userName}</Name>
          <Email>{data.userEmail}</Email>
        </InfoPeople>
      </Header>
      <SocialInfos>
        <Stats>
          <Number>{data.following}</Number>
          <Description>Following</Description>
        </Stats>
        <Stats>
          <Number>{data.followers}</Number>
          <Description>Followers</Description>
        </Stats>
        <Stats>
          <Number>{data.numberPhotos}</Number>
          <Description>Photos</Description>
        </Stats>
      </SocialInfos>
    </Container>
  );
};

export default HeaderProfile;
