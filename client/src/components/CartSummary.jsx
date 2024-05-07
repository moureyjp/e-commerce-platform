import { Link } from "react-router-dom";

const CartSummary = ({ summary }) => {
  const { total_quantity, sub_total, tax, shipping, total } = summary;

  return (
    <div className="bg-gray-100 p-8">
      <h3 className="text-2xl font-bold text-[#333]">Order summary</h3>
      <ul className="text-[#333] mt-6 divide-y">
        <li className="flex flex-wrap gap-4 text-md py-3">
          Total Quantity{" "}
          <span className="ml-auto font-bold">{total_quantity}</span>
        </li>
        <li className="flex flex-wrap gap-4 text-md py-3">
          Subtotal <span className="ml-auto font-bold">${sub_total}</span>
        </li>
        <li className="flex flex-wrap gap-4 text-md py-3">
          Shipping <span className="ml-auto font-bold">${shipping}</span>
        </li>
        <li className="flex flex-wrap gap-4 text-md py-3">
          Tax <span className="ml-auto font-bold">${tax}</span>
        </li>
        <li className="flex flex-wrap gap-4 text-md py-3 font-bold">
          Total <span className="ml-auto">${total}</span>
        </li>
      </ul>
      <Link
        to="/checkout"
        className={`block text-center font-bold mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded ${
          total !== 0 || "pointer-events-none"
        }`}
      >
        Check out
      </Link>
    </div>
  );
};

export default CartSummary;
