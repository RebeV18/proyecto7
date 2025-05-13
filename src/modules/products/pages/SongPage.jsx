import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";

import { SongCard } from "../components/SongCard";
import { Background } from "../../../shared/components/Background";

import "@fontsource/alumni-sans-pinstripe";

export const SongPage = () => {
  const { id } = useParams();
  const { productos, loading, error } = useFetchProducts();
  const [theSong, setSong] = useState(null);

  useEffect(() => {
    if (productos.length > 0) {
      const selectedSong = productos.find((s) => s._id === id);
      setSong(selectedSong);
    }
  }, [productos, id]);

  return (
    <>
      <Background />
      <div className="container flex flex-col justify-items-center place-items-center mx-auto px-4 py-8">
        <h1 className="font-thin tracking-widest text-white text-center mt-20 xl:mt-30 2xl:mt-50 mb-7 md:mb-18 lg:mb-15 xl:mb-20 2xl:mb-30 text-lg xs:text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
          DISCOGRAFÍA
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

        {theSong && <SongCard key={theSong._id} song={theSong} />}
        <button
          className="border-3 border-amber-500 rounded-lg text-white py-2 px-7 2xl:py-4 2xl:px-10 text-sm lg:text-base xl:text-lg 2xl:text-3xl"
          onClick={() => window.history.back()}
        >
          Volver
        </button>
      </div>
    </>
  );
};
