import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return (
    <div style={{ padding: "20px" }}>
      <h2>🛍️ Product Details (ID: {id})</h2>
      <p>Here you can show product info, description, reviews, etc.</p>
    </div>
  );
}

export default ProductPage;
