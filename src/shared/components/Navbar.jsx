import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdLogIn, IoMdLogOut, IoIosMenu } from "react-icons/io";
import { CartIcon } from "../../modules/cart/components/CartIcon";

import { AuthContext } from "../../modules/auth/context/AuthContext";

import "../../shared/Styles/Styles.css";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="nav z-20 fixed top-0 left-0 w-full bg-transparent items-center content-center p-2 lg:p-3 xl:p-5 2xl:p-7 font-sans">
      <div className="h16 flex justify-between items-center md:px-4">
        {/* >768px*/}
        <div className="hidden sm:flex">
          <Link
            to="/"
            className="text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-xl"
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-xl"
          >
            Acerca de mí
          </Link>
          <Link
            to="/products"
            className="text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-xl"
          >
            Discografía
          </Link>
          <Link
            to="podcast"
            className="text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-xl"
          >
            Podcast
          </Link>
          <Link
            to="/contacto"
            className="text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-xl"
          >
            Contacto
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="menu-button sm:hidden text-white text-2xl sm:text-3xl"
        >
          {isOpen ? "✖" : <IoIosMenu />}
        </button>

        {/* <768px*/}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:hidden absolute top-6 left-7 w-full bg-transparent z-10`}
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
        {/* <div className="flex justify-between md:flex-row gap-3 items-center"> */}
        {/* Login */}
        <div className="p-2">
          {!user ? (
            <Link to="/login" className="flex flex-col items-center">
              <IoMdLogIn className="text-white text-lg xl:text-xl 2xl:text-3xl" />
              <p className="text-white text-xs xl:text-sm 2xl:text-base">
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
        <CartIcon />
      </div>
    </nav>
  );
};
