import { Background } from "../components/Background";

export const AboutPage = () => {
  return (
    <>
      <Background />
      <div className="flex-col justify-center align-center p-10 2xl:mb-15 2xl:mx-30">
        <h1 className="font-thin tracking-widest text-white text-center mt-20 xl:mt-30 2xl:mt-25 mb-7 md:mb-18 lg:mb-15 xl:mb-20 2xl:mb-30 text-lg xs:text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-7xl">
          LUIS GERARDO AQUINO
        </h1>
        <p className="text-justify text-white text-base sm:px-7 md:px-10 lg:px-24 xl:text-2xl 2xl:px-20 2xl:text-xl xl:leading-relaxed">
          Pastor, salmista, compositor y productor musical con más de 20 años de
          experiencia en el ministerio musical.
        </p>
        <p className="text-justify text-white text-base sm:px-7 md:px-10 lg:px-24 xl:text-2xl 2xl:px-20 2xl:text-xl xl:leading-relaxed">
          Graduado de la carrera Ministerial Musical de Instituto Canzión, El
          Salvador. Ordenado como Pastor en Iglesia Transformación de la Ciudad,
          San Salvador, bajo la cobertura de Christian International.
        </p>
        <p className="text-justify text-white text-base sm:px-7 md:px-10 lg:px-24 xl:text-2xl 2xl:px-20 2xl:text-xl xl:leading-relaxed">
          Ha grabado cinco producciones de alabanza y adoración: Tiempo de
          resplandecer (2010), Rey de las naciones (2014), Sesiones acústicas
          (2015), Bajo la orden de Jehová (2017), y Yo miro tu gloria (2024),
          inspirada en la visión de Isaías del trono de Dios.
        </p>
        <p className="text-justify text-white text-base sm:px-7 md:px-10 lg:px-24 xl:text-2xl 2xl:px-20 2xl:text-xl xl:leading-relaxed">
          Ha viajado por diferentes países entrenando al cuerpo de Cristo en el
          área de la alabanza, con un enfoque en el ministerio profético.
        </p>
        <p className="text-justify text-white text-base sm:px-7 md:px-10 lg:px-24 xl:text-2xl 2xl:px-20 2xl:text-xl xl:leading-relaxed">
          Fundador y productor en el estudio de producción musical
          “AbsoluteStudio SV.”
        </p>
      </div>
    </>
  );
};
