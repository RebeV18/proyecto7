import useCartContext from "../context/CartContext";
import { CartSideBar } from "./CartSideBar";
import { BsCart4 } from "react-icons/bs";

export const CartIcon = () => {
  const totalItems = useCartContext((state) => state.totalItems);
  const isCartOpen = useCartContext((state) => state.isCartOpen);
  const setCartOpen = useCartContext((state) => state.setCartOpen);

  const handleIsOpen = () => {
    setCartOpen(!isCartOpen);
  };

  const handleClose = () => {
    setCartOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleIsOpen}
        className="p-2 text-white hover:text-gray-200 focus:outline-none"
      >
        <BsCart4 className="text-white text-lg xl:text-4xl 2xl:text-5xl" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {totalItems}
          </span>
        )}
      </button>

      {isCartOpen && <CartSideBar onClose={handleClose} />}
    </div>
  );
};
