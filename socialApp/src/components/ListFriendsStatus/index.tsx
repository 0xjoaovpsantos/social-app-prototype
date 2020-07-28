/* eslint-disable no-use-before-define */
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import CircularFriendPhoto from '../CircularFriendPhoto';

import IconAddStatus from '../IconAddStatus';

const ListFriendStatus: React.FC = () => (
  <View>
    <ScrollView style={style.scroll} horizontal>
      <IconAddStatus />
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
