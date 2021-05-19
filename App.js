import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import colors from './Colors'
import {WeatherApp} from './components/WeatherApp'


import {GlobalStateProvider, GlobalContext} from './context/GlobalState'
import {Home} from './components/Home'
export default function App() {
  return (
    <GlobalStateProvider>
      <View style={styles.container}>
        <WeatherApp />
        <Home />
      </View>
    </GlobalStateProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  
  
});
