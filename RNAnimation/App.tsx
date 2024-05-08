import React from 'react';
import {SafeAreaView} from 'react-native';

import AnimatedCoomponents from './src/chapter2/AnimatedComponents';
import AnimatedValue from './src/chapter2/AnimatedValue';
import AninatedTiming from './src/chapter2/AnimatedTiming';
import AnimatedSpring from './src/chapter2/AnimatedSpring';
import AnimatedDecay from './src/chapter2/AnimatedDecay';
import AnimatedComposing from './src/chapter2/AnimatedComposing';
import AnimatedOtherMethod from './src/chapter2/AnimatedOtherMethod';
import AnimatedProperty from './src/chapter2/AnimatedProperty';
import Snackbar from './src/chapter3/Snackbar';
import DrawerMenu from './src/chapter3/DrawerMenu';

const App = () => {
  return (
    // <SafeAreaView
    //   style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    // <SafeAreaView style={{flex: 1}}>
    <DrawerMenu />
    // </SafeAreaView>
  );
};

export default App;