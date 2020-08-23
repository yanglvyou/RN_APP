import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {useTheme} from '@react-navigation/native';
import IconFont from '@/assets/iconfont';
import Touchable from '@/components/Touchable';
import TouchableAnimatable from '@/components/TouchableAnimatable';

const Guess = ({guess, onPress}) => {
  const {dark, colors} = useTheme();

  let ref = null;
  const handleRef = (refs) => {
    ref = refs;
  };

  const lookMore = () => {
    if (ref) {
    }
  };

  const _keyExtractor = (item) => {
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
          <Animatable.View
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            ref={handleRef}
            useNativeDriver>
            <IconFont name="iconxihuantianchong" color="#f86442" size={28} />
          </Animatable.View>

          <Text style={[styles.guessLikeTitle]}>猜你喜欢</Text>
        </View>
        <TouchableWithoutFeedback onPress={lookMore}>
          <Animatable.View
            animation="bounceIn"
            style={[styles.more, styles.guessAnimatableView]}
            useNativeDriver>
            <Text style={[styles.moreTitle]}>查看更多</Text>
            <IconFont name="icongengduo" color="#fff" />
          </Animatable.View>
        </TouchableWithoutFeedback>
      </View>
      <FlatList
        numColumns={3}
        data={guess}
        renderItem={_renderItem}
        style={styles.flatList}
        keyExtractor={_keyExtractor}
      />
      <Animatable.View animation="bounceInLeft">
        <Touchable style={styles.changeItem}>
          <LinearGradient
            colors={['#08d4c4', '#01ab9d']}
            style={styles.linearGradientItem}>
            <IconFont name="iconziyuan" color="#f86442" />
            <Text style={[styles.changeText, {color: colors.text}]}>
              换一批
            </Text>
          </LinearGradient>
        </Touchable>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
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
  guessAnimatableView: {
    flexDirection: 'row',
    backgroundColor: '#217983',
    padding: 5,
    borderRadius: 5,
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
    color: 'black',
  },
  moreTitle: {
    fontSize: 16,
    color: '#fff',
  },
  changeItem: {
    marginHorizontal: 10,
    paddingBottom:10,
  },
  linearGradientItem: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  changeText: {
    paddingLeft: 5,
  },

  flatList: {
    padding: 10,
  },
});

export default Guess;
