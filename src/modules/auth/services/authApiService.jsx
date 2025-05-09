import { apiClient } from "../../../shared/services/apiClient";

export const loginService = async ({ email, password }) => {
  try {
    const { data } = await apiClient.post(
      "/user/login",
      { email, password }
    );
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error(error);
  }
};
