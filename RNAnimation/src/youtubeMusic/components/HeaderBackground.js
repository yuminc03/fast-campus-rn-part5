import React from 'react';
import {View, Text} from 'react-native';

export default function HeaderBackground() {
  return (
    <View
      style={{
        position: 'absolute',
        height: 300,
        width: '100%',
        backgroundColor: '#222',
      }}>
      <Text>HeaderBackground</Text>
    </View>
  )
}
