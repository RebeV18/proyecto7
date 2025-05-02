import { Link } from "react-router-dom";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { IoMdLogIn } from "react-icons/io";

export const LoginPage = () => {
  return (
    <div className="flex flex-col justify-items-center text-white text-lg font-monserrat p-10">
      <LoginForm />
      <p className="text-center text-white text-lg font-monserrat mt-4">
        ¿No tienes cuenta?{" → "}
        <Link to="https://proyecto6-sgv2.onrender.com/api/v1/user/register">
          Regístrate
        </Link>
      </p>
    </div>
  );
};
