import React, {useRef} from 'react';
import {Animated, Text, Button} from 'react-native';

export default function AnimatedCoomponents() {
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const onButtonPress = () => {
    Animated.timing(opacityAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Button title="사라지기" onPress={onButtonPress} />
      <Animated.Text style={{fontSize: 70, opacity: opacityAnim}}>
        🍊
      </Animated.Text>
    </>
  );
}
