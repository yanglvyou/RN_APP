import React from 'react';
import {View, Text, StyleSheet, StatusBar,ImageBackground,Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import IconFont from '@/assets/iconfont';
const image = { uri: "https://reactjs.org/logo-og.png" };
const UserScreen = () => {
  const navigation = useNavigation();
  const {name} = useSelector(({home}) => home);
  console.log('name: ', name);

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: ({size,color}) => <IconFont name="iconmenu2" size={size} color={color} />,
  //   });
  // }, [navigation]);

  const [timesPressed, setTimesPressed] = React.useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View style={styles.userScreenWrapper}>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.text}>ImageBackground</Text>
        </ImageBackground>
      </View>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userScreenWrapper: {
    height: 200,
    backgroundColor: '#009387',
    paddingTop: StatusBar.currentHeight + 18,
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default UserScreen;
