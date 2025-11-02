import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, onDelete }) {
  if (products.length === 0) return <p>No products yet.</p>;

  return (
    <div>
      {products.map((p, index) => (
        <ProductCard
          key={index}
          id={index}
          title={p.title}
          price={p.price}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ProductList;
