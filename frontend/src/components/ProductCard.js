import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      margin: "10px",
      width: "200px",
      textAlign: "center"
    }}>
      <img src={product.image_url} alt={product.name} width="150" height="150" />
      <h3>{product.name}</h3>
      <p>Brand: {product.brand}</p>
      <p>Price: ₹{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
