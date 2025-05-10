import { apiClient } from "../../../shared/services/apiClient";

export const loginService = async ({ email, password }) => {
  try {
    const { data } = await apiClient.post("/user/login", { email, password });
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error(error);
  }
};

// export const registerService = async ({
//   nombre,
//   apellido,
//   pais,
//   email,
//   telefono,
//   password,
//   confirmPassword,
// }) => {
//   try {
//     const { data } = await apiClient.post("/user/register", {
//       nombre,
//       apellido,
//       pais,
//       email,
//       telefono,
//       password,
//       confirmPassword,
//     });
//     return data;
//   } catch (error) {
//     console.error("Error al registrar el usuario:", error);
//     throw new Error(error);
//   }
// };



export const registerService = async (userData) => {
  try {
    if (!(userData instanceof FormData)) userData = new FormData(userData);
    const { data } = await apiClient.post("/user/register", userData);
    return data;
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    throw new Error(error);
  }
};