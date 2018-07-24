/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
import img_arr from './img_arr'

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      T_img:''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => { this.setState({ T_img: text }) }}
        />
        <Image 
          style={{flex:1}}
          source={img_arr['png'+this.state.T_img]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
