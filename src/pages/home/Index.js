import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  useNavigation,
  useTheme,
  useFocusEffect,
} from '@react-navigation/native';
import Config from 'react-native-config';
import Carousel, {sildeHeight} from '@/components/Carousel';
import Guess from '@/components/Guess';
import IconFont from '@/assets/iconfont';
import ChannelItem from '@/components/ChannelItem';
import Touchable from '@/components/Touchable';

const Home = () => {
  const navigation = useNavigation();
  const {colors, dark} = useTheme();
  const {carousels, guess, channels, pagination, gradientVisible} = useSelector(
    ({home}) => home,
  );
  const loading = useSelector(
    (state) => state.loading.effects['home/fetchChannels'],
  );
  const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch({type: 'home/fetchCarousels'});
  //   dispatch({type: 'home/fetchGuess'});
  //   dispatch({type: 'home/fetchChannels'});
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      dispatch({type: 'home/fetchCarousels'});
      dispatch({type: 'home/fetchGuess'});
      dispatch({type: 'home/fetchChannels'});
    }, []),
  );

  const [refreshing, setRefreshing] = React.useState(false);

  function onGuessPress(item) {
    navigation.navigate('Album', {item});
  }

  function header() {
    return (
      <View>
        <Carousel data={carousels} />
        <View
          style={[
            styles.backgroundColorGuess,
            {backgroundColor: dark ? colors.background : '#fff'},
          ]}>
          <Guess
            guess={guess}
            onPress={(item) => {
              onGuessPress(item);
            }}
          />
        </View>
      </View>
    );
  }

  function renderItem({item}) {
    return (
      <View>
        <ChannelItem data={item} />
      </View>
    );
  }

  function _keyExtractor(item) {
    return item.id;
  }

  function empty() {
    if (loading) return;
    return (
      <View style={styles.empty}>
        <IconFont name="iconmeiyoushuju" color="#999" size={40} />
        <Text>暂时没有数据</Text>
      </View>
    );
  }

  //加载更多
  function _onEndReached() {
    console.log('--加载更多--', loading);
    if (loading || !pagination.hasMore) {
      return;
    }
    dispatch({type: 'home/fetchChannels', payload: {loadMore: true}});
  }

  function onRefresh() {
    setRefreshing(true);
    dispatch({
      type: 'home/fetchChannels',
      callback: () => {
        setRefreshing(false);
      },
    });
  }

  const footer = () => {
    if (!pagination.hasMore) {
      return (
        <View style={styles.end}>
          <Text style={styles.endTxt}>---我是有底线的--</Text>
        </View>
      );
    }
    if (loading && pagination.hasMore && channels.length) {
      return (
        <View style={styles.loading}>
          <Text style={styles.loadingTxt}>正在加载中...</Text>
        </View>
      );
    }
  };

  function _onScroll({nativeEvent}) {
    const offsetY = nativeEvent.contentOffset.y;
    let newGradientVisible = offsetY < sildeHeight;
    if (newGradientVisible !== gradientVisible) {
      dispatch({
        type: 'home/setState',
        payload: {gradientVisible: newGradientVisible},
      });
    }
  }

  return (
    <View
      style={[
        styles.home,
        {backgroundColor: dark ? colors.background : 'transparent'},
      ]}>
      <FlatList
        ListHeaderComponent={header}
        data={channels}
        ListFooterComponent={footer()}
        renderItem={renderItem}
        ListEmptyComponent={empty()}
        keyExtractor={_keyExtractor}
        onEndReached={_onEndReached}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReachedThreshold={0.5}
        onScroll={_onScroll}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: 'transparent',
  },
  end: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  endTxt: {
    fontSize: 14,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  loadingTxt: {
    fontSize: 14,
  },
  empty: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
  },
  backgroundColorGuess: {
    backgroundColor: '#fff',
  },
});

export default Home;
