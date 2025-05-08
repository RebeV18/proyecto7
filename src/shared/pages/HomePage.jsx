import { Background } from "../components/Background";

export const HomePage = () => {
  return (
    <>
      <Background />
      <div className="flex-col justify-center align-center place-items-center p-10">
        <h1 className="text-white mt-30 lg:mt-32 xl:mt-41 2xl:mt-120 mb-7 lg:mb-10 xl:mb-12 2xl:mb-30 text-lg sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:xl:text-8xl">
          LUIS GERARDO AQUINO
        </h1>
        <p className="custom-card border-1 border-white rounded-lg text-white text-center item-center p-8 text-xs sm:text-base md:text-lg lg:text-xl 2xl:text-4xl">
          "Enseñar el cómo, el para qué y el poder transformador de la adoración"
        </p>
      </div>
    </>
  );
};
