import React from 'react';
import {View, Text, Image, ScrollView, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {faker} from '@faker-js/faker';

const {width} = Dimensions.get('window');

export default function MusicListSmall() {
  return (
    <View>
      <Title />
      <ScrollView
        horizontal={true}
        contentContainerStyle={{paddingHorizontal: 10}}>
        {[...Array(3)].map((val, idx) => {
          return (
            <View style={{width: width * 0.92}}>
              {[...Array(4)].map((value, index) => {
                return <MusicListSmallItem />;
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

function MusicListSmallItem() {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
      }}>
      <View style={{flexDirection: 'row', flex: 1, flexShrink: 0}}>
        <Image
          source={{uri: 'https://picsum.photos/50'}}
          style={{width: 50, height: 50, borderRadius: 2}}
        />
        <View style={{marginLeft: 14, justifyContent: 'center', flex: 1}}>
          <Text style={{color: 'white', fontSize: 12, marginBottom: 4}}>
            {faker.music.genre()}
          </Text>
          <Text style={{color: 'white'}} numberOfLines={1}>
            {faker.music.songName()}
          </Text>
        </View>
      </View>
      <View style={{padding: 10, flexShrink: 1}}>
        <Icon name="dots-three-vertical" color="white" size={12} />
      </View>
    </View>
  );
}

function Title() {
  return (
    <View style={{paddingHorizontal: 10, marginVertical: 20}}>
      <Text style={{fontSize: 13, color: 'white', fontWeight: '200'}}>
        이 노래로 뮤직 스테이션 시작하기
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 28, color: 'white'}}>
        빠른 선곡
      </Text>
    </View>
  );
}
