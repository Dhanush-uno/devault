import { createContext, useState } from "react";
import { getToken, setToken, removeToken } from "../utils/token";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setTok] = useState(getToken());

  const login = (t) => {
    setToken(t);
    setTok(t);
  };

  const logout = () => {
    removeToken();
    setTok(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
