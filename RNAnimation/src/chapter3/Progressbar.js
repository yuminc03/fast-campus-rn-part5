import React, {useRef} from 'react';
import {Animated, View, Text, Button, SafeAreaView, Easing} from 'react-native';

export default function Progressbar() {
  const interpolateAnim = useRef(new Animated.Value(0)).current;
  let clickCount = 0;

  // 수동으로 20%씩 채워서 100%까지 채워줌
  const onRunPress = () => {
    if (clickCount < 5) {
      clickCount = clickCount + 1;

      interpolateAnim.extractOffset(); // value를 항상 0으로 만들어주고 toValue를 20으로 만들어주는 방법
      Animated.spring(interpolateAnim, {
        toValue: 20,
        friction: 7,
        tension: 40,
        useNativeDriver: false,
      }).start();
    }
  };
  // 자동으로 100%까지 채워주는 역할, 중간중간에 멈추는 액션 추가
  const onAutoRunPress = () => {
    Animated.sequence([
      Animated.spring(interpolateAnim, {
        toValue: 20,
        friction: 7,
        tension: 40,
        useNativeDriver: false,
      }),
      Animated.spring(interpolateAnim, {
        toValue: 70,
        friction: 7,
        tension: 40,
        delay: 150,
        useNativeDriver: false,
      }),
      Animated.spring(interpolateAnim, {
        toValue: 100,
        friction: 7,
        tension: 40,
        useNativeDriver: false,
      }),
    ]).start();
  };

  // 맨 처음 값으로 되돌아가는 액션
  const onResetPress = () => {
    clickCount = 0;
    interpolateAnim.flattenOffset(); // value를 20으로 만들어주고 toValue는 0으로 만들어줌 (extractOffset과 반대)
    Animated.timing(interpolateAnim, {
      toValue: 0,
      easing: Easing.out(Easing.circle),
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView flex={{flex: 1, marginTop: 300}}>
      <Button title="run" onPress={onRunPress} />
      <Button title="auto run" onPress={onAutoRunPress} />
      <Button title="reset" onPress={onResetPress} />
      <View
        style={{position: 'relative', margin: 30, justifyContent: 'center'}}>
        {/* progressbar 바닥 */}
        <View style={{backgroundColor: '#222', height: 10, borderRadius: 10}} />

        {/* progressbar value */}
        <Animated.View
          style={{
            backgroundColor: '#1497f5',
            height: 16,
            position: 'absolute',
            width: interpolateAnim.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
            borderRadius: 100,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
