import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../Hooks/useAuthContext";
import { FormField } from "../Register/FormField";
import { useValidateRegisterForm } from "../../Hooks/useValidateRegisterForm";
import { formatDataUpdate } from "../../utils/formatDataUpdate";

export const UpdateForm = ({ userUpdate }) => {
  const { update } = useAuthContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(userUpdate);
  const [formError, setFormError] = useState("");

  const { errors, validateField, validateForm } =
    useValidateRegisterForm(formData);

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      validateField(name, value);
    },
    [validateField]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");

    if (validateForm()) {
      setFormError("Por favor, corrige los errores antes de continuar.");
      return;
    }

    try {
      const formDataToSend = formatDataUpdate(formData);
      await update({ ...formDataToSend, id: userUpdate._id || userUpdate.id });
      navigate("/login");
    } catch (error) {
      console.error("Error updating:", error);
      setFormError(
        "Error al actualizar la información del usuario. Por favor, inténtelo de nuevo más tarde."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 place-content-center md:mx-10 xl:mx-25 2xl:mx-70"
    >
      {formError && (
        <div className="bg-transparent text-red-700 p-3 rounded-md border-2 border-amber-200">
          {formError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 background-transparent">
        <FormField
          id="nombre"
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required={true}
          error={errors.nombre}
        />

        <FormField
          id="apellido"
          label="Apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder="Apellido"
          required={true}
          error={errors.apellido}
        />
      </div>
      <FormField
        id="pais"
        label="País"
        name="pais"
        value={formData.pais}
        onChange={handleChange}
        placeholder="País"
        required={true}
        error={errors.pais}
      />

      <FormField
        id="telefono"
        label="Teléfono"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
        placeholder="Teléfono"
        required={true}
        error={errors.telefono}
      />

      <div className="flex justify-center">
        <button
          className="custom-button border-2 border-amber-300 mt-5 mb-5 text-white text-base md:text-lg lg:text-xl px-10 lg:px-15 xl:px-18 2xl:px-20 py-3 xl:py-4 rounded-md cursor-pointer ease-in-out transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95]"
          type="submit"
        >
          Actualizar
        </button>
      </div>
    </form>
  );
};
