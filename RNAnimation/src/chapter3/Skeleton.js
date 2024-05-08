import React, {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';

export default function Skeleton() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
      }}>
      {[...Array(8)].map((value, index) => {
        return (
          <View style={{flexDirection: 'row', marginVertical: 8}} key={index}>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: '#dfdfdf',
                borderRadius: 4,
              }}
            />
            <View style={{marginLeft: 10, flex: 1}}>
              <View
                style={{
                  width: '100%',
                  height: 14,
                  backgroundColor: '#dfdfdf',
                  borderRadius: 4,
                }}
              />
              <View
                style={{
                  marginTop: 8,
                  width: '100%',
                  height: 14,
                  backgroundColor: '#dfdfdf',
                  borderRadius: 4,
                }}
              />
              <View
                style={{
                  marginTop: 8,
                  width: '100%',
                  height: 14,
                  backgroundColor: '#dfdfdf',
                  borderRadius: 4,
                }}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
}
