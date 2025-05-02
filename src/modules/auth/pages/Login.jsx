import { Link } from "react-router-dom";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { IoMdLogIn } from "react-icons/io";

export const LoginPage = () => {
  return (
    <div className="flex flex-col justify-items-center text-white text-lg font-monserrat p-10 pr-20 pl-20">
      <h2 className="text-3xl font-bold text-center text-white">
        Inicia tu sesión:
      </h2>
      <LoginForm />
      <p className="text-center text-white text-lg font-monserrat mt-10 mb-25">
        ¿No tienes cuenta?{" → "}
        <Link to="https://proyecto6-sgv2.onrender.com/api/v1/user/register">
          Regístrate
        </Link>
      </p>
    </div>
  );
};
