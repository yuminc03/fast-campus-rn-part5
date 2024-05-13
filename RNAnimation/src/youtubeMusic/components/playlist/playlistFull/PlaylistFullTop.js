import React from 'react';
import {View, Text, Animated, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function PlayListFullTop({playlistAnim}) {
  return (
    <Animated.View
      style={{
        height: playlistAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [0, 0, 100],
        }),
        opacity: playlistAnim.interpolate({
          inputRange: [height / 2, height],
          outputRange: [0, 1],
        }),
      }}>
      <View style={{width: width}}>

      </View>
    </Animated.View>
  );
}
