import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

// Screens
import Coins from '~/screens/Coins';

// Styles
import { useTheme } from 'styled-components/native';

// Types
import type { InNavTabParamList } from '~/types/react-navigation';
import Home from '~/screens/Home/Home';

const Nav = createBottomTabNavigator<InNavTabParamList>();

const NAV_HEIGHT = 60;

const InNavTab = () => {
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
        tabBarStyle: {
          backgroundColor: theme.navTabBgColor,
          height: NAV_HEIGHT,
          paddingTop: 10,
        },
        tabBarActiveTintColor: theme.navTabLabelColor,
        tabBarInactiveTintColor: theme.navTabLabelInactiveColor,
        tabBarLabelStyle: {
          fontSize: 14,
          paddingBottom: 5,
        },
      }}
    >
      <Nav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Nav.Screen
        name="Coins"
        component={Coins}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome5 name="coins" size={size - 5} color={color} />;
          },
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('InNavStack', { screen: 'Coins' });
          },
        })}
      />
    </Nav.Navigator>
  );
};

export default InNavTab;
