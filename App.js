import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';

export default function App() {
  return <WelcomeScreen/>;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,AppText: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
