import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Coins from '~/screens/Coins';
import CoinDetail from '~/screens/CoinDetail';

// Styles
import { useTheme } from 'styled-components/native';

// Types
import type { InNavStackParamList } from '~/types/react-navigation';

const Nav = createNativeStackNavigator<InNavStackParamList>();

const InNavStack = () => {
  const navigation = useNavigation();
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
        headerBackTitleVisible: false,
        animation: 'slide_from_right',
      }}
    >
      <Nav.Screen
        name="Coins"
        component={Coins}
        options={{
          headerBackVisible: false,
          headerLeft: (props) =>
            props.canGoBack && (
              <HeaderBackButton
                {...props}
                style={{ marginLeft: 0 }}
                onPress={() => navigation.goBack()}
              />
            ),
        }}
      />
      <Nav.Screen name="CoinDetail" component={CoinDetail} />
    </Nav.Navigator>
  );
};

export default InNavStack;
