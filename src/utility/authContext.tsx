'use client';

import React, { createContext, useContext, useState } from 'react';
import { User, UserDataDefault } from '../../shared/types/auth.types';

interface AuthContextType {
  USER: User;
  setUSER: (data: User) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useSignupContext must be used within a AuthContextProvider');
  }

  return context;
};

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [USER, setUSER] = useState<User>(UserDataDefault);

  return (
    <AuthContext.Provider value={{ USER, setUSER }}>
      {children}
    </AuthContext.Provider>
  );
};
