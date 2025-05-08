import { Link } from "react-router-dom";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { Background } from "../../../shared/components/Background"

export const LoginPage = () => {
  return (
    <>
      <Background />
      <div className="flex flex-col justify-items-center text-white text-lg font-monserrat p-2 mt-10 md:p-15 lg:pr-20 lg:pl-20 xl:pr-25 xl:pr-25 2xl:pr-50 2xl:pl-50">
        <h2 className="font-bold text-center text-white text-xl md:text-2xl xl:text-3xl 2xl:text-6xl 2xl:py-10">
          Inicia tu sesión:
        </h2>
        <LoginForm />
        <p className="text-center text-white mt-5 mb-25 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:xl:text-4xl">
          ¿No tienes cuenta?{" → "}
          <Link to="https://proyecto6-sgv2.onrender.com/api/v1/user/register">
            Regístrate
          </Link>
        </p>
      </div>
    </>
  );
};
