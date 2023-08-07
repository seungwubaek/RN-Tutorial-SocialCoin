import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Home from '~/screens/Home/Home';

// Types
import type { InNavStackParamList } from '~/types/react-navigation';

const Nav = createNativeStackNavigator<InNavStackParamList>();

const InNav = () => {
  return (
    <Nav.Navigator>
      <Nav.Screen name="Home" component={Home} />
    </Nav.Navigator>
  );
};

export default InNav;
