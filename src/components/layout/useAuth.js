import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // This is a mock user. In a real app, this would come from your auth state.
  const [user, setUser] = useState(() => ({
    role: 'Admin', // Can be 'Admin', 'Member', or null
    email: 'admin@example.com',
    loginTime: Date.now(), // IMPORTANT: Set this on login
  }));

  const login = (userData) => {
    setUser({
      ...userData,
      loginTime: Date.now(),
    });
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};