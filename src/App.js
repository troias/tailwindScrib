import { useEffect, useState } from "react"

function App() {
  return (
    <div className="App bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed h-auto ">
      <header className="">
        <div>
          <MobileNavbar />
        </div>
        {/* <div className="hidden md:flex w-full">
          <DeskTopNavBar />
        </div> */}
      </header>
      <body className="bg-white/40 ">
        <div className="h-screen w-full">
          <HeroSection />
          <SpeakersSection />
        </div>
      </body>
    </div>
  )
}

function MobileNavbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-black leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-purple hover:opacity-75"
              href="#pablo"
            >
              Design+Code
            </a>
            <button
              class="cursor-pointer  md:hidden "
              aria-label="Menu"
              aria-expanded="false"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                class="fill-current h-6 w-6 text-purple"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M3 13h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z" />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-start  bg-white/20 w-full rounded-lg">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 text-purple">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 text-purple">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 text-purple">Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

const DeskTopNavBar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-transparent border-b-4 border-purple  ">
      <div className="flex items-center">
        <div className="w-2 h-2 bg-purple rounded-full mr-3"></div>
        <div className="w-2 h-2 bg-purple rounded-full mr-3"></div>
        <div className="w-2 h-2 bg-purple rounded-full mr-3"></div>
      </div>
      <div className="text-2xl font-bold text-purple uppercase">
        Design+Code
      </div>
      <div className="flex items-center">
        <button className="bg-purple text-white rounded-full py-2 px-4 text-xs uppercase font-bold mr-3">
          Log in
        </button>
        <button className=" rounded-full text-white py-2 px-4 text-xs uppercase font-bold border-2 border-purple bg-tahiti-blue">
          Sign up
        </button>
      </div>
    </nav>
  )
}

const HeroSection = () => {
  return (
    <div class=" flex  ">
      <div className=" grid px-8 ">
        <div className="py-6 ">
          <h1
            className="flex justify-items-center 
            font-sans text-purple first-letter:uppercase
           text-2xl font-black leading-0  py-6    "
          >
            A community-driven design conference in the heart of the Rocky
            Mountains.
          </h1>
        </div>
        <div className="grid gap-4 grid-flow-row md:grid-flow-col border-t border-gray-800 border-opacity-20   py-2 font-semibold bg-white/10">
          <div>
            <h5 className="font-bold">Date</h5>
            September 5-7 2001
          </div>
          <div>
            <h5 className="font-bold">Venue</h5>
            Waikato University
          </div>
          <div>
            <h5 className="font-bold">Online</h5>
            World wide at 8AM EST
          </div>
        </div>
        <div className="grid columns-2 gap-3 mt-4 font-inter-bold tracking-tight font-medium bg-white/10 ">
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
      </div>
    </div>
  )
}

const SpeakersSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 py-6">
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-purple py-2">Speakers</h2>
        <p className="font-sataoshi-bold text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <img
            src="
            https://unsplash.com/photos/4ZF5cV50QPM
            "
            alt="speaker"
            className="rounded-full"
          />
          <h3 className="text-purple font-bold text-lg">Speaker 1</h3>
          <p className="text-gray-400 text-sm">Lorem Ipsum</p>
        </div>
        <div className="flex flex-col justify-center">
          <img
            src="https://images.unsplash.com/photo-1517436073-3b1b1f7d4d9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BlYWtlcnxlbn
            wxbHlwaGljb258ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt="speaker"
            className="rounded-full
              w-40
              h-40
            "
          />
          <h3 className="text-purple font-bold text-lg">Speaker 2</h3>

          <p className="text-gray-400 text-sm">Lorem Ipsum</p>
        </div>
      </div>
    </div>
  )
}

export default App
