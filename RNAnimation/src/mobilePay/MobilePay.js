import React from 'react';
import {View, Text, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function MobilePay() {
  const card = [
    {color: '#aaa'},
    {color: '#bbb'},
    {color: '#ccc'},
    {color: '#ddd'},
    {color: '#eee'},
    {color: '#f2f2f2'},
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          position: 'relative',
          width: width * 0.7,
          height: width * 0.7 * 0.58 + (card.length - 1) * 20,
        }}>
        {card.map((value, index) => {
          return (
            <View
              style={{
                position: 'absolute',
                marginTop: index * 20,
                backgroundColor: value.color,
                width: width * 0.7,
                height: width * 0.7 * 0.58,
                borderRadius: 4,
                shadowOffset: {
                  width: -3,
                  height: -3,
                },
                shadowOpacity: 0.2,
                shadowRadius: 10,
              }}
            />
          );
        })}
      </View>
    </View>
  );
}
