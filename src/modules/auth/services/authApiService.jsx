import { apiClient } from "../../../shared/services/apiClient";

export const loginService = async ({ email, password }) => {
  try {
    console.log("credenciales", {email, password});
    const { data } = await apiClient.post(
      "/user/login",
      { email, password }
    );
    console.log("data", data);
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error(error);
  }
};
