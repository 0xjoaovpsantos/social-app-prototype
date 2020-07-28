import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

import ListFriendsStatus from '../../components/ListFriendsStatus';

const Home: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F1F1F3',
      }}
    >
      <ListFriendsStatus />
    </View>
  );
};

export default Home;
