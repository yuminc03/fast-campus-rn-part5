import React, {useEffect} from 'react';
import {View, Text, Animated, Dimensions, TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function PlaylistFullBottom({playlistAnim, bottomInset}) {
  useEffect(() => {
    console.log('bottomInset:', bottomInset);
  }, [bottomInset]);
  return (
    <Animated.View
      style={{
        position: 'absolute',
        width,
        height: playlistAnim.interpolate({
          inputRange: [height / 2, height],
          outputRange: [0, 100 + bottomInset],
        }),
        bottom: 0,
        opacity: playlistAnim.interpolate({
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
