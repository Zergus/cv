import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CV from "./components/CV";

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
