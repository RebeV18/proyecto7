import clsx from "clsx";
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { fetchAllProducts } from "../services/productApiService";

export const FlashCard = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [songs, setSongs] = useState([]);
  const [cds, setCds] = useState([]);
  const [theCd, setTheCd] = useState(null);
  const [theSong, setTheSong] = useState(null);

  const navigate = useNavigate();

  const handleCardClick = (cd) => {
    setTheCd(cd);
    setFlippedCards((prev) => ({
      ...prev,
      [cd.cd]: !prev[cd.cd],
    }));
  };

  const handleClickSong = (song) => {
    setTheSong(song);
    navigate(`/ProductCard/${theSong._id}`);
  };

  useEffect(() => {
    const handleApiResponse = async () => {
      try {
        const data = await fetchAllProducts();
        if (!data || typeof data !== "object") {
          throw new Error("La respuesta de la API no es válida");
        }
        const products = data.products || data.data || data;
        if (!Array.isArray(products)) {
          throw new Error("La respuesta de la API no contiene un array válido");
        }
        setSongs(products);

        const groupSongs = [
          ...new Map(
            products
              .filter((song) => song.cd)
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

  useEffect(() => {
    if (theCd) {
      console.log("CD seleccionado:", theCd);
      console.log("Canciones disponibles:", songs);
      console.log("Canciones filtradas:", filteredSongs);
    }
  }, [theCd, songs, filteredSongs]);

  return (
    <>
      <div className="py-7 mx-auto sm:py-10">
        <div className="mx-auto flex justify-center object-center px-2 py-7 sm:py-10 lg:max-w-7xl">
          <div className="flex flex-wrap justify-center object-center flex-col gap-15 sm:gap-16">
            <div className="mx-auto grid gap-15 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
              {cds.map((cd, index) => (
                <div
                  key={cd.cd || index}
                  onClick={() => handleCardClick(cd)}
                  className={clsx(
                    `relative h-[400px] w-[220px] cursor-pointer rounded-2xl border border--200 bg-transparent shadow-md transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]`,
                    {
                      "[&_.card-content]:rotate-y-180": flippedCards[cd.cd],
                    }
                  )}
                >
                  <div className="card-content h-full w-full transition-transform duration-500 [transform-style:preserve-3d]">
                    <div className="card-front absolute h-full w-full rounded-2xl bg-gradient-to-br from-[#f0f4f8] to-[#e2ebf3] p-4 text-gray-800 [backface-visibility:hidden]">
                      <div className="py-4">
                        <div className="pb-0.5 px-4 flex-col items-start">
                          <h2 className="font-bold text-white text-xl text-center md:my-6">
                            {cd.cd === "Singles" ? (
                              <>
                                <br />
                                Singles
                                <br />
                              </>
                            ) : (
                              cd.cd
                            )}
                          </h2>
                          <p className="text-white text-center text-xs uppercase md:text-sm lg:text-base">
                          {cd.cd === "Singles" ? (
                              <></>
                            ) : (
                              cd.anho_lanzamiento
                            )}
                          </p>
                          <div className="overflow-visible py-2">
                            {cd.imagen && (
                              <img
                                className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                                src={cd.imagen}
                                alt={cd.cd || "N/A"}
                                width={320}
                                height={320}
                              />
                            )}
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 rounded-full bg-[#0b5599] px-2 py-[2px] text-xs font-medium text-white shadow-lg">
                          Ver canciones
                        </div>
                      </div>

                      <div className="card-back absolute h-full w-full rotate-y-180 rounded-2xl bg-gradient-to-br from-[#e1f4f0] to-[#b6f7df] p-4 text-gray-800 shadow-lg [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                          <h2 className="mb-2 flex items-center gap-1 text-2xl font-bold drop-shadow-sm text-white text-2xl font-bold mb-4">
                            {cd.name || "No Name Available"}
                          </h2>

                          <div className="text-white text-lg text-pretty text-center mb-4">
                            {filteredSongs.length > 0 ? (
                              filteredSongs.map((song, index) => (
                                <div
                                  key={song.id || `${song.cd}-${index}`}
                                  className="p-1 cursor-pointer"
                                  onClick={() => handleClickSong(song)}
                                >
                                  <p className="text-white text-xs md:text-lg text-white font-semibold lg:text-2xl">
                                    {song.cancion || "No Song Available"}
                                  </p>
                                </div>
                              ))
                            ) : (
                              <p className="text-white text-center">
                                No hay canciones disponibles
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
