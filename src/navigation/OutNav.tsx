import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Login from '~/screens/Login/Login';
import Join from '~/screens/Join/Join';

// Styles
import { useTheme } from 'styled-components/native';

// Types
import type { OutNavStackParamList } from '~/types/react-navigation';

const Nav = createNativeStackNavigator<OutNavStackParamList>();

const OutNav = () => {
  const theme = useTheme();

  return (
    <Nav.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.navHeaderBgColor,
        },
        headerTintColor: theme.navHeaderTintColor,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: theme.navHeaderTextColor,
          fontWeight: 'normal',
        },
        animation: 'slide_from_right',
      }}
    >
      <Nav.Screen name="Login" component={Login} />
      <Nav.Screen name="Join" component={Join} />
    </Nav.Navigator>
  );
};

export default OutNav;
