import React, {useRef} from 'react';
import {
  Animated,
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {collapseData} from '../utils/data';

export default function Collapse() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {collapseData.map((value, index) => {
        const interpolateAnim = useRef(new Animated.Value(0)).current;
        let isOpened = false;

        // 클릭하면 애니메이션이 작동되는 함수
        const onPress = () => {
          Animated.timing(interpolateAnim, {
            toValue: isOpened ? 0 : 1,
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            isOpened = !isOpened;
          });
        };

        return (
          <View key={index}>
            {/* 질문영역 */}
            <TouchableWithoutFeedback onPress={onPress}>
              <View>
                <View
                  style={{
                    backgroundColor: '#be90f5',
                    padding: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignitems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'yellow',
                      fontWeight: 'bold',
                      fontSize: 16,
                      flexShrink: 1,
                    }}>
                    {value.q}
                  </Text>
                  <Animated.View
                    style={{
                      flexShrink: 1,
                      marginLeft: 10,
                      transform: [
                        {
                          rotate: interpolateAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '180deg'],
                          }),
                        },
                      ],
                    }}>
                    <Icon name="expand-more" size={24} color="yellow" />
                  </Animated.View>
                </View>
                {/* 답변영역 */}
                <Animated.View
                  style={{
                    height: interpolateAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 100],
                    }),
                    paddingHorizontal: 40,
                    justifyContent: 'center',
                    borderBottomColor: '#be90f5',
                    borderBottomWidth: 0.5,
                  }}>
                  <Text style={{fontSize: 14}}>{value.a}</Text>
                </Animated.View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        );
      })}
    </SafeAreaView>
  );
}
