import React, {useState} from 'react';
import {
  LayoutAnimation,
  View,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function LayoutAnimationPageHeader() {
  const [expanded, setExpanded] = useState(true);

  const onScroll = e => {
    console.log(e.nativeEvent.contentOffset.y);
    const y = e.nativeEvent.contentOffset.y;

    if (y > 10) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  };

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      {/* 스크롤이 되는 높이를 측정 해야함 */}
      <ScrollView
        contentContainerStyle={{height: 1000}}
        onScroll={e => onScroll(e)}
        scrollEventThrottle={1}>
        {expanded ? (
          <View style={{backgroundColor: '#333'}}>
            <SafeAreaView style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: '#222',
                  marginLeft: 20,
                  marginRight: 16,
                  marginBottom: -10,
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="person" size={40} color="#333" />
              </View>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    marginBottom: 2,
                    marginTop: 8,
                  }}>
                  Lonalia
                </Text>
                <Text style={{color: 'white'}}>힘들면 잠시 쉬어도 돼!</Text>
              </View>
            </SafeAreaView>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: '#333',
              height: 350,
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{position: 'absolute', bottom: -100}}>
              
            </View>
            <View
              style={{
                bottom: -30,
                backgroundColor: '#222',
                width: 160,
                height: 160,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="person" size={100} color="#333" />
            </View>
            <Text>큰 프로필 이미지</Text>
          </View>
        )}
      </ScrollView>
    </>
  );
}
