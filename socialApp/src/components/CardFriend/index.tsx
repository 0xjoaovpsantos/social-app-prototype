import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { Container, Info, Name, Status } from './styles';
import { useNavigation } from '@react-navigation/native';

const CardFriend: React.FC = () => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight onPress={() => navigation.navigate('Profile')}>
      <Container>
        <Image
          style={{ width: 80, height: 80 }}
          source={require('../../assets/james.jpeg')}
        />
        <Info>
          <Name>Joao</Name>
          <Status>Visto pela ultima vez as 13:30</Status>
        </Info>
      </Container>
    </TouchableHighlight>
  );
};

export default CardFriend;
