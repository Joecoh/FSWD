import React, { useState } from "react";

function ProductForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price) return;
    onAdd({ title, price });
    setTitle("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Product name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />{" "}
      <button type="submit">Add</button>
    </form>
  );
}

export default ProductForm;
