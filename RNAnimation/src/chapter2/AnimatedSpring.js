import React, {useRef} from 'react';
import {Animated, Button, View} from 'react-native';

export default function AnimatedSpring() {
  const translateYAnim = useRef(new Animated.Value(-100)).current;

  const onButtonPress = () => {
    translateYAnim.setValue(-100);
    Animated.spring(translateYAnim, {
      toValue: 100,

      // bounciness: 20, // 탄력 제어
      // speed: 12,

      // friction: 2, // 얼마나 빨리 에너지를 소비하는가 (낮아지면 더 spring 느낌이 강해짐)
      // tension: 20, // spring이 얼마나 많은 에너지를 가지는가

      // stiffness: 100, // spring의 강도
      // damping: 2, // 마찰력
      // mass: 1, // 용수철 끝에 매달려있는 물체의 질량

      velocity: 20, // spring에 부착된 물체의 초기 속도
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Button title="spring으로 움직임" onPress={onButtonPress} />
      <Animated.Text
        style={{
          fontSize: 70,
          transform: [
            {
              translateY: translateYAnim,
            },
          ],
        }}>
        🍊
      </Animated.Text>
    </View>
  );
}
