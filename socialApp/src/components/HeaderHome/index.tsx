/* eslint-disable no-use-before-define */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AppColors from '../../utils/colors';
import ListFriendsStatus from '../ListFriendsStatus';
import { Header, Title } from './style';

const HeaderHome: React.FC = () => (
  <View
    style={{
      backgroundColor: AppColors.primaryColor,
      borderBottomLeftRadius: 32,
      borderBottomRightRadius: 32,
    }}
  >
    <Header>
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
    </Header>
    <ListFriendsStatus />
  </View>
);

const style = StyleSheet.create({
  icons: {
    flexDirection: 'row',
  },
});

export default HeaderHome;
