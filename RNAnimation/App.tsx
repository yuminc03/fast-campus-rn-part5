import React from 'react';
import {SafeAreaView} from 'react-native';
import AnimatedCoomponents from './src/chapter2/AnimatedComponents';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AnimatedCoomponents />
    </SafeAreaView>
  );
};

export default App;
