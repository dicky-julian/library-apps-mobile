import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Book from './book';
import Search from './search';

const Stack = createStackNavigator();

const HomePage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Book" component={Book} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default HomePage;