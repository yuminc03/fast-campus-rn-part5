import {useRef} from 'react';
import {Animated} from 'react-native';

export default function useYoutubeMusic() {
  const scrollStartRef = useRef();
  // header
  const showHeaderRef = useRef(true);
  const headerAnim = useRef(new Animated.Value(0)).current;
  const headerBgAnim = useRef(new Animated.Value(0)).current;

  const onScrollBeginDrag = e => {
    const y = e.nativeEvent.contentOffset.y;
    scrollStartRef.current = y;
  };
  const onScroll = e => {
    const y = e.nativeEvent.contentOffset.y;
    const dy = y - scrollStartRef.current;
    console.log(dy);

    // header가 보이고 scrolOffset을 40까지 내렸을 때 (위로 올라가는 header)
    if (dy > 0 && dy < 40 && showHeaderRef.current) {
      headerAnim.setValue(dy);
    }

    // header가 보이지 않고 scorllOffset이 -40 ~ 0일 때 (아래로 내려가는 header)
    if (dy > -40 && dy < 0 && !showHeaderRef.current) {
      headerAnim.setValue(40 + dy);
    }

    // header background 애니메이션
    headerBgAnim.setValue(y);
  };
  const onScrollEndDrag = e => {
    const y = e.nativeEvent.contentOffset.y;
    const dy = y - scrollStartRef.current;

    // 위로 올라가는 header
    if (dy > 0 && showHeaderRef.current) {
      Animated.spring(headerAnim, {
        toValue: 40,
        useNativeDriver: false,
      }).start();
      showHeaderRef.current = false;
    }

    // 아래로 내려가는 header
    if (dy < 0 && !showHeaderRef.current) {
      Animated.spring(headerAnim, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      showHeaderRef.current = true;
    }
  };

  return {
    onScrollBeginDrag,
    onScroll,
    onScrollEndDrag,
    headerAnim,
    headerBgAnim,
  };
}
