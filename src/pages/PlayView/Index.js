import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Play from '@/components/Play';
import {viewportWidth,navigate} from '@/utils/Index';

const PlayView = ({routeName}) => {
  const {playState} = useSelector(({player}) => player);
  const onGoDetaill=()=>{
    navigate('Detail')
  }
  if (
    routeName === '' ||
    routeName === 'ModalStackScreen' ||
    playState === 'paused' ||
    routeName === 'Detail'
  ) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Play onGoDetaill={onGoDetaill}/>
    </View>
  );
};

const width = 50;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width,
    height: width + 20,
    bottom: 0,
    left: (viewportWidth - width) / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 4,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOpacity: 0.85,
        shadowRadius: 5,
        shadowOffset: {
          width: StyleSheet.hairlineWidth,
          height: StyleSheet.hairlineWidth,
        },
      },
    }),
  },
});

export default PlayView;
