import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import TopTapBarWrapper from '@/pages/views/TopTabBarWrapper';
import Home from '@/pages/Home/Index';
import Hot from '@/pages/Hot/Index';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
  const {dark, colors} = useTheme();
  const {myCategorys} = useSelector(({category}) => category);
  const renderTabBar = (props) => {
    return <TopTapBarWrapper {...props} />;
  };

  return (
    <Tab.Navigator
      lazy
      pager={(props) => <ViewPagerAdapter {...props} />}
      tabBar={renderTabBar}
      sceneContainerStyle={styles.sceneContainer}
      tabBarOptions={{
        scrollEnabled: true,
        tabStyle: {
          width: 80,
        },
        indicatorStyle: {
          height: 4,
          width: 20,
          marginLeft: 30,
          borderRadius: 2,
          backgroundColor: '#f86442',
        },
        activeTintColor: '#f86442',
        inactiveTintColor: 'rgba(0,0,0,.6)',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '推荐',
        }}
      />
      <Tab.Screen name="Hot" component={Hot} options={{tabBarLabel: '热门'}} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: 'transparent',
  },
});

export default HomeTabs;
