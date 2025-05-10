import { useState } from "react";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";
import { PiSpotifyLogoLight, PiTiktokLogo } from "react-icons/pi";

import "../../shared/Styles/Styles.css";

export const RRSS = () => {
  const [facebookColor, setFacebookColor] = useState("white");
  const [instagramColor, setInstagramColor] = useState("white");
  const [spotifyColor, setSpotifyColor] = useState("white");
  const [ytColor, setYTColor] = useState("white");
  const [tiktokColor, setTiktokColor] = useState("white");

  return (
    <ul className="icon flex flex-row justify-center gap-x-5 md:gap-x-8 lg:gap-x-10 xl:gap-x-15 2xl:gap-x-15 xl:p-5 2xl:mt-5 2xl:mb-10">
      <li>
        <a
          href="https://www.facebook.com/LuisGerardoAquinoSV/?locale=es_LA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook
            style={{ color: facebookColor }}
            className="icon font-thin text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl"
            onMouseOver={() => setFacebookColor("rgb(251, 186, 82)")}
            onMouseOut={() => setFacebookColor("white")}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UC9fmY9E40ON7DqZsRrYiGFg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiYoutube
            style={{ color: ytColor }}
            className="icon font-thin text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl"
            onMouseOver={() => setYTColor("rgb(251, 186, 82)")}
            onMouseOut={() => setYTColor("white")}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/luisgerardoaquino/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoInstagram
            style={{ color: instagramColor }}
            className="icon font-thin text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl"
            onMouseOver={() => setInstagramColor("rgb(251, 186, 82)")}
            onMouseOut={() => setInstagramColor("white")}
          />
        </a>
      </li>
      <li>
        <a
          href="https://open.spotify.com/intl-es/artist/1p8u5sYJMTQiSoJPCUancz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiSpotifyLogoLight
            style={{ color: spotifyColor }}
            className="icon font-thin text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl"
            onMouseOver={() => setSpotifyColor("rgb(251, 186, 82)")}
            onMouseOut={() => setSpotifyColor("white")}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@luisgakino"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiTiktokLogo
            style={{ color: tiktokColor }}
            className="icon font-thin text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl"
            onMouseOver={() => setTiktokColor("rgb(251, 186, 82)")}
            onMouseOut={() => setTiktokColor("white")}
          />
        </a>
      </li>
    </ul>
  );
};
