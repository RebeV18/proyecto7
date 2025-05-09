import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { loginService } from "../services/authApiService";
//import { AuthContext } from "./AuthContext";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  token: null,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async ({ email, password }) => {
    try {
      const dataLogin = await loginService({ email, password });
      const { token } = dataLogin;
      const user = dataLogin.data;

      if (!token || !user) {
        throw new Error("No se pudo iniciar sesión");
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setIsAuthenticated(true);

      dispatch({
        type: "LOGIN",
        payload: { user, token },
      });
    } catch (error) {
      console.error("Error logging in:", error);
      throw new Error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
