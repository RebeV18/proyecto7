import { Background } from "../components/Background";

export const Contacto = () => {
  return (
    <>
      <Background />
      <div className="flex-col justify-center place-items-center p-10 pb-20">
        <h1 className="font-alumni-sans-pinstripe tracking-widest text-white text-center mt-30 xl:mt-40 2xl:mt-100 mb-7 lg:mb-10 xl:mb-12 2xl:mb-30 text-lg sx:text-2xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl">
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
