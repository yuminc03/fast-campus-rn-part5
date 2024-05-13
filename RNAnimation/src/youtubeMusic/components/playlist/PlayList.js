import React, {useRef} from 'react';
import {Image, View, PanResponder, Animated, Dimensions} from 'react-native';

import PlayListMini from './PlayListMini';
import PlayListFull from './PlayListFull';

const {width, height} = Dimensions.get('window');

export default function PlayList({playlistAnim}) {
  const playlistRef = useRef('mini'); // mini, full
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        const {dy} = gestureState;

        if (playlistRef.current === 'mini') {
          playlistAnim.setValue(-dy);
        }

        if (playlistRef.current === 'full') {
          playlistAnim.setValue(height - dy);
        }
      },
      onPanResponderEnd: (event, gestureState) => {
        const {dy} = gestureState;

        if (dy > -100 && playlistRef.current === 'mini') {
          Animated.spring(playlistAnim, {
            toValue: height,
            useNativeDriver: false,
          }).start();
          playlistRef.current = 'full';
        }

        if (dy > -100 && playlistRef.current === 'full') {
          Animated.spring(playlistAnim, {
            toValue: height,
            useNativeDriver: false,
          }).start();
          playlistRef.current = 'full';
        }
      },
    }),
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        backgroundColor: '#222',
        borderBottomColor: '#666',
        borderBottomWidth: 1,
        marginTop: playlistAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [0, -200, -200],
        }),
        height: playlistAnim.interpolate({
          inputRange: [0, 100],
          outputRange: [60, 160],
        }),
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: playlistAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [10, width * 0.1, width * 0.1],
        }),
      }}>
      <Animated.View
        style={{
          justifContent: 'center',
          width: playlistAnim.interpolate({
            inputRange: [0, height / 2, height],
            outputRange: [50, width * 0.8, width * 0.8],
          }),
          height: playlistAnim.interpolate({
            inputRange: [0, height / 2, height],
            outputRange: [50, width * 0.8, width * 0.8],
          }),
        }}>
        <Image
          source={{uri: 'https://picsum.photos/300'}}
          style={{width: '100%', height: '100%'}}
        />
      </Animated.View>
      {/*   <PlayListFull /> */}
      <Animated.View
        style={{
          flex: 1,
          opacity: playlistAnim.interpolate({
            inputRange: [0, height / 2],
            outputRange: [1, 0],
          }),
        }}>
        <PlayListMini />
      </Animated.View>
    </Animated.View>
  );
}
