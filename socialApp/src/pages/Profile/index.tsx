/* eslint-disable import/no-useless-path-segments */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { YellowBox } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Spinner from '../../components/Spinner';

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

YellowBox.ignoreWarnings(['']);

const Profile: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const [profile, setProfile] = useState({} as InfoProfileProps);
  const [loading, setLoading] = useState(true);

  async function getProfile() {
    const response = await api.get<InfoProfileProps>(`/profile/${id}`);
    setProfile(response.data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getProfile();
  }, [id]);

  return loading || id !== profile.id ? (
    <Spinner />
  ) : (
    <Container>
      <ScrollView>
        <HeaderProfile data={profile} />
        <GalleryImages data={profile} />
      </ScrollView>
    </Container>
  );
};

export default Profile;
