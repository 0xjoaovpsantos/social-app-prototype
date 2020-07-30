/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import CircularFriendPhoto, { ListStatusProps } from '../CircularFriendPhoto';

import IconAddStatus from '../IconAddStatus';

import api from '../../services/api';

const ListFriendStatus: React.FC = () => {
  const [listStatus, setListStatus] = useState([] as ListStatusProps[]);

  async function getListStatus() {
    const response = await api.get<ListStatus[]>('/status');
    setListStatus(response.data);
  }

  useEffect(() => {
    getListStatus();
  }, []);

  return (
    <View>
      <ScrollView style={style.scroll} horizontal>
        <IconAddStatus />
        {listStatus.map(status => (
          <CircularFriendPhoto
            key={status.id}
            photoUrl={status.photoUrl}
            userName={status.userName}
          />
        ))}
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  scroll: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
});

export default ListFriendStatus;
