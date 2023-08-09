import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// Navigations
import InNavRoot from '~/navigation/InNavRoot';
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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <NavigationContainer>
          {isLoggedIn ? <InNavRoot /> : <OutNav />}
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
