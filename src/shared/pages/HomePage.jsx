import { Background } from "../components/Background";
import "../Styles/Styles.css";
import "@fontsource/alumni-sans-pinstripe";

export const HomePage = () => {
  return (
    <>
      <Background />
      <div className="flex-col justify-center align-center place-items-center p-10">
        <h1 className="font-alumni-sans-pinstripe tracking-widest text-white text-center mt-30 xl:mt-40 2xl:mt-100 mb-7 lg:mb-10 xl:mb-12 2xl:mb-30 text-lg sx:text-2xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl">
          LUIS GERARDO AQUINO
        </h1>
        <p className="custom-card border-1 border-white rounded-lg text-white text-center item-center px-3 py-8 text-xs sm:text-base md:text-lg lg:text-2xl 2xl:text-4xl">
          "Enseñar el cómo, el para qué y el poder transformador de la
          adoración"
        </p>
      </div>
    </>
  );
};
