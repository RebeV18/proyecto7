import { apiClient } from "../../../shared/services/apiClient";

export const fetchAllProducts = async () => {
  try {
    const { data } = await apiClient.get(
      "https://proyecto6-sgv2.onrender.com/api/v1/product/readall/"
    );
    return data;
  } catch (error) {
    console.error("Error obteniendo los productos", error);
    throw new Error(error);
  }
};

export const fetchProductById = async (id) => {
  try {
    const { data } = await apiClient.get(`https://proyecto6-sgv2.onrender.com/api/v1/product/readone/${id}`);
    return data;
  } catch (error) {
    console.error(`Error obteniendo el producto con el id: ${id}`, error);
    throw new Error(error);
  }
};

export const groupByCD = async () => {
  try {
    const { products } = await fetchAllProducts();
    const groupSongs = [
      ...new Map(
        products
          .filter((product) => product.cd) // Filtra productos con un CD válido
          .map((product) => [
            product.cd, // Clave única para Map
            { cd: product.cd, imagen: product.imagen }, // Objeto con nombre e imagen
          ])
      ).values(),
    ];
    return groupSongs;
  } catch (error) {
    console.error("Error obteniendo los productos", error);
    throw new Error(error);
  }
};