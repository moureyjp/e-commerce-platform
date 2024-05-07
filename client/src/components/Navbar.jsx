import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-16" alt="BetaMart Logo" />
        </Link>
        <div className="w-auto">
          <ul className="font-medium flex p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link to="/" className="block py-2 px-3 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="block py-2 px-3 text-white">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="block py-2 px-3 text-white">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
