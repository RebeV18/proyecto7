import { RRSS } from "./RRSS";
import "@fontsource/oswald";

export const Footer = () => {
  return (
    <div className="pt-10">
      <RRSS />
      <p className="flex tracking-wide justify-center items-center text-white text-center p-10 text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base">
        &#169; Luis Gerardo Aquino || contacto:
        luisgerardoaquinocontacto@gmail.com  || Realizado por Rebeca Vargas
      </p>
    </div>
  );
};
