import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import FriendProfile from '../pages/FriendProfile';

const Pages = createStackNavigator();

const Routes: React.FC = () => (
  <Pages.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Pages.Screen name="Home" component={Home} />
    <Pages.Screen name="Profile" component={Profile} />
    <Pages.Screen name="FriendProfile" component={FriendProfile} />
  </Pages.Navigator>
);

export default Routes;
