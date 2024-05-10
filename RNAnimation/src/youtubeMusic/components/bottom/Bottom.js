import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {BOTTOM_HEIGHT} from '../../utils';

export default function Bottom() {
  const insets = useSafeAreaInsets();

  return (
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
  );
}

function BottomItem({name, title}) {
  return (
    <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
      <View style={{marginVertical: 4}}>
        <Icon name={name} color="white" size={24} />
      </View>
      <Text style={{color: 'white', fontSize: 12}}>{title}</Text>
    </TouchableOpacity>
  );
}
