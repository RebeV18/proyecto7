import { useParams, Link } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";
import { UpdateForm } from "../components/Update/UpdateForm";
import { Background } from "../../../shared/components/Background";

export const UpdatePage = () => {
  const { id } = useParams();
  const { user } = useAuthContext();

  const userToUpdate = user && (user._id === id || user.id === id) ? user : null;

  if (!userToUpdate) {
    return (
      <>
        <Background />
        <Link to="/login" className="text-amber-400 hover:underline">
          Favor ingresar nuevamente.
        </Link>
      </>
    );
  }

  return (
    <>
      <Background />
      <div className="flex flex-col mx-auto justify-items-center text-white text-lg p-2 mt-25 sm:mt-28 md:mt-20 lg:mt-20 2xl:mt-15 lg:mx-20 xl:mx-25 2xl:mx-20">
        <h2 className="title font-thin tracking-widest text-white text-center mt-10 xl:mt-30 2xl:mt-25 mb-7 md:mb-18 lg:mb-15 xl:mb-20 2xl:mb-20 text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl">
          ACTUALIZAR INFORMACIÓN
        </h2>
        <UpdateForm userUpdate={userToUpdate} />
        <button
          className="custom-button mx-15 my-10 lg:mx-20 xl:mx-25 2xl:mx-100 border-3 border-amber-500 rounded-lg text-white py-2 px-7 2xl:py-4 2xl:px-10 text-sm lg:text-base xl:text-lg 2xl:text-3xl"
          onClick={() => window.history.back()}
        >
          Volver
        </button>
      </div>
    </>
  );
};
