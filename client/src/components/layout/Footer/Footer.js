import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h4>&copy; {new Date().getFullYear()} Aarick-F</h4>
    </div>
  );
}

export default Footer;