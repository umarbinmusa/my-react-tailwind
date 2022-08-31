
import './App.css';
function App() {
  return (
    <div class="flex-container">
    <nav class="relative container mx-auto p-2">
  
    <div class="flex items-center justify-between mt-6">
    <div class="pt-2">
                <img src="./images/logo.svg" alt=""/>
            </div>
          
        <div class=" md:flex space-x-16 mt-2 font-bold">
            <a href="#" class="hover:text-green-400">HOME</a>
            <a href="#"  class="hover:text-green-400">ABOUT</a>
            <a href="#"  class="hover:text-green-400">CONTACT</a>
            <a href="#"  class="hover:text-green-400">MISSION</a>
            <a href="#"  class="hover:text-green-400">SERVICES</a>
        </div>
        
        <a href="#" class=" hidden md:block p-3 px-6 pt-2 text-white rounded-full baseline hover: bg-black">
            Get Started 
        </a>
    </div>
    <div className="min-h-screen flex justify-center mt-1 items-center flex-col-reverse lg:flex-row lg:justify-around">
      
      
      

      <div className='mt-0 text-center lg:text-left'>
      <h1 className='font-black text-5xl lg:text-6xl'>
        WELCOME TO
        <br />
       <span className='font-calibri font-light'>DEVSTACK ICT SOLUTIONS</span>
        </h1>
      <p className='text-base text-gray-900'>WE PROVIDE ALL SOLUTIONS TO YOUR PROBLEMS</p>
      <p className='text-base text-gray-900'>WE DESIGN THE BEST SYSTEM FOR USER AND WE VALUE OUR CLIETS</p>
      <span className='inline-block bg-black text-white  px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5 ml-12'>CONNECT US</span>
      </div>
      <img src="./images/devstack.jpg"alt='' class="rounded-full"/>
    
    </div>
    
   
</nav>
<section id="testimonials">
     
     <div class="max-w-6xl px-5 mx-auto mt-3 text-center">
    
       <h2 class="text-4xl font-italic text-center text-black rounded-full">
        SERVICES 
       </h2>
      
       <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
         
         <div
           class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
         >
           <h5 class="text-lg font-bold">WORKSHOP ON TECH</h5>
           <img src="./images/bb.jpeg" class="w-50 -mt-14" alt="" />
           <p class="text-sm text-darkGrayishBlue">
             “Manage has supercharged our team’s workflow. The ability to
             maintain visibility on larger milestones at all times keeps
             everyone motivated.”
           </p>
         </div>

         
         <div
           class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
         >
           <h5 class="text-lg font-bold">SOFTWARE DEVELOPMENT</h5>
           
          <img src="./images/dd.jpeg" class="w-50 -mt-14"  alt="" />
           <p class="text-sm text-darkGrayishBlue">
             “We have been able to cancel so many other subscriptions since
             using Manage. There is no more cross-channel confusion and
             everyone is much more focused.”
           </p>
         </div>

         
         <div
           class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
         >
           
           <h5 class="text-lg font-bold">PHOTOGRAPHY/GRAPHIC DESIGN</h5>
           <img src="./images/12.jpeg" class="w-50 -mt-14" alt="" />
           <p class="text-sm text-darkGrayishBlue">
             “Manage has supercharged our team’s workflow. The ability to
             maintain visibility on larger milestones at all times keeps
             everyone motivated.”
           </p>
         </div>
       </div>
       

     </div>
   </section>
  
   <footer class="bg-black">

      <div
        class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
      >
        
        <div
          class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
        >
          <div class="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; DEVSTACK ICT SOLUTIONS
          </div>
          
          <div>
            <img src="img/logo-white.svg" class="h-8" alt="" />
          </div>
          
          <div class="flex justify-center space-x-4">
            
            <a href="#">
              <img src="img/icon-facebook.svg" alt="" class="h-8" />
            </a>
           
            <a href="#">
              <img src="img/icon-youtube.svg" alt="" class="h-8" />
            </a>
           
            <a href="#">
              <img src="img/icon-twitter.svg" alt="" class="h-8" />
            </a>
           
            <a href="#">
              <img src="img/icon-pinterest.svg" alt="" class="h-8" />
            </a>
            
            <a href="#">
              <img src="img/icon-instagram.svg" alt="" class="h-8" />
            </a>
          </div>
        </div>
        
        <div class="flex justify-around space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Home</a>
            <a href="#" class="hover:text-brightRed">Pricing</a>
            <a href="#" class="hover:text-brightRed">Products</a>
            <a href="#" class="hover:text-brightRed">About</a>
          </div>
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Careers</a>
            <a href="#" class="hover:text-brightRed">Community</a>
            <a href="#" class="hover:text-brightRed">Privacy Policy</a>
          </div>
        </div>

      
        <div class="flex flex-col justify-between">
          <form>
            <div class="flex space-x-3">
              <input
                type="text"
                class="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
          <div class="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>


</div>



   )
}

export default App;
