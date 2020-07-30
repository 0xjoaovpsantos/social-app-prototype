import styled from 'styled-components/native';
import AppColors from '../../utils/colors';

export const Header = styled.View`
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${AppColors.secondColor};
  font-weight: bold;
  font-size: 32px;
`;
