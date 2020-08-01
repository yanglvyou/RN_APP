import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useTheme, Paragraph, Dialog, Portal} from 'react-native-paper';
// import Feather from 'react-native-vector-icons/Feather';

import IconFont from '@/assets/iconfont';

const SignInScreen = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    isTextInputEmpty: false,
    isTextInputIncorrect: false,
  });

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const loginHandle = (userName, password) => {
    if (data.username.length === 0 || data.password.length === 0) {
      setData({
        ...data,
        isTextInputEmpty: true,
      });
      return;
    }

    if (data.username.length < 4 || data.password.length < 8) {
      return;
    }

    navigation.navigate('Home');
  };

  const hideDialog = () => {
    setData({...data, isTextInputEmpty: false, isTextInputIncorrect: false});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>欢迎</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, {backgroundColor: colors.background}]}>
        <Text style={[styles.text_footer, {color: colors.text}]}>用户名</Text>
        <View style={styles.action}>
          <IconFont
            name="iconxingmingyonghumingnicheng"
            size={20}
            color="#009387"
          />

          <TextInput
            style={[styles.textInput, {color: colors.text}]}
            placeholder="用户名"
            placeholderTextColor="#666666"
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <IconFont name="iconzhengque" size={20} color="#009387" />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>用户名必须大于等于4位</Text>
          </Animatable.View>
        )}
        <Text style={[styles.text_footer, {color: colors.text, marginTop: 35}]}>
          密码
        </Text>
        <View style={styles.action}>
          <IconFont name="iconmima" size={20} color="#009387" />
          <TextInput
            style={[styles.textInput, {color: colors.text}]}
            placeholder="密码"
            secureTextEntry={data.secureTextEntry ? true : false}
            placeholderTextColor="#666666"
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <IconFont name="iconmimabukejian" size={20} color="grey" />
            ) : (
              <IconFont name="iconmimakejian" size={20} color="#009387" />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>密码必须大于等于8位</Text>
          </Animatable.View>
        )}
        <TouchableOpacity>
          <Text style={{color: '#009387', marginTop: 15}}>忘记密码 ?</Text>
        </TouchableOpacity>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle(data.username, data.password);
            }}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                登录
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
      <Dialog
        visible={data.isTextInputEmpty || data.isTextInputEmpty}
        onDismiss={hideDialog}
        style={{height: 100, alignItems: 'center', justifyContent: 'center'}}>
        <Dialog.Title style={{color: 'red'}}>
          {data.isTextInputEmpty
            ? '用户名或密码不能为空'
            : '用户名或密码不正确'}
        </Dialog.Title>
      </Dialog>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },

  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
