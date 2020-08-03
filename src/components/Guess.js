import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import IconFont from '@/assets/iconfont';
import Touchable from '@/components/Touchable';

const Guess = ({guess, onPress}) => {
  const {dark, colors} = useTheme();
  const _keyExtractor = item => {
    return item.id;
  };

  const _renderItem = ({item}) => {
    return (
      <Touchable
        onPress={() => {
          onPress(item);
        }}
        style={styles.item}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text numberOfLines={2} style={{color: dark ? colors.text : '#333'}}>
          {item.title}
        </Text>
      </Touchable>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: dark ? colors.background : '#fff'},
      ]}>
      <View style={styles.header}>
        <View style={styles.guessLike}>
          <IconFont name="iconxihuantianchong" color="#f86442" />
          <Text style={[styles.guessLikeTitle, {color: colors.text}]}>
            猜你喜欢
          </Text>
        </View>
        <View style={styles.more}>
          <Text style={[styles.moreTitle, {color: colors.text}]}>更多</Text>
          <IconFont name="icongengduo" />
        </View>
      </View>
      <FlatList
        numColumns={3}
        data={guess}
        renderItem={_renderItem}
        style={styles.flatList}
        keyExtractor={_keyExtractor}
      />
      <Touchable style={styles.changeItem}>
        <IconFont name="iconziyuan" color="#f86442" />
        <Text style={[styles.changeText, {color: colors.text}]}>换一批</Text>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,
    // shadowColor: '#ccc',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,

    // elevation: 4,
  },
  item: {
    flex: 1,
    marginVertical: 6,
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  guessLike: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  more: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  guessLikeTitle: {
    fontSize: 16,
    marginLeft: 5,
  },
  moreTitle: {
    fontSize: 16,
  },
  changeItem: {
    paddingBottom: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeText: {
    paddingLeft: 5,
  },

  flatList: {
    padding: 10,
  },
});

export default Guess;
