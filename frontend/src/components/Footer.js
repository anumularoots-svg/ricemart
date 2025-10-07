import React from "react";

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "10px", background: "#f2f2f2" }}>
      © {new Date().getFullYear()} RiceMart | All Rights Reserved
    </footer>
  );
}

export default Footer;
