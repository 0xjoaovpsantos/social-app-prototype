import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner: React.FC = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" color="#999" />
  </View>
);

export default Spinner;
