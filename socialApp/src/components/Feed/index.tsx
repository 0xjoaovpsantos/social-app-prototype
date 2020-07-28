import React from 'react';
import { View } from 'react-native';

import PostFeed from '../PostFeed';

const Feed: React.FC = () => (
  <View>
    <PostFeed />
    <PostFeed />
    <PostFeed />
    <PostFeed />
    <PostFeed />
    <PostFeed />
  </View>
);

export default Feed;
