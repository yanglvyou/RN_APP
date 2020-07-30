import React from 'react';
import {Animated, Platform, StyleSheet, StatusBar, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
  HeaderBackButton,
} from '@react-navigation/stack';

import BottomTabs from './BottomTabs';

import OpeningStackScreen from './OpeningStackScreen';


const Navigator = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();


  const [isDarkTheme,setIsDarkTheme]=React.useState(false);


  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
    },
  };


  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
    },
  };


  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;




  const RootStackScreen = () => {
    return (
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          headerBackTitleVisible: false,
          headerTintColor: '#333',
          gestureDirection: 'horizontal',
          headerStyle: {
            ...Platform.select({
              android: {
                elevation: 0,
                borderBottomWidth: StyleSheet.hairlineWidth,
              },
            }),
          },
        }}>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{headerTitle: '底部标签导航'}}
        />
      </Stack.Navigator>
    );
  };

  const ModalStack = createStackNavigator();

  function ModalStackScreen() {
    return (
      <ModalStack.Navigator
        mode="modal"
        headerMode="screen"
        screenOptions={{
          gestureDirection: 'horizontal',
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          headerBackTitleVisible: false,
          ...Platform.select({
            android: {
              headerStatusBarHeight: StatusBar.currentHeight, //设置状态栏高度
            },
          }),
          headerTitleAlign: 'center',
        }}>
        <ModalStack.Screen
          name="Root"
          component={RootStackScreen}
          options={{headerShown: false}}
        />
      </ModalStack.Navigator>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {/*<ModalStackScreen />*/}
        <OpeningStackScreen />
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
          translucent
        />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Navigator;
