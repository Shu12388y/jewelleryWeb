import useCartStore from "../context/addToCard";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

function SingleProduct({
  img,
  title,
  des,
  price,
  id,
  category,
  brand,
  dimensions,
}) {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);
  const [disabled, setDisabled] = useState(false);
  const [buy, setBuy] = useState("Add to Cart");

  useEffect(() => {
    const isProductInCart = cart.some((cartItem) => cartItem.id === id);
    if (isProductInCart) {
      setDisabled(true);
      setBuy("Buy Now");
    } else {
      setDisabled(false);
      setBuy("Add to Cart");
    }
  }, [cart, id]);

  const handleAddToCart = () => {
    const product = {
      img,
      title,
      des,
      price,
      id,
    };

    addToCart(product);
    toast.success("Added to cart");
    setDisabled(true);
    setBuy("Buy Now");
  };

  return (
    <div className="p-10">
      <Toaster />
      <div className="card lg:card-side bg-base-100">
        <figure>
          <img
            src={img}
            alt="Album"
            className="w-[50rem] h-[30rem] object-contain"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{title}</h2>
          <div>{des}</div>
          <div>
            <div className="flex flex-row gap-2 py-3">
              <div className="badge badge-secondary">{category}</div>
              <div className="badge badge-secondary">{brand}</div>
            </div>
            <div className="py-3">
              Width: {dimensions?.width} mm | Height: {dimensions?.height} mm |
              Depth: {dimensions?.depth} mm
            </div>
            <div className="py-5 text-3xl">
              <span className="font-bold">Price: </span>
              <span className="font-semibold line-through">
                Rs {price + 20.04}
              </span>
              <span className="font-bold"> Rs {price}</span>
            </div>
            <div className="py-2">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="btn btn-secondary"
              disabled={disabled}
            >
              {buy}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
