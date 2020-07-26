import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Anime = () => {
  const {name} = useSelector(({home}) => home);
  console.log('name: ', name);

  return (
    <View>
      <Text>Anime</Text>
    </View>
  );
};

export default Anime;
