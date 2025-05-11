import { apiClient } from "../../../shared/services/apiClient";

export const loginService = async ({ email, password }) => {
  try {
    const { data } = await apiClient.post("/user/login", { email, password });
    return data;
  } catch (error) {
    console.error("Error al accesar la cuenta:", error);
    throw new Error(error);
  }
};

export const registerService = async ({
  nombre,
  apellido,
  pais,
  email,
  telefono,
  password,
  confirmPassword,
}) => {
  try {
    const { data } = await apiClient.post("/user/register", {
      nombre,
      apellido,
      pais,
      email,
      telefono,
      password,
      confirmPassword,
    });
    return data;
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    throw new Error(error);
  }
};
