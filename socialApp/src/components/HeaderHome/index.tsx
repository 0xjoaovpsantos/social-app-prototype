/* eslint-disable no-use-before-define */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import AppColors from '../../utils/colors';

import ListFriendsStatus from '../ListFriendsStatus';

import { Title } from './style';

const HeaderHome: React.FC = () => (
  <View
    style={{
      backgroundColor: AppColors.primaryColor,
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
          color={AppColors.secondColor}
        />
        <Icon name="message1" size={28} color={AppColors.secondColor} />
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
