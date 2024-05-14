import React from 'react';
import {View, Text, Animated, Dimensions, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');

export default function PlaylistFullBottom({playlistAnim}) {
  const insets = useSafeAreaInsets();

  return (
    <Animated.View
      style={{
        position: 'absolute',
        width,
        height: playlistAnim.interpolate({
          inputRange: [height / 2, height],
          outputRange: [0, 70 + insets.bottom],
        }),
        borderWidth: 1,
        bottom: playlistAnim.interpolate({
          inputRange: [height / 2, height],
          outputRange: [0, 1],
        }),
        backgroundColor: '#444',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
      }}>
      <View style={{flexDirection: 'row', height: 50}}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>다음트랙</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white'}}>가사</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white'}}>관련 항목</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
