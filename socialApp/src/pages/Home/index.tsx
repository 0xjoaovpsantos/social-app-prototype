import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native';

import FriendCard from '../../components/CircularFriendPhoto';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <LinearGradient
      colors={['#275DC2', '#ffffff', '#ffffff']}
      style={{ flex: 1 }}
    >
      <FriendCard />
    </LinearGradient>
  );
};

export default Home;
