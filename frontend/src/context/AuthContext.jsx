import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');
    if (storedToken && storedUser) {
      setAuthToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    setAuthToken(token);
    setIsLoggedIn(true);
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setAuthToken('');
    setIsLoggedIn(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, authToken, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
