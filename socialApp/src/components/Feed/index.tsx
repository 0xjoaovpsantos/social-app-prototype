import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import PostFeed, { PostFeedProps } from '../PostFeed';
import api from '../../services/api';

const Feed: React.FC = () => {
  const [postFeed, setPostFeed] = useState([] as PostFeedProps[]);

  async function getPostFeed() {
    const response = await api.get<PostFeedProps[]>('/feed');
    setPostFeed(response.data);
  }

  useEffect(() => {
    getPostFeed();
  }, []);

  return (
    <View>
      {postFeed.map(post => (
        <PostFeed data={post} />
      ))}
    </View>
  );
};

export default Feed;
