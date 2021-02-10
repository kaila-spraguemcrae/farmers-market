import React from "react";
import Header from "./Header";
import MarketControl from "./MarketControl";


function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <MarketControl />
      </div>
    </React.Fragment>
  );
}

export default App;