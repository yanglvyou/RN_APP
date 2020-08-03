import {Dimensions} from 'react-native';
import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
//根据百分比获取宽度
function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

//根据百分比获取高度
function hp(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

function getActiveRouteName(state) {
  let route;
  route = state.routes[state.index];
  while (route.state && route.state.index) {
    route = route.state.routes[route.state.index];
  }
  return route.name;
}

function formatTime(seconds) {
  const m = parseInt((seconds % (60 * 60)) / 60 + '', 10);
  const s = parseInt((seconds % 60) + '', 10);
  return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
}
const navigationRef = React.createRef();

function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}


export {
  getActiveRouteName,
  navigationRef,
  viewportWidth,
  viewportHeight,
  navigate,
  formatTime,
  wp,
  hp,
};
