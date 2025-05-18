import { apiClient } from "../../../shared/services/apiClient";
import { cache } from "react";

export const fetchAllProducts = cache(async () => {
  try {
    const { data } = await apiClient.get(
      "https://proyecto6-sgv2.onrender.com/api/v1/product/readall/"
    );
    return data;
  } catch (error) {
    console.error("Error obteniendo los productos", error);
    throw new Error(error);
  }
});

export const fetchProductById = cache(async (id) => {
  try {
    const { data } = await apiClient.get(
      `https://proyecto6-sgv2.onrender.com/api/v1/product/readone/${id}`
    );
    return data;
  } catch (error) {
    console.error(`Error obteniendo el producto con el id: ${id}`, error);
    throw new Error(error);
  }
});
