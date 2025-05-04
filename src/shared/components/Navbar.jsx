import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdLogIn, IoMdLogOut, IoIosMenu } from "react-icons/io";
import { CartIcon } from "../../modules/cart/components/CartIcon";

import { AuthContext } from "../../modules/auth/context/AuthContext";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-gray-900 p-2 lg:p-3 xl:p-5 2xl:p-7 shadow-md">
      <div className="h16 flex justify-between items-center px-4">
        {/* >768px*/}
        <div className="hidden sm:flex">
          <Link
            to="/"
            className="text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-2xl 2xl:px-7"
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-2xl 2xl:px-7"
          >
            Acerca de mí
          </Link>
          <Link
            to="/products"
            className="text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-2xl 2xl:px-7"
          >
            Discografía
          </Link>
          <Link
            to="podcast"
            className="text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-2xl 2xl:px-7"
          >
            Podcast
          </Link>
          <Link
            to="/contacto"
            className="text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-2xl 2xl:px-7"
          >
            Contacto
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white text-2xl sm:text-3xl"
        >
          <IoIosMenu />
        </button>

        {/* <768px*/}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:hidden absolute top-12 left-0 w-full bg-gray-800 z-10`}
        >
          <Link
            to="/"
            className="text-white text-xs sm:text-sm px-5 gap-y-10 block"
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="text-white text-xs sm:text-sm px-5 gap-y-10 block"
          >
            Acerca de mí
          </Link>
          <Link
            to="/products"
            className="text-white text-xs sm:text-sm px-5 gap-y-10 block"
          >
            Discografía
          </Link>
          <Link
            to="podcast"
            className="text-white text-xs sm:text-sm px-5 gap-y-10 block"
          >
            Podcast
          </Link>
          <Link
            to="/contacto"
            className="text-white text-xs sm:text-sm px-5 gap-y-10 block"
          >
            Contacto
          </Link>
        </div>

        <div>
          <CartIcon />
        </div>

        {/* Login */}
        <div className="flex flex-row gap-3 text-white text-xl xl:text-2xl 2xl:text-5xl">
          {!user ? (
            <Link to="/login" className="flex flex-col items-center">
              <IoMdLogIn className="text-white" />
              <p className="text-white text-xs xl:text-sm 2xl:text-xl">
                Iniciar sesión
              </p>
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
                <IoMdLogOut className="text-white" />
                <p className="text-white text-xs">Cerrar sesión</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
