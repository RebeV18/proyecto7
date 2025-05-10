import { useEffect, useState } from "react";
import { fetchAllProducts } from "../services/productApiService";

export const useFetchProducts = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);

        const response = await fetchAllProducts();
        setProductos(response.data);
        setError(null);
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return { productos, loading, error };
};
