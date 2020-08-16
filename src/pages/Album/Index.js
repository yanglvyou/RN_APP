import React from 'react';
import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {BlurView} from '@react-native-community/blur';
import {
  PanGestureHandler,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import coverRight from '@/assets/cover-right.png';
import {viewportHeight} from '@/utils/Index';
import {useHeaderHeight} from '@react-navigation/stack';
import Tab from '@/components/Album/Tab';
import {useNavigation} from '@react-navigation/native';

const USE_NATIVE_DRIVER = true;
const HEADER_HEIGHT = 260;

const Album = (props) => {
  const {route} = props;
  const navigation = useNavigation();
  const {id} = route.params.item;
  const {summary, author, list} = useSelector(({album}) => album);
  const dispatch = useDispatch();
  const headerHeight = useHeaderHeight();

  const panRef = React.createRef();
  const tapRef = React.createRef();
  const nativeRef = React.createRef();

  let translationYStaticValue = 0;
  let lastScrollYValue = 0;

  const lastScrollY = React.useRef(new Animated.Value(0)).current;

  const reverseLastScrollY = Animated.multiply(
    new Animated.Value(-1),
    lastScrollY,
  );

  const translationYValue = React.useRef(new Animated.Value(0)).current;
  const translationYOffset = React.useRef(new Animated.Value(0)).current;
  const translateY = Animated.add(
    Animated.add(translationYValue, reverseLastScrollY),
    translationYOffset,
  );

  const RANGE = [-(HEADER_HEIGHT - headerHeight), 0];

  React.useEffect(() => {
    dispatch({
      type: 'album/fetchAlbum',
      payload: {
        id,
      },
    });
  }, [route]);

  React.useEffect(() => {
    navigation.setParams({
      opacity: translateY.interpolate({inputRange: RANGE, outputRange: [1, 0]}),
    });
  }, []);

  React.useLayoutEffect(() => {
    const {navigation, route} = props;
    navigation.setOptions({
      headerTitle: route.params.item.title,
      headerTransparent: true,
      headerTitleStyle: {
        opacity: route.params.opacity,
      },
      headerBackground: () => {
        return (
          <Animated.View
            style={[styles.headerBackground, {opacity: route.params.opacity}]}
          />
        );
      },
    });
  }, [props.route]);

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

      translationYOffset.extractOffset();
      translationYOffset.setValue(translationY);

      translationYOffset.flattenOffset();
      translationYValue.setValue(0);

      let maxDeltaY = -RANGE[0] - translationYStaticValue;

      translationYStaticValue += translationY;

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
        maxDeltaY = -RANGE[0];
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
    const {image, title} = route.params.item;
    return (
      <View style={[styles.header, {paddingTop: headerHeight}]}>
        <Image source={{uri: image}} style={styles.backgroundImage} />
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
  return (
    <TapGestureHandler maxDeltaY={-RANGE[0]} ref={tapRef}>
      <View style={styles.container} pointerEvents="box-none">
        <PanGestureHandler
          ref={panRef}
          simultaneousHandlers={[tapRef, nativeRef]}
          onGestureEvent={onGestureEvent}
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
                // onItemPress={onItemPress}
              />
            </View>
          </Animated.View>
        </PanGestureHandler>
      </View>
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
    backgroundColor: '#58a',
    opacity: 0,
  },
  backImage: {
    marginHorizontal: Platform.OS === 'android' ? 0 : 8,
  },
});

export default Album;
