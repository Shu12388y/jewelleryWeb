import {useFetch} from "../../hooks/useFetch";
import useCartStore from "../../context/addToCard";

function Product() {
    const {data,error} = useFetch("products");
    const setCart =  useCartStore((state)=>state.setCart);
  return (
    <div>

    </div>
  )
}

export default Product