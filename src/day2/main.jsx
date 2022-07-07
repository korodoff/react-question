import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./home";
import About from "./About";
import NavBar from "./navBar";

const Main = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
</>;
