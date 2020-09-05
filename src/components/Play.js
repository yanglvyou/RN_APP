import React from 'react';
import {View, Text, Easing, StyleSheet, Animated, Image} from 'react-native';
import {useSelector} from 'react-redux';
import IconFont from '@/assets/iconfont';

const Play = (props) => {
  const {playState, thumbnailUrl} = useSelector(({player}) => player);
  const aim = React.useRef(new Animated.Value(0)).current;
  const spin = Animated.loop(
    Animated.timing(aim, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
    {iterations: -1},
  );

  React.useEffect(() => {
    if (playState === 'playing') {
      spin.start();
    } else {
      spin.stop();
    }
  }, [playState]);

  const rotate = aim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.wrapper}>
      <Animated.View style={{transform: [{rotate}]}}>
        {thumbnailUrl ? (
          <Image source={{uri: thumbnailUrl}} style={styles.image} />
        ) : (
          <IconFont name="iconzantingtingzhi" size={36} color="#ededed" />
        )}
        {playState === 'paused1' && (
          <View>
            <IconFont name="iconbofang1" size={40} color="#ededed" />
          </View>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {},
  image: {
    borderRadius: 21,
    width: 42,
    height: 42,
  },
});

export default Play;
