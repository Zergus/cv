import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CV from "./CV";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
