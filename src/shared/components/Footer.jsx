import { RRSS } from "./RRSS"
import "@fontsource/oswald";

export const Footer = () => {
  return (
    <div className="pt-10">
      <RRSS />
      <p className="flex font-oswald justify-center items-center text-white text-center p-10 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-3xl">
        &#169; Luis Gerardo Aquino || contacto: luisgerardoaquinocontacto@gmail.com
      </p>
    </div>
  );
};
