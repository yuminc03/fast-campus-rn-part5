import React, {useEffect, useRef} from 'react';
import {View, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function SnowAnimation() {
  return (
    <View style={{flex: 1, backgroundColor: '#03035e'}}>
      {[...Array(100)].map((value, index) => {
        const interpolateAnim = useRef(new Animated.Value(0)).current;

        useEffect(() => {
          Animated.loop(
            Animated.timing(interpolateAnim, {
              toValue: 1,
              delay: index * 100,
              duration: 5000,
              useNativeDriver: false,
            }),
          ).start();
        }, []);

        return (
          <Animated.View
            key={index}
            style={{
              position: 'absolute',
              top: interpolateAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['-10%', '110%'],
              }),
              left: `${Math.floor(Math.random() * 100)}%`,
            }}>
            <Icon name="snowflake" size={16} color="#fff" />
          </Animated.View>
        );
      })}
    </View>
  );
}
