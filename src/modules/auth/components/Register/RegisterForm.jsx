import { useCallback, useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthGlobalState";
import { useNavigate } from "react-router-dom";

import { FormField } from "./FormField";

import { FORM_INITIAL_STATE } from "../../utils/initialFormat";
import { useValidateRegisterForm } from "../../Hooks/useValidateRegisterForm";
import { formatDataRegister } from "../../utils/formatDataRegister";

import "@fontsource/montserrat";

export const RegisterForm = () => {
  const { register } = useAuthContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(FORM_INITIAL_STATE);
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

  useEffect(() => {
    if (formData.confirmPassword) {
      validateField("confirmPassword", formData.confirmPassword);
    }
  }, [formData.password, formData.confirmPassword, validateField]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");

    if (formData.password !== formData.confirmPassword) {
      setFormError("Las contraseñas no coinciden.");
      return;
    }

    if (!validateForm()) {
      setFormError("Por favor, corrige los errores antes de continuar.");
      return;
    }

    try {
      const formDataToSend = formatDataRegister(formData);
      await register(formDataToSend);
      alert("Usuario registrado correctamente, por favor inicie sesión.");
      navigate("/login");
    } catch (error) {
      console.error("Error registering:", error);
      setFormError(
        "Error al registrar el usuario. Por favor, inténtelo de nuevo más tarde."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formError && (
        <div className="bg-amber-200 text-red-700 p-3 rounded-md background-transparent">
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

      <button
        className="custom-card text-white px-4 py-2 rounded-md hover:bg-amber-400 transition duration-200 ease-in-out transition-transform duration-500 hover:scale-[1.05] active:scale-[0.95]"
        type="submit"
      >
        Regístrate
      </button>
    </form>
  );
};
