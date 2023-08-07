import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Login from '~/screens/Login/Login';
import Join from '~/screens/Join/Join';

// Types
import type { OutNavStackParamList } from '~/types/react-navigation';

const Nav = createNativeStackNavigator<OutNavStackParamList>();

const OutNav = () => {
  return (
    <Nav.Navigator>
      <Nav.Screen name="Login" component={Login} />
      <Nav.Screen name="Join" component={Join} />
    </Nav.Navigator>
  );
};

export default OutNav;
