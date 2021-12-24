import React from "react";
const year = new Date().getFullYear(); //get current year
function Footer(){
  return <footer>
  <p>Copyright ⓒ {year}</p>
  </footer>
}
export default Footer;
