import {NAME, EMAIL, PASSWORD} from '@env'

type UserType = {
  name: string | undefined;
  email: string | undefined;
}

type ResType = {
  user: UserType;
  error: boolean;
}

export const validateLogin = (email: string, password: string): ResType => {
  const emailCorrect = email.toLowerCase() === EMAIL.toLowerCase();
  const passwordCorrect = password.toLowerCase() === PASSWORD.toLowerCase();

  if(  emailCorrect && passwordCorrect ) {
    return { user: {name: NAME, email: EMAIL}, error: false }
  }

  return { user: {name: '', email: ''}, error: true }
}