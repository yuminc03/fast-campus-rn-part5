import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

import Bottom from './components/Bottom';
import CategoryHeader from './components/CategoryHeader';
import HeaderBackground from './components/HeaderBackground';
import LogoHeader from './components/LogoHeader';

export default function YoutubeMusic() {
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <View style={{flex: 1, backgroundColor: '#111'}}>
      <HeaderBackground selectedCategory={selectedCategory} />
      <LogoHeader />
      <CategoryHeader
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <ScrollView style={{borderWidth: 1}}>
        <View style={{height: 1000}}>
          <Text>music list</Text>
        </View>
      </ScrollView>
      <Bottom />
    </View>
  );
}
