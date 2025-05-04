export const registerRules = {
  nonbre: (value) =>
    /^[a-zA-Z]+$/.test(value) && value.length >= 3 && value.length <= 20,
  apellido: (value) =>
    /^[a-zA-Z]+$/.test(value) && value.length >= 3 && value.length <= 50,
  pais: (value) =>
    /^[a-zA-Z]+$/.test(value) && value.length >= 3 && value.length <= 50,
  email: (value) => {
    if (!value) return "El Correo es requerido";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "El Correo no es valido";
  },
  telefono: (value) => {
    if (!value) return "El telefono es requerido";
    if (!/^\+[0-9]{11}$/.test(value)) return "El telefono no es valido";
  },
  password: (value) => {
    if (!value) return "La contraseña es requerida";
    if (value.length < 4)
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
