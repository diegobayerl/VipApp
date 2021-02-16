import React from 'react';
import { StatusBar } from 'expo-status-bar'

import { useFonts } from 'expo-font';

import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import Router from './src/routes';
import Footer from './src/components/footer';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold, 
    Nunito_800ExtraBold
  });

  if(!fontsLoaded){
    return null
  }

  return (
    <>
    <Router />
    <StatusBar style="light" />
    </>
  );
}
//