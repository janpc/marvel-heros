import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import HeroList from '../../screens/HerosList';
import HeroDetails from '../../screens/HerosDetails';
import React, { useContext } from 'react';
import LoginContext from '../../context/LoginContext';
import UserMenu from '../UserMenu/Navigator';

const { Navigator, Screen } = createNativeStackNavigator();

export default function MyNavigator() {
  const {logged} = useContext(LoginContext)
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerRight: () => (
            <UserMenu />
          ),
          headerStyle: {
            backgroundColor: '#E23636',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {
          !logged ?
          <Screen
            name="Login"
            component={Login }
            options={{
              headerShown: false,
            }}
          /> :
          <>
            <Screen
              name="HeroList"
              component={HeroList}
              options={({ route }: any) => ({
                title: 'Hero List',
                headerBackTitleVisible: false
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
          </>
        }
      </Navigator>
    </NavigationContainer>
  );
};