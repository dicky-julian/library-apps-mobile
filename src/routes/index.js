import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Topnav from '../components/Topnav';

import Home from '../screens/Home';
import MyBook from '../screens/Mybook';

const { Navigator, Screen } = createStackNavigator();

const RoutesNavigator = () => (
  <Navigator headerMode='none'>
    <Screen name='Home' component={Home}/>
    <Screen name='MyBook' component={MyBook}/>
  </Navigator>
);

const Routes = () => {
    return (
        <NavigationContainer>
          <RoutesNavigator/>
        </NavigationContainer>
      )
};

export default Routes;