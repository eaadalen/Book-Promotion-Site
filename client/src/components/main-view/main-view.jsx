import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookView } from "../book-view/book-view";
import { AboutView } from "../about-view/about-view";
import { MerchView } from "../merch-view/merch-view";
import React from "react";

export const MainView = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookView/>}/>
        <Route path="/about" element={<AboutView/>}/>
        <Route path="/merch" element={<MerchView/>}/>
      </Routes>
    </BrowserRouter>
  );
};