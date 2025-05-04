import { useState } from "react"
import useCartContext from "../context/CartContext";
import { CartSideBar } from "./CartSideBar";
import { LiaCartArrowDownSolid } from "react-icons/lia";


export const CartIcon = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const totalItems = useCartContext((state) => state.totalItems);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    return (
      <div className="relative inline-block">
        <button
          onClick={handleIsOpen}
          className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
        >
            <LiaCartArrowDownSolid className="w-7 h-7"/>
            {
              totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {totalItems}
                  </span>
              )
            }
        </button>

        {isOpen && <CartSideBar onClose={handleIsOpen} />}
      </div>
    );
}


