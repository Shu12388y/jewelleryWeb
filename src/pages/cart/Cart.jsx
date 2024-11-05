// Cart.js
import useCartStore from "../../context/addToCard";
import CartCard from "../../_components/Cart";
import Navbar from "../../_components/Navbar";
import { useEffect, useState } from "react";

function Cart() {
  const { cart, clearCart } = useCartStore();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculatedTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(calculatedTotal);
  }, [cart]);

  return (
    <div className="px-4 sm:px-8">
      <div className="px-2 sm:px-4">
        <Navbar />
      </div>
      <div className="pt-10">
        {cart.length === 0 ? (
          <p className="text-center text-lg">No items in the cart</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
            {cart.map((ele, index) => (
              <CartCard
                key={ele.id || index}
                img={ele.img}
                title={ele.title}
                price={ele.price}
                id={ele.id}
                quantity={ele.quantity}
              />
            ))}
          </div>
        )}
      </div>

      {/* Total Price Section */}
      {cart.length > 0 && (
        <div className="mt-8 text-right">
          <h2 className="text-xl font-bold">
            Total Price: Rs {totalPrice.toFixed(2)}
          </h2>
          <button
            className="btn btn-primary bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-4 rounded-lg"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
