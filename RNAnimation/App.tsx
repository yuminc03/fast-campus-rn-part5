import React from 'react';
import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

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
import Collapse from './src/chapter3/Collapse';
import Progressbar from './src/chapter3/Progressbar';
import Skeleton from './src/chapter3/Skeleton';
import SnowAnimation from './src/chapter3/SnowAnimation';

import LayoutAnimationIntro from './src/chapter4/LayoutAnimationIntro';
import LayoutAnimationPageHeader from './src/chapter4/LayoutAnimationPageHeader';
import LayoutAnimationCollapse from './src/chapter4/LayoutAnimationCollapse';

import InteractionManagerIntro from './src/chapter5/InteractionManagerIntro';
import PanresponderIntro from './src/chapter6/PanresponderIntro';
import PanresponderBall from './src/chapter6/PanresponderBall';
import PanresponderModal from './src/chapter6/PanresponderModal';
import PanresponderBannerSlider from './src/chapter6/PanresponderBannerSlider';

const App = () => {
  return (
    <SafeAreaProvider>
      <PanresponderBannerSlider />
    </SafeAreaProvider>
  );
};

export default App;
