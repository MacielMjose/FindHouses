import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { SectionView, SectionText, SectionImage } from './styles';
import SplashLogo from '../../assets/img/SevenHousesLogo.png';

export const SplashScreen = () => {
  return (
    <SectionView>
      <SectionText>Bem Vindo Ao DevRiseWeek, José!</SectionText>
      <StatusBar translucent backgroundColor />
      <SectionImage source={SplashLogo} resizeMode="contain" />
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
