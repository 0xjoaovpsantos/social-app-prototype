/* eslint-disable global-require */
import React from 'react';
import { Image } from 'react-native';

import { Container, Name } from './styles';

const FriendCard: React.FC = () => (
  <Container>
    <Image
      style={{
        height: 80,
        width: 80,
        resizeMode: 'stretch',
        borderRadius: 100,
      }}
      source={require('../../assets/james.jpeg')}
    />
    <Name>João</Name>
  </Container>
);

export default FriendCard;
