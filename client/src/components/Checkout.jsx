import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import CheckoutModal from "./CheckoutModal";

const Checkout = () => {
  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/checkout", {
        billing_name: nameRef.current.value,
        billing_address: addressRef.current.value,
        phone_number: phoneNumberRef.current.value,
      });
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44">
      <Link
        to="/cart"
        className="text-base dark:text-gray-400 leading-4 underline hover:text-gray-800 text-gray-600"
      >
        Back to cart
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center"
      >
        <div className="flex w-full flex-col justify-start items-start">
          <div>
            <p className="text-3xl lg:text-4xl dark:text-white font-semibold leading-7 lg:leading-9 text-gray-800">
              Check out
            </p>
          </div>
          <div className="mt-2">
            <h1 className="text-3xl font-extrabold text-[#333]">
              Billing Address
            </h1>
          </div>
          <div className="mt-12">
            <p className="text-xl font-semibold dark:text-white leading-5 text-gray-800">
              Shipping Details
            </p>
          </div>
          <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8">
            <input
              className="px-2 focus:outline-none border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
              type="text"
              ref={nameRef}
              placeholder="Name"
              required
            />
            <input
              className="px-2 focus:outline-none  border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
              type="text"
              ref={addressRef}
              placeholder="Address"
              required
            />
            <input
              className="focus:outline-none px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
              type="number"
              ref={phoneNumberRef}
              placeholder="Phone Number"
              required
            />
          </div>
          <button
            type="submit"
            className="focus:outline-none mt-8 text-base font-medium focus:ring-2 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800 rounded"
          >
            Checkout
          </button>
        </div>
      </form>
      {isModalOpen && <CheckoutModal />}
    </div>
  );
};

export default Checkout;
