import React from 'react';
import {
  View,
  Text,
  Animated,
  ListRenderItem,
  ListRenderItemInfo,
  Alert,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {useSelector} from 'react-redux';
import Item from './Item';
import {NativeViewGestureHandler} from 'react-native-gesture-handler';

const List = ({panRef,tapRef,nativeRef,onScrollDrag}) => {
  //   const {panRef,tapRef,nativeRef,onScrollDrag,onItemPress} =props
  const {list} = useSelector(({album}) => album);
  function onPress(data, index) {
    onItemPress(data, index);
  }
  function _renderItem({item, index}) {
    return (
      <Item
        data={item}
        index={index}
        onPress={() => {
          onPress(item, index);
        }}
      />
    );
  }

  function _keyExtractor(item) {
    return item.id;
  }

  return (
    <NativeViewGestureHandler simultaneousHandlers={panRef} waitFor={tapRef} ref={nativeRef} >
      <Animated.FlatList
        style={styles.container}
        data={list}
        onScrollBeginDrag={onScrollDrag}
        onScrollEndDrag={onScrollDrag}
        bounces={false}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
      />
    </NativeViewGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
  },
});

export default List;
