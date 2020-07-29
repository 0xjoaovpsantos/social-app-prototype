import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import FriendProfile from '../pages/FriendProfile';

import Icon from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tabs = createBottomTabNavigator();

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
      name="FriendProfile"
      component={FriendProfile}
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
    />
  </Tabs.Navigator>
);

export default Routes;
