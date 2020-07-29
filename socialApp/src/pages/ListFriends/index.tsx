import React from 'react';
import { Text } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

import CardFriends from '../../components/CardFriend';

const ListFriends: React.FC = () => {
  return (
    <ScrollView>
      <Text>Friends</Text>
      <CardFriends />
      <CardFriends />
      <CardFriends />
      <CardFriends />
      <CardFriends />
      <CardFriends />
      <CardFriends />
      <CardFriends />
    </ScrollView>
  );
};

export default ListFriends;
