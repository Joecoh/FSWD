import React from "react";

function ProductCard({ id, title, price, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        marginBottom: 10,
        padding: 10,
        borderRadius: 6,
      }}
    >
      <h4>{title}</h4>
      <p>₹{price}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default ProductCard;
