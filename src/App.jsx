import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Product from "./pages/product/Product";
import Single from "./pages/products/Single";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/prod/:id" element={<Single/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
