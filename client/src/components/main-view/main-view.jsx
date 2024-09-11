import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WelcomeView } from "../welcome-view/welcome-view";
import React from "react";

export const MainView = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeView/>}/>
        <Route path="/book" element={<BookView/>}/>
        <Route path="/about" element={<AboutView/>}/>
        <Route path="/spotify" element={<SpotifyView/>}/>
        <Route path="/merch" element={<MerchView/>}/>
        <Route path="/causes" element={<CausesView/>}/>
      </Routes>
    </BrowserRouter>
  );
};