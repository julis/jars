/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

import SearchPage from './SearchPage';

export default class Content extends Component {
  render() {
    return <Text style={styles.description}>Search for houses to buy!</Text>;
  }
}

class RadioPlayer extends Component {
  render(){
    return (
      <NavigatorIOS
        style={styles.container} 
        initialRoute={{
          title: 'Online Radio List',
          component: SearchPage,
        }}
        />
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  container : {
    flex: 1,
  },
});

AppRegistry.registerComponent('Project', () => RadioPlayer);
