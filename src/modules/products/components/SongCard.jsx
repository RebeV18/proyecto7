import { Link } from "react-router-dom";
import { formatCurrency } from "../../../shared/utils/formatCurrency";
import { envLoader } from "../../../config/envLoader";

const { optionsCurrency } = envLoader;

export const ProductCard = ({ producto }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="w-full h-48 overflow-hidden">
        <Link
          to={`https://proyecto6-sgv2.onrender.com/api/v1/product/readone/${producto._id}`}
        >
          <h3 className="w-full h-full object-cover">{producto.cancion}</h3>
        </Link>
      </div>
      <div>
        <h2 className="text-x1 font-semibold mb-2 text-gray-800">
          {producto.cancion}
        </h2>

        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold text-blue-600">
            {formatCurrency(producto.precio, optionsCurrency)}
          </span>
          <span className="text-sm px-2 py-1 rounded-full text gray-600">
            {producto.createdAt
              ? new Date(producto.createdAt).toLocaleDateString()
              : "Nuevo"}
          </span>
        </div>

        <p className="text-gray-600 mb-4-line-clamp-2">{producto.autores}</p>
        <CartAddButton product={producto} />
      </div>
    </div>
  );
};
