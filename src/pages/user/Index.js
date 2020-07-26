import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const User = () => {
  const {name} = useSelector(({home}) => home);
  console.log('name: ', name);

  return (
    <View>
      <Text>User</Text>
    </View>
  );
};

export default User;
