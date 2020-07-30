/* eslint-disable import/no-useless-path-segments */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from './../../routes';

import HeaderProfile, {
  HeaderProfileProps,
} from '../../components/HeaderProfile';
import GalleryImages, {
  GalleryImagesProps,
} from '../../components/GalleryImages';

import { Container, Text } from './styles';

import api from '../../services/api';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type Props = {
  route: ProfileScreenRouteProp;
};

type InfoProfileProps = HeaderProfileProps & GalleryImagesProps;

const Profile: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const [profile, setProfile] = useState({} as InfoProfileProps);

  async function getProfile() {
    const response = await api.get<InfoProfileProps>(`/profile/${id}`);
    setProfile(response.data);
  }

  useEffect(() => {
    getProfile();
  }, [id]);

  return (
    <Container>
      <ScrollView>
        <HeaderProfile data={profile} />
        <GalleryImages data={profile} />
      </ScrollView>
    </Container>
  );
};

export default Profile;
