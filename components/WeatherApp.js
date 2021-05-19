import React from 'react';
import { StyleSheet, View} from 'react-native';

export const WeatherApp = (props) => {
    return(
        <View style={styles.weatherApp} />
    )
}


const styles = StyleSheet.create({
    weatherApp: {
        justifyContent: 'flex-start',
        backgroundColor: colors.black,
        paddingVertical: '15%',
        width: '100%',
      },
  });
  
