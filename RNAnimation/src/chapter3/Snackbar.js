import React, {useRef} from 'react';
import {Animated, View, Text, Button, SafeAreaView, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// layouts
// 스타일링
export default function Snackbar() {
  const translateYAnim = useRef(new Animated.Value(100)).current;
  const onButtonPress = () => {
    Animated.sequence([
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.circle),
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(translateYAnim, {
        toValue: 100,
        duration: 300,
        easing: Easing.in(Easing.circle),
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button title="문제 발생" onPress={onButtonPress} />
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          transform: [
            {
              translateY: translateYAnim,
            },
          ],
        }}>
        <View
          style={{
            backgroundColor: '#222',
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 20,
            margin: 14,
            borderRadius: 4,
            alignItems: 'center',
          }}>
          <Icon name="checkmark-circle" color="white" size={24} />
          <Text style={{color: 'white', fontSize: 15, marginLeft: 10}}>
            오류가 발생했습니다.
          </Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}
