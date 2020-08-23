import React from 'react';
import {MaterialTopTabBar} from '@react-navigation/material-top-tabs';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {View, StyleSheet, Text} from 'react-native';
import LinearAnimatedGradientTransition from 'react-native-linear-animated-gradient-transition';
import {useSelector} from 'react-redux';
import {
  useTheme,
  DarkTheme,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Touchable from '@/components/Touchable';
import emitter from '@/utils/event';
import {getActiveRouteName} from '@/utils/Index';


const TopTabBarWrapper = (props) => {
  [activeCarouselIndex, setActiveCarouselIndex] = React.useState(0);
  const theme = useTheme();
  const route = useRoute();
  if (route.state) {
    const routeName = getActiveRouteName(route.state);
  }

  const {gradientVisible, carousels} = useSelector(({home}) => home);

  React.useEffect(() => {
    emitter.addListener('activeCarouselIndex', (activeCarouselIndex) => {
      setActiveCarouselIndex(activeCarouselIndex);
    });
  }, []);

  function linearGradient() {
    if (gradientVisible && carousels.length > 0) {
      return (
        <LinearAnimatedGradientTransition
          colors={
            carousels.length > 0
              ? carousels[activeCarouselIndex].colors
              : ['#79f283', '#f27991']
          }
          style={styles.gradient}
        />
      );
    }
    return null;
  }

  let {indicatorStyle, ...restProps} = props;
  let textStyle = styles.text;

  let activeTintColor = '#333';
  if (gradientVisible) {
    textStyle = styles.whiteText;
    activeTintColor = '#fff';
    if (indicatorStyle) {
      indicatorStyle = StyleSheet.compose(
        indicatorStyle,
        styles.whiteBackgroundColor,
      );
    }
  }
  return (
    <View style={[{backgroundColor: '#fff'}, styles.container]}>
      {linearGradient()}
      <View style={styles.topTabBarView}>
        <MaterialTopTabBar
          {...restProps}
          indicatorStyle={indicatorStyle}
          activeTintColor={activeTintColor}
          style={styles.tabbar}
        />
        <Touchable style={styles.categoryBtn}>
          <Text style={textStyle}>分类</Text>
        </Touchable>
      </View>
      <View style={styles.bottom}>
        <Touchable style={styles.searchBtn}>
          <Text style={textStyle}>搜索按钮</Text>
        </Touchable>
        <Touchable style={styles.historyBtn}>
          <Text style={textStyle}>历史记录</Text>
        </Touchable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    height: 260,
  },
  tabbar: {
    flex: 1,
    elevation: 0,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  topTabBarView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryBtn: {
    paddingHorizontal: 10,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#ccc',
  },
  bottom: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  searchBtn: {
    flex: 1,
    paddingLeft: 12,
    height: 30,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  historyBtn: {
    marginLeft: 24,
  },
  text: {
    color: '#333',
  },
  whiteText: {
    color: '#fff',
  },
  whiteBackgroundColor: {
    backgroundColor: '#fff',
  },
});

export default TopTabBarWrapper;
