import { Button, Text } from 'react-native';

type Props = {
  "navigation": any
}

export default function Login({navigation} : Props) {
  return (
    <>
      <Text>Login</Text>
      <Button title="login" onPress={() => navigation.navigate('HeroList')}/>
    </>
  );
};