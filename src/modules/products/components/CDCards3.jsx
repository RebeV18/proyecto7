import clsx from "clsx";
import { useState, useEffect, useMemo } from "react";
import { ClipboardList, HelpCircle, Lightbulb } from "lucide-react";
import { fetchAllProducts } from "../services/productApiService";
import { Song } from "./Song";

export const CDCard3 = () => {
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
    <div className="py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cds.map((cd, index) => (
          <div
            key={cd.cd || index}
            onClick={() => handleCardClick(cd)}
            className={clsx(
              "relative h-[400px] w-[280px] cursor-pointer rounded-2xl border border-gray-200 bg-transparent shadow-md transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]",
              {
                "[&_.card-content]:rotate-y-180": flippedCards[cd.cd],
              }
            )}
          >
            <div className="absolute top-2 right-2 z-10 rounded-full bg-[#0b5599] px-2 py-[2px] text-xs font-medium text-white shadow">
              Click to Flip
            </div>

            <div className="card-content h-full w-full transition-transform duration-500 [transform-style:preserve-3d]">
              {/* Front Side */}
              <div className="card-front absolute h-full w-full rounded-2xl bg-gradient-to-br from-[#f0f4f8] to-[#e2ebf3] p-4 text-gray-800 [backface-visibility:hidden]">
                <h3 className="mb-2 flex items-center gap-1 text-xl font-bold text-[#0b5599]">
                  <HelpCircle size={18} />
                  Álbum
                </h3>
                <h2 className="text-lg font-semibold text-center">{cd.cd}</h2>
                <p className="text-sm text-center text-gray-600 italic">
                  {cd.anho_lanzamiento}
                </p>
                <div className="mt-4 overflow-hidden rounded-xl">
                  <img
                    className="h-[160px] w-full object-cover rounded-xl"
                    src={cd.imagen}
                    alt={cd.cd || "CD"}
                  />
                </div>
                <div className="mt-4 flex items-center gap-2 justify-center">
                  <Lightbulb size={18} color="orange" />
                  <p className="text-sm text-gray-600 italic">
                    Haz clic para ver canciones
                  </p>
                </div>
              </div>

              {/* Back Side */}
              <div className="card-back absolute h-full w-full rotate-y-180 rounded-2xl bg-gradient-to-br from-[#e1f4f0] to-[#b6f7df] p-4 text-gray-800 shadow-lg [backface-visibility:hidden]">
                <h3 className="mb-2 flex items-center gap-1 text-xl font-bold text-[#0b5599]">
                  <ClipboardList size={20} />
                  Canciones
                </h3>
                <div className="overflow-y-auto max-h-[280px] mt-2 space-y-2">
                  {filteredSongs.length > 0 ? (
                    filteredSongs.map((song) => (
                      <Song key={song._id} producto={song} />
                    ))
                  ) : (
                    <p className="text-center text-sm">No hay canciones disponibles</p>
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
