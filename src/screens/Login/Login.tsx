import { Button, Text } from 'react-native';
import LoginContext from '../../context/LoginContext';
import { useContext } from 'react';

type Props = {
  "navigation": any
}

export default function Login({navigation} : Props) {
  const {login} = useContext(LoginContext)
  return (
    <>
      <Text>Login</Text>
      <Button title="login" onPress={() => login('aaaa', 'aaaa')}/>
    </>
  );
};