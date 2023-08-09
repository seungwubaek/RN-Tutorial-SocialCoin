import React from 'react';
import { Text } from 'react-native';
import auth from '@react-native-firebase/auth';

// Styled Components
import {
  StBtnLogout,
  StTextLogout,
  StTextAccountFormLabel,
  StTextAccountFormValue,
  StViewAccountFormContainer,
  StViewAccountFormRow,
  StViewContainer,
} from './Home.style';

// Types
import type { InNavTabScreenProps } from '~/types/react-navigation';
import type { FirebaseAuthTypes } from '@react-native-firebase/auth';

const Home: React.FC<InNavTabScreenProps<'Home'>> = () => {
  const [user, setUser] = React.useState<FirebaseAuthTypes.User>();
  const [userInfo, setUserInfo] = React.useState<{
    email: string;
    nickName: string;
    phoneNumber: string;
  }>();

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setUserInfo({
          email: user.email || '',
          nickName: user.displayName || '',
          phoneNumber: user.phoneNumber || '',
        });
      }
    });
    return subscriber;
  }, []);

  const signOut = React.useCallback(() => {
    auth()
      .signOut()
      .then(() => console.log('User signed out'));
  }, []);

  return (
    <StViewContainer>
      <StViewAccountFormContainer>
        <StViewAccountFormRow>
          <StTextAccountFormLabel>Email</StTextAccountFormLabel>
          <StTextAccountFormValue>{userInfo?.email}</StTextAccountFormValue>
        </StViewAccountFormRow>
        <StViewAccountFormRow>
          <StTextAccountFormLabel>Nickname</StTextAccountFormLabel>
          <StTextAccountFormValue>{userInfo?.nickName}</StTextAccountFormValue>
        </StViewAccountFormRow>
        <StViewAccountFormRow>
          <StTextAccountFormLabel>Phone Number</StTextAccountFormLabel>
          <StTextAccountFormValue>
            {userInfo?.phoneNumber}
          </StTextAccountFormValue>
        </StViewAccountFormRow>
      </StViewAccountFormContainer>
      <StBtnLogout onPress={signOut}>
        <StTextLogout>Logout</StTextLogout>
      </StBtnLogout>
    </StViewContainer>
  );
};

export default Home;
