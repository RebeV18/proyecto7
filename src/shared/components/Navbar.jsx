import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";

import { AuthContext } from "../../modules/auth/context/AuthContext";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav
      className="flex justify-between m-5 bg-blue-300 text-white"
      id="navbar"
    >
      <ul className="flex flex-row gap-x-3 text-white p-3">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <p>|</p>
        <li>
          <Link to="/about">Acerca de mí</Link>
        </li>
        <p>|</p>
        <li>
          <Link to="/products">Discografía</Link>
        </li>
        <p>|</p>
        <li>
          <Link to="podcast">Podcast</Link>
        </li>
        <p>|</p>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
      <div className="flex flex-row gap-3 text-white text-2xl">
        {!user ? (
          <Link to="/login" className="flex flex-col items-center">
            <IoMdLogIn className="text-white " />
            <p className="text-white text-xs">Iniciar sesión</p>
          </Link>
        ) : (
          <div
            className="flex flex-col items-center cursor-pointer gap-2"
            id="navbar"
          >
            <p className="text-white text-xs flex flex-col items-center">
              {user.nombre} {user.apellido}
            </p>
            <Link to="/" onClick={handleLogout} className="flex flex-col items-center">
              <IoMdLogOut className="text-white " />
              <p className="text-white text-xs">Cerrar sesión</p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
