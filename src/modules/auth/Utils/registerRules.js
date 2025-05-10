export const registerRules = {
  nombre: (value) => {
    if (!value) return "El nombre es requerido";
    if (!/^[a-zA-Z\s]+$/.test(value))
      return "El nombre solo puede contener letras y espacios";
    if (value.length < 3) return "El nombre debe tener al menos 3 caracteres";
    if (value.length > 20)
      return "El nombre no puede tener más de 20 caracteres";
    return "";
  },
  apellido: (value) => {
    if (!value) return "El apellido es requerido";
    if (!/^[a-zA-Z\s]+$/.test(value))
      return "El apellido solo puede contener letras y espacios";
    if (value.length < 3) return "El apellido debe tener al menos 3 caracteres";
    if (value.length > 50)
      return "El apellido no puede tener más de 50 caracteres";
    return "";
  },
  pais: (value) => {
    if (!value) return "El país es requerido";
    if (!/^[a-zA-Z\s]+$/.test(value))
      return "El país solo puede contener letras y espacios";
    if (value.length < 3) return "El país debe tener al menos 3 caracteres";
    if (value.length > 50) return "El país no puede tener más de 50 caracteres";
    return "";
  },
  email: (value) => {
    if (!value) return "El correo es requerido";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "El correo no es válido";
    return "";
  },
  telefono: (value) => {
    if (!value) return "El teléfono es requerido";
    if (!/^\+[0-9]{11}$/.test(value)) return "El teléfono no es válido";
    return "";
  },
  password: (value) => {
    if (!value) return "La contraseña es requerida";
    if (value.length < 6)
      return "La contraseña debe tener al menos 6 caracteres";
    if (value.length > 20)
      return "La contraseña no puede tener más de 20 caracteres";
    return "";
  },
  confirmPassword: (value, formData) => {
    if (!value) return "La confirmación de la contraseña es requerida";
    if (formData && value !== formData.password)
      return "Las contraseñas no coinciden";
    return "";
  },
};
