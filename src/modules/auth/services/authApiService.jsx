import { apiClient } from "../../../shared/services/apiClient";

export const loginService = async ({ email, password }) => {
  try {
    const { data } = await apiClient.post(
      "https://proyecto6-sgv2.onrender.com/api/v1/user/login",
      { email, password }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error(error);
  }
};
