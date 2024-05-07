import { Link } from "react-router-dom";

import check from "../assets/check.png";

const CheckoutModal = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-45">
      <div className="bg-white p-6  md:mx-auto rounded-xl">
        <img src={check} alt="check" className="w-24 h-16 mx-auto" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Checkout Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing shipping details.
          </p>
          <p> Have a great day! </p>
          <div className="py-10 text-center">
            <Link
              to="/products"
              className="px-12 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded"
            >
              Ok
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutModal;
