import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@/pages/home/Index';
import IconFont from '@/assets/iconfont';
import Anime from '@/pages/anime/Index';
import User from '@/pages/user/Index';
import VarietyShow from '@/pages/varietyShow/Index';

const Tab = createBottomTabNavigator();

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
          tabBarIcon: ({color, size}) => (
            <IconFont name="iconyemian" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Anime"
        component={Anime}
        options={{
          tabBarLabel: '动漫',
          tabBarIcon: ({color, size}) => (
            <IconFont name="icondongman" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="VarietyShow"
        component={VarietyShow}
        options={{
          tabBarLabel: '综艺',
          tabBarIcon: ({color, size}) => (
            <IconFont name="iconzongyi" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => (
            <IconFont name="iconren" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
