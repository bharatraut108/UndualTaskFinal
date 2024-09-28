import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectProducts, selectLoading, selectError } from '../redux/productSlice';
import Loader from './Loader'; 
import ProductModal from './ProductModal'; 

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(''); // Track the selected category

  const productsPerBatch = 10;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value); // Set selected category
    setCurrentPage(1);
  };

  const filteredProducts = products.filter(product => {
    const title = product.title || '';
    const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const handleNextPage = () => {
    if (currentPage * productsPerBatch < filteredProducts.length) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500 text-2xl text-center">Error: {error}</div>;

  const currentBatchStart = (currentPage - 1) * productsPerBatch + 1;
  const currentBatchEnd = Math.min(currentBatchStart + productsPerBatch - 1, filteredProducts.length);

  return (
    <div className="bg-gradient-to-b from-yellow-200 via-yellow-700 to-brown-700 p-6 min-h-screen">
      <h1 className="text-5xl font-bold text-center text-black mb-8">Our Products</h1>

      {/* Category Dropdown */}
      <div className="mb-6 flex justify-center">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
          <option value="sports">Sports</option>
        </select>
      </div>

      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-400 rounded-lg p-4 w-full md:w-1/3 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
        />
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.slice((currentPage - 1) * productsPerBatch, currentPage * productsPerBatch).map(product => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg p-6 shadow-2xl bg-white transform transition duration-500 hover:scale-105 hover:shadow-3xl cursor-pointer"
            onClick={() => openModal(product)}
          >
            <img src={product.image} alt={product.title} className="w-full h-56 object-cover rounded-lg mb-6" />
            <h2 className="text-2xl font-bold text-purple-600 mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4">{product.description.slice(0, 60)}...</p>
            <p className="text-xl font-bold text-green-600">${product.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-between mt-10">
        <button 
          onClick={handlePreviousPage} 
          className="bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md disabled:opacity-50 hover:bg-purple-600 transition duration-200" 
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button 
          onClick={handleNextPage} 
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition duration-200" 
          disabled={currentPage * productsPerBatch >= filteredProducts.length}
        >
          Next
        </button>
      </div>
      
      {/* Displaying the Current Products Range */}
      <div className="text-center mt-6">
        <p className="text-xl text-black font-semibold">
          Showing products from {currentBatchStart} to {currentBatchEnd}
        </p>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ProductList;
