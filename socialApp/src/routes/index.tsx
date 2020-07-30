import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import ListFriends from '../pages/ListFriends';

export type RootStackParamList = {
  Home: undefined;
  ListFriends: undefined;
  Profile: { id: number };
};

const Tabs = createBottomTabNavigator<RootStackParamList>();

const Routes: React.FC = () => (
  <Tabs.Navigator>
    <Tabs.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: () => <Icon name="home" size={20} color="#364d6a" />,
      }}
    />
    <Tabs.Screen
      name="ListFriends"
      component={ListFriends}
      options={{
        tabBarIcon: () => (
          <IconMaterialIcons name="tag-faces" size={20} color="#364d6a" />
        ),
      }}
    />
    <Tabs.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: () => (
          <IconAntDesign name="profile" size={20} color="#364d6a" />
        ),
      }}
      initialParams={{ id: 4 }}
    />
  </Tabs.Navigator>
);

export default Routes;
