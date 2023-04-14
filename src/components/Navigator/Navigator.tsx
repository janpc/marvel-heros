import React, { useContext } from 'react';
import { Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import HeroList from '../../screens/HerosList';
import HeroDetails from '../../screens/HeroDetails';
import LoginContext from '../../context/LoginContext';
import UserMenu from '../UserMenu';
import styles from './styles';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function MyNavigator() {
  const {logged} = useContext(LoginContext)

  if (!logged) {
    return (
      <NavigationContainer>
        <Navigator>
          <Screen
            name="Login"
            component={Login }
            options={{
              headerShown: false,
            }}
          />
        </Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerRight: () => (
            <UserMenu />
          ),
          headerTitle: () => (
          <Image style={styles.logo} source={require('../../img/MarvelLogo.png')} />
          ),
          headerStyle: {
            backgroundColor: '#f0131e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Screen
          name="HeroList"
          component={HeroList}
          options={{
            headerBackTitleVisible: false,
            headerBackVisible: false,
          }}
        />
        <Screen
          name="HeroDetails"
          component={HeroDetails}
          options={{
            headerBackTitleVisible: false
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};