import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { fetchAllProducts } from "../services/productApiService";

export const Podcast = () => {
  const [episodes, setEpisodes] = useState([]);
  const [theEpisode, setTheEpisode] = useState(null);

  const navigate = useNavigate();

  const handleClick = (ep) => {
    setTheEpisode(ep);
    navigate(`/PlayCard/${theEpisode._id}`);
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

        const filtrarPodcast = [
          ...new Map(
            products
              .filter((ep) => ep.cd == "Podcast")
              .map((ep) => [
                ep.cd,
                {
                  nombre: ep.nombre,
                  enlace: ep.enlace,
                },
              ])
          ).values(),
        ];
        setEpisodes(filtrarPodcast);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    handleApiResponse();
  }, []);

  useEffect(() => {
    if (theEpisode) {
      console.log("episodios:", episodes);
      console.log("el episodio", theEpisode);
    }
  }, [episodes, theEpisode]);

  return (
    <>
      <div className="py-7 mx-auto sm:py-10">
        <div className="mx-auto flex justify-center object-center px-2 py-7 sm:py-10 lg:max-w-7xl">
          <div className="flex flex-wrap justify-center object-center flex-col gap-15 sm:gap-16">
            <div className="mx-auto grid gap-15 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
              {episodes.map((e, index) => (
                <div key={e.cd || index} onClick={() => handleClick(e)}>
                  <div className="card-content h-full w-full transition-transform duration-500 [transform-style:preserve-3d]">
                    <div className="card-front absolute h-full w-full rounded-2xl bg-gradient-to-br from-[#f0f4f8] to-[#e2ebf3] p-4 text-gray-800 [backface-visibility:hidden]">
                      <div className="py-4">
                        <div className="pb-0.5 px-4 flex-col items-start">
                          <h2 className="font-bold text-white text-xl text-center md:my-6">
                            {e.nombre}
                          </h2>
                          <img
                            className="overflow-visible py-2"
                            src={e.enlace}
                            alt={e.nombre}
                          />
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 rounded-full bg-[#0b5599] px-2 py-[2px] text-xs font-medium text-white shadow-lg">
                          Ver Episodio
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
