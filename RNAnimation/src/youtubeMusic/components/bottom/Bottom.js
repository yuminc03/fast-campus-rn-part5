import React from 'react';
import {View, Text, TouchableOpacity, Animated, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {BOTTOM_HEIGHT} from '../../utils';

export default function Bottom({playlistAnim}) {
  const insets = useSafeAreaInsets();
  const {width, height} = Dimensions.get('window');

  return (
    <Animated.View
      style={{
        marginBottom: playlistAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [
            0,
            -BOTTOM_HEIGHT - insets.bottom,
            -BOTTOM_HEIGHT - insets.bottom,
          ],
        }),
      }}>
      <View
        style={{
          backgroundColor: '#222',
          paddingBottom: insets.bottom,
        }}>
        <View style={{height: BOTTOM_HEIGHT}}>
          <View style={{flexDirection: 'row'}}>
            <BottomItem name="home" title="홈" />
            <BottomItem name="explore" title="둘러보기" />
            <BottomItem name="library-music" title="보관함" />
          </View>
        </View>
      </View>
    </Animated.View>
  );
}

function BottomItem({name, title}) {
  return (
    <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
      <View style={{marginVertical: 4}}>
        <Icon name={name} color="white" size={20} />
      </View>
      <Text style={{color: 'white', fontSize: 12}}>{title}</Text>
    </TouchableOpacity>
  );
}
