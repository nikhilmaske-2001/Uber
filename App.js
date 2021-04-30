/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { View } from 'react-native';

// All imports of screens go here:
import HomeScreen from './src/screens/HomeScreens/Homescreen';


const App: () => Node = () => {

  return (
    <View>
      <HomeScreen />
    </View>
  );
};

export default App;
