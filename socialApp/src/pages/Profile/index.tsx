import React from 'react';
import { Text } from './styles';
import { Container } from './styles';

import HeaderProfile from '../../components/HeaderProfile';
import GalleryImages from '../../components/GalleryImages';

import { ScrollView } from 'react-native-gesture-handler';

const Profile: React.FC = () => {
  return (
    <Container>
      <ScrollView>
        <HeaderProfile />
        <GalleryImages />
      </ScrollView>
    </Container>
  );
};

export default Profile;
