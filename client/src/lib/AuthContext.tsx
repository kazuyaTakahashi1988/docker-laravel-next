import React, { useEffect, createContext, useState } from 'react';
import axios from 'axios'

type Props = {
  children: React.ReactNode;
};

type InitialState = {
  userAuth: any;
  setUserAuth: any;
};

export const AuthContext = createContext<InitialState | null>(null);

export const AuthProvider = ({ children }: Props) => {
  const [userAuth, setUserAuth] = useState(false);

/* -------------------------------------------------------
 ▽ ホットリロード時、ログインの再判定 ▽
---------------------------------------------------------- */
  useEffect(() => {
    axios.get(`${process.env.API_HOST}/api/user`, { withCredentials: true }).then((response: { data: any }) => {
      setUserAuth(response.data);
    })
  }, []);

  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
};