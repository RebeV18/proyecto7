import { useCallback, useState } from "react";
import { useAuthContext } from "../../context/AuthGlobalState";
import { useNavigate } from "react-router-dom";

import { FormField } from "./FormField";

import { initialState } from "../../utils/initialState";
import { useValidateRegisterForm } from "../../hooks/useValidateRegisterForm";
import { formatDataRegister } from "../../utils/formatDataRegister";

export const RegisterForm = () => {
  const { register } = useAuthContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
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

    if (formData.password !== formData.confirmPassword) {
      setFormError("Las contraseñas no coinciden.");
      return;
    }

    if (validateForm()) {
      setFormError("Por favor, corrige los errores antes de continuar.");
      return;
    }

    try {
      const formDataToSend = formatDataRegister(formData);
      await register(formDataToSend);
      navigate("/login");
    } catch (error) {
      console.error("Error registering:", error);
      setFormError(
        "Error al registrar el usuario. Por favor, inténtelo de nuevo más tarde."
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
        id="email"
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required={true}
        error={errors.email}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 background-transparent">
        <FormField
          id="password"
          label="Contraseña"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Contraseña"
          required={true}
          error={errors.password}
        />
        <FormField
          id="confirmPassword"
          label="Confirmar Contraseña"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirmar Contraseña"
          required={true}
          error={errors.confirmPassword}
        />
      </div>

      <div className="flex justify-center">
        <button
          className="custom-button border-2 border-amber-300 mt-5 mb-5 text-white text-base md:text-lg lg:text-xl px-10 lg:px-15 xl:px-18 2xl:px-20 py-3 xl:py-4 rounded-md cursor-pointer transition duration-200 ease-in-out transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95]"
          type="submit"
        >
          Regístrate
        </button>
      </div>
    </form>
  );
};
