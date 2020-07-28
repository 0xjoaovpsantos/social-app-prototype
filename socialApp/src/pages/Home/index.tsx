/* eslint-disable import/order */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

import HeaderHome from '../../components/HeaderHome';

import Feed from '../../components/Feed';
import { ScrollView } from 'react-native-gesture-handler';

const Home: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F1F1F3',
      }}
    >
      <ScrollView>
        <HeaderHome />
        <Feed />
      </ScrollView>
    </View>
  );
};

export default Home;
