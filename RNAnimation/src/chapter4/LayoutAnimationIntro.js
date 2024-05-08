import React, {useState} from 'react';
import {View, Text, Button, LayoutAnimation} from 'react-native';

// useState update, create, delete > LayoutNAimation 어떤/어떻게 인터랙션을 줄 수 있을까?
// layout animation preset
export default function LayoutAnimationIntro() {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);

  const onButtonPress = () => {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear); // create, delete는 linear, update는 scaleX
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring); // create, delete는 spring이 작동 안함, update는 spring
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // 모두 작동함
    LayoutAnimation.configureNext(
      {
        duration: 300,
        // type: easeIn, spring, linear
        // property: opactiy, scaleX, scaleY, scaleXY
        // (spring은 opacity 작동 안 함, springDamping은 spring만 사용 가능 함)

        create: {type: 'easeIn', property: 'opacity'},
        update: {type: 'spring', property: 'scaleX', springDamping: 0.3},
        delete: {type: 'linear', property: 'scaleXY'},
      },
      () => console.log('end'),
      () => console.log('fail'),
    );

    setCount(value => value * 10);
    setShow(value => !value);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="layout animation 작동!" onPress={onButtonPress} />
      <View style={{width: 250, height: 250}}>
        {/* update */}
        <View style={{backgroundColor: 'orange'}}>
          <Text style={{fontSize: 50}}>{count}</Text>
        </View>
        {/* create, delete */}
        {show && (
          <View style={{backgroundColor: 'gray', marginTop: 10}}>
            <Text style={{fontSize: 30}}>보이는 컴포넌트</Text>
          </View>
        )}
      </View>
    </View>
  );
}
