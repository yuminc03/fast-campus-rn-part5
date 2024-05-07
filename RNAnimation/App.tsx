import React from 'react';
import {SafeAreaView} from 'react-native';
import AnimatedCoomponents from './src/chapter2/AnimatedComponents';
import AnimatedValue from './src/chapter2/AnimatedValue';
import AninatedTiming from './src/chapter2/AnimatedTiming';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AninatedTiming />
    </SafeAreaView>
  );
};

export default App;
