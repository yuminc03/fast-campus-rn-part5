import React, {useRef} from 'react';
import {Animated, Button} from 'react-native';

// sequence, delay, parallel, stagger

// 1) y -200 => 0 timing
// 2) x 0 => 100 timing
export default function AnimatedComposing() {
  const translateXAnim = useRef(new Animated.Value(0)).current;
  const transltateYAnim = useRef(new Animated.Value(-200)).current;
  const onButtonPress = () => {
    // Animated.sequence([
    //   Animated.timing(transltateYAnim, {
    //     toValue: 0,
    //     useNativeDriver: true,
    //   }),
    //   // Animated.delay(1000),
    //   Animated.timing(translateXAnim, {
    //     toValue: 100,
    //     delay: 1000,
    //     useNativeDriver: true,
    //   }),
    // ]).start();
    // setTimeout(() => {
    //   transltateYAnim.stopAnimation();
    // }, 500);
    // Animated.parallel([
    //   Animated.timing(transltateYAnim, {
    //     toValue: 0,
    //     duration: 1000,
    //     useNativeDriver: true,
    //   }),
    //   Animated.timing(translateXAnim, {
    //     toValue: 100,
    //     duration: 1300,
    //     useNativeDriver: true,
    //   }),
    Animated.stagger(1000, [
      Animated.timing(transltateYAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateXAnim, {
        toValue: 100,
        duration: 1300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <>
      <Button title="Button" onPress={onButtonPress} />
      <Animated.Text
        style={{
          fontSize: 70,
          transform: [
            {
              translateX: translateXAnim,
            },
            {
              translateY: transltateYAnim,
            },
          ],
        }}>
        🍊
      </Animated.Text>
    </>
  );
}
