import React from 'react';

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  // Close modal when clicking on the background
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackgroundClick} // Detect background clicks
    >
      <div className="relative bg-white p-4 rounded-lg w-full max-w-sm md:max-w-md shadow-lg transition-transform transform scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>

        <img src={product.image} alt={product.title} className="w-full h-40 md:h-48 object-cover rounded-lg mb-4" />
        
        <h2 className="text-xl font-semibold mb-2 text-purple-700 text-center">{product.title}</h2>

        <p className="text-gray-600 mb-3 text-justify">{product.description}</p>

        <p className="font-bold text-lg text-green-600 mb-4 text-center">${product.price}</p>

        {/* Action Buttons */}
        <div className="flex justify-around space-x-2">
          <button className="bg-blue-500 w-full text-white px-3 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200">
            Buy Now
          </button>
          <button className="bg-green-500 w-full text-white px-3 py-2 rounded-lg font-medium hover:bg-green-600 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
