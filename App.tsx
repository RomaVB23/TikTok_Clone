/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Navigation from './src/navigation';
const App = () => {
  const backgroundStyle = {
    // backgroundColor: Colors.darker,
    backgroundColor: 'black',
  };
  //

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar barStyle={'light-content'} />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
