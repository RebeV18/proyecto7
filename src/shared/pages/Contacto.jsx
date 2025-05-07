import { Background } from "../components/Background";

export const Contacto = () => {
  return (
    <>
      <Background />
      <div className="flex-col justify-center place-items-center p-10 pb-20">
        <h1 className="font-bold text-white p-7 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:xl:text-4xl">
          LUIS GERARDO AQUINO
        </h1>
        <h2 className="font-bold text-white p-7 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Contacto
        </h2>
        <p className="text-white p-1 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl pb-5">
          email: luisgerardoaquinocontacto@gmail.com
        </p>
        <p className="text-white text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          fono: +503 7722 5016
        </p>
      </div>
      <h2 className="pt-10 font-bold text-white text-center text-4xl p-2 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        Sígueme en mis redes sociales y suscríbete:
      </h2>
    </>
  );
};
