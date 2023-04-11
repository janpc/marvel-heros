import React, { createContext, ReactNode, useState } from "react";

type InitialStateType = {
  logged: boolean;
  user: string;
  login: Function;
  logout: Function;
}

const initialState = {
  logged: false,
  user: '',
  login: () => {},
  logout: () => {},
}
const LoginContext = createContext<InitialStateType>(initialState);

export function LoginProvider({ children }: { children: ReactNode }){

  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState('');

  function login(email: string, password: string) {
    setUser('user');
    setLogged(true);
  }

  function logout() {
    setUser('');
    setLogged(false);
  }

  return (
    <LoginContext.Provider value={{logged, user, login, logout}}>
      {children}
    </LoginContext.Provider>
  );
}


export default LoginContext;



