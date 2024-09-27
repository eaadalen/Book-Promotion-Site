import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { BookView } from "../book-view/book-view";
import { AboutView } from "../about-view/about-view";
//import { MerchView } from "../merch-view/merch-view";
//import { SubmitStoryView } from "../submit-story-view/submit-story-view";
import React from "react";

export const MainView = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutView/>}/>
      </Routes>
    </BrowserRouter>
  );
};

/*
        <Route path="/book" element={<BookView/>}/>
        <Route path="/merch" element={<MerchView/>}/>
        <Route path="/submitstory" element={<SubmitStoryView/>}/>

*/