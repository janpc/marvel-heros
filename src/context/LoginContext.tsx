import React, { createContext, ReactNode, useState } from "react";
import {NAME, EMAIL} from '@env'

type UserType = {
  name: string | undefined;
  email: string | undefined;
}

type InitialStateType = {
  logged: boolean;
  user: UserType;
  login: Function;
  logout: Function;
}

const initialState = {
  logged: false,
  user: {name: '', email: ''},
  login: () => {},
  logout: () => {},
}
const LoginContext = createContext<InitialStateType>(initialState);

export function LoginProvider({ children }: { children: ReactNode }){

  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState<UserType>({name: '', email: ''});

  function login(email: string, password: string) {
    console.log(NAME);

    setUser({name: NAME, email: EMAIL});
    setLogged(true);
  }

  function logout() {
    setUser({name: '', email: ''});
    setLogged(false);
  }

  return (
    <LoginContext.Provider value={{logged, user, login, logout}}>
      {children}
    </LoginContext.Provider>
  );
}


export default LoginContext;



