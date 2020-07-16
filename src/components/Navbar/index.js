import * as React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../../screens/Home';
import Mybook from '../../screens/Mybook';

const Tab = createMaterialTopTabNavigator();

const MyTheme = {
  colors: {
    primary: '#fff',
  },
};

const Navbar = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        style: { backgroundColor: '#272829', borderBottomColor: 'red' }
      }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Mybook" component={Mybook} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navbar;