import { useState, useEffect } from "react";

import { fetchAllProducts } from "../services/productApiService";
import { PlayCard } from "../components/PlayCard";

export const Podcast = () => {
  const [episodes, setEpisodes] = useState([]);
  const [theEpisode, setTheEpisode] = useState(null);

  const handleClick = (ep) => {
    console.log("Episodio seleccionado:", setTheEpisode, ep);
  };

  useEffect(() => {
    const handleApiResponse = async () => {
      try {
        const data = await fetchAllProducts();
        console.log("Datos de la API:", data); // Verifica los datos aquí
        if (!data || typeof data !== "object") {
          throw new Error("La respuesta de la API no es válida");
        }
        const products = data.products || data.data || data;
        if (!Array.isArray(products)) {
          throw new Error("La respuesta de la API no contiene un array válido");
        }

        const filtrarPodcast = products
          .filter((ep) => ep.cd === "Podcast")
          .map((ep) => ({
            nombre: ep.nombre || "Sin nombre",
            enlace: ep.enlace || "#", // Enlace predeterminado
          }));
        console.log("Episodios filtrados:", filtrarPodcast); // Verifica los episodios filtrados
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
      <div className="mx-auto grid gap-15 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
        {episodes.length > 0 ? (
          episodes.map((e, index) => (
            <div key={index} onClick={() => handleClick(e)}>
              <PlayCard product={e} />
            </div>
          ))
        ) : (
          <p className="text-center text-white">No hay episodios disponibles</p>
        )}
      </div>
    </>
  );
};
