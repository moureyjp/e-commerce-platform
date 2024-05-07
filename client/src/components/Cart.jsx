import axios from "axios";
import { useEffect, useState } from "react";

import CartProduct from "./CartProduct";
import CartSummary from "./CartSummary";

const Cart = () => {
  const [cart, setCart] = useState(null);

  const fetchProducts = async (url) => {
    try {
      const response = await axios.get(url);
      setCart(response.data);
      if (cart.length === 0) reload;
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchProducts("http://127.0.0.1:8000/api/cart");
  }, []);

  const removeFromCart = async (id) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/cart/${id}`
      );
      fetchProducts("http://127.0.0.1:8000/api/cart");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="font-[sans-serif] bg-white">
      <div className="lg:max-w-7xl max-w-xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#333]">Shopping Cart</h2>
        <div className="grid lg:grid-cols-3 gap-8 items-start mt-8">
          <ul className="divide-y lg:col-span-2 flex flex-col gap-4">
            {cart?.products?.map((product) => (
              <CartProduct
                key={product.cart_id}
                product={product}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
          {!cart?.summary || <CartSummary summary={cart.summary} />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
