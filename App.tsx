import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';

import InNav from '~/navigation/InNav';
import OutNav from '~/navigation/OutNav';

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
    <NavigationContainer>
      {isLoggedIn ? <InNav /> : <OutNav />}
    </NavigationContainer>
  );
}
