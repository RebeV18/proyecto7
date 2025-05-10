import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdLogIn, IoMdLogOut, IoIosMenu } from "react-icons/io";
import { CartIcon } from "../../modules/cart/components/CartIcon";

import { useAuthContext } from "../../modules/auth/context/AuthGlobalState";

import "../../shared/Styles/Styles.css";
import "@fontsource/oswald";

export const Navbar = () => {
  const { user, logout } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="nav z-20 fixed top-0 left-0 w-full bg-transparent items-center content-center px-3 lg:px-4 xl:px-5 2xl:px-8 ">
      <div className="h16 flex justify-between items-center gap-5">
        {/* >768px*/}
        <div className="hidden sm:flex">
          <Link
            to="/"
            className="font-oswald font-thin text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-xl"
          >
            INICIO
          </Link>
          <Link
            to="/about"
            className="font-oswald font-thin text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-xl"
          >
            ACERCA DE Mí
          </Link>
          <Link
            to="/products"
            className="font-oswald font-thin text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-xl"
          >
            DISCOGRAFIA
          </Link>
          <Link
            to="podcast"
            className="font-oswald font-thin text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-xl"
          >
            PODCAST
          </Link>
          <Link
            to="/contacto"
            className="font-oswald font-thin text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-xl"
          >
            CONTACTO
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
            className="font-oswald font-thin text-white text-xs sm:text-sm px-5 gap-y-10 block"
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="font-oswald font-thin text-white text-xs sm:text-sm px-5 gap-y-10 block"
          >
            Acerca de mí
          </Link>
          <Link
            to="/products"
            className="font-oswald font-thin text-white text-xs sm:text-sm px-5 gap-y-10 block"
          >
            Discografía
          </Link>
          <Link
            to="podcast"
            className="font-oswald font-thin text-white text-xs sm:text-sm px-5 gap-y-10 block"
          >
            Podcast
          </Link>
          <Link
            to="/contacto"
            className="font-oswald font-thin text-white text-xs sm:text-sm px-5 gap-y-10 block"
          >
            Contacto
          </Link>
        </div>
        {/* <div className="flex justify-between md:flex-row gap-3 items-center"> */}
        {/* Login */}
        <div className="p-2">
          {!user ? (
            <Link to="/login" className="flex flex-col items-center">
              <IoMdLogIn className="text-white text-lg xl:text-2xl 2xl:text-3xl" />
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
                <p className="font-oswald font-thin text-white text-xs">
                  Cerrar sesión
                </p>
              </Link>
            </div>
          )}
        </div>
        <CartIcon />
      </div>
    </nav>
  );
};
