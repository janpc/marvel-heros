import React, { createContext, ReactNode, useEffect, useState } from "react";
import { validateLogin } from "../utils/validateLogin";
import { retrieveData, storeData } from "../utils/localData";

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
  user: {
    name: '',
    email: ''
  },
  login: () => {},
  logout: () => {},
}
const LoginContext = createContext<InitialStateType>(initialState);

export function LoginProvider({ children }: { children: ReactNode }){

  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState<UserType>({name: '', email: ''});

  const getUserData = async () => {
    const isUserLogged = await retrieveData('isUserLogged')
    if(isUserLogged) {
      const storedUser = await retrieveData('user')
      setLogged(true);
      setUser(storedUser);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  function login(email: string, password: string): boolean {
    const {user, error} = validateLogin(email, password);

    if( error) {
      return false
    }

    setUser({name: user.name, email: user.email});
    setLogged(true);
    storeData('user', {name: user.name, email: user.email})
    storeData('isUserLogged', true)

    return true;
  }

  function logout() {
    setUser({name: '', email: ''});
    setLogged(false);
    storeData('user', {name: '', email: ''})
    storeData('isUserLogged', false)
  }

  return (
    <LoginContext.Provider value={{logged, user, login, logout}}>
      {children}
    </LoginContext.Provider>
  );
}


export default LoginContext;



