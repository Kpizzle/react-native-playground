import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import MyProfileScreen from './src/screens/MyProfileScreen';



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Dashboard' component={HomeScreen} />
        <Drawer.Screen name='My Profile' component={MyProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
