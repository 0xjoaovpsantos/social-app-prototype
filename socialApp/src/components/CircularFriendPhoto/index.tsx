/* eslint-disable react/prop-types */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { Image } from 'react-native';
import { Container, Name } from './styles';

export interface ListStatusProps {
  id?: number;
  photoUrl: string;
  userName: string;
}

interface Props {
  data: ListStatusProps;
}

const FriendCard: React.FC<Props> = ({ data }) => (
  <Container>
    <Image
      style={{
        height: 80,
        width: 80,
        resizeMode: 'stretch',
        borderRadius: 100,
      }}
      source={{ uri: data.photoUrl }}
    />
    <Name>{data.userName}</Name>
  </Container>
);

export default FriendCard;
