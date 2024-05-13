import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {faker} from '@faker-js/faker';

export default function PlayListMini() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{marginLeft: 14}}>
        <Text style={{color: '#999'}}>{faker.music.genre()}</Text>
        <Text style={{color: 'white'}}>{faker.music.songName()}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => console.log('play')}>
          <View
            style={{
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="play" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('skip-next')}>
          <View
            style={{
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="skip-next" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
