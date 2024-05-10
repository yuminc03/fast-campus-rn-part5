import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {SafeAreaView} from 'react-native-safe-area-context';

export default function LogoHeader() {
  return (
    <SafeAreaView>
      <View
        style={{
          marginHorizontal: 14,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/logo.png')}
          style={{width: 90, height: 30}}
        />
        <View style={{flexDirection: 'row'}}>
          <IconItem name="cast" />
          <IconItem name="search" />
          <TouchableOpacity>
            <View
              style={{
                height: 45,
                width: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: '#555',
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="perm-identity" size={24} color="white" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

function IconItem({name}) {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 40,
          width: 40,
          paddingVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name={name} size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
}
