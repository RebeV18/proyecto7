import { apiClient } from '../../../shared/services/apiClient';

export const mercadoPagoPreference = async({ cart }) => {
    try {
        const { data } = await apiClient.post("https://proyecto6-sgv2.onrender.com/api/v1/payment/mercadopago", { cart });
        return data;
    } catch (error) {
        console.error('Error al crear las preferencias de pago:', error.response?.data || error.message);
        throw new Error(error);
    }
}