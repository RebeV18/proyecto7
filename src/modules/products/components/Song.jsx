import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";

import { formatCurrency } from "../../../shared/utils/formatCurrency";
import { envLoader } from "../../../config/envLoader";

export const Song = ({ producto }) => {
  const { optionsCurrency } = envLoader;
  const navigate = useNavigate();
  const [song, setTheSong] = useState([]);

  const handleClickSong = (songSelected) => {
    if (!songSelected) {
      console.error("songSelected is undefined");
      return;
    }
    setTheSong(songSelected);
    navigate(`/SongCard/${songSelected.id}`, { state: { song } });
  };

  const handleClickCart = (songSelected) => {
    setTheSong(songSelected);
    navigate(`/CartAddButton/${song}`);
  };

  return (
    <div className="shadow-md p-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="border-1 border-amber-300 rounded-lg p-2">
        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-col">
            <h4 className="text-sm font-bold mb-1 text-white">
              {producto.cancion}
            </h4>
            <p className="text-white text-xs mb-4-line-clamp-2">
              {producto.autores}
            </p>
          </div>
          <div className="mb-2">
            <span className="text-sm font-bold text-white">
              {formatCurrency(producto.precio, optionsCurrency)}
            </span>
            {/* <span className="text-sm px-2 py-1 rounded-full text gray-600">
            {producto.createdAt
              ? new Date(producto.createdAt).toLocaleDateString()
              : "Nuevo"}
          </span> */}
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-20">
          <button
            key={producto.id}
            className="text-white text-center p-1 cursor-pointer"
            onClick={() => handleClickCart(producto)}
          >
            <MdAddShoppingCart />
            {/* <p className="text-xs">Agregar</p> */}
          </button>
          <button
            key={producto.id}
            className="text-white align-center p-1 cursor-pointer"
            onClick={() => handleClickSong(producto)} // Pasa el objeto producto
          >
            <FaRegCirclePlay />
          </button>
        </div>
      </div>
    </div>
  );
};
