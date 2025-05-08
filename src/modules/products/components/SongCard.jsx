import { useState } from "react";

import { CiYoutube } from "react-icons/ci";
import { PiSpotifyLogoLight } from "react-icons/pi";
import { SiApplemusic } from "react-icons/si";
import { MdAddShoppingCart } from "react-icons/md";

import useCartContext from "../../cart/context/CartContext";

export const SongCard = ({ song }) => {
  const [appleColor, setAppleColor] = useState("white");
  const [spotifyColor, setSpotifyColor] = useState("white");
  const [ytColor, setYTColor] = useState("white");
  const [cartColor, setCartColor] = useState("white");

  const addItem = useCartContext((state) => state.addItem);

  const handleClickCart = (songSelected) => {
    if (!songSelected || !songSelected._id) {
      console.error("songSelected is undefined or missing id");
      return;
    }
    addItem(songSelected);
    console.log("Estamos agregando un producto", songSelected);
  };

  return (
    <div className="custom-card cursor-pointer rounded-2xl bg-transparent shadow-md mt-2 mb-10">
      <div className="mx-auto flex flex-col md:flex-row justify-center object-center rounded-lg px-2 py-2 sm:py-5 lg:max-w-7xl">
        <div className="flex flex-col items-center justify-center p-7">
          <h3 className="text-white text-center font-bold mb-2 text-sm md:text-base lg:text-3xl">
            {song.cancion}
          </h3>
          <div className="flex flex-col md:justify-between p-2 items-center">
            <img
              className="w-full h-auto aspect-square object-cover rounded-lg mx-18 mb-7 md:w-45 md:h-45 object-center object-cover"
              src={song.imagen}
              alt={song.cancion}
            />
            <div className="items-start md:items center">
              <h2 className="text-white text-sm md:text-lg font-semibold mb-2">
                <span className="text-white text-sm md:text-lg font-bold mb-2">
                  CD:{" "}
                </span>
                {song.cd}
              </h2>
              <p className="text-white text-sm md:text-lg mb-4-line-clamp-2">
                <span className="text-white text-sm md:text-lg font-bold mb-2">
                  Autores:{" "}
                </span>
                {song.autores}
              </p>
            </div>
          </div>
          <ul className="icon flex flex-row justify-center gap-x-7 md:gap-x-10 lg:gap-x-12 xl:gap-x-15 2xl:gap-x-20 xl:p-5 2xl:mt:10">
            <li>
              <a href={song.apple} target="_blank" rel="noopener noreferrer">
                <SiApplemusic
                  style={{ color: appleColor }}
                  className="icon text-xl sm:text-3xl xl:text-4xl 2xl:xl:text-6xl"
                  onMouseOver={() => setAppleColor("rgb(251, 186, 82)")}
                  onMouseOut={() => setAppleColor("white")}
                />
              </a>
            </li>
            <li>
              <a href={song.youtube} target="_blank" rel="noopener noreferrer">
                <CiYoutube
                  style={{ color: ytColor }}
                  className="icon text-xl sm:text-3xl xl:text-4xl 2xl:xl:text-6xl"
                  onMouseOver={() => setYTColor("rgb(251, 186, 82)")}
                  onMouseOut={() => setYTColor("white")}
                />
              </a>
            </li>
            <li>
              <a href={song.spotify} target="_blank" rel="noopener noreferrer">
                <PiSpotifyLogoLight
                  style={{ color: spotifyColor }}
                  className="icon text-xl sm:text-3xl xl:text-4xl 2xl:xl:text-6xl"
                  onMouseOver={() => setSpotifyColor("rgb(251, 186, 82)")}
                  onMouseOut={() => setSpotifyColor("white")}
                />
              </a>
            </li>
            <button
              key={song.id}
              className="icon text-xl sm:text-3xl xl:text-4xl 2xl:xl:text-6xl"
              onClick={() => handleClickCart(song)}
            >
              <MdAddShoppingCart
                style={{ color: cartColor }}
                onMouseOver={() => setCartColor("rgb(251, 186, 82)")}
                onMouseOut={() => setCartColor("white")}
              />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
