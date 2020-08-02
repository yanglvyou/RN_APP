import React from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  StatusBar,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
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

import IconFont from '@/assets/iconfont';

import storage, {load} from '@/config/storage';

import BottomTabs from './BottomTabs';

import OpeningStackScreen from './OpeningStackScreen';

import {DrawerContent} from '@/components//DrawerContent';
import {AuthContext} from '@/components/Context';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Navigator = () => {
  const [userName, setUserName] = React.useState('');

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  console.log('isDarkTheme: ', isDarkTheme);

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

  const authContext = React.useMemo(
    () => ({
      signIn: async () => {
        setUserName('logoIn');
      },
      signOut: async () => {
        storage.save({key: 'userName', data: 'logoOut'});
        setUserName('logoOut');
      },
      signUp: () => {},
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    [],
  );

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
          options={{headerTitle: '首页'}}
          component={BottomTabs}
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
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <StatusBar
            backgroundColor={'transparent'}
            barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
            translucent
          />
          {userName === 'logoIn' ? (
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent {...props} />}>
              <Drawer.Screen name="BottomTabs" component={BottomTabs} />
            </Drawer.Navigator>
          ) : (
            <OpeningStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default Navigator;
