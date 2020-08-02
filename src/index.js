import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider as StoreProvider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import Navigator from '@/navigator/index';
import store from '@/config/dva';


const Drawer = createDrawerNavigator();

const App = () => {
  React.useEffect(()=>{
    SplashScreen.hide();
  })
  return (
    <StoreProvider store={store}>
      <Navigator />
    </StoreProvider>
  );
};

export default App;
