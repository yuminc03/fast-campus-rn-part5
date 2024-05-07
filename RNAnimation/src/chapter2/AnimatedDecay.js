import React, {useRef} from 'react';
import {Animated, Text, Button} from 'react-native';

export default function AnimatedDecay() {
  const translateXAnim = useRef(new Animated.Value(-100)).current;
  const onButtonPress = () => {
    Animated.decay(translateXAnim, {
      velocity: 1,
      deceleration: 0.995,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Button title="멈추기" onPress={onButtonPress} />
      <Animated.Text
        style={{fontSize: 70, transform: [{translateX: translateXAnim}]}}>
        🚑
      </Animated.Text>
    </>
  );
}
