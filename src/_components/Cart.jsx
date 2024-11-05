import { useEffect, useState } from "react";
import useCartStore from "../context/addToCard";
import toast, { Toaster } from "react-hot-toast";

function CartCard({ img, title, quantity, price, id }) {
  const [quantityState, setQuantity] = useState(quantity);
  const [prodPrice, setProdPrice] = useState(price);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cart = useCartStore((state) => state.cart);
  const updateQuantityInCart = useCartStore(
    (state) => state.updateQuantityInCart
  );

  const handleQuantityChange = (id, quantityState) => {
    updateQuantityInCart(id, quantityState);
  };

  useEffect(() => {
    setProdPrice(parseFloat(price) * parseFloat(quantityState));
    if (quantityState === 0) {
      removeItem(id);
    }
    const updateQuantity = () => {
      const index = cart.find((c) => c.id === id);
      index.quantity = quantityState;
    };
    updateQuantity();
    handleQuantityChange();
  }, [quantityState]);

  const addQuantity = () => setQuantity((state) => state + 1);
  const subQuantity = () => setQuantity((state) => Math.max(state - 1, 0));

  const removeItem = () => {
    toast.error("Item Removed");
    removeFromCart(id);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4  max-w-md mx-auto w-full">
      <Toaster />
      <div className="card card-side bg-base-100 shadow-lg rounded-lg overflow-hidden w-full">
        <figure className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
          <img
            className="w-full h-full object-contain"
            src={img}
            alt={title}
          />
        </figure>
        <div className="card-body p-4 flex flex-col justify-between">
          <h2 className="card-title text-lg font-semibold text-gray-800">
            {title}
          </h2>

          <div className="flex items-center gap-2 my-2">
            <button
              onClick={subQuantity}
              className="btn bg-gray-200 text-gray-700 rounded-full w-8 h-8 hover:bg-gray-300"
            >
              -
            </button>
            <span className="font-semibold text-lg">{quantityState}</span>
            <button
              onClick={addQuantity}
              className="btn bg-gray-200 text-gray-700 rounded-full w-8 h-8 hover:bg-gray-300"
            >
              +
            </button>
          </div>

          <div className="mt-2 text-gray-600">
            <span>Item Price: </span>
            <span className="font-semibold">Rs {price.toFixed(2)}</span>
          </div>
          <div className="text-gray-800 font-bold">
            Total Price: Rs {prodPrice.toFixed(2)}
          </div>

          <div className="card-actions justify-end mt-4">
            <button
              className="btn btn-primary bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              onClick={removeItem}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
