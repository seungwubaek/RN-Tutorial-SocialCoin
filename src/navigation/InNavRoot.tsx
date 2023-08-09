import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InNavStack from '~/navigation/InNavStack';
import InNavTab from '~/navigation/InNavTab';

// Navigations

const Nav = createNativeStackNavigator();

const InNavRoot = () => {
  return (
    <Nav.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Nav.Screen name="InNavTab" component={InNavTab} />
      <Nav.Screen name="InNavStack" component={InNavStack} />
    </Nav.Navigator>
  );
};

export default InNavRoot;
