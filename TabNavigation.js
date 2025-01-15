import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native'
import HomeScreen from './HomeScreen';
import SettingsScreen from './Settings'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Consoles" component = { HomeScreen } options={{tabBarIcon: () => (
        <Image source={require('../assets/controller.png')} style={{ width: 30, height: 25 }}/>)}}/>
      <Tab.Screen name="Config's" component={SettingsScreen} options={{tabBarIcon: () => (
        <Image source={require('../assets/menupc.png')} style={{ width: 30, height: 25 }}/>)}} />
    </Tab.Navigator>
  );
};

export default TabNavigator;