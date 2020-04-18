import React from "react";
import Home from "./pages/Homepage/Homepage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
