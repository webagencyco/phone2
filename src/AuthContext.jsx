import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData); // Assume userData contains the token and other user info
    localStorage.setItem('user', JSON.stringify(userData)); // Optional: Store user in localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Optional: Remove user from localStorage
  };

  useEffect(() => {
    // Check if user data is stored in localStorage and set it
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  console.log("AuthProvider user:", user);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
