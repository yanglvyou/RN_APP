import React from 'react';
import {Animated, Platform, StyleSheet, StatusBar, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
  HeaderBackButton,
} from '@react-navigation/stack';

import BottomTabs from './BottomTabs';

const Navigator = () => {
  const Stack = createStackNavigator();

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
    <NavigationContainer>
      <ModalStackScreen />
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />
    </NavigationContainer>
  );
};

export default Navigator;
