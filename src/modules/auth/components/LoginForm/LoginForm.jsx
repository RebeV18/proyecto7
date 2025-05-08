import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const { login } = useContext(AuthContext);
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
      console.log("format", formatData);
      await login(formatData);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <form className="flex flex-col display-center gap-7 p-10 lg:gap-10 2xl:gap-20" onSubmit={handleLogin}>
      <div className="flex flex-col display-center gap-3 2xl:gap-7">
        <input
          className="border-1 border-grey-100 rounded-lg text-center p-1.5 text-sm md:text-base xl:text-lg 2xl:xl:text-3xl 2xl:p-5"
          placeholder="Ingresa tu correo electrónico"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          className="border-1 border-grey-100 rounded-lg text-center p-1.5 text-sm md:text-base xl:text-lg 2xl:xl:text-3xl 2xl:p-5"
          placeholder="Ingresa tu contraseña"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <button className="p-2 border-2 border-white rounded-lg text-sm md:text-base xl:text-lg 2xl:text-3xl 2xl:p-5" type="submit">Iniciar Sesión</button>
    </form>
  );
};
