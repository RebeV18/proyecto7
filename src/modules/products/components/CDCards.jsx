import clsx from "clsx";
import { useState, useEffect, useMemo } from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

import { fetchAllProducts } from "../services/productApiService";
import { Song } from "./Song";

import "../../../shared/Styles/Styles.css";

export const CDCards = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [songs, setSongs] = useState([]);
  const [allItems, setAllItems] = useState([]);
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

        // Procesar singles individualmente
        const singlesData = products
          .filter((song) => song.cd === "Singles")
          .map((single) => ({
            id: single.id,
            cd: `Single ${single.cancion}`,
            imagen: single.imagen,
            anho_lanzamiento: single.anho_lanzamiento,
            type: 'single',
            songData: single
          }));

        // Agrupar el resto de CDs (excluyendo Singles y Podcast)
        const groupSongs = [
          ...new Map(
            products
              .filter((song) => song.cd !== "Podcast" && song.cd !== "Singles")
              .map((song) => [
                song.cd,
                {
                  id: song.cd,
                  cd: song.cd,
                  imagen: song.imagen,
                  anho_lanzamiento: song.anho_lanzamiento,
                  type: 'cd'
                },
              ])
          ).values(),
        ];

        // Combinar singles y CDs, ordenar por año y tipo
        const allItems = [...singlesData, ...groupSongs].sort((a, b) => {
          const yearA = parseInt(a.anho_lanzamiento) || 0;
          const yearB = parseInt(b.anho_lanzamiento) || 0;
          
          // Si tienen el mismo año, priorizar CDs (type !== 'single') sobre singles
          if (yearA === yearB) {
            if (a.type === 'single' && b.type !== 'single') return 1;
            if (a.type !== 'single' && b.type === 'single') return -1;
          }
          
          return yearB - yearA; // Más reciente primero
        });

        setAllItems(allItems);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    handleApiResponse();
  }, []);

  const filteredSongs = useMemo(() => {
    if (!theCd) return [];
    
    if (theCd.type === 'single') {
      // Para singles, devolver solo esa canción
      return [theCd.songData];
    } else {
      // Para CDs, filtrar canciones del álbum
      return songs
        .filter((song) => song.cd === theCd.cd)
        .sort((a, b) => {
          const trackA = parseInt(a.track || a.trackNumber || 0);
          const trackB = parseInt(b.track || b.trackNumber || 0);
          return trackA - trackB;
        });
    }
  }, [songs, theCd]);

  return (
    <div className="py-10 px-5">
      <div className="grid grid-cols-1 content-center sm:grid-cols-2 xl:grid-cols-3 gap-15 xl:gap-25">
        {allItems.map((item, index) => (
          <div
            key={item.id || index}
            onClick={() => handleCardClick(item)}
            className={clsx(
              "relative h-[445px] w-[260px] cursor-pointer rounded-2xl bg-gradient-to-r from-amber-400 to-pink-600 pg-50 shadow-md p-1",
              {
                "[&_.card-content]:rotate-y-180": flippedCards[item.cd],
              }
            )}
          >
            <div className="card-content h-full w-full transition-transform duration-500 [transform-style:preserve-3d]">
              {/* Front Side */}
              <div className="absolute h-full w-full rounded-2xl p-4 bg-[#000e1f] [backface-visibility:hidden]">
                <h3 className="relative h-[80px] w-[230px] flex items-center justify-center py-2 mt-1 mb-3 shadow text-center gap-1 text-xl text-white font-semibold">
                  {item.cd}
                </h3>
                <p className="font-poppins text-base text-center text-white italic">
                  {item.anho_lanzamiento}
                </p>
                <div className="mt-4 overflow-hidden rounded-xl">
                  <img
                    className="h-full w-full object-cover rounded-xl"
                    src={item.imagen}
                    alt={item.cd || "CD"}
                  />
                </div>
                <div className="flex justify-center text-center z-10 text-3xl font-bold text-white mt-5 transition-transform duration-500 hover:scale-[1.30] active:scale-[0.95]">
                  <IoIosArrowRoundForward className="shadow rounded-full" />
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute h-full w-full rotate-y-180 rounded-2xl p-4 bg-[#000e1f] shadow-lg [backface-visibility:hidden]">
                <h3 className="relative h-[80px] w-[230px] flex items-center justify-center py-2 mt-1 mb-3 shadow text-center gap-1 text-xl text-white font-semibold">
                  {item.cd}
                </h3>
                <div className="overflow-y-auto max-h-[280px] mt-2 space-y-2">
                  {filteredSongs.length > 0 ? (
                    filteredSongs.map((song) => (
                      <Song key={song.id} producto={song} />
                    ))
                  ) : (
                    <p className="text-center text-sm">
                      No hay canciones disponibles
                    </p>
                  )}
                </div>
                <div className="flex justify-center text-center z-10 text-3xl font-bold text-white mt-2 transition-transform duration-500 hover:scale-[1.30] active:scale-[0.95]">
                  <IoIosArrowRoundBack className="shadow rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
