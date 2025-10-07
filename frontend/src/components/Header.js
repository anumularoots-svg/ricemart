import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={{ background: "#007b5e", padding: "10px", color: "white" }}>
      <Link to="/" style={{ color: "white", margin: "10px" }}>🏠 Home</Link>
      <Link to="/about" style={{ color: "white", margin: "10px" }}>ℹ️ About</Link>
      <Link to="/cart" style={{ color: "white", margin: "10px" }}>🛒 Cart</Link>
    </nav>
  );
}

export default Header;
