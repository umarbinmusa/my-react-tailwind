function Home() {
  return (
    <div className="bg-white text-gray-900">
      
      {/* ================= NAVBAR ================= */}
      <nav className="fixed w-full bg-white z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-wide">
            DEVSTACK<span className="text-gray-500">ICT</span>
          </h1>

          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center pt-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXT */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Building Smart <br />
              <span className="text-gray-500">Digital Solutions</span>
            </h1>

            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Devstack ICT Solutions delivers modern software, creative design,
              and innovative technology services tailored to your business needs.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-full shadow-lg hover:bg-gray-800 transition">
                Get Started
              </button>

              <button className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* IMAGE (still kept as content, not background) */}
          <div className="flex justify-center">
            <img
              src="./images/devstack.jpg"
              alt="Devstack"
              className="w-80 h-80 object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>
      

      {/* ================= SERVICES ================= */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 text-center">
          
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end digital solutions that help individuals,
            startups, and enterprises grow faster.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <img src="./images/bb.jpeg" alt="" className="w-16 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Tech Workshops</h3>
              <p className="text-gray-600">
                Practical training programs designed to equip learners with
                in-demand technology skills.
              </p>
            </div>

            <div className="bg-black text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition scale-105">
              <img src="./images/dd.jpeg" alt="" className="w-16 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Software Development</h3>
              <p className="text-gray-300">
                High-quality web and mobile applications built with scalability,
                security, and performance in mind.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <img src="./images/12.jpeg" alt="" className="w-16 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Branding & Media</h3>
              <p className="text-gray-600">
                Professional graphics design and photography that elevate your
                brand identity.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= PROJECTS ================= */}
<section className="bg-white py-24">
  <div className="container mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold">Our Projects</h2>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      A showcase of innovative solutions we’ve built for businesses,
      organizations, and individuals.
    </p>

    <div className="mt-16 grid gap-10 md:grid-cols-3">
      
      {/* PROJECT 1 */}
      <div className="group bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <img
          src="./images/project1.jpg"
          alt="Project 1"
          className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="p-6 text-left">
          <h3 className="text-xl font-bold mb-2">Pharmacy Management System</h3>
          <p className="text-gray-600 text-sm mb-4">
            A complete system for managing drugs, sales, inventory, and receipts.
          </p>
          <span className="text-sm font-semibold text-green-500">
            Web Application
          </span>
        </div>
      </div>

      {/* PROJECT 2 */}
      <div className="group bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <img
          src="./images/project2.jpg"
          alt="Project 2"
          className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="p-6 text-left">
          <h3 className="text-xl font-bold mb-2">Loan Management App</h3>
          <p className="text-gray-600 text-sm mb-4">
            A secure platform for loan requests, approvals, and repayments.
          </p>
          <span className="text-sm font-semibold text-green-500">
            Mobile & Web App
          </span>
        </div>
      </div>

      {/* PROJECT 3 */}
      <div className="group bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <img
          src="./images/project3.jpg"
          alt="Project 3"
          className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="p-6 text-left">
          <h3 className="text-xl font-bold mb-2">Business Portfolio Website</h3>
          <p className="text-gray-600 text-sm mb-4">
            A modern website designed to showcase services and attract clients.
          </p>
          <span className="text-sm font-semibold text-green-500">
            Website Design
          </span>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Transform Your Idea?
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Let’s build innovative solutions that move your business forward.
          </p>

          <button className="mt-8 bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition">
            Contact Devstack
          </button>
        </div>
      </section>
      

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>
          © {new Date().getFullYear()} Devstack ICT Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
