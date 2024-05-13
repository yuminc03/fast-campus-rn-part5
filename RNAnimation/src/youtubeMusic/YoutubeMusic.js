import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';

import Bottom from './components/bottom/Bottom';
import CategoryHeader from './components/header/CategoryHeader';
import HeaderBackground from './components/header/HeaderBackground';
import LogoHeader from './components/header/LogoHeader';
import MusicListSmall from './components/musicList/MusicListSmall';
import MusicListMedium from './components/musicList/MusicListMedium';
import MusicListLarge from './components/musicList/MusicListLarge';
import useYoutubeMusic from './useYoutubeMusic';

export default function YoutubeMusic() {
  const [selectedCategory, setSelectedCategory] = useState();
  const {onScrollEndDrag, onScrollBeginDrag, onScroll, headerAnim} =
    useYoutubeMusic();

  return (
    <View style={{flex: 1, backgroundColor: '#111'}}>
      <HeaderBackground selectedCategory={selectedCategory} />
      <LogoHeader headerAnim={headerAnim} />
      <CategoryHeader
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <ScrollView
        scrollEventThrottle={1}
        onScrollBeginDrag={onScrollBeginDrag}
        onScroll={onScroll}
        onScrollEndDrag={onScrollEndDrag}>
        <View style={{marginBottom: 100}}>
          <MusicListSmall />
          <MusicListMedium />
          <MusicListLarge />
        </View>
      </ScrollView>
      <Bottom />
    </View>
  );
}
