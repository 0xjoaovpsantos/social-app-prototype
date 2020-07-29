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

const HeaderProfile: React.FC = () => (
  <Container>
    <Header>
      <Image
        style={{ width: 80, height: 80 }}
        source={require('../../assets/james.jpeg')}
      />
      <InfoPeople>
        <Name>Joao</Name>
        <Email>joao@joao.joao</Email>
      </InfoPeople>
    </Header>
    <SocialInfos>
      <Stats>
        <Number>245</Number>
        <Description>Following</Description>
      </Stats>
      <Stats>
        <Number>1358</Number>
        <Description>Followers</Description>
      </Stats>
      <Stats>
        <Number>82</Number>
        <Description>Shots</Description>
      </Stats>
    </SocialInfos>
  </Container>
);

export default HeaderProfile;
