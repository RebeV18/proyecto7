import { Background } from "../components/Background";

export const Contacto = () => {
  return (
    <>
      <Background />
      <div className="flex-col justify-center align-center place-items-center">
        <h1 className="font-thin tracking-widest text-white text-center mt-20 xl:mt-30 2xl:mt-30 mb-7 md:mb-18 lg:mb-15 xl:mb-20 2xl:mb-30 text-lg xs:text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
          LUIS GERARDO AQUINO
        </h1>
        <div className="border-1 border-[#47A1EB] rounded-lg p-3 px-5 md:p-7 md:px-35 lg:p-10 lg:px-50 xl:p-15 xl:px-45 2xl:p-12 2xl:px-45 text-center">
          <h2 className="font-bold text-white text-base mb-7 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
            Contacto
          </h2>
          <p className="text-white text-sm md:text-lg mb-3 lg:text-xl xl:text-2xl 2xl:text-3xl">
            luisgerardoaquinocontacto@gmail.com
          </p>
          <p className="text-white text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            +503 7722 5016
          </p>
        </div>
      </div>
      <h2 className="mt-25 font-bold text-white text-center text-sm p-2 md:text-lg lg:text-2xl xl:text-3xl 2xl:text-3xl">
        Sígueme en mis redes sociales y suscríbete:
      </h2>
    </>
  );
};
