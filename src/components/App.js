import React from "react";
import Header from "./Header";
import Schedule from "./Schedule";
import Seasons from "./Seasons";
import farmersmarket from "./../img/farmersmarket.webp";
import Dropdown from "./DropdownControl.js";

function App(){
  return(
    <React.Fragment>
      <Header />
      <div style = {{width: "20%", height: "140vh", padding: "10px", margin: "5px", border: "2px solid grey"}}>
        <Schedule />
      </div>
      <img src={farmersmarket} alt="Fresh produce" width="25%"/>
      <Seasons />
      <Dropdown />
    </React.Fragment>
  );
}

export default App;