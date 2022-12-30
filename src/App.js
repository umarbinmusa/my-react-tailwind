
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import  About  from "./pages/About";
import  Contact  from "./pages/Contact";
import  Services  from "./pages/Services";
import  Staffs  from "./pages/Staffs";
import Mission  from "./pages/Mission";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App(){
  return(
    <BrowserRouter>
    <NavBar />
   
  
    <Routes>
      
      <Route path="/" exact element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Staffs" element={<Staffs />} />
        <Route path="/Mission" element={<Mission />} />
        
      <Route />
    </Routes>
    <Footer />
   
  </BrowserRouter>

  )
}
export default App;