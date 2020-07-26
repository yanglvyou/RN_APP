import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Home = () => {
  const {name} = useSelector(({home}) => home);
  console.log('name: ', name);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
