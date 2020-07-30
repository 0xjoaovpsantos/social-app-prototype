import styled from 'styled-components/native';
import AppColors from '../../utils/colors';

export const Container = styled.View`
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${AppColors.primaryColor};
`;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${AppColors.secondColor};
  margin-bottom: 10px;
`;
