import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

import HeaderHome from '../../components/HeaderHome';

const Home: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#7159c1',
      }}
    >
      <HeaderHome />
    </View>
  );
};

export default Home;
