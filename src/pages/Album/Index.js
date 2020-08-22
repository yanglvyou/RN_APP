import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  PanGestureHandler,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import {BlurView} from '@react-native-community/blur';
import coverRight from '@/assets/cover-right.png';
import {viewportHeight} from '@/utils/Index';
import Tab from '@/components/Album/Tab';

const USE_NATIVE_DRIVER = true;
const HEADER_HEIGHT = 260;

const Detail = () => {
  const dispatch = useDispatch();
  const headerHeight = useHeaderHeight(); //获取导航栏高度
  const navigation = useNavigation();
  const {params} = useRoute(); //获取路由参数

  const {summary, author, list} = useSelector(({album}) => album);
  const loading = useSelector(
    (state) => state.loading.effects['album/fetchAlbum'],
  );
  const RANGE = [-(HEADER_HEIGHT - headerHeight), 0];

  React.useEffect(() => {
    //请求数据
    dispatch({
      type: 'album/fetchAlbum',
      payload: {
        id: params.item.id,
      },
    });
    return () => {
      // 请清空数据
      dispatch({type: 'album/resetState'});
    };
  }, []);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     //请求数据
  //     dispatch({
  //       type: 'album/fetchAlbum',
  //       payload: {
  //         id: params.item.id,
  //       },
  //     });
  //     return () => {
  //       // 请清空数据
  //       dispatch({type: 'album/resetState'});
  //     };
  //   }, [params]),
  // );

  useFocusEffect(
    React.useCallback(() => {
      //进入页面设置options属性
      navigation.setOptions({
        headerTitle: params.item.title,
        headerTransparent: true,
        headerTitleStyle: {
          opacity: translateY.interpolate({
            inputRange: RANGE,
            outputRange: [1, 0],
          }),
        },
        headerBackground: () => {
          return (
            <Animated.View
              style={[
                styles.headerBackground,
                {
                  opacity: translateY.interpolate({
                    inputRange: RANGE,
                    outputRange: [1, 0],
                  }),
                },
              ]}
            />
          );
        },
      });
    }, [params]),
  );

  const panRef = React.createRef();
  const tapRef = React.createRef();
  const nativeRef = React.createRef();

  const translationYValue = React.useRef(new Animated.Value(0)).current;
  const translationYOffset = React.useRef(new Animated.Value(0)).current;

  const lastScrollY = React.useRef(new Animated.Value(0)).current;

  const reverseLastScrollY = Animated.multiply(
    new Animated.Value(-1),
    lastScrollY,
  );

  const translateY = Animated.add(
    Animated.add(translationYValue, reverseLastScrollY),
    translationYOffset,
  );

  let translationYStaticValue = 0;

  let lastScrollYValue = 0;

  const onGestureEvent = Animated.event(
    [{nativeEvent: {translationY: translationYValue}}],
    {
      useNativeDriver: USE_NATIVE_DRIVER,
    },
  );

  const onHandlerStateChange = ({nativeEvent}) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      let {translationY} = nativeEvent;

      translationY -= lastScrollYValue;

      translationYOffset.extractOffset(); // translationYOffset的值设置到offset上，并清空value值;
      translationYOffset.setValue(translationY); //translationYOffset从新设置value

      translationYOffset.flattenOffset(); // value=value+offset;
      translationYValue.setValue(0);

      translationYStaticValue += translationY;

      let maxDeltaY = -RANGE[0] - translationYStaticValue;

      if (translationYStaticValue < RANGE[0]) {
        translationYStaticValue = RANGE[0];
        Animated.timing(translationYOffset, {
          toValue: RANGE[0],
          useNativeDriver: USE_NATIVE_DRIVER,
        }).start();
        maxDeltaY = RANGE[1];
      } else if (translationYStaticValue > RANGE[1]) {
        translationYStaticValue = RANGE[1];
        Animated.timing(translationYOffset, {
          toValue: RANGE[1],
          useNativeDriver: USE_NATIVE_DRIVER,
        }).start();
        maxDeltaY = RANGE[0];
      }
      if (tapRef.current) {
        const tap = tapRef.current;
        tap.setNativeProps({maxDeltaY});
      }
    }
  };

  const onScrollDrag = Animated.event(
    [{nativeEvent: {contentOffset: {y: lastScrollY}}}],
    {
      useNativeDriver: USE_NATIVE_DRIVER,
      listener: ({nativeEvent}) => {
        lastScrollYValue = nativeEvent.contentOffset.y;
      },
    },
  );

  function renderHeader() {
    const {image, title} = params.item;
    return (
      <View style={[styles.header, {paddingTop: headerHeight}]}>
        <ImageBackground source={{uri: image}} style={styles.backgroundImage} />
        <BlurView
          blurType="light"
          blurAmount={5}
          style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.leftView}>
          <Image source={{uri: image}} style={styles.thumbnail} />
          <Image source={coverRight} style={styles.coverRight} />
        </View>
        <View style={styles.rightView}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.summary}>
            <Text numberOfLines={1} style={styles.summaryText}>
              {summary}
            </Text>
          </View>
          <View style={styles.author}>
            <Image source={{uri: author.avatar}} style={styles.avatar} />
            <Text style={styles.name}>{author.name}</Text>
          </View>
        </View>
      </View>
    );
  }

  //跳转到详情页面
  const onItemPress = (data, index) => {
    navigation.navigate('Detail', {id: data.id});
  };

  return (
    <TapGestureHandler maxDeltaY={-RANGE[0]} ref={tapRef}>
      {!loading ? (
        <View style={styles.container}>
          <PanGestureHandler
            onGestureEvent={onGestureEvent}
            simultaneousHandlers={[tapRef, nativeRef]}
            onHandlerStateChange={onHandlerStateChange}>
            <Animated.View
              style={[
                styles.container,
                {
                  transform: [
                    {
                      translateY: translateY.interpolate({
                        inputRange: RANGE,
                        outputRange: RANGE,
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
              ]}>
              {renderHeader()}
              <View style={{height: viewportHeight - headerHeight}}>
                <Tab
                  panRef={panRef}
                  tapRef={tapRef}
                  nativeRef={nativeRef}
                  onScrollDrag={onScrollDrag}
                  onItemPress={onItemPress}
                />
              </View>
            </Animated.View>
          </PanGestureHandler>
        </View>
      ) : (
        <LottieView
          source={require('../../assets/animation/22127-dots-load.json')}
          autoPlay
          loop
        />
      )}
    </TapGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 260,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#eee',
  },
  leftView: {
    marginRight: 26,
  },
  thumbnail: {
    width: 98,
    height: 98,
    borderColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  coverRight: {
    height: 98,
    position: 'absolute',
    right: -23,
    resizeMode: 'contain',
  },
  rightView: {
    flex: 1,
  },
  summary: {
    backgroundColor: 'rgba(0,0,0,.3)',
    padding: 10,
    marginVertical: 10,
    borderRadius: 4,
  },
  summaryText: {
    color: '#fff',
  },
  name: {
    color: '#fff',
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: 8,
    backgroundColor: '#eee',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBackground: {
    flex: 1,
    backgroundColor: '#fb3',
    opacity: 0,
  },
  backImage: {
    marginHorizontal: Platform.OS === 'android' ? 0 : 8,
  },
});

export default Detail;
