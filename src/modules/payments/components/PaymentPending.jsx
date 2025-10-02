import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getOrderById, updateOrderPayment } from '../services/OrderService';
import { Background } from '../../../shared/components/Background';

export const PaymentPending = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const processPendingPayment = async () => {
      try {
        const orderId = searchParams.get('orderid');
        const paymentId = searchParams.get('paymentid');
        const status = searchParams.get('status');

        if (!orderId) {
          throw new Error('ID de orden no encontrado');
        }

        // Obtener la orden
        const orderResult = await getOrderById(orderId);
        
        // Actualizar con datos del pago pendiente
        if (paymentId && status) {
          await updateOrderPayment(orderId, {
            paymentId,
            status: 'pending',
            processedAt: new Date().toISOString(),
            note: 'Payment is being processed'
          });
        }

        setOrder(orderResult.order);
      } catch (err) {
        console.error('Error procesando pago pendiente:', err);
      } finally {
        setLoading(false);
      }
    };

    processPendingPayment();
  }, [searchParams]);

  if (loading) {
    return (
      <>
        <Background />
        <div className="container mx-auto px-4 py-8 mt-20">
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Background />
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-md mx-auto bg-yellow-100 text-yellow-800 p-6 rounded-lg text-center">
          <div className="text-6xl mb-4">⏳</div>
          <h2 className="text-2xl font-bold mb-4">Pago Pendiente</h2>
          <p className="mb-4">Tu pago está siendo procesado. Te notificaremos cuando esté confirmado.</p>
          
          {order && (
            <div className="bg-white p-4 rounded-lg mb-4 text-left">
              <h3 className="font-semibold mb-2">Detalles de la Orden:</h3>
              <p><strong>ID:</strong> {order.id}</p>
              <p><strong>Total:</strong> ${order.total?.toLocaleString('es-CL')}</p>
              <p><strong>Estado:</strong> Pendiente de confirmación</p>
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg mb-4 text-blue-800 text-sm">
            <p><strong>¿Qué sigue?</strong></p>
            <ul className="list-disc list-inside mt-1">
              <li>Verificaremos tu pago</li>
              <li>Te enviaremos un email de confirmación</li>
              <li>Puedes revisar el estado en "Mis Órdenes"</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate('/profile/orders')}
              className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
            >
              Ver Estado de Órdenes
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>
    </>
  );
};