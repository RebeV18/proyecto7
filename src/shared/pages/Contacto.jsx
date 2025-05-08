import { Background } from "../components/Background";

export const Contacto = () => {
  return (
    <>
      <Background />
      <div className="flex-col justify-center place-items-center p-10 pb-20">
        <h1 className="text-white mt-30 lg:mt-32 xl:mt-41 2xl:mt-120 mb-7 lg:mb-10 xl:mb-12 2xl:mb-30 text-lg sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:xl:text-8xl">
          LUIS GERARDO AQUINO
        </h1>
        <div className="custom-card border-1 border-white rounded-lg px-15 text-center ">
          <h2 className="font-bold text-white p-7 text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-3xl">
            Contacto
          </h2>
          <p className="text-white p-1 text-sm md:text-base lg:text-lg xl:text-2xl 2xl:text-2xl pb-5">
            luisgerardoaquinocontacto@gmail.com
          </p>
          <p className="text-white text-sm md:text-base lg:text-lg xl:text-2xl 2xl:text-2xl">
            +503 7722 5016
          </p>
        </div>
      </div>
      <h2 className="pt-10 font-bold text-white text-center text-4xl p-2 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        Sígueme en mis redes sociales y suscríbete:
      </h2>
    </>
  );
};
