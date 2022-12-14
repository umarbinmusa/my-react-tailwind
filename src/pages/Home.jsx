

function Home() {
  return (
    <div class="flex-container">
    <nav class="relative container mx-auto p-2">
      
      
  
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
  
  
   </div>



   );
}

export default Home;
