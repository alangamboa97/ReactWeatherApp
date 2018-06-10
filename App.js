import React, {Component} from 'react';
import { StyleSheet, Text, AppRegistry, View, } from 'react-native';
import WeatherPoject from "./WeatherProject";
export default WeatherPoject;




export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        
        <Text></Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
