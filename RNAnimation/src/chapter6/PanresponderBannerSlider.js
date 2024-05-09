import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  PanResponder,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const {width} = Dimensions.get('window');

export default function PanresponderBannerSlider() {
  const [focus, setFocus] = useState(0);
  const bannerAnim = useRef(new Animated.Value(0)).current;

  const onButtonNavigation = index => {
    setFocus(index);
    Animated.timing(bannerAnim, {
      toValue: -index * width,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* content box */}
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          flexDirection: 'row',
          transform: [
            {
              translateX: bannerAnim,
            },
          ],
        }}>
        {[...Array(4)].map((value, index) => (
          <View
            key={index}
            style={{
              width,
              height: width,
              backgroundColor: '#ffa100',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 50, color: '#ffffff80'}}>{index}</Text>
          </View>
        ))}
      </Animated.View>
      {/* Butttons */}
      <View
        style={{
          height: width,
          justifyContent: 'flex-end',
          marginTop: 60,
        }}>
        <View style={{flexDirection: 'row'}}>
          {[...Array(4)].map((value, index) => (
            <TouchableWithoutFeedback
              onPress={() => onButtonNavigation(index)}
              key={index}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: focus === index ? '#ffa100' : '#ffa10050',
                  margin: 8,
                }}
              />
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>
    </View>
  );
}
