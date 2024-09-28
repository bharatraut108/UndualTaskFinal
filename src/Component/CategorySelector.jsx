// // src/components/CategorySelector.jsx
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCategories, setSelectedCategory } from '../redux/productSlice';

// const CategorySelector = () => {
//   const dispatch = useDispatch();
//   const categories = useSelector((state) => state.products.categories);
//   const selectedCategory = useSelector((state) => state.products.selectedCategory);

//   useEffect(() => {
//     const loadCategories = async () => {
//       await dispatch(fetchCategories());
//     };
//     loadCategories();
//   }, [dispatch]);

//   const handleCategoryChange = (event) => {
//     dispatch(setSelectedCategory(event.target.value));
//   };

//   return (
//     <div className="mb-4">
//       <select
//         value={selectedCategory}
//         onChange={handleCategoryChange}
//         className="border rounded-md p-2 w-full md:w-1/3 lg:w-1/4 shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
//       >
//         <option value="">All Categories</option>
//         {Array.isArray(categories) && categories.length > 0 ? ( // Check if categories is an array
//           categories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))
//         ) : (
//           <option disabled>Loading categories...</option> // Loading state
//         )}
//       </select>
//     </div>
//   );
// };

// export default CategorySelector;
