import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '@/pages/home/Index';
import IconFont from '@/assets/iconfont';
import Anime from '@/pages/anime/Index';
import User from '@/pages/user/Index';
import VarietyShow from '@/pages/varietyShow/Index';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{activeTintColor: '#f86442'}}
      // screenOptions={{tabBarVisible: false}}
      sceneAnimationEnabled>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '首页',
          tabBarColor: '#009387',
          tabBarIcon: ({color, size}) => (
            <IconFont name="iconyemian" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Anime"
        component={Anime}
        options={{
          tabBarLabel: '我听',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color, size}) => (
            <IconFont name="iconshoucang" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="VarietyShow"
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
        name="User"
        component={User}
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

export default BottomTabs;
