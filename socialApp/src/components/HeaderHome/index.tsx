/* eslint-disable no-use-before-define */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import ListFriendsStatus from '../ListFriendsStatus';

import { Title } from './style';

const HeaderHome: React.FC = () => (
  <View
    style={{
      backgroundColor: '#ffffff',
      borderBottomLeftRadius: 32,
      borderBottomRightRadius: 32,
    }}
  >
    <View style={style.header}>
      <Title>Feed</Title>
      <View style={style.icons}>
        <Icon
          name="search1"
          size={28}
          style={{ marginRight: 20 }}
          color="#364d6a"
        />
        <Icon name="message1" size={28} color="#364d6a" />
      </View>
    </View>
    <ListFriendsStatus />
  </View>
);

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
  },
});

export default HeaderHome;
