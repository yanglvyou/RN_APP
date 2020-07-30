import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider as StoreProvider} from 'react-redux';
import {View, Text} from 'react-native';
import Navigator from '@/navigator/index';
import Home from '@/pages/home/Index';
import store from '@/config/dva';


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <StoreProvider store={store}>
      <Navigator />
    </StoreProvider>
  );
};

export default App;
