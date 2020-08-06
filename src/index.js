import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider as StoreProvider} from 'react-redux';
import CodePush from "react-native-code-push";
import SplashScreen from 'react-native-splash-screen';
import Navigator from '@/navigator/index';
import store from '@/config/dva';
import '@/config/http';

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };


const Drawer = createDrawerNavigator();

const App = () => {
  React.useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <StoreProvider store={store}>
      <Navigator />
    </StoreProvider>
  );
};

export default CodePush(codePushOptions)(App);
