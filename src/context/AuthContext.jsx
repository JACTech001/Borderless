import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  signup: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const signup = (userData) => {
    const newUsers = [...users, userData];
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const loginByEmail = (email) => {
    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = savedUsers.find(u => u.email === email);
    if (foundUser) {
      login(foundUser);
      return foundUser;
    }
    return null;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, loginByEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

