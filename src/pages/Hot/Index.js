import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Hot = () => {
  const navigation=useNavigation();
  const onPress = () => {
    navigation.navigate('Detail');
  };
  return (
    <View>
      <Text>Hot</Text>
    </View>
  );
};

export default Hot;
