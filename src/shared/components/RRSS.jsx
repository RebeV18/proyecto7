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
    <ul className="icon flex flex-row justify-center gap-x-7 md:gap-x-10 lg:gap-x-12 xl:gap-x-15 2xl:gap-x-20 xl:p-5">
      <li>
        <a
          href="https://www.facebook.com/LuisGerardoAquinoSV/?locale=es_LA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook
            style={{ color: facebookColor }}
            className="icon text-xl sm:text-3xl xl:text-4xl 2xl:xl:text-4xl"
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
            className="icon text-xl sm:text-3xl xl:text-4xl 2xl:xl:text-4xl"
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
            className="icon text-xl sm:text-3xl xl:text-4xl 2xl:xl:text-4xl"
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
            className="icon text-xl sm:text-3xl xl:text-4xl 2xl:xl:text-4xl"
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
            className="icon text-xl sm:text-3xl xl:text-4xl 2xl:xl:text-4xl"
            onMouseOver={() => setTiktokColor("rgb(251, 186, 82)")}
            onMouseOut={() => setTiktokColor("white")}
          />
        </a>
      </li>
    </ul>
  );
};
