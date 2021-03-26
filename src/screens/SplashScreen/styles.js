import styled from 'styled-components/native';
import { theme } from '../../styles/theme';
import { colors } from '../../styles/colors';

export const SectionView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundDark};
  width: 100%;
  height: 100%;
`;

export const SectionImage = styled.Image`
  height: 150px;
  width: 150px;
`;

export const SectionText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;
