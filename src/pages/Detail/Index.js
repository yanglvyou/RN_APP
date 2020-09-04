import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';
import {Toast,Button,Modal,TextareaItem} from '@ant-design/react-native';
import LinearGradient from 'react-native-linear-gradient';

import IconFont from '@/assets/iconfont';
import Touchable from '@/components/Touchable';
import {viewportWidth} from '@/utils/Index';

import PlaySlider from '@/components/Detail/PlaySlider';

const IMAGE_WIDTH = 180;
const SCALE = viewportWidth / IMAGE_WIDTH;

const Detail = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const dispatch = useDispatch();
  const [barrage, setBarrage] = React.useState(false);
  const [barrageData, setBarrageData] = React.useState([{id: 0, title: ''}]);
  const anim = React.useRef(new Animated.Value(1)).current;
  const {playState, title, id, previousId, nextId, thumbnailUrl} = useSelector(
    ({player}) => player,
  );
  useFocusEffect(
    React.useCallback(() => {
      if (params && params.id !== id) {
        dispatch({type: 'player/pause'});
        dispatch({type: 'player/fetchShow', payload: {id: params.id}});
      }else {
        dispatch({type: 'player/play'});
      }
      navigation.setOptions({headerTitle: title});
    }, [params]),
  );

  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({headerTitle: title});
    }, [title]),
  );


  const toggle = () => {
    dispatch({type: playState === 'playing' ? 'player/pause' : 'player/play'});
  };

  const previous = () => {
    dispatch({type: 'player/previous'});
  };

  const next = () => {
    dispatch({type: 'player/next'});
  };

  const barrageClick = () => {
    Toast.info('1111111');
    setBarrage(!barrage);
    Animated.timing(anim, {
      toValue: barrage ? 1 : SCALE,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Animated.Image
          source={{uri: thumbnailUrl}}
          style={[styles.image, {transform: [{scale: anim}]}]}
        />
      </View>
      {barrage && (
        <LinearGradient
          colors={['rgba(128,104,102,.5)', '#807c66']}
          style={styles.linear}
        />
      )}
      <Touchable style={styles.barrageBtn} onPress={barrageClick}>
        <Text style={styles.barrageText}>弹幕</Text>
      </Touchable>
      <PlaySlider />
      <View style={styles.btnWrapper}>
        <Touchable disabled={!previousId} onPress={previous}>
          <IconFont name="iconshangyishou" size={35} color="#fff" />
        </Touchable>
        <Touchable onPress={toggle}>
          <IconFont
            name={playState === 'playing' ? 'iconzantingtingzhi' : 'iconbofang'}
            size={35}
            color="#fff"
          />
        </Touchable>
        <Touchable disabled={!nextId} onPress={next}>
          <IconFont name="iconxiayishou" size={35} color="#fff" />
        </Touchable>
      </View>
    </View>
  );
};

const PADDING_Top = (viewportWidth - IMAGE_WIDTH) / 2;

const styles = StyleSheet.create({
  container: {
    paddingTop: PADDING_Top,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: IMAGE_WIDTH,
  },
  barrageBtn: {
    height: 26,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 20,
  },
  barrageText: {
    color: '#fff',
    fontSize: 16,
  },
  linear: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: viewportWidth,
    width: viewportWidth,
  },
});

export default Detail;
