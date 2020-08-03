import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from '@/components//DrawerContent';

const Drawer = createDrawerNavigator();

import BottomTabs from './BottomTabs';

export default function ModalStackScreen() {
  return (
    <Drawer.Navigator
      drawerPosition={'left'}
      drawerType='slide'
      edgeWidth={10}
      // drawerStyle={{}}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="DrawerScreen" component={BottomTabs} />
    </Drawer.Navigator>
  );
}
