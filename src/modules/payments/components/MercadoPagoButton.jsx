import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { mercadoPagoPreference } from "../services/PaymentService";
import { envLoader } from "../../../config/envLoader";
import { useAuthContext } from "../../auth/Hooks/useAuthContext";

const {
  mp_publicKey,
  optionsCurrency: { locale },
} = envLoader;

export const MercadoPagoButton = ({ cart, onPaymentSuccess }) => {
  const { isAuthenticated } = useAuthContext();
  const [preferenceId, setPreferenceId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initMercadoPago(mp_publicKey, { locale });
  }, []);

  const handleGeneratePreference = async () => {
    setLoading(true);
    try {
      const { data } = await mercadoPagoPreference({ cart });
      setPreferenceId(data.id);
      const preferenceUrl = data.init_point;
      window.open(preferenceUrl, "_blank");
    } catch (error) {
      console.error("Error al procesar el pago:", error.message || error);
      alert(
        "Hubo un problema al procesar el pago. Por favor, inténtalo de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = (details) => {
    cart.clearCart();
    if (onPaymentSuccess) {
      onPaymentSuccess(details);
    }
  };

  if (!isAuthenticated) {
    return (
      <p className="border-3 border-amber-500 rounded-lg bg-slate-900 shadow p-2 text-white py-2 px-7 2xl:py-4 2xl:px-10 text-[10px] lg:text-sm xl:text-base text-center">
        <Link to="/login">Por favor, inicia sesión para realizar el pago</Link>
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <button
        onClick={handleGeneratePreference}
        className="cursor-pointer w-full py-3 px-4 bg-blue-500 text-white rounded-md font-medium shadow-md hover:bg-blue-700 transition duration-300 disabled:bg-blue-800 disabled:cursor-not-alloweed"
        disabled={loading}
      >
        {loading ? "Cargando pasarela de pago..." : "Pagar con Mercado Pago"}
      </button>

      {preferenceId && (
        <div className="w-full max-w-md-mt-4">
          <Wallet
            initialization={{ preferenceId }}
            onReady={() => console.log("Wallet de Mercado Pago está lista")}
            onError={(error) =>
              console.error("Error en la pasarela de pago", error)
            }
            onPayment={handlePaymentSuccess}
          />
        </div>
      )}
    </div>
  );
};
