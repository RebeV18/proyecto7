import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { fetchAllProducts } from "../services/productApiService";

export const CDFlipCard = () => {
  const [songs, setSongs] = useState([]);
  const [cds, setCds] = useState([]);
  const [theCd, setTheCd] = useState(null);
  const [theSong, setTheSong] = useState(null);

  const navigate = useNavigate();

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
                  imagen: song.imagen,
                  anho: song.anho_lanzamiento,
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

  const handleClickSong = (song) => {
    setTheSong(song);
    navigate(`/ProductCard/${theSong._id}`);
  };

  return (
    <>
      <div className="py-16 mx-auto sm:py-20">
        <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">
          <div className="flex flex-wrap justify-center object-center flex-col gap-12 sm:gap-16">
            <div className="mx-auto grid gap-15 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
              {cds.map((cd, index) => (
                <div
                  key={cd.cd || index}
                  className={`group h-96 w-96 [perspective:1000px] ${
                    theCd === cd
                  }`}
                  onClick={() => setTheCd(cd)}
                >
                  <div className="relative h-full w-full pb-20 place-items-center rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                      <h2 className="md:my-6 text-white text-2xl text-center">{cd.cd}</h2>
                      {cd.imagen && (
                        <img
                          className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                          src={cd.imagen}
                          alt={cd.cd}
                          width={320}
                          height={320}
                        />
                      )}
                      <p className="text-white text-center text-xs md:text-lg lg:text-2xl">
                        {cd.anho_lanzamiento}
                      </p>
                    </div>

                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex min-h-full flex-col items-center justify-center">
                        <h2 className="text-white text-2xl font-bold mb-4">
                          {cd.name}
                        </h2>

                        <p className="text-white text-lg text-pretty text-center mb-4">
                          {songs
                            .filter((song) => song.cd === theCd)
                            .map((song) => (
                              <div
                                key={song.id} // Asegúrate de que `song.id` sea único
                                className="p-1 cursor-pointer"
                                onClick={() => handleClickSong(song)}
                              >
                                <p className="text-white text-xs md:text-lg text-white font-semibold lg:text-2xl">
                                  {song.cancion}
                                </p>
                              </div>
                            ))}
                        </p>
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
