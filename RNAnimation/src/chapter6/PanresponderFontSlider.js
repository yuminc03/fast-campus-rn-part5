import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, PanResponder} from 'react-native';

export default function PanresponderFontSlider() {
  const [step, setStep] = useState(0);

  const onPress = index => {
    console.log(index);
    setStep(index);
  };

  const BOX = 50;
  const CIRCLE = 20;
  const FONT = [
    {
      title: {fontSize: 20, lineHeight: 32},
      body: {fontSize: 12},
    },
    {
      title: {fontSize: 24, lineHeight: 38},
      body: {fontSize: 14},
    },
    {
      title: {fontSize: 30, lineHeight: 40},
      body: {fontSize: 15},
    },
    {
      title: {fontSize: 36, lineHeight: 50},
      body: {fontSize: 19},
    },
  ];

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* text step 영역 */}
      <View
        style={{
          width: 200,
          height: 150,
          justifyContent: 'flex-end',
        }}>
        <View>
          <Text style={FONT[step].title}>Font Step {step + 1}</Text>
          <Text style={FONT[step].body}>Font Body Style</Text>
        </View>
        {/* slider 영역 */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {/* 가로선 */}
          <View
            style={{
              position: 'absolute',
              top: 24,
              width: BOX * 3,
              borderBottomColor: '#ddd',
              borderBottomWidth: 2,
            }}
          />
          {/* 세로 회색 동그라미 */}
          <View style={{flexDirection: 'row'}}>
            {[...Array(4)].map((value, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => onPress(index)}>
                <View
                  style={{
                    width: BOX,
                    height: BOX,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#ddd',
                      width: 10,
                      height: 10,
                      borderRadius: 10,
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: '#333',
              position: 'absolute',
              left: BOX / 2 - CIRCLE / 2 + step * BOX,
              borderRadius: 20,
            }}
          />
        </View>
      </View>
    </View>
  );
}
