import React from "react";

function ProductCard({ img, title, price }) {
  return (
    <div className="w-[20rem] m-4">
      <div className="relative bg-base-100 shadow-lg rounded-lg overflow-hidden group">
        <figure className="relative">
          <img src={img} alt={title} className="w-full h-[15rem] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70 transition-opacity group-hover:opacity-50"></div>
          <div className="absolute bottom-0 left-0 p-4 w-full text-white">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
        </figure>

        <div className="flex justify-between items-center px-4 py-3 bg-gray-100">
          <span className="text-xl font-bold text-gray-800">{price}</span>
          <button className="btn btn-primary text-white font-semibold px-4 py-2 rounded-lg transition-transform transform group-hover:scale-105">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
