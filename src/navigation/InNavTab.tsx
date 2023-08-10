import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

// Styles
import { useTheme } from 'styled-components/native';

// Types
import type { InNavTabParamList } from '~/types/react-navigation';
import Home from '~/screens/Home/Home';
import InNavStack from './InNavStack';

const Nav = createBottomTabNavigator<InNavTabParamList>();

const NAV_HEIGHT = 60;

const InNavTab = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Nav.Navigator
      screenOptions={{
        headerShown: false,
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
          height: NAV_HEIGHT + insets.bottom,
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
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => {
            if (Platform.OS === 'ios')
              return (
                <Ionicons name="ios-home-outline" size={size} color={color} />
              );
            else
              return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Nav.Screen
        name="InNavStack"
        component={InNavStack}
        options={{
          title: 'Coins',
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome5 name="coins" size={size - 5} color={color} />;
          },
        }}
      />
    </Nav.Navigator>
  );
};

export default InNavTab;
