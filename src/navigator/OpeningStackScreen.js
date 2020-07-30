import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '@/pages/SplashScreen/Index';

const OpeningStack = createStackNavigator();

const OpeningStackScreen = () => (
  <OpeningStack.Navigator
    headerMode="none" // 去掉导航顶部
    screenOptions={{gestureEnabled: true, headerTitleAlign: 'center'}}>
    <OpeningStack.Screen
      name="SplashScreen"
      options={{headerShown: true}} // 去掉导航顶部
      component={SplashScreen}
    />
  </OpeningStack.Navigator>
);

export default OpeningStackScreen;
