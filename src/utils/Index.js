import React from 'react';
import {Dimensions, StatusBar} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function getTimeString(seconds) {
  const m = parseInt((seconds % (60 * 60)) / 60 + '', 10);
  const s = parseInt((seconds % 60) + '', 10);

  return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
}

const statusBarHeight = StatusBar.currentHeight;

export {viewportWidth, viewportHeight, getTimeString, statusBarHeight};
