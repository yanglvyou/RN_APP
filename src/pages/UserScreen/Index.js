import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import IconFont from '@/assets/iconfont';

const UserScreen = () => {
  const navigation = useNavigation();
  const {name} = useSelector(({home}) => home);
  console.log('name: ', name);

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: ({size,color}) => <IconFont name="iconmenu2" size={size} color={color} />,
  //   });
  // }, [navigation]);

  return (
    <View style={styles.userScreenWrapper}>
      <Text>User</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userScreenWrapper: {
    height: 200,
    backgroundColor: '#009387',
    paddingTop: StatusBar.currentHeight+18,
  },
});

export default UserScreen;
