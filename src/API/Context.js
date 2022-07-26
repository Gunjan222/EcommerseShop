import React, {createContext, useState, useEffect} from 'react';

export const ProductsContext = createContext();
const Context = ({children}) => {
  const [products, setProducts] = useState({});

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log('data', data);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default Context;
