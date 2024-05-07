import React, {useRef} from 'react';
import {Animated, Button, Easing} from 'react-native';

export default function AnimatedTiming() {
  const translateXAnim = useRef(new Animated.Value(-100)).current;

  // Easing ease  back/ bounce /elastic / circle
  const onButtonPress = () => {
    translateXAnim.setValue(-100);
    Animated.timing(translateXAnim, {
      toValue: 100,
      duration: 1000,
      delay: 0,
      easing: Easing.out(Easing.circle),
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Button title="움직임" onPress={onButtonPress} />
      <Animated.Text
        style={{fontSize: 70, transform: [{translateX: translateXAnim}]}}>
        🍊
      </Animated.Text>
    </>
  );
}
