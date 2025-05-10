import clsx from "clsx";
import { useState, useEffect, useMemo } from "react";
import { fetchAllProducts } from "../services/productApiService";
import { Song } from "./Song";

import "../../../shared/Styles/Styles.css";
import "@fontsource/poppins";

export const CDCards = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [songs, setSongs] = useState([]);
  const [cds, setCds] = useState([]);
  const [theCd, setTheCd] = useState(null);

  const handleCardClick = (cd) => {
    setTheCd(cd);
    setFlippedCards((prev) => ({
      ...prev,
      [cd.cd]: !prev[cd.cd],
    }));
  };

  useEffect(() => {
    const handleApiResponse = async () => {
      try {
        const data = await fetchAllProducts();
        const products = data.products || data.data || data;
        setSongs(products);

        const groupSongs = [
          ...new Map(
            products
              .filter((song) => song.cd !== "Podcast")
              .map((song) => [
                song.cd,
                {
                  cd: song.cd,
                  imagen:
                    song.cd === "Singles"
                      ? "https://res.cloudinary.com/ddxlvh0go/image/upload/v1746074281/LG_hvi4gy.jpg"
                      : song.imagen,
                  anho_lanzamiento: song.anho_lanzamiento,
                },
              ])
          ).values(),
        ];
        setCds(groupSongs);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    handleApiResponse();
  }, []);

  const filteredSongs = useMemo(() => {
    return songs.filter((song) => theCd && song.cd === theCd.cd);
  }, [songs, theCd]);

  return (
    <div className="py-10 px-5">
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 xl:grid-cols-3 gap-15 xl:gap-25">
        {cds.map((cd, index) => (
          <div
            key={cd.cd || index}
            onClick={() => handleCardClick(cd)}
            className={clsx(
              "relative h-[440px] w-[260px] cursor-pointer rounded-2xl bg-gradient-to-r from-amber-400 to-pink-600 pg-50 shadow-md transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]",
              {
                "[&_.card-content]:rotate-y-180": flippedCards[cd.cd],
              }
            )}
          >
            <div className="absolute bottom-5 left-20 text-center z-10 border-1 border-amber-200 rounded-lg px-2 py-[2px] text-md font-medium text-white shadow">
              Ver canciones
            </div>

            <div className="card-content h-full w-full transition-transform duration-500 [transform-style:preserve-3d]">
              {/* Front Side */}
              <div className="custom-card absolute h-full w-full rounded-2xl p-4 text-gray-800 [backface-visibility:hidden]">
                <h3 className="relative h-[80px] w-[230px] flex items-center justify-center py-2 mt-1 mb-3 shadow text-center gap-1 text-xl text-white font-semibold font-poppins">
                  {cd.cd}
                </h3>
                <p className="font-poppins text-base text-center text-white italic">
                  {cd.anho_lanzamiento}
                </p>
                <div className="mt-4 overflow-hidden rounded-xl">
                  <img
                    className="h-[160px] h-full w-full object-cover rounded-xl"
                    src={cd.imagen}
                    alt={cd.cd || "CD"}
                  />
                </div>
              </div>

              {/* Back Side */}
              <div className="custom-card absolute h-full w-full rotate-y-180 rounded-2xl p-4 text-gray-800 shadow-lg [backface-visibility:hidden]">
                <h3 className="relative h-[80px] w-[230px] flex items-center justify-center py-2 mt-1 mb-3 shadow text-center gap-1 text-xl text-white font-semibold font-poppins">
                  {cd.cd}
                </h3>
                <div className="overflow-y-auto max-h-[280px] mt-2 space-y-2">
                  {filteredSongs.length > 0 ? (
                    filteredSongs.map((song) => (
                      <Song key={song._id} producto={song} />
                    ))
                  ) : (
                    <p className="text-center text-sm">
                      No hay canciones disponibles
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
