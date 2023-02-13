import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "../header/Header";
import Home from "../../pages/Home";
import News from "../../pages/News";
import CreateNews from "../createNews/createNews";

import "../../scss/app.scss"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/news" replace />} />
        <Route path="/news" element={<Home />} />
        <Route path="/news/:id" element={<News />} />
        <Route path="/create" element={<CreateNews />} />
      </Routes>
    </>
  );
};

export default App;
