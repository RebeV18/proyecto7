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
    <nav className="bg-gray-900">
      <div className="flex flex-row justify-between items-center h-16">
        <div>
          <div className="block sm:hidden bg-gray-800 space-y-2 pb-3">
            <Link
              to="/"
              className="text-white text-base px-4 block hover:text-orange-400 "
            >
              Inicio
            </Link>

            <p>|</p>

            <Link to="/about">Acerca de mí</Link>

            <p>|</p>

            <Link to="/products">Discografía</Link>

            <p>|</p>

            <Link to="podcast">Podcast</Link>

            <p>|</p>

            <Link to="/contacto">Contacto</Link>
          </div>
        </div>
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
              <Link
                to="/"
                onClick={handleLogout}
                className="flex flex-col items-center"
              >
                <IoMdLogOut className="text-white " />
                <p className="text-white text-xs">Cerrar sesión</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
