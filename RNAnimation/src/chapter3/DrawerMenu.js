import React, {useRef} from 'react';
import {
  Animated,
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Dimensions,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DarwerMenu() {
  const interpolateAnim = useRef(new Animated.Value(0)).current;
  const width = Dimensions.get('window').width;

  const onOpenPress = () => {
    Animated.timing(interpolateAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.out(Easing.circle),
      useNativeDriver: false,
    }).start();
  };

  const onHidePress = () => {
    Animated.timing(interpolateAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.circle),
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      {/* Home */}
      <View style={{backgroundColor: '#aff100', flex: 1}}>
        <SafeAreaView style={{alignItems: 'flex-end'}}>
          <TouchableHighlight
            underlayColor={'#ffff50'}
            onPress={onOpenPress}
            style={{borderRadius: 100}}>
            <View style={{padding: 14}}>
              <Icon name="menu" color="#222" size={30} />
            </View>
          </TouchableHighlight>
        </SafeAreaView>
      </View>

      {/* Menu Background */}
      <TouchableWithoutFeedback onPress={onHidePress}>
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            width: interpolateAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '300%'],
            }),
            height: '100%',
            backgroundColor: interpolateAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['#00000000', '#00000060'],
            }),
            // zIndex: interpolateAnim.interpolate({
            //   inputRange: [0, 1],
            //   outputRange: [0, 2],
            // }),
          }}
        />
      </TouchableWithoutFeedback>

      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          width: '90%',
          height: '100%',
          backgroundColor: '#ffffff',
          zIndex: 10,
          transform: [
            {
              translateX: interpolateAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-width * 0.9, 0],
              }),
            },
          ],
        }}>
        <SafeAreaView
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{padding: 10, fontSize: 22}}>menu</Text>
            <Text style={{padding: 10, fontSize: 22}}>menu</Text>
            <Text style={{padding: 10, fontSize: 22}}>menu</Text>
          </View>
          <View>
            <TouchableHighlight
              underlayColor={'#aff10050'}
              onPress={onHidePress}
              style={{borderRadius: 100}}>
              <View style={{padding: 14}}>
                <Icon name="close" color="#222" size={30} />
              </View>
            </TouchableHighlight>
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
}
