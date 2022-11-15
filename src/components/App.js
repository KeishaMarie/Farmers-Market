import React from "react";
import Header from "./Header";
import Schedule from "./Schedule";
import SeasonalList from "./Schedule";

function App(){
  return(
    <React.Fragment>
      <Header />
      <Schedule />
      <SeasonalList />
    </React.Fragment>
  );
}

export default App;