import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((_, index) => index !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Classifieds - Buy & Sell</h2>
      <ProductForm onAdd={addProduct} />
      <ProductList products={products} onDelete={deleteProduct} />
    </div>
  );
}

export default App;
