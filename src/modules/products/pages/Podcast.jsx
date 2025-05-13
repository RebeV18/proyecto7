import ReactPlayer from "react-player";
import { LuPlaneLanding } from "react-icons/lu";

import { Background } from "../../../shared/components/Background";

import "../../../shared/Styles/Styles.css";

export const Podcast = () => {
  return (
    <>
      <Background />
      <div className="pb-20 pr-15 pl-15 mx-auto mt-50 2xl:mt-22">
        <h1 className="font-thin tracking-widest text-white text-center mt-20 xl:mt-30 2xl:mt-30 mb-7 md:mb-18 lg:mb-15 xl:mb-20 2xl:mb-30 text-lg xs:text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
          CON SONIDO DE ALABANZA
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-10 lg:gap-20">
          <div className="flex flex-col items-center justify-center p-5 cursor-pointer rounded-2xl bg-gradient-to-r from-amber-400 to-pink-600 pg-50 shadow transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]">
            <h3 className="relative h-[50px] w-[230px] flex items-center justify-center shadow text-center gap-1 text-xl xl:text-2xl 2xl:text-4xl 2xl:mb-8 text-white font-semibold mb-2">
              Podcast #1
            </h3>
            <div className="place-items-center shadow">
              <ReactPlayer
                url="https://youtu.be/XFCdNw33nbo?si=lmXhUAs7O1RWviz0"
                width="85%"
                height="auto"
              />
            </div>
          </div>

          <div className="custom-card flex flex-col items-center justify-center p-5 cursor-pointer rounded-2xl bg-transparent border-1 border-white pg-50 shadow transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]">
            <h3 className="relative h-[50px] w-[230px] flex items-center justify-center shadow text-center gap-1 text-2xl xl:text-3xl 2xl:text-4xl 2xl:mb-8 text-white font-semibold mb-2">
              Podcast #2
            </h3>
            <div className="place-items-center shadow">
              <ReactPlayer
                className="shadow"
                url="https://youtu.be/LaXEEPbW3nY?si=y2FwpjhLMwxdPCqk"
                width="85%"
                height="auto"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-5 cursor-pointer rounded-2xl bg-gradient-to-r from-amber-400 to-pink-600 pg-50 shadow transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]">
            <h3 className="relative h-[50px] w-[230px] flex items-center justify-center shadow text-center gap-1 text-xl xl:text-2xl mb-2 2xl:text-4xl 2xl:mb-8 text-white font-semibold">
              Podcast #3
            </h3>
            <div className="place-items-center shadow">
              <ReactPlayer
                url="https://youtu.be/xAEu_CYNk-8?si=eXe36HWMBc699I9g"
                width="85%"
                height="auto"
              />
            </div>
          </div>

          <div className="custom-card flex flex-col items-center justify-center p-5 cursor-pointer rounded-2xl bg-transparent border-1 border-white pg-50 shadow transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]">
            <h3 className="relative h-[50px] w-[230px] flex items-center justify-center shadow text-center gap-1 text-2xl xl:text-3xl mb-2 2xl:text-4xl 2xl:mb-8 text-white font-semibold">
              Podcast #4
            </h3>
            <div className="place-items-center shadow">
              <ReactPlayer
                url="https://youtu.be/7QrSYiUoIzQ?si=HHgbiU8rYaCZMQIo"
                width="85%"
                height="auto"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-5 cursor-pointer rounded-2xl bg-gradient-to-r from-amber-400 to-pink-600 pg-50 shadow transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]">
            <h3 className="relative h-[50px] w-[230px] flex items-center justify-center shadow text-center gap-1 text-xl xl:text-2xl mb-2 2xl:text-4xl 2xl:mb-8 text-white font-semibold">
              Podcast #5
            </h3>
            <div className="place-items-center shadow">
              <ReactPlayer
                url="https://youtu.be/8LL0vp9zwVM?si=Dz1cuDABapQBrJDZ"
                width="85%"
                height="auto"
              />
            </div>
          </div>

          <div className="custom-card flex flex-col items-center justify-center p-5 cursor-pointer rounded-2xl bg-transparent border-1 border-white pg-50 shadow transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]">
            <h3 className="relative h-[50px] w-[230px] flex items-center justify-center shadow text-center gap-1 text-2xl xl:text-3xl mb-2 2xl:text-4xl 2xl:mb-8 text-white font-semibold">
              Podcast #6
            </h3>
            <div className="place-items-center shadow">
              <ReactPlayer
                url="https://youtu.be/6M2JR5T3MZQ?si=QPiaySMmw_TfECZK"
                width="85%"
                height="auto"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-5 cursor-pointer rounded-2xl bg-gradient-to-r from-amber-400 to-pink-600 pg-50 shadow transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]">
            <h3 className="relative h-[50px] w-[230px] flex items-center justify-center shadow text-center gap-1 text-xl xl:text-2xl mb-2 2xl:text-4xl 2xl:mb-8 text-white font-semibold">
              Podcast #7
            </h3>
            <div className="place-items-center shadow">
              <ReactPlayer
                url="https://youtu.be/Fzw9T2YOzf8?si=vni63wKj-LZGHWYl"
                width="85%"
                height="auto"
              />
            </div>
          </div>

          <div className="custom-card flex flex-col items-center justify-center p-5 cursor-pointer rounded-2xl bg-transparent border-1 border-white pg-50 shadow transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]">
            <h3 className="relative h-[50px] w-[230px] flex items-center justify-center shadow text-center gap-1 text-2xl xl:text-3xl mb-2 2xl:text-4xl 2xl:mb-8 text-white font-semibold">
              Podcast #8
            </h3>
            <div className="place-items-center shadow">
              <ReactPlayer
                url="https://youtu.be/tjntmG6G9uY?si=B_kDCRmsoZeAGHMI"
                width="85%"
                height="auto"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-5 cursor-pointer rounded-2xl bg-gradient-to-r from-amber-400 to-pink-600 pg-50 shadow transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]">
            <h3 className="relative h-[50px] w-[230px] flex items-center justify-center shadow text-center gap-1 text-xl xl:text-2xl mb-2 2xl:text-4xl 2xl:mb-8 text-white font-semibold">
              Podcast #9
            </h3>
            <div className="place-items-center shadow">
              <ReactPlayer
                url="https://youtu.be/XO6INOsSka0?si=bvQk83FEj2BOxWFW"
                width="85%"
                height="auto"
              />
            </div>
          </div>

          <div className="custom-card flex flex-col items-center justify-center p-5 cursor-pointer rounded-2xl bg-transparent border-1 border-white pg-50 shadow transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]">
            <h3 className="relative h-[50px] w-[230px] flex items-center justify-center shadow text-center gap-1 text-2xl xl:text-3xl mb-2 2xl:text-4xl 2xl:mb-8 text-white font-semibold">
              Podcast #10
            </h3>
            <div className="place-items-center shadow">
              <ReactPlayer
                url="https://youtu.be/jGfeaBksbMc?si=aEyOZ27j5UmwLk6r"
                width="85%"
                height="auto"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-5 cursor-pointer rounded-2xl bg-gradient-to-r from-amber-400 to-pink-600 pg-50 shadow transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]">
            <h3 className="relative h-[50px] w-[230px] flex items-center justify-center shadow text-center gap-1 text-xl xl:text-2xl mb-2 2xl:text-4xl 2xl:mb-8 text-white font-semibold">
              Podcast #11
            </h3>
            <div className="flex flex-col items-center justify-center shadow p-3 lg:py-5">
              <LuPlaneLanding className="text-white text-6xl" />
              <h4 className="relative h-[50px] w-[230px] flex items-center justify-center text-center gap-1 text-base xl:text-lg mb-2 2xl:text-2xl 2xl:mb-8 text-white font-semibold">
                Próximamente
              </h4>
            </div>
          </div>

          <div className="custom-card flex flex-col items-center justify-center p-5 cursor-pointer rounded-2xl bg-transparent border-1 border-white pg-50 shadow transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]">
            <h3 className="relative h-[50px] w-[230px] flex items-center justify-center shadow text-center gap-1 text-2xl xl:text-3xl mb-2 2xl:text-4xl 2xl:mb-8 text-white font-semibold">
              Podcast #12
            </h3>
            <div className="flex flex-col items-center justify-center shadow lg:border-1 lg:border-white p-3 lg:py-5">
              <LuPlaneLanding className="text-white text-6xl shadow" />
              <h4 className="relative h-[50px] w-[230px] flex items-center justify-center text-center text-base xl:text-lg 2xl:text-2xl text-white font-semibold">
                Próximamente
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
