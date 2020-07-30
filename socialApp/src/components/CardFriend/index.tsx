/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Info, Name, Status } from './styles';

export interface CardFriendProps {
  id: number;
  photoUrl: string;
  userName: string;
  status: string;
}

interface Props {
  data: CardFriendProps;
}

const CardFriend: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate('Profile', {
          id: data.id,
        })
      }
    >
      <Container>
        <Image
          style={{ width: 80, height: 80 }}
          source={{ uri: data.photoUrl }}
        />
        <Info>
          <Name>{data.userName}</Name>
          <Status>{data.status}</Status>
        </Info>
      </Container>
    </TouchableHighlight>
  );
};

export default CardFriend;
