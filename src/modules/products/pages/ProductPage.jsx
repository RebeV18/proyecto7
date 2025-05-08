import { useFetchProducts } from "../hooks/useFetchProducts";
import { CDCards } from "../components/CDCards";
import { Background } from "../../../shared/components/Background";

export const ProductPage = () => {
  const { productos, loading, error } = useFetchProducts();

  return (
    <>
      <Background />

      <div className="container flex flex-col justify-items-center place-items-center mx-auto px-4 py-8">
        <h2 className="text-white mt-3 md:mt-20 lg:mt-25 xl:mt-30 2xl:mt-120 mb-7 lg:mb-10 xl:mb-12 2xl:mb-30 text-lg sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:xl:text-8xl">
          DISCOGRAFíA
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
            <p className="text-xl font-semibold">
              No hay productos disponibles
            </p>
          </div>
        )}

        {<CDCards />}
      </div>
    </>
  );
};
