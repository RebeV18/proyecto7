import { Link } from "react-router-dom";

import { LoginForm } from "../components/LoginForm/LoginForm";
import { Background } from "../../../shared/components/Background";

export const LoginPage = () => {
  return (
    <>
      <Background />
      <div className="flex flex-col justify-items-center text-white text-lg font-monserrat p-2 mt-25 sm:mt-28 md:mt-30 lg:mt-25 lg:pr-20 lg:pl-20 xl:pr-25 xl:pr-25 2xl:pr-50 2xl:pl-50">
        <h2 className="font-alumni-sans-pinstripe font-thin tracking-widest text-white text-center mt-20 xl:mt-30 2xl:mt-30 mb-5 md:mb- lg:mb-5 xl:mb-10 2xl:mb-8 text-lg xs:text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
          Inicia tu sesión:
        </h2>
        <LoginForm />
        <p className="text-center text-white mt-5 mb-25 p-5 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:xl:text-2xl">
          ¿No tienes cuenta?{" → "}
          <Link
            to="/register"
            className="shadow-lg text-amber-400 hover:underline"
          >
            Regístrate
          </Link>
        </p>
      </div>
    </>
  );
};
