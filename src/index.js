import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import CodePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';
import Navigator from '@/navigator/index';
import store from '@/config/dva';
import '@/config/http';
import HotUpdateModal from '@/components/codePush/HotUpdateModal';

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL};


const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <StoreProvider store={store}>
      <Navigator />
      <HotUpdateModal />
    </StoreProvider>
  );
};

export default CodePush(codePushOptions)(App);
