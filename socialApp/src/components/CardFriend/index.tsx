import React from 'react';
import { Image } from 'react-native';
import { Container, Info, Name, Status } from './styles';

const CardFriend: React.FC = () => (
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
);

export default CardFriend;
