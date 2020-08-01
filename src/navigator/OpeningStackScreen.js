import React from 'react';
import {Platform,StyleSheet} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

import SplashScreen from '@/pages/SplashScreen/Index';
import SignInScreen from '@/pages/SignInScreen/Index';

const OpeningStack = createStackNavigator();

const OpeningStackScreen = () => (
  <OpeningStack.Navigator
    // headerMode="none" // 去掉导航顶部
    screenOptions={{
      gestureEnabled: true,
      headerTitleAlign: 'center',
      headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <OpeningStack.Screen
      name="SplashScreen"
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }} // 去掉导航顶部
      component={SplashScreen}
    />
    <OpeningStack.Screen
      name="SignInScreen"
      component={SignInScreen}
      options={{
        headerShown: true,
        headerTransparent: true,
        headerTitle:'',
        // cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
    />
  </OpeningStack.Navigator>
);

export default OpeningStackScreen;
