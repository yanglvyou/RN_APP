import React from 'react';
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
    headerMode="none" // 去掉导航顶部
    screenOptions={{
      gestureEnabled: true,
      headerTitleAlign: 'center',
      headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <OpeningStack.Screen
      name="SplashScreen"
      options={{headerShown: true}} // 去掉导航顶部
      component={SplashScreen}
      options={{
        // cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
    />
    <OpeningStack.Screen
      name="SignInScreen"
      options={{headerShown: true}} // 去掉导航顶部
      component={SignInScreen}
      options={
        {
          // cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }
      }
    />
  </OpeningStack.Navigator>
);

export default OpeningStackScreen;
