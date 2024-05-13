import React, {useRef} from 'react';
import {View, Text, Image, ScrollView, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {faker} from '@faker-js/faker';

const {width} = Dimensions.get('window');

export default function MusicListSmall() {
  const scrollStartRef = useRef();
  const scrollRef = useRef();
  const pageRef = useRef(1);

  return (
    <View>
      <Title />
      <ScrollView
        ref={scrollRef}
        horizontal={true}
        contentContainerStyle={{paddingHorizontal: 10}}
        scrollEventThrottle={1}
        onScrollBeginDrag={e => {
          const x = e.nativeEvent.contentOffset.x;
          scrollStartRef.current = x;
        }}
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x;
          const dx = x - scrollStartRef.current;
          console.log(dx);
        }}
        onScrollEndDrag={e => {
          const x = e.nativeEvent.contentOffset.x;
          const dx = x - scrollStartRef.current;

          // 오른쪽 page로 붙는 애니메이션
          if (dx > width / 4 && pageRef.current !== 3) {
            //다음페이지로 넘어감
            scrollRef.current?.scrollTo({
              x: width * 0.92 * pageRef.current,
              y: 0,
              animated: true,
            });

            pageRef.current = pageRef.current + 1;
            console.log('다음 페이지로 넘어가기');
          }

          // 기존 페이지에 머물기
          if (dx > 0 && dx < width / 4) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * (pageRef.current - 1),
              animated: true,
            });

            console.log('머물기');
          }

          // 왼쪽 page로 넘어가는 애니메이션
          if (dx < -width / 4 && pageRef.current !== 1) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * (pageRef.current - 2),
              animated: true,
            });

            pageRef.current = pageRef.current - 1;
            console.log('왼쪽 페이지로 넘어가기');
          }

          if (-width / 4 < dx && dx < 0) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * (pageRef.current - 1),
              animated: true,
            });
          }
        }}>
        {[...Array(3)].map((val, idx) => {
          return (
            <View key={idx} style={{width: width * 0.92}}>
              {[...Array(4)].map((value, index) => {
                return <MusicListSmallItem key={index} />;
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
