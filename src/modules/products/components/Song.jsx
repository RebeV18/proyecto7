import { formatCurrency } from "../../../shared/utils/formatCurrency";
import { envLoader } from "../../../config/envLoader";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Song = ({ producto }) => {
  const { optionsCurrency } = envLoader;
  const navigate = useNavigate();
  const [song, setTheSong] = useState([]);

  const handleClickSong = (songSelected) => {
    setTheSong(songSelected);
    navigate(`/SongCard/${song}`);
  };

  const handleClickCart = (songSelected) => {
    setTheSong(songSelected);
    navigate(`/CartAddButton/${song}`);
  };

  return (
    <div className="shadow-md p-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div>
        <h4 className="text-sm font-semibold mb-2 text-white">
          {producto.cancion}
        </h4>

        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold text-blue-600">
            {formatCurrency(producto.precio, optionsCurrency)}
          </span>
          <span className="text-sm px-2 py-1 rounded-full text gray-600">
            {producto.createdAt
              ? new Date(producto.createdAt).toLocaleDateString()
              : "Nuevo"}
          </span>
        </div>

        <p className="text-yellow-400 mb-4-line-clamp-2">{producto.autores}</p>
        <button
          key={producto.id}
          className="p-1 cursor-pointer"
          onClick={() => handleClickCart(producto)}
        >
          Agregar al carrito
        </button>
        <button
          key={producto.id}
          className="p-1 cursor-pointer"
          onClick={() => handleClickSong(producto)}
        >
          Ver cancion
        </button>
      </div>
    </div>
  );
};
