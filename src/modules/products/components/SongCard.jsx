import { CiYoutube } from "react-icons/ci";
import { PiSpotifyLogoLight } from "react-icons/pi";
import { SiApplemusic } from "react-icons/si";
import { MdAddShoppingCart } from "react-icons/md";

import useCartContext from "../../cart/context/CartContext";

export const SongCard = ({ song }) => {
  const addItem = useCartContext((state) => state.addItem);

  const handleClickCart = (songSelected) => {
    if (!songSelected || !songSelected.id) {
      console.error("songSelected is undefined or missing id");
      return;
    }
    addItem(songSelected);
  };

  return (
    <div className="bg-transparent border-2 border-amber-400 pg-50 cursor-pointer rounded-2xl shadow-md mt-2 mb-10">
      <div className="mx-auto flex flex-col md:flex-row justify-center object-center rounded-lg px-2 py-2 sm:py-5 lg:max-w-7xl">
        <div className="flex flex-col items-center justify-center p-7">
          <h3 className="text-white text-center font-bold mb-2 text-xl md:text-2xl lg:text-3xl 2xl:text-5xl">
            {song.cancion}
          </h3>
          <div className="flex flex-col md:justify-between p-2 items-center">
            <img
              className="w-full h-auto aspect-square object-cover rounded-lg mx-18 mb-2 md:w-55 md:h-55 lg:w-65 lg:h-65 2xl:w-110 2xl:h-110 md:mb-8 object-center 2xl:my-7"
              src={song.imagen}
              alt={song.cancion}
            />
            <div className="items-start md:items center">
              <h2 className="text-white text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold 2xl:mb-3">
                <span className="text-white text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl">
                  CD:{" "}
                </span>
                {song.cd}
              </h2>
              <p className="text-white text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl mb-5">
                <span className="text-white text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl">
                  Autores:{" "}
                </span>
                {song.autores}
              </p>
            </div>
          </div>
          <ul className="icon flex flex-row justify-center gap-x-7 md:gap-x-10 lg:gap-x-12 xl:gap-x-15 2xl:gap-x-20 xl:p-5 2xl:mt:10">
            <li>
              <a href={song.apple} target="_blank" rel="noopener noreferrer">
                <SiApplemusic className="icon text-amber-400 text-xl sm:text-3xl xl:text-4xl 2xl:xl:text-6xl transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95] hover:text-amber-300" />
              </a>
            </li>
            <li>
              <a href={song.youtube} target="_blank" rel="noopener noreferrer">
                <CiYoutube className="icon text-amber-400 text-xl sm:text-3xl xl:text-4xl 2xl:xl:text-6xl transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95] hover:text-amber-300" />
              </a>
            </li>
            <li>
              <a href={song.spotify} target="_blank" rel="noopener noreferrer">
                <PiSpotifyLogoLight className="icon text-amber-400 text-xl sm:text-3xl xl:text-4xl 2xl:xl:text-6xl transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95] hover:text-amber-300" />
              </a>
            </li>
            <button
              key={song.id}
              className="icon text-amber-400 text-xl sm:text-3xl xl:text-4xl 2xl:xl:text-6xl transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95] hover:text-amber-300"
              onClick={() => handleClickCart(song)}
            >
              <MdAddShoppingCart />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
