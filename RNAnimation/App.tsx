import React from 'react';
import {SafeAreaView} from 'react-native';
import AnimatedValue from './src/chapter2/AnimatedValue';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AnimatedValue />
    </SafeAreaView>
  );
};

export default App;
