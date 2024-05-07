import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async (url) => {
      try {
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.log("error");
      }
    };

    fetchProducts("http://127.0.0.1:8000/api/products");
  }, []);

  const addToCart = async (id) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/cart", {
        product_id: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-8 xl:px-4 max-xl:w-[90%] mx-auto">
      <ul className="grid grid-cols-4 gap-8 max-lg:grid-cols-3 max-[800px]:grid-cols-2 max-sm:grid-cols-1 justify-items-center">
        {products?.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
