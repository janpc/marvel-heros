import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import HeroList from '../../screens/HerosList';
import HeroDetails from '../../screens/HerosDetails';
import React, { useContext } from 'react';
import LoginContext from '../../context/LoginContext';
import UserMenu from '../UserMenu';

const { Navigator, Screen } = createNativeStackNavigator();

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
          options={({ route }: any) => ({
            title: 'Hero List',
            headerBackTitleVisible: false,
            headerBackVisible: false,
          })}
        />
        <Screen
          name="HeroDetails"
          component={HeroDetails}
          options={({ route }: any) => ({
            title: route.params.name,
            headerBackTitleVisible: false
          })}
        />
      </Navigator>
    </NavigationContainer>
  );
};