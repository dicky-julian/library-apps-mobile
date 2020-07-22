import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { connect } from 'react-redux';
import Home from '../../screens/Home';
import Mybook from '../../screens/Mybook';
import Database from '../../screens/Database';
import Auth from '../../screens/Auth';
import { setToken, revokeUser } from '../../redux/actions/auths';

const Tab = createMaterialTopTabNavigator();

const MyTheme = {
  colors: {
    primary: '#fff',
  },
};

const Navbar = (props) => {

  useEffect(() => {
    const token = props.token.token;
    if (token && !props.auths.isLogin) props.setToken(token);
  })

  return (
    <NavigationContainer theme={MyTheme}>
      {props.auths.isLogin ?
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#fff',
            style: { backgroundColor: '#272829' }
          }}>
          <Tab.Screen name="Home" component={Home} />
          {props.auths.isAdmin ?
            <Tab.Screen name="Database" component={Database} />
            :
            <Tab.Screen name="Mybook" component={Mybook} />
          }
        </Tab.Navigator>
        :
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#fff',
            style: { backgroundColor: '#272829' }
          }}>
            <Tab.Screen name="Login" component={Auth} />
          <Tab.Screen name="Home" component={Home} />
          
        </Tab.Navigator>
      }

    </NavigationContainer>
  );
}

const mapStateToProps = state => ({
  auths: state.auths,
  token: state.token
});

const mapDispathToProps = { setToken, revokeUser };

export default connect(mapStateToProps, mapDispathToProps)(Navbar);