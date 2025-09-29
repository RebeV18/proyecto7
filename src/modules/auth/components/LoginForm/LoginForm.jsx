import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const { login } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const formatData = {
      email,
      password,
    };

    try {
      await login(formatData);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <form
      className="flex flex-col display-center gap-7 p-10 lg:gap-10 2xl:gap-20"
      onSubmit={handleLogin}
    >
      <div className="flex flex-col display-center gap-3 2xl:gap-7">
        <input
          className="border-1 border-amber-300 rounded-lg text-center p-1 text-sm md:text-base xl:text-lg 2xl:text-xl 2xl:p-4"
          placeholder="Ingresa tu correo electrónico"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          className="border-1 border-amber-300 rounded-lg text-center p-1 text-sm md:text-base xl:text-lg 2xl:text-xl 2xl:p-4"
          placeholder="Ingresa tu contraseña"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <button
        className="custom-button p-2 border-2 border-amber-300 rounded-lg text-sm md:text-base xl:text-lg 2xl:text-2xl 2xl:p-4 cursor-pointer transition duration-200 ease-in-out transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95]"
        type="submit"
      >
        Iniciar Sesión
      </button>
    </form>
  );
};
