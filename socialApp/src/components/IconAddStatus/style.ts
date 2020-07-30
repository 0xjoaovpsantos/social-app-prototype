import styled from 'styled-components/native';
import AppColors from '../../utils/colors';

export const Container = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  background-color: #dbe7f0;
  margin-right: 10px;
`;

export const Text = styled.Text`
  color: ${AppColors.secondColor};
  font-size: 40px;
`;
