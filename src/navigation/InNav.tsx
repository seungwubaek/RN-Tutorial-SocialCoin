import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Home from '~/screens/Home/Home';
import CoinDetail from '~/screens/CoinDetail';

// Styles
import { useTheme } from 'styled-components/native';

// Types
import type { InNavStackParamList } from '~/types/react-navigation';

const Nav = createNativeStackNavigator<InNavStackParamList>();

const InNav = () => {
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
      <Nav.Screen name="Home" component={Home} options={{ title: 'Coins' }} />
      <Nav.Screen name="CoinDetail" component={CoinDetail} />
    </Nav.Navigator>
  );
};

export default InNav;
