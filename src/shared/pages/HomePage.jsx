import { Background } from "../components/Background";
import "../Styles/Styles.css";
import "@fontsource/alumni-sans-pinstripe";
import "@fontsource/montserrat";

export const HomePage = () => {
  return (
    <>
      <Background />
      <div className="flex-col justify-center align-center place-items-center p-10">
        <h1 className="font-alumni-sans-pinstripe font-thin tracking-widest text-white text-center mt-20 xl:mt-30 2xl:mt-100 mb-7 md:mb-18 lg:mb-15 xl:mb-20 2xl:mb-30 text-lg xs:text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl">
          LUIS GERARDO AQUINO
        </h1>
        <p className="custom-card font-montserrat border-1 border-white rounded-lg text-white text-center item-center px-3 py-8 text-xs sm:text-base md:text-lg lg:text-2xl xl:text-4xl sm:px-2 xl:px-5 xl:py-12 2xl:text-5xl 2xl:px-8 2xl:py-15 2xl:mb-30">
          "Enseñar el cómo, el para qué y el poder transformador de la
          adoración"
        </p>
      </div>
    </>
  );
};
