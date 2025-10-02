import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getOrderById, updateOrderPayment } from '../services/OrderService';
import { Background } from '../../../shared/components/Background';

export const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const processPayment = async () => {
      try {
        const orderId = searchParams.get('orderid');
        const paymentId = searchParams.get('paymentid');
        const status = searchParams.get('status');
        const merchantOrderId = searchParams.get('merchant_orderid');

        if (!orderId) {
          throw new Error('ID de orden no encontrado');
        }

        // Obtener la orden
        const orderResult = await getOrderById(orderId);
        
        // Actualizar con datos del pago exitoso
        if (paymentId && status) {
          await updateOrderPayment(orderId, {
            paymentId,
            status: 'approved',
            merchantOrderId,
            processedAt: new Date().toISOString()
          });
        }

        setOrder(orderResult.order);
      } catch (err) {
        console.error('Error procesando pago exitoso:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    processPayment();
  }, [searchParams]);

  if (loading) {
    return (
      <>
        <Background />
        <div className="container mx-auto px-4 py-8 mt-20">
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Background />
        <div className="container mx-auto px-4 py-8 mt-20">
          <div className="max-w-md mx-auto bg-red-100 text-red-700 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Error</h2>
            <p>{error}</p>
            <button
              onClick={() => navigate('/cart')}
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Volver al Carrito
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Background />
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-md mx-auto bg-green-100 text-green-800 p-6 rounded-lg text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-4">¡Pago Exitoso!</h2>
          <p className="mb-4">Tu compra ha sido procesada correctamente.</p>
          
          {order && (
            <div className="bg-white p-4 rounded-lg mb-4 text-left">
              <h3 className="font-semibold mb-2">Detalles de la Orden:</h3>
              <p><strong>ID:</strong> {order.id}</p>
              <p><strong>Total:</strong> ${order.total?.toLocaleString('es-CL')}</p>
              <p><strong>Estado:</strong> {order.status}</p>
              <p><strong>Items:</strong> {order.cart?.length || 0} productos</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate('/profile/orders')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Ver Mis Órdenes
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