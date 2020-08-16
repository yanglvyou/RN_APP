import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
// import Home from '@/pages/Home/Index';
import IconFont from '@/assets/iconfont';
import Listen from '@/pages/Listen/Index';
import UserScreen from '@/pages/UserScreen/Index';
import VarietyShow from '@/pages/varietyShow/Index';
import HomeTabs from './HomeTabs';

const Tab = createMaterialBottomTabNavigator();

const UserStack = createStackNavigator();

const BottomTabs = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{activeTintColor: '#f86442'}}
      initialRouteName="Home"
      sceneAnimationEnabled>
      <Tab.Screen
        name="Home"
        component={HomeTabs}
        options={{
          tabBarLabel: '首页',
          tabBarColor: '#009387',
          headerTitle: '首页',
          tabBarIcon: ({color, size}) => (
            <IconFont name="iconyemian" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Listen"
        component={Listen}
        options={{
          tabBarLabel: '我听',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color, size}) => (
            <IconFont name="iconshoucang" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Found"
        component={VarietyShow}
        options={{
          tabBarLabel: '发现',
          tabBarColor: '#694fad',
          tabBarIcon: ({color, size}) => (
            <IconFont name="iconfaxian" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={UserStackScreen}
        options={{
          tabBarLabel: '我的',
          tabBarColor: '#d02860',

          tabBarIcon: ({color, size}) => (
            <IconFont name="iconzhanghao" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const UserStackScreen = ({navigation}) => (
  <UserStack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
      gestureEnabled: true,
      headerTitle: false,
      headerBackTitleVisible: false,
      headerTintColor: '#ccc',
      gestureDirection: 'horizontal',
      headerStyle: {
        backgroundColor: '#009387',
        ...Platform.select({
          android: {
            elevation: 0,
            borderBottomWidth: StyleSheet.hairlineWidth,
          },
        }),
      },
    }}>
    <UserStack.Screen
      name="User"
      component={UserScreen}
      options={{
        headerRightContainerStyle: styles.headerRightContainerStyle,
        headerRight: ({color, size}) => (
          <IconFont
            name="iconmenu2"
            size={size}
            color={color}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </UserStack.Navigator>
);

const styles = StyleSheet.create({
  headerRightContainerStyle: {
    paddingRight: 15,
  },
});

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator mode="modal" headerMode="screen">
      <Stack.Screen
        name="bottomtabs"
        options={{
          headerShown: false,
        }}
        component={BottomTabs}
      />
    </Stack.Navigator>
  );
};
