import { Background } from "../components/Background";

export const HomePage = () => {
  return (
    <>
      <Background />
      <div className="flex-col justify-center align-center place-items-center p-10">
        <h1 className="font-bold text-white p-7 m-2 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:xl:text-4xl">
          LUIS GERARDO AQUINO
        </h1>
        <p className="border-1 border-white rounded-lg text-white text-center item-center p-8 my-18">
          "Enseñar el cómo, el para qué y el poder transformador de la adoración"
        </p>
      </div>
    </>
  );
};
