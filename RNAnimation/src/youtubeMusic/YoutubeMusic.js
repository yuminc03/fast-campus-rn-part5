import React, {useRef, useState} from 'react';
import {View, ScrollView, Animated} from 'react-native';

import Bottom from './components/bottom/Bottom';
import CategoryHeader from './components/header/CategoryHeader';
import HeaderBackground from './components/header/HeaderBackground';
import LogoHeader from './components/header/LogoHeader';
import MusicListSmall from './components/musicList/MusicListSmall';
import MusicListMedium from './components/musicList/MusicListMedium';
import MusicListLarge from './components/musicList/MusicListLarge';
import PlayList from './components/playlist/PlayList';
import useYoutubeMusic from './useYoutubeMusic';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function YoutubeMusic() {
  const [selectedCategory, setSelectedCategory] = useState();
  const insets = useSafeAreaInsets();
  const {
    onScrollEndDrag,
    onScrollBeginDrag,
    onScroll,
    headerAnim,
    headerBgAnim,
  } = useYoutubeMusic();
  const playlistAnim = useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1, backgroundColor: '#111'}}>
      <HeaderBackground
        selectedCategory={selectedCategory}
        headerBgAnim={headerBgAnim}
      />
      <LogoHeader headerAnim={headerAnim} />
      <CategoryHeader
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        headerAnim={headerAnim}
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
      <PlayList playlistAnim={playlistAnim} bottomInset={insets.bottom} />
      <Bottom playlistAnim={playlistAnim} />
    </View>
  );
}
