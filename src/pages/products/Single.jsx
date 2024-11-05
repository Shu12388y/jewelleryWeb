import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Navbar from "../../_components/Navbar";
import SingleProduct from "../../_components/SingleProduct";
import { useEffect, useState } from "react";


function Single() {
  const params = useParams();
  const { data, error } = useFetch(`products/${params.id}`);
  const [singleProd, setSingleProd] = useState(null);

  useEffect(() => {
    if (data) {
      setSingleProd(data);
    }
  }, [data]);

  if (error) {
    return <div>Error loading product.</div>;
  }

  if (!singleProd) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <SingleProduct 
        img={singleProd.images?.[0]} 
        title={singleProd.title} 
        des={singleProd.description} 
        price={singleProd.price} 
        id = {singleProd.id} 
        category={singleProd.category}
        brand ={singleProd.brand}
        dimensions ={singleProd.dimensions}
      />
    </div>
  );
}

export default Single;
