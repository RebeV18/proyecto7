import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";
import { PiSpotifyLogoLight, PiTiktokLogo } from "react-icons/pi";

import "../../shared/Styles/Styles.css";

export const RRSS = () => {
  return (
    <ul className="icon flex flex-row justify-center gap-x-5 md:gap-x-8 lg:gap-x-10 xl:gap-x-15 2xl:gap-x-15 xl:p-5 2xl:mt-5 2xl:mb-10">
      <li>
        <a
          href="https://www.facebook.com/LuisGerardoAquinoSV/?locale=es_LA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook className="icon font-thin text-white text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95] hover:text-amber-300" />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UC9fmY9E40ON7DqZsRrYiGFg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiYoutube className="icon font-thin text-white text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95] hover:text-amber-300" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/luisgerardoaquino/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoInstagram className="icon font-thin text-white text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95] hover:text-amber-300" />
        </a>
      </li>
      <li>
        <a
          href="https://open.spotify.com/intl-es/artist/1p8u5sYJMTQiSoJPCUancz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiSpotifyLogoLight className="icon font-thin text-white text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95] hover:text-amber-300" />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@luisgakino"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiTiktokLogo className="icon font-thin text-white text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95] hover:text-amber-300" />
        </a>
      </li>
    </ul>
  );
};
