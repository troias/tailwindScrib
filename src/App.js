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
        <div className=" w-full lg:px-12">
          <HeroSection />
          <SpeakersSection />
        </div>
      </body>
      <footer className="flex">
        <FooterSection />
      </footer>
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
        <div className="grid gap-2 grid-flow-row md:grid-flow-col border-t border-gray-800 border-opacity-20   py-2 font-semibold bg-white/10">
          <div>
            <h5 className="font-bold py-2">Date</h5>
            September 5-7 2001
          </div>
          <div>
            <h5 className="font-bold py-2">Venue</h5>
            Waikato University
          </div>
          <div>
            <h5 className="font-bold py-2">Online</h5>
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
    <div className="grid grid-cols-1 md:g-cols-2 lg:gap-4 gap-2 px-8 py-6">
      <div className="grid justify-center ">
        <h2 className="text-2xl font-bold text-purple py-2">Speakers</h2>
        <p className="font-sataoshi-bold text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 ">
        <div className="lg:grid grid-rows-3 w-1/3 px-4 h-2/3 hidden">
          <div>
            <h5>day 1</h5>
            <h4 className="text-purple text-lg font-bold border-b-2 border-purple">
              Septermber 5
            </h4>
          </div>
          <div>
            <h5>day 1</h5>
            <h4 className="text-purple text-lg font-bold">Septermber 5</h4>
          </div>
          <div>
            <h5>day 1</h5>
            <h4 className="text-purple text-lg font-bold">Septermber 5</h4>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mobile:grid-cols-2 gap-4 place-items-center lg:col-span-3">
          <div className="grid  justify-center  lg:grid-cols-3 ">
            <div className="py-2 lg:order-2 ">
              <h3 className="text-purple font-bold text-lg">Speaker 1</h3>
              <p className="text-black font-sataoshi text-sm">Lorem Ipsum</p>
            </div>

            <div className="py-2 border-t-purple/50 border-t-2 lg:border-0  lg:col-span-3">
              <img
                src="
            https://source.unsplash.com/4ZF5cV50QPM/300x300
            "
                alt="speaker"
                className=" w-full h-40 my-2 aspect-square rounded"
              />
            </div>
          </div>

          <div className="grid  justify-center  lg:grid-cols-3 ">
            <div className="py-2 lg:order-2 ">
              <h3 className="text-purple font-bold text-lg">Speaker 1</h3>
              <p className="text-black font-sataoshi text-sm">Lorem Ipsum</p>
            </div>

            <div className="py-2 border-t-purple/50 border-t-2 lg:border-0  lg:col-span-3">
              <img
                src="
            https://source.unsplash.com/4ZF5cV50QPM/300x300
            "
                alt="speaker"
                className=" w-full h-40 my-2 aspect-square rounded"
              />
            </div>
          </div>
          <div className="grid  justify-center  lg:grid-cols-3 ">
            <div className="py-2 lg:order-2 ">
              <h3 className="text-purple font-bold text-lg">Speaker 1</h3>
              <p className="text-black font-sataoshi text-sm">Lorem Ipsum</p>
            </div>

            <div className="py-2 border-t-purple/50 border-t-2 lg:border-0  lg:col-span-3">
              <img
                src="
            https://source.unsplash.com/4ZF5cV50QPM/300x300
            "
                alt="speaker"
                className=" w-full h-40 my-2 aspect-square rounded"
              />
            </div>
          </div>
          <div className="grid  justify-center  lg:grid-cols-3 ">
            <div className="py-2 lg:order-2 ">
              <h3 className="text-purple font-bold text-lg">Speaker 1</h3>
              <p className="text-black font-sataoshi text-sm">Lorem Ipsum</p>
            </div>

            <div className="py-2 border-t-purple/50 border-t-2 lg:border-0  lg:col-span-3">
              <img
                src="
            https://source.unsplash.com/4ZF5cV50QPM/300x300
            "
                alt="speaker"
                className=" w-full h-40 my-2 aspect-square rounded"
              />
            </div>
          </div>
          <div className="grid  justify-center  lg:grid-cols-3 ">
            <div className="py-2 lg:order-2 ">
              <h3 className="text-purple font-bold text-lg">Speaker 1</h3>
              <p className="text-black font-sataoshi text-sm">Lorem Ipsum</p>
            </div>

            <div className="py-2 border-t-purple/50 border-t-2 lg:border-0  lg:col-span-3">
              <img
                src="
            https://source.unsplash.com/4ZF5cV50QPM/300x300
            "
                alt="speaker"
                className=" w-full h-40 my-2 aspect-square rounded"
              />
            </div>
          </div>
          <div className="grid  justify-center  lg:grid-cols-3 ">
            <div className="py-2 lg:order-2 ">
              <h3 className="text-purple font-bold text-lg">Speaker 1</h3>
              <p className="text-black font-sataoshi text-sm">Lorem Ipsum</p>
            </div>

            <div className="py-2 border-t-purple/50 border-t-2 lg:border-0  lg:col-span-3">
              <img
                src="
            https://source.unsplash.com/4ZF5cV50QPM/300x300
            "
                alt="speaker"
                className=" w-full h-40 my-2 aspect-square rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const FooterSection = () => {
  return (
    <div className="bg-white h-96 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-6">
        <div className="grid justify-center">
          <h2 className="text-2xl font-bold text-purple py-2">About Us</h2>
          <p className="font-sataoshi-bold text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="grid justify-center">
          <h2 className="text-2xl font-bold text-purple py-2">Contact Us</h2>
          <p className="font-sataoshi-bold text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="grid justify-center">
          <h2 className="text-2xl font-bold text-purple py-2">Follow Us</h2>
          <p className="font-sataoshi-bold text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
