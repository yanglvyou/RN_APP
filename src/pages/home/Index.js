import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector} from 'react-redux';

const Home = () => {
  const {name} = useSelector(({home}) => home);
  console.log('name: ', name);

  return (
    <View>
      <Text>111111</Text>
    </View>
  );
};

export default Home;
