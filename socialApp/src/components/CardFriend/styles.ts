import styled from 'styled-components/native';
import AppColors from '../../utils/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${AppColors.primaryColor};
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  border-radius: 10px;
`;

export const Info = styled.View``;

export const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${AppColors.secondColor};
`;

export const Status = styled.Text`
  color: ${AppColors.secondColor};
`;
