import { useFetchProducts } from "../hooks/useFetchProducts";
import { CDCards } from "../components/CDCards";
import { Background } from "../../../shared/components/Background";

import "@fontsource/alumni-sans-pinstripe";

export const ProductPage = () => {
  const { productos, loading, error } = useFetchProducts();

  return (
    <>
      <Background />

      <div className="container flex flex-col justify-items-center place-items-center mx-auto mt-20 2xl:mt-1 px-4 py-8">
        <h1 className="font-alumni-sans-pinstripe font-thin tracking-widest text-white text-center mt-20 xl:mt-30 2xl:mt-50 mb-7 md:mb-10 lg:mb-15 xl:mb-18 2xl:mb-20 text-lg xs:text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
          DISCOGRAFIA
        </h1>

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
