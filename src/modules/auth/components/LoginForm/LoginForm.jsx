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
      await login(formatData);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <form className="flex flex-col display-center gap-7 p-20 text-white text-lg font-monserrat" onSubmit={handleLogin}>
      <div className="flex flex-col display-center gap-3">
        <input
          className="p-1.5 border-1 border-grey-100 rounded-lg"
          placeholder="Ingresa tu correo electrónico"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          className="p-1.5 border-1 border-grey-100 rounded-lg"
          placeholder="Ingresa tu contraseña"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <button className="p-2 border-2 border-white rounded-lg" type="submit">Iniciar Sesión</button>
    </form>
  );
};
