import React, {useEffect, useRef} from 'react';
import {Animated, Button} from 'react-native';

// 오른쪽 -> 왼쪽으로 이동하도록 X 값이 변화하는 애니메이션
export default function AnimatedValue() {
  const translateXAnim = useRef(new Animated.Value(-100)).current;
  const onButtonPress = () => {
    translateXAnim.setValue(-100);
    translateXAnim.addListener(({value}) => console.log(value));

    setTimeout(() => {
      // translateXAnim.stopAnimation();
      translateXAnim.resetAnimation();
    }, 500);

    Animated.timing(translateXAnim, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    return () => translateXAnim.removeAllListeners();
  });

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
