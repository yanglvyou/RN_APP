import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import Introduction from './Introduction';
import List from './List/index';

const Tab = (props) => {
  const {onScrollDrag, onItemPress, panRef, tapRef, nativeRef} = props;
  const [tabIndex, setTabIndex] = React.useState(1);
  function onIndexChange(index) {
    setTabIndex(index);
  }

  function _renderScene({route}) {
    switch (route.key) {
      case 'introduction':
        return <Introduction />;
      case 'albums':
        return (
          <List
            panRef={panRef}
            tapRef={tapRef}
            nativeRef={nativeRef}
            onScrollDrag={onScrollDrag}
            // onItemPress={onItemPress}
          />
        );
    }
  }

  function renderTabBar(props) {
    return (
      <TabBar
        {...props}
        scrollEnabled
        tabStyle={styles.tabStyle}
        labelStyle={styles.labelStyle}
        style={styles.tabBar}
        indicatorStyle={styles.indicator}
      />
    );
  }

  return (
      <TabView
        navigationState={{
          routes: [
            {key: 'introduction', title: '简介'},
            {key: 'albums', title: '节目'},
          ],
          index: tabIndex,
        }}
        onIndexChange={onIndexChange}
        renderTabBar={renderTabBar}
        renderScene={_renderScene}
      />
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    width: 80,
  },
  labelStyle: {
    color: '#333',
  },
  tabBar: {
    backgroundColor: '#fff',
    ...Platform.select({
      android: {
        elevation: 0,
        borderBottomColor: '#e3e3e3',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
    }),
  },
  indicator: {
    backgroundColor: '#eb6d48',
    borderLeftWidth: 20,
    borderRightWidth: 20,
    height: 4,
    borderColor: '#fff',
  },
});

export default Tab;
