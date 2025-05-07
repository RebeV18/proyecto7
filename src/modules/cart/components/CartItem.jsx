import { envLoader } from "../../../config/envLoader";
import { formatCurrency } from "../../../shared/utils/formatCurrency";
import useCartContext from "../context/CartContext";

import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const { optionsCurrency } = envLoader;

export const CartProduct = ({ product }) => {
  const addItem = useCartContext((state) => state.addItem);
  const removeOneItem = useCartContext((state) => state.removeOneItem);

  return (
    <div className="flex flex-col">
      <h4 className="text-white text-xs p-1">{product.cancion}</h4>
      <div className="flex justify-between w-full h-24 rounded-md-overflow-hidden">
        <img
          className="w-24 h-24 object-center object-cover"
          src={product.imagen}
          alt={product.cancion}
        />
        <div>
          <div className="flex flex-col text-center p-1 mb-4">
            <p className="ml-4 text-white text-xs p-1">
              {formatCurrency(product.precio, optionsCurrency)}
            </p>
            <p className="text-white text-xs">{product.quantity}</p>
          </div>

          <div className="flex justify-center gap-2 p-1 text-sm">
            <button
              onClick={() => removeOneItem(product._id)}
              className="text-gray-100 hover:text-gray-700 cursor-pointer"
            >
              <CiCircleMinus className="h-5 w-5" />
            </button>

            <button
              onClick={() => addItem(product)}
              className="text-gray-100 hover:text-gray-700 cursor-pointer"
            >
              <CiCirclePlus className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
