import React, {useEffect, useRef} from 'react';
import {Animated, View, Text, InteractionManager, Alert} from 'react-native';

// runAfterInteractions cancel
export default function InteractionManagerIntro() {
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();

    const interactionManagerPromise = InteractionManager.runAfterInteractions(
      () => {
        // 애니메이션 이후 작동할 액션
        Alert.alert('hello interaction manager');
      },
    );

    return () => interactionManagerPromise.cancel();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animated.Text style={{fontSize: 50, opacity: opacityAnim}}>🍓</Animated.Text>
    </View>
  );
}
