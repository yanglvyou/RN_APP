import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme, useNavigation} from '@react-navigation/native';
import IconFont from '@/assets/iconfont';
const SplashScreen = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  const goToSignInScreen = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.View animation="bounceIn" duraton="1500">
          <IconFont name="iconhuanyingni" size={120} />
        </Animatable.View>
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        animation="fadeInUpBig">
        <Text style={[styles.title, {color: colors.text}]}>欢迎</Text>
        <Text style={styles.text}>登录账户</Text>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              goToSignInScreen();
            }}>
            <LinearGradient
              style={styles.sigin}
              colors={['#08d4c4', '#01ab9d']}>
              <Text style={styles.textSign}>请先登陆</Text>
              <IconFont name="icongengduo" size={16} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: height_logo,
    width: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    fontSize: 20,
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  sigin: {
    flexDirection: 'row',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 5,
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
});
