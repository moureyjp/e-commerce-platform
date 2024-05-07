import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const fetchProducts = async (url) => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        setProducts(response.data);
        setIsLoading(false);
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
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showSuccessMessage && (
        <div className="bg-green-500 py-2 px-4 rounded-md text-white text-center fixed bottom-14 right-4 flex gap-4">
          <p>Success! Your product has been added to the cart.</p>
          <span
            className="cursor-pointer font-bold"
            onClick={() => setShowSuccessMessage(false)}
          >
            <sup>X</sup>
          </span>
        </div>
      )}
      {isLoading ? (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 "></div>
        </div>
      ) : (
        <div className="mt-8 xl:px-4 max-xl:w-[90%] mx-auto">
          <ul className="grid grid-cols-4 gap-8 max-lg:grid-cols-3 max-[800px]:grid-cols-2 max-sm:grid-cols-1 justify-items-center">
            {products?.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Products;
