import React, {useRef} from 'react';
import {Animated, Button} from 'react-native';

// Animated 사칙연산 메서드
// add, subtract, divide, multiply
// Animated 핸들러 메서드
// start, reset, loop
export default function AnimatedOtherMethod() {
  // const value1 = new Animated.Value(100);
  // const value2 = new Animated.Value(30);
  // console.log(
  //   Animated.add(value1, value2),
  //   Animated.subtract(value1, value2),
  //   Animated.divide(value1, value2),
  //   Animated.multiply(value1, value2),
  // );

  // Animated.timing(value1, {
  //   toValue: Animated.add(value1, value2),
  // });
  // // 130 70 3.3333333333333335 3000

  const opacityAnim = useRef(new Animated.Value(1)).current;
  const onPressButton = () => {
    Animated.loop(
      Animated.timing(opacityAnim, {
        toValue: 0,
        useNativeDriver: true,
      }),
      {iterations: 10},
    ).start();

    // Animated.timing(opacityAnim, {
    //   toValue: 0,
    //   useNativeDriver: true,
    // }).start(finished => {
    //   console.log(finished);
    //   if (finished) {
    //     setTimeout(() => {
    //       opacityAnim.resetAnimation();
    //       // Animated.timing(opacityAnim, {
    //       //   toValue: 0,
    //       //   useNativeDriver: true,
    //       // }).reset(); // Animation value를 초기값으로 이동시킴
    //     }, 2000);
    //   }
    // });
  };
  // {"finished": true, "value": 0} // 애니메이션이 중간에 멈추거나 실행이 중지되면 finish가 false가 됨

  return (
    <>
      <Button title="button" onPress={onPressButton} />
      <Animated.Text style={{fontSize: 70, opacity: opacityAnim}}>
        🍊
      </Animated.Text>
    </>
  );
}
