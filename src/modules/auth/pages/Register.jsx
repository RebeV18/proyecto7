import { Link } from "react-router-dom";

import { RegisterForm } from "../components/Register/RegisterForm";
import { Background } from "../../../shared/components/Background";

export const RegisterPage = () => {
  return (
    <>
      <Background />
      <div className="flex flex-col mx-auto justify-items-center text-white text-lg p-2 mt-25 sm:mt-28 md:mt-30 lg:mt-25 lg:pr-20 lg:pl-20 xl:pr-25 xl:pr-25 2xl:pr-50 2xl:pl-50">
        <h2 className="title font-thin tracking-widest text-white text-center mt-20 xl:mt-30 2xl:mt-25 mb-7 md:mb-18 lg:mb-15 xl:mb-20 2xl:mb-20 text-lg xs:text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
          REGÍSTRATE
        </h2>
        <RegisterForm />
        <p className="mt-15 text-base md:text-lg lg:text-xl 2xl:text-2xl text-gray-200 text-center">
          ¿Ya estás registrado?{" "}
          <Link to="/login" className="text-amber-400 hover:underline hover:text-[#47a1eb]">
            Iniciar Sesión
          </Link>
        </p>
      </div>
    </>
  );
};
