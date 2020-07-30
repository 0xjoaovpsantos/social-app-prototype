import styled from 'styled-components/native';
import AppColors from '../../utils/colors';

export const Container = styled.View`
  background-color: ${AppColors.primaryColor};
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoPeople = styled.View`
  margin-left: 10px;
`;

export const Name = styled.Text`
  color: ${AppColors.secondColor};
  font-weight: bold;
  font-size: 24px;
`;

export const Email = styled.Text`
  color: ${AppColors.secondColor};
  font-size: 16px;
`;

export const SocialInfos = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Stats = styled.View`
  display: flex;
  align-items: center;
`;

export const Number = styled.Text`
  color: ${AppColors.secondColor};
  font-weight: bold;
  font-size: 24px;
`;

export const Description = styled.Text`
  color: ${AppColors.secondColor};
  font-size: 16px;
`;
