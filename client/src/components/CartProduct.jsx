import remove from "../assets/remove.svg";

const CartProduct = ({ product, removeFromCart }) => {
  const { cart_id, name, price, quantity, total_price } = product;

  return (
    <li className="flex items-start justify-between gap-4 py-8 bg-gray-100 p-6 rounded-xl">
      <div className="flex gap-6">
        <div>
          <p className="text-md font-bold text-[#333]">{name}</p>
          <div className="mt-5 flex gap-12 items-center">
            <span className="text-xl text-[#333]">Price</span>
            <span className="text-xl text-[#333]">${price}</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-xl text-[#333]">Quantity:</span>
            <span className="mx-4 text-xl">{quantity}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 content-between h-[7.5em] justify-items-end">
        <button onClick={() => removeFromCart(cart_id)} className="border-none">
          <img
            className="w-5 inline cursor-pointer"
            src={remove}
            alt="remove"
          />
        </button>
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-[#111]">Total:</span>
          <span className="text-xl font-bold text-[#333]">${total_price}</span>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;
