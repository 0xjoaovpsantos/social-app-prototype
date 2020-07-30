import styled from 'styled-components/native';
import AppColors from '../../utils/colors';

export const Container = styled.View`
  margin: 20px;
  background-color: ${AppColors.primaryColor};
  border-radius: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
`;

export const InfoUser = styled.View`
  justify-content: center;
`;

export const Name = styled.Text`
  font-weight: bold;
`;

export const PublicationTime = styled.Text``;

export const Body = styled.View`
  height: 200px;
  background-color: red;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px;
`;

export const Number = styled.Text``;
