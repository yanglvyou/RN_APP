import React from 'react';
import {BackHandler, Platform, ToastAndroid} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider as StoreProvider} from 'react-redux';
import CodePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';
import Navigator from '@/navigator/index';
import store from '@/config/dva';
import '@/config/http';
import HotUpdateModal from '@/components/codePush/HotUpdateModal';

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL};

const Drawer = createDrawerNavigator();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  [lastTime, setLastTime] = React.useState(0);

  // React.useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     BackHandler.addEventListener('hardwareBackPress', onBackAndroid);
  //   }
  // }, []);

  // const onBackAndroid = () => {
  //   console.log(lastTime, 1111111);
  //   const nowTime = Date.now();
  //   setLastTime(nowTime);
  //   if (lastTime && lastTime + 2000 >= Date.now()) {
  //     //最近2秒内按过back键，可以退出应用。
  //     return false;
  //   }
  //   console.log(55555555);
  //   ToastAndroid && ToastAndroid.show('再按一下退出', ToastAndroid.SHORT);
  //   return true;
  // };

  React.useEffect(() => {
    const onBackAndroid = () => {
      const nowTime = Date.now();
      console.log(lastTime, Date.now(), 100000);
      if (lastTime && lastTime + 2000 >= Date.now()) {
        console.log(lastTime, 22222222);
        //最近2秒内按过back键，可以退出应用。
        return false;
      }
      setLastTime(nowTime);
      ToastAndroid && ToastAndroid.show('再按一下退出', ToastAndroid.SHORT);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackAndroid,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <StoreProvider store={store}>
      <Navigator />
      <HotUpdateModal />
    </StoreProvider>
  );
};

export default CodePush(codePushOptions)(App);
