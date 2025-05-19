import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoMdLogIn,
  IoMdLogOut,
  IoIosMenu,
  IoMdPersonAdd,
  IoIosPerson,
} from "react-icons/io";

import { CartIcon } from "../../modules/cart/components/CartIcon";
import { useAuthContext } from "../../modules/auth/context/AuthGlobalState";

import "../../shared/Styles/Styles.css";

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
            className="navFont text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-xl"
          >
            INICIO
          </Link>
          <Link
            to="/about"
            className="navFont text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-xl"
          >
            ACERCA DE MÍ
          </Link>
          <Link
            to="/products"
            className="navFont text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-xl"
          >
            DISCOGRAFÍA
          </Link>
          <Link
            to="podcast"
            className="navFont text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-xl"
          >
            PODCAST
          </Link>
          <Link
            to="/contacto"
            className="navFont text-white text-sm px-2 xl:text-lg xl:px-3 2xl:text-xl"
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
            className="navFont text-white text-xs sm:text-sm px-5 gap-y-10 block"
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="navFont text-white text-xs sm:text-sm px-5 gap-y-10 block"
          >
            Acerca de mí
          </Link>
          <Link
            to="/products"
            className="navFont text-white text-xs sm:text-sm px-5 gap-y-10 block"
          >
            Discografía
          </Link>
          <Link
            to="podcast"
            className="navFont text-white text-xs sm:text-sm px-5 gap-y-10 block"
          >
            Podcast
          </Link>
          <Link
            to="/contacto"
            className="navFont text-white text-xs sm:text-sm px-5 gap-y-10 block"
          >
            Contacto
          </Link>
        </div>

        {/* Login / Register */}
        <div className="flex flex-row items-end gap-2 xl:gap-4">
          <div className="flex flex-row gap-2 xl:gap-4 items-end">
            <div className="flex-flex-row">
              {!user ? (
                <Link
                  to="/login"
                  className="flex flex-col text-white items-center display-center transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95] hover:text-amber-300"
                >
                  <IoMdLogIn className="text-xl xl:text-2xl 2xl:text-3xl" />
                  <p className="text-center text-xs xl:text-sm 2xl:text-base">
                    Iniciar sesión
                  </p>
                </Link>
              ) : (
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="flex flex-col text-white items-center display-center transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95] hover:text-amber-300"
                >
                  <IoMdLogOut className="text-xl xl:text-2xl 2xl:text-3xl" />
                  <p className="text-center text-xs xl:text-sm 2xl:text-base">
                    Cerrar sesión
                  </p>
                </Link>
              )}
            </div>
            <div className="items-end">
              {!user ? (
                <Link
                  to="/register"
                  className="flex flex-col items-center display-center text-white transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95] hover:text-amber-300"
                >
                  <IoMdPersonAdd className="text-xl xl:text-2xl 2xl:text-3xl" />
                  <p className="text-center text-xs xl:text-sm 2xl:text-base">
                    Regístrate
                  </p>
                </Link>
              ) : (
                <Link
                  to={`/update/${user._id}`}
                  className="flex flex-col items-center display-center text-white transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95] hover:text-amber-300"
                >
                  <IoIosPerson className="text-xl xl:text-2xl 2xl:text-3xl" />
                  <p className="text-center text-xs xl:text-sm 2xl:text-base">
                    Actualizar
                  </p>
                </Link>
              )}
            </div>
          </div>
          <div>
            {!user ? (
              <CartIcon className="text-white text-xl xl:text-2xl 2xl:text-2xl transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95] hover:text-amber-300" />
            ) : (
              <div className="flex flex-row items-center">
                <div className="flex flex-col items-center">
                  <CartIcon className="text-white text-xl xl:text-2xl 2xl:text-xl transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95] hover:text-amber-300" />
                  <p className="text-white text-center text-xs xl:text-sm 2xl:text-base">
                    {user.nombre} {user.apellido}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
