/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable global-require */
import React from 'react';
import { Text, Image, View } from 'react-native';
import {
  Container,
  Header,
  InfoUser,
  Name,
  PublicationTime,
  Footer,
  Number,
  Body,
} from './style';
import Icon from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export interface PostFeedProps {
  userPhoto: string;
  userName: string;
  publicationTime: string;
  photoUrl: string;
  numberViews: number;
  numberLikes: number;
  numberComments: number;
}

interface Props {
  data: PostFeedProps;
}

const PostFeed: React.FC<Props> = ({ data }) => (
  <Container>
    <Header>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{
            height: 60,
            width: 60,
            resizeMode: 'stretch',
            borderRadius: 100,
          }}
          source={{ uri: data.userPhoto }}
        />
        <InfoUser>
          <Name>{data.userName}</Name>
          <PublicationTime>{data.publicationTime}</PublicationTime>
        </InfoUser>
      </View>
      <Icon name="more-horizontal" size={20} color="#7159c1" />
    </Header>
    <Body>
      <Image
        style={{
          flex: 1,
          width: undefined,
          height: undefined,
        }}
        source={{ uri: data.photoUrl }}
      />
    </Body>
    <Footer>
      <View style={{ flexDirection: 'row' }}>
        <IconAntDesign
          name="eye"
          size={20}
          style={{ marginRight: 10 }}
          color="#7159c1"
        />
        <Number>{data.numberViews}</Number>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <IconAntDesign
          name="heart"
          style={{ marginRight: 10 }}
          size={20}
          color="#7159c1"
        />
        <Number>{data.numberLikes}</Number>
        <IconAntDesign
          name="message1"
          style={{ marginLeft: 20, marginRight: 10 }}
          size={20}
          color="#7159c1"
        />
        <Number>{data.numberComments}</Number>
      </View>
    </Footer>
  </Container>
);

export default PostFeed;
