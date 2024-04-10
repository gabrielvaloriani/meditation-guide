import  { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/background/background.css';
import Guide from './components/Guide/guide.js';
import Home from "./components/Home/home.js"; 
import Navbar from "./components/Navbar/navbar.js";
import Sound from "./components/Sound/sound.js";


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
