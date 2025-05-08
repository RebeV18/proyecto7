import { Background } from "../components/Background";

export const AboutPage = () => {
  return (
    <>
      <Background />
      <div className="flex-col justify-center place-items-center p-10">
        <h1 className="text-white mt-30 lg:mt-32 xl:mt-41 2xl:mt-120 mb-7 lg:mb-10 xl:mb-12 2xl:mb-30 text-lg sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:xl:text-8xl">
          LUIS GERARDO AQUINO
        </h1>
        <p className="text-justify text-white xl:text-lg xl:pl-20 xl:pr-20 xl:mr-20 xl:ml-20">
          <br />
          Pastor, salmista, compositor y productor musical con más de 20 años de
          experiencia en el ministerio musical.
          <br />
          Graduado de la carrera Ministerial Musical de Instituto Canzión, El
          Salvador. Ordenado como Pastor en Iglesia Transformación de la Ciudad,
          San Salvador, bajo la cobertura de Christian International.
          <br />
          Ha grabado cinco producciones de alabanza y adoración: Tiempo de
          resplandecer (2010), Rey de las naciones (2014), Sesiones acústicas
          (2015), Bajo la orden de Jehová (2017), y Yo miro tu gloria (2024),
          inspirada en la visión de Isaías del trono de Dios.
          <br />
          Ha viajado por diferentes países entrenando al cuerpo de Cristo en el
          área de la alabanza, con un enfoque en el ministerio profético.
          <br />
          Fundador y productor en el estudio de producción musical
          “AbsoluteStudio SV.”
          <br />
        </p>
      </div>
    </>
  );
};
