import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Adjust the path if necessary
import ProductList from './Component/ProductList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Product List</h1>
        <ProductList />
      </div>
    </Provider>
  );
};

export default App;