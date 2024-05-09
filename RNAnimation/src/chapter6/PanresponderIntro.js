import React, {useState} from 'react';
import {View, Text, PanResponder} from 'react-native';

export default function PanresponderIntro() {
  const [status, setStatus] = useState({
    dx: 0, // 터치 후 누적거리
    dy: 0,
    moveX: 0, // 가장 최근에 찍힌 좌표 (절대좌표)
    moveY: 0,
    vx: 0, // 제스처의 속도
    vy: 0,
    x0: 0, // 터치 시작지점
    y0: 0,
  });

  const panResponder = PanResponder.create({
    // permission method
    onStartShouldSetPanResponder: () => true, // start 메서드를 사용할 것인가? 사용할 때 true, 안하면 안 넣어도 됨
    onMoveShouldSetPanResponder: () => true, // move 메서드를 사용할 것인가? 사용할 때 true, 안하면 안 넣어도 됨
    // response method
    onPanResponderGrant: () => {}, // touch에 대한 응답이 잘 되었을 때 호출
    onPanResponderReject: () => {}, // touch에 대한 응답이 잘 안되었을 때 호출
    // handler method
    onPanResponderStart: (event, gestureState) => {
      console.log(gestureState);
      setStatus({x0: gestureState.x0, y0: gestureState.y0});
    }, // touch 액션이 start되었을 때 호출
    onPanResponderMove: (event, gestureState) => {
      console.log(gestureState);
      setStatus({...gestureState, x0: status.x0, y0: status.y0});
    }, // touch가 move로 전환될 때 호출
    onPanResponderEnd: () => {}, // touch가 끝났을 때 호출
    onPanResponderRelease: () => {}, // touch가 끝났을 때 호출, 항상 ResponderEnd보다 늦게 호출됨, 가장 끝에 호출됨
  });

  const moveXSize = Math.floor(status.moveX - status.x0);
  const moveYSize = Math.floor(status.moveY - status.y0);

  return (
    <View
      {...panResponder.panHandlers}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffa100',
      }}>
      <View>
        {moveXSize > 0 ? (
          <Text>{moveXSize} 만큼 오른쪽으로 가는 중</Text>
        ) : (
          <Text>{-moveXSize} 만큼 왼쪽으로 가는 중</Text>
        )}
        {moveYSize > 0 ? (
          <Text>{moveYSize} 만큼 아래로 가는 중</Text>
        ) : (
          <Text>{-moveYSize} 만큼 위로 가는 중</Text>
        )}
      </View>
      <View style={{position: 'absolute', bottom: 70, left: 20}}>
        <Text>dx: {status.dx}</Text>
        <Text>dy: {status.dy}</Text>
        <Text>moveX: {status.moveX}</Text>
        <Text>moveY: {status.moveY}</Text>
        <Text>vx: {status.vx}</Text>
        <Text>vy: {status.vy}</Text>
        <Text>x0: {status.x0}</Text>
        <Text>y0: {status.y0}</Text>
      </View>
    </View>
  );
}
