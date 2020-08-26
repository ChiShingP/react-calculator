import React, { useState } from "react";


import Header from "./Header"
import Calculator from "./Calcluator"
import Footer from "./Footer"
/*
1. Display a calculator
  - Show a display window
  - Show all buttons

2. Capture input from said calculator
2.a. Update the display from input
2.b. Process the input

*/

function App() {
  const [headTitle, setTitle] = useState("Hello! How may I help you?");
  return (
    // <div className="container-fluid container"> </div>
    <div className="mainWrapper">
      <Header title={headTitle} />
      <Calculator setHeaderTitle={setTitle} />
      <Footer />
    </div>
  );
}

export default App;
