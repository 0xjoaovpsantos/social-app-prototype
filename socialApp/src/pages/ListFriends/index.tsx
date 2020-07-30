import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from './styles';

import CardFriends, { CardFriendProps } from '../../components/CardFriend';
import api from '../../services/api';

const ListFriends: React.FC = () => {
  const [cardFriend, setCardFriend] = useState([] as CardFriendProps[]);

  async function getCardFriend() {
    const response = await api.get<CardFriendProps[]>('friends');
    setCardFriend(response.data);
  }

  useEffect(() => {
    getCardFriend();
  }, []);

  return (
    <ScrollView>
      <Text>Friends</Text>
      {cardFriend.map(card => (
        <CardFriends data={card} />
      ))}
    </ScrollView>
  );
};

export default ListFriends;
