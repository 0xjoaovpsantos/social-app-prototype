/* eslint-disable no-use-before-define */
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import CircularFriendPhoto from '../CircularFriendPhoto';

const ListFriendStatus: React.FC = () => (
  <View>
    <ScrollView style={style.scroll} horizontal>
      <CircularFriendPhoto />
      <CircularFriendPhoto />
      <CircularFriendPhoto />
      <CircularFriendPhoto />
      <CircularFriendPhoto />
      <CircularFriendPhoto />
      <CircularFriendPhoto />
      <CircularFriendPhoto />
    </ScrollView>
  </View>
);
const style = StyleSheet.create({
  scroll: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
});

export default ListFriendStatus;
