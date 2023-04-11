import { Button, SafeAreaView, Text } from 'react-native';
import LoginContext from '../../context/LoginContext';
import React, { useContext } from 'react';

export default function Login() {
  const {login} = useContext(LoginContext)
  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Button title="login" onPress={() => login('aaaa', 'aaaa')}/>
    </SafeAreaView>
  );
};