const Product = ({ product, addToCart }) => {
  const { id, name, description, price } = product;
  return (
    <li className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm w-full">
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">${price}</span>
          <button
            onClick={() => addToCart(id)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </li>
  );
};
export default Product;
