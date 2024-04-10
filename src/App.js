import  { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import './components/background/background.css';
import Guide from './components/Guide/Guide.js';
import Home from "./components/Home/Home.js"; 
import Navbar from "./components/Navbar/Navbar.js";
import Sound from "./components/Sound/Sound.js";


function App() {
  return (
        <BrowserRouter>
        <Navbar />
          <Routes>

            <Route path="/" element={<Home />}></Route>
            <Route path="/Guide" element={<Guide />}></Route>
            <Route path="/Sound" element={<Sound />}></Route>


          </Routes>

        </BrowserRouter>

  );
}

export default App;
