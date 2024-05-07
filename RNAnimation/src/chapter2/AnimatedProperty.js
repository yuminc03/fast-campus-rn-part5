import React, {useRef} from 'react';
import {Animated, View, Text, Button} from 'react-native';

// height 100 => 200 timing
export default function AnimatedProperty() {
  const heightAnim = useRef(new Animated.Value(100)).current;

  const onButtonPress = () => {
    Animated.timing(heightAnim, {
      toValue: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      <Button title="커지기" onPress={onButtonPress} />
      <Animated.View
        style={{
          width: 100,
          height: heightAnim,
          backgroundColor: heightAnim.interpolate({
            inputRange: [100, 180, 200],
            outputRange: ['#ffa100', 'skyblue', '#aff100'],
          }),
          transform: [
            {
              rotate: heightAnim.interpolate({
                inputRange: [100, 200],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}
      />
    </>
  );
}
