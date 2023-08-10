import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// Navigations
import InNavTab from '~/navigation/InNavTab';
import OutNav from '~/navigation/OutNav';

// Styles
import { defaultTheme } from './src/styles/theme';

const queryClient = new QueryClient();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <NavigationContainer>
            {isLoggedIn ? <InNavTab /> : <OutNav />}
          </NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
