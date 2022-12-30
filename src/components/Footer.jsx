
function Footer () {
    return(
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
            <img src="./images/logo-white.svg" class="h-8" alt="" />
          </div>
          
          <div class="flex justify-center space-x-4">
            
            <a href="#">
              <img src="./images/icon-facebook.svg" alt="" class="h-8" />
            </a>
           
            <a href="#">
              <img src="./images/icon-youtube.svg" alt="" class="h-8" />
            </a>
           
            <a href="#">
              <img src="./images/icon-twitter.svg" alt="" class="h-8" />
            </a>
           
            <a href="#">
              <img src="./images/icon-pinterest.svg" alt="" class="h-8" />
            </a>
            
            <a href="#">
              <img src="./images/icon-instagram.svg" alt="" class="h-8" />
            </a>
          </div>
        </div>
        
        <div class="flex justify-around space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">HOME</a>
            <a href="#" class="hover:text-brightRed">ABOUT</a>
            <a href="#" class="hover:text-brightRed">CONTACT</a>
            <a href="#" class="hover:text-brightRed">SERVICES</a>
          </div>
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">MISSION</a>
            <a href="#" class="hover:text-brightRed">GET STARTED</a>
            <a href="#" class="hover:text-brightRed">CONNECT US</a>
          </div>
        </div>

      
        <div class="flex flex-col justify-between">
          <form>
            <div class="flex space-x-3">
              <input
                type="text"
                class="flex-1 px-4 rounded-full focus:outline-none"
                
              />
              <button
                class="px-6 py-2 text-white rounded-full bg-black hover:bg-white focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
          <div class="hidden text-white md:block">
            Copyright &copy; DEVSTACK ICT SOLUTIONS
          </div>
        </div>
      </div>
    </footer>





    );
}  
export default Footer;