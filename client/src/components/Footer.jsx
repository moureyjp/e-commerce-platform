const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 absolute bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p>
          &copy; 2024{" "}
          <span className="font-medium">
            <span className="text-yellow-400">Beta</span>
            <span className="text-blue-500">Mart</span>
          </span>{" "}
          E-Commerce Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
