import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative flex flex-wrap ">
      <div className="w-full md:w-1/2 px-4 mb-12 lg:mb-0 pt-20 lg:pt-32 pb-32 lg:pb-64">
        <h1 className="mb-8 text-5xl lg:text-6xl font-semibold font-heading">
          Discover limitless possibilities with our e-commerce platform.
        </h1>
        <span className="mb-20 text-lg text-gray-600">
          Browse through our collection of amazing products.
        </span>
        <Link
          to="/products"
          className="block w-fit mt-16 bg-yellow-500 hover:bg-yellow-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase transition duration-200"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
