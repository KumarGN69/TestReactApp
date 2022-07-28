import React from "react";

import Footing from "./footer.jsx";

import NavBar from "./navbar.jsx";

import Items from "./items.jsx";



function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container m-5">
        <Items></Items>
      </div>
      <Footing></Footing>
    </div>
  );
}

export default App;
