import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import IconFont from '@/assets/iconfont';
import Touchable from '@/components/Touchable';
const ChannelItem = props => {
  const {dark, colors} = useTheme();
  const {data} = props;
  function _onPress() {
    const {onPress, data} = props;
    if (typeof onPress === 'function') {
      onPress(data);
    }
  }
  return (
    <Touchable
      onPress={() => {
        _onPress();
      }}
      style={[
        styles.channelItemWrapper,
        {backgroundColor: dark ? colors.card : '#fff'},
      ]}>
      <Image source={{uri: data.image}} style={styles.channelItemImage} />
      <View style={styles.channelItemRight}>
        <Text style={[styles.channelItemTitle, {color: dark ? colors.text : '#000'}]}>{data.title}</Text>
        <Text
          style={[
            styles.channelItemRemark,
            {
              color: dark ? colors.text : '#000',
              backgroundColor: dark ? colors.background : '#fff',
            },
          ]}>
          {data.remark}
        </Text>
        <View style={styles.channelItemPlay}>
          <View style={styles.channelItemPlayed}>
            <IconFont name="iconicon-test" color="red" />
            <Text style={[styles.playedText,{color:dark? colors.text:'#000'}]}>{data.played}</Text>
          </View>
          <View style={styles.channelItemPlaying}>
            <IconFont name="iconshengyin" color="red" size={20} />
            <Text style={[styles.playingText,{color:dark? colors.text:'#000'}]}>{data.playing}</Text>
          </View>
        </View>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  channelItemWrapper: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    // shadowColor: '#ccc',
    // shadowOffset: {width: 0, height: 5},
    // shadowOpacity: 0.5,
    // shadowRadius: 10,
    // elevation: 5,
  },
  channelItemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#dedede',
  },
  channelItemRemark: {
    backgroundColor: '#eee',
    padding: 2,
    borderRadius: 3,
  },
  channelItemTitle: {
    fontSize: 16,
  },
  channelItemRight: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 20,
  },
  channelItemPlay: {
    flexDirection: 'row',
  },
  channelItemPlayed: {
    flexDirection: 'row',
    marginRight: 30,
    alignItems: 'center',
  },
  channelItemPlaying: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playedText: {
    marginLeft: 5,
  },
  playingText: {
    marginLeft: 5,
  },
});

export default ChannelItem;
