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
  TransitionPresets,
} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import IconFont from '@/assets/iconfont';

import storage, {load} from '@/config/storage';

import BottomTabs from './BottomTabs';
import ModalStackScreen from './ModalStackScreen';

import LogoInStackScreen from './LogoInStackScreen';
import Album from '@/pages/Album/Index';
import Detail from '@/pages/Detail/Index';

import {DrawerContent} from '@/components//DrawerContent';
import {AuthContext} from '@/components/Context';
import PlayView from '@/pages/PlayView/Index';
import {navigationRef,getActiveRouteName} from '@/utils/Index';

// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// function getOptions({route}) {
//   return {
//     headerTitle: route.params.item.title,
//     headerTransparent: true,
//     headerTitleStyle: {
//       opacity: route.params.opacity,
//     },
//     headerBackground: () => {
//       return (
//         <Animated.View
//           style={[style.headerBackground, {opacity: route.params.opacity}]}
//         />
//       );
//     },
//   };
// }

const style = StyleSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: '#58a',
    opacity: 0,
  },
  backImageWrapper: {
    padding: 5,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 50,
  },
  backImage: {
    marginHorizontal: Platform.OS === 'android' ? 0 : 8,
  },
});

const Navigator = () => {
  const [userName, setUserName] = React.useState('');
  const [routeName,setRouteName]=React.useState('');
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

  const onStateChange = (state) => {
    if(typeof state!=='undefined'){
      const routeName=getActiveRouteName(state);
      setRouteName(routeName);
    }
    console.log('state: ', state);
  };

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer
          theme={theme}
          ref={navigationRef}
          onStateChange={onStateChange}>
          <StatusBar
            backgroundColor={'transparent'}
            barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
            translucent
          />
          <Stack.Navigator
            mode="modal"
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
              name="ModalStackScreen"
              options={{
                headerShown: false,
              }} // 去掉导航顶部
              component={ModalStackScreen}
            />
            <Stack.Screen
              options={{
                headerBackImage: ({tintColor}) => (
                  <LinearGradient
                    colors={['#ffffff', '#ffcc33']}
                    style={style.backImageWrapper}>
                    <IconFont
                      name="iconzuo"
                      size={20}
                      color={tintColor}
                      style={style.backImage}
                    />
                  </LinearGradient>
                ),
              }}
              name="Album"
              component={Album}
            />
            <Stack.Screen
              options={{
                headerTintColor: '#000',
                headerTitle: '',
                headerTransparent: true,
                cardStyle: {backgroundColor: '#807c66'},
                ...TransitionPresets.ModalPresentationIOS,
                headerBackImage: ({tintColor}) => (
                  <LinearGradient
                    colors={['#ffffff', '#ffcc33']}
                    style={style.backImageWrapper}>
                    <IconFont
                      name="iconxiangxia1"
                      size={20}
                      color={tintColor}
                      style={style.backImage}
                    />
                  </LinearGradient>
                ),
              }}
              name="Detail"
              component={Detail}
            />
          </Stack.Navigator>
          <PlayView routeName={routeName} />
          {/*<LogoInStackScreen />*/}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default Navigator;
