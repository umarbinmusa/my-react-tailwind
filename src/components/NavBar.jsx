import React from 'react'
import { Link } from 'react-router-dom';


 function NavBar() {
  return (
    <nav class="flex items-center justify-between mt-6">
    <div class="pt-2 ">
    <img src="./images/back.png" alt=""/>
            </div>
          
        <ul class=" md:flex space-x-16 mt-2 font-bold">
            <li class="hover:text-green-400"><Link to="/Home">Home</Link></li>
            <li class="hover:text-green-400"><Link to="/About">About</Link></li>
            <li class="hover:text-green-400"><Link to="/Contact">Contact</Link></li>
            <li class="hover:text-green-400"><Link to="/Mission">Mission</Link></li>
            <li class="hover:text-green-400"><Link to="/Services">Services</Link></li>
            <li class="hover:text-green-400"><Link to="/Staffs">Staffs</Link></li>
           
            
        </ul>
        
        <a href="get started" class=" hidden md:block p-3 px-6 pt-2 text-white rounded-full baseline hover: bg-black">
            Get Started 
        </a>
    </nav>
        
  );
}
export default NavBar;
