import React, {useRef} from 'react';
import {Animated, View, Text, Button, SafeAreaView} from 'react-native';

export default function Progressbar() {
  const onRunPress = () => {};

  const onAutoRunPress = () => {};

  const onResetPress = () => {};

  return (
    <SafeAreaView flex={{flex: 1, marginTop: 300}}>
      <Button title="run" onPress={onRunPress} />
      <Button title="auto run" onPress={onAutoRunPress} />
      <Button title="reset" onPress={onResetPress} />
      <View
        style={{position: 'relative', margin: 30, justifyContent: 'center'}}>
        {/* progressbar 바닥 */}
        <View style={{backgroundColor: '#222', height: 10, borderRadius: 10}} />

        {/* progressbar value */}
        <View
          style={{
            backgroundColor: 'lightgray',
            height: 16,
            position: 'absolute',
            width: '30%',
            borderRadius: 100,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
