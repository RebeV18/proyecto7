import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllProducts } from "../services/productApiService";

export const CDFlipCard = () => {
  const [songs, setSongs] = useState([]);
  const [cds, setCds] = useState([]);
  const [theCd, setTheCd] = useState(null);
  const [theSong, setTheSong] = useState(null);

  const navigate = useNavigate();

  //Se obtienen datos de la API y se organizan las canciones por cd usando useEffect.
  useEffect(() => {
    const handleApiResponse = async () => {
      const data = await fetchAllProducts();
      setSongs(data);
  
      // Agrupar canciones por CD directamente desde la respuesta
      const groupSongs = [...new Set(data.map((song) => song.cd).filter(Boolean))];
      setCds(groupSongs);
    };
  
    handleApiResponse();
  }, []);

  const handleClickSong = (song) => {
    setTheSong(song);
    navigate(`/ProductCard/${theSong._id}`);
  };

  return (
    <section className="py-16 mx-auto sm:py-20">
      <div
        className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl"
      >
        <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Discografía
          </h2>
          
          <div className="mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
            {cds.map((cd) => (
              <div
                key={cd}
                className={`group h-96 w-96 [perspective:1000px] ${
                  theCd === cd
                }`}
                onClick={() => setTheCd(cd)}
              >
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                    {cd.imagen && (
                      <Image
                        className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                        src={cd.imagen}
                        alt={cd.cd}
                        width={320}
                        height={320}
                      />
                    )}
                    <p className="md:my-6 text-2xl">{cd.cd}</p>
                  </div>

                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h2 className="text-2xl font-bold mb-4">{cd.name}</h2>

                      <p className="text-lg text-pretty text-center mb-4">
                        {songs
                          .filter((song) => song.cd === theCd)
                          .map((song) => (
                            <div
                              key={song.id}
                              className="p-1 cursor-pointer"
                              onClick={() => handleClickSong(song)}
                            >
                              <p className="text-xs md:text-lg text-white font-semibold lg:text-2xl">
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
    </section>
  );
};

