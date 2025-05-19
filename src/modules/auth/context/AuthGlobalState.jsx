import {
  useReducer,
  useEffect,
  createContext,
  useContext,
  useState,
} from "react";
import { authReducer } from "./authReducer";

import { loginService } from "../services/authApiService";
import { registerService } from "../services/authApiService";
import { updateService } from "../services/authApiService";

const AuthContext = createContext();

const initialState = {
  user: null,
  token: null,
  sessionData: null,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const sessionData = JSON.parse(localStorage.getItem("session"));

    if (token && user) {
      dispatch({
        type: "LOGIN",
        payload: { user, token },
      });
      dispatch({
        type: "SET_SESSION_DATA",
        payload: sessionData,
      });
      setIsAuthenticated(true);
    }
  }, []);

  const login = async ({ email, password }) => {
    try {
      const dataLogin = await loginService({ email, password });
      const { token } = dataLogin;
      const user = dataLogin.data;

      if (!token || !user) {
        throw new Error("No se pudo iniciar sesión");
      }

      const sessionData = { user, token };
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("session", JSON.stringify(sessionData));

      dispatch({
        type: "SET_SESSION_DATA",
        payload: sessionData,
      });

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

  const update = async (userData) => {
    try {
      const email = state.user?.email;
      if (!email) {
        throw new Error("No hay usuario logueado.");
      }
      const dataUpdate = await updateService({ ...userData, email });
      const user = dataUpdate.data;

      if (!user) {
        throw new Error("No se pudo actualizar el usuario");
      }
      alert(
        "Usuario actualizado correctamente, por favor inicie sesión nuevamente."
      );
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("session");
      setIsAuthenticated(false);
      dispatch({
        type: "UPDATE",
      });
    } catch (error) {
      console.error("Error updating user:", error);
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
        update,
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
