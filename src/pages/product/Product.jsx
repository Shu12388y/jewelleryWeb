import { useFetch } from "../../hooks/useFetch";
import ProductCard from "../../_components/ProductCard";
import { useState, useEffect } from "react";
import Navbar from "../../_components/Navbar";
import { Link } from "react-router-dom";

function Product() {
  const { data, error } = useFetch("products");
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  useEffect(() => {
    if (data && data.products) {
      setProduct(data.products);
      setFilteredProducts(data.products);
    }
  }, [data]);

  const handlePriceFilter = (event) => {
    const value = event.target.value;
    setSelectedPriceRange(value);

    if (value === "all") {
      setFilteredProducts(product);
    } else {
      const [min, max] = value.split("-").map(Number);
      const filtered = product.filter(
        (p) => p.price >= min && (!max || p.price <= max)
      );
      setFilteredProducts(filtered);
    }
  };

  if (error) {
    return <div>Error loading products.</div>;
  }

  return (
    <div className="px-5">
      <Navbar/>
      {/* Filter Dropdown */}
      <div className="mb-4 ">
        <label className="mr-2">Filter by Price:</label>
        <select
          value={selectedPriceRange}
          onChange={handlePriceFilter}
          className="border rounded p-2"
        >
          <option value="all">All</option>
          <option value="0-50">Under Rs 50</option>
          <option value="50-100">Rs 50 - Rs 100</option>
          <option value="100-200">Rs 100 - Rs 200</option>
          <option value="200-">Above Rs 200</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((ele, index) => (
            <div key={index} className="flex justify-center">
              <Link to={`/prod/${ele.id}`}>
              <ProductCard img={ele.images[0]} title={ele.title} price={`Rs ${ele.price}`} />
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">No products available.</div>
        )}
      </div>
    </div>
  );
}

export default Product;
