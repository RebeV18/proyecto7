export const formatCurrency = (
  value,
  {
    currency = "CLP",
    locale = "es-CL",
    minimumFractionDigits = 0,
    maximumFractionDigits = 2,
  } = {}
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(value);
};
