import { CD_Cards } from "../components/CD_Cards";
import { useFetchProducts } from "../hooks/useFetchProducts";

export const ProductPage = () => {
  const { productos, loading, error } = useFetchProducts();

  return (
    <div className="container flex flex-col justify-items-center place-items-center mx-auto px-4 py-8">
      <h2 className="text-5xl font-bold mb-6 text-center text-white">
        Discografía
      </h2>

      {loading && (
        <div className="flex justify-center-items-center-py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded md text-center mb-6">
          <p className="font-semibold">Error: {error.message}</p>
        </div>
      )}

      {productos.length === 0 && !loading && !error && (
        <div className="text-center-py-10 text-gray-500">
          <p className="text-xl font-semibold">No hay productos disponibles</p>
        </div>
      )}

      {<CD_Cards />}
    </div>
  );
};
