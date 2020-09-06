import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const PlayProgressBar = (props) => {
  const {currentTime, duration} = useSelector(({player}) => player);

  const {children} = props;
  const fill = duration ? (currentTime / duration) * 100 : 0;
  return (
    <AnimatedCircularProgress
      size={40}
      width={2}
      tintColor="#f86442"
      backgroundColor="#ededed"
      fill={fill}>
      {() => <View>{children}</View>}
    </AnimatedCircularProgress>
  );
};
export default PlayProgressBar;
