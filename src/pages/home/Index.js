import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Home = () => {
  const {name} = useSelector(({home}) => home);
  console.log('name: ', name);

  return (
    <View>
      <Text>啊啊啊啊啊啊</Text>
    </View>
  );
};

export default Home;
