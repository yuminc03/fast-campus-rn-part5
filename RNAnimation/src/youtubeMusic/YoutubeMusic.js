import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Bottom from './components/Bottom';
import CategoryHeader from './components/CategoryHeader';
import HeaderBackground from './components/HeaderBackground';
import LogoHeader from './components/LogoHeader';

export default function YoutubeMusic() {
  return (
    <View style={{flex: 1}}>
      <LogoHeader />
      <CategoryHeader />
      <HeaderBackground />
      <ScrollView style={{borderWidth: 1}}>
        <View>
          <Text>music list</Text>
        </View>
      </ScrollView>
      <Bottom />
    </View>
  );
}
