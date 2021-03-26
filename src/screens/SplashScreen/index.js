import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SectionView, SectionText } from './styles';

export const SplashScreen = () => {
  return (
    <SectionView>
      <SectionText>Bem Vindo Ao DevRiseWeek, José!</SectionText>
    </SectionView>
  );
};

const styles = StyleSheet.create({
  sectionView: {
    height: 100,
    width: '100%',
    backgroundColor: 'red',
  },
  sectionText: {
    color: 'white',
  },
});
