import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { loginService } from "../services/authApiService";
import { registerService } from "../services/authApiService";
import SessionContext from "./SessionContext";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const { setSessionData } = useContext(SessionContext); 

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
      localStorage.setItem("session", JSON.stringify(sessionData));
      setSessionData(sessionData);
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

  const register = async (userData) => {
    try {
      const dataRegister = await registerService(userData);
      const user = dataRegister.data;

      if (!user) {
        throw new Error("No se pudo registrar el usuario");
      }
      alert("Usuario registrado correctamente, por favor inicie sesión.");
    } catch (error) {
      console.error("Error registering user:", error);
      throw new Error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("session");
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
        register,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
