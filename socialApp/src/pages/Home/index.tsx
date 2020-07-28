import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

import HeaderHome from '../../components/HeaderHome';

import PostFeed from '../../components/PostFeed';

const Home: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#7159c1',
      }}
    >
      <HeaderHome />
      <PostFeed />
      <PostFeed />
      <PostFeed />
    </View>
  );
};

export default Home;
