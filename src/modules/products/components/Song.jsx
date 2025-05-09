import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";

import { formatCurrency } from "../../../shared/utils/formatCurrency";
import { envLoader } from "../../../config/envLoader";
import useCartContext from "../../cart/context/CartContext";

import "@fontsource/montserrat";

export const Song = ({ producto }) => {
  const { optionsCurrency } = envLoader;
  const navigate = useNavigate();

  const [song, setTheSong] = useState([]);
  const addItem = useCartContext((state) => state.addItem);

  const handleClickSong = (songSelected) => {
    if (!songSelected || !songSelected._id) {
      console.error("songSelected is undefined or missing id");
      return;
    }
    setTheSong(songSelected);
    navigate(`/SongPage/${songSelected._id}`, {
      state: { song: song },
    });
  };

  const handleClickCart = (songSelected) => {
    if (!songSelected || !songSelected._id) {
      console.error("songSelected is undefined or missing id");
      return;
    }
    addItem(songSelected);
    console.log("Estamos agregando un producto", songSelected);
  };

  return (
    <div className="shadow p-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="border-1 border-amber-300 rounded-lg p-2">
        <div className="flex flex-col gap-y-1">
          <h4 className="font-montserrat text-sm font-bold text-white">
            {producto.cancion}
          </h4>
          <p className="font-montserrat text-white text-xs mb-4-line-clamp-2">
            {producto.autores}
          </p>
          <div className="mb-2">
            <span className="font-montserrat text-sm font-semibold text-white">
              {formatCurrency(producto.precio, optionsCurrency)}
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-20">
          <button
            key={producto.id}
            className="font-montserrat text-white text-center p-1 cursor-pointer"
            onClick={() => handleClickCart(producto)}
          >
            <MdAddShoppingCart />
            {/* <p className="text-xs">Agregar</p> */}
          </button>
          <button
            key={producto.id}
            className="text-white align-center p-1 cursor-pointer"
            onClick={() => handleClickSong(producto)}
          >
            <FaRegCirclePlay />
          </button>
        </div>
      </div>
    </div>
  );
};
