export const formatDataRegister = (formData) => {
  const formDataToSend = new FormData();

  const fieldsToExclude = ["confirmPassword"];

  Object.entries(formData).forEach(([key, value]) => {
    if (
      !fieldsToExclude.includes(key) &&
      value !== null &&
      value !== undefined
    ) {
      formDataToSend.append(key, value);
    }
  });

  return formDataToSend;
};
