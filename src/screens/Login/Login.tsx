import { Button, Image, SafeAreaView, Text, TextInput } from 'react-native';
import LoginContext from '../../context/LoginContext';
import React, { useContext, useEffect, useState } from 'react';
import styles from './styles';
import { validateEmail, validatePassword } from '../../utils/verifyData';

export default function Login() {
  const {login} = useContext(LoginContext)
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [submitEnabled, setSubmitEnabled] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const isValid = validateEmail(email) && validatePassword(password)
    setSubmitEnabled(isValid);

  }, [email, password])

  const handleLogin = () => {
    const ok = login(email, password);

    if(!ok) {
      setError(true);
      setPassword('')
    }
  }
  return (
    <SafeAreaView style={styles.background}>
      <Image style={styles.logo} source={require('../../img/MarvelLogo.png')} />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Emial"
        keyboardType="email-address"
        autoFocus
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <Button
        disabled={!submitEnabled}
        color="black"
        title="Login"
        onPress={handleLogin}
      />
      {error && <Text style={styles.error}>Something went wrong!</Text>}
    </SafeAreaView>
  );
};