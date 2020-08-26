import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Chi Shing poon {year}</p>
    </footer>
  );
}

export default Footer;
