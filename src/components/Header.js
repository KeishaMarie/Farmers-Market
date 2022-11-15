import React from "react";
import farmersmarket from "./../img/farmersmarket.webp"
function Header(){
  return(
    <React.Fragment>
      <h1>Avery's Organics</h1>
      <img src={farmersmarket} alt="Image of fresh produce" />
    </React.Fragment>
  );
}

export default Header;