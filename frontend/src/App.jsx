import {Route, Routes} from "react-router-dom"
import './App.css'
import Header from "./components/layout/Header"
import Home from "./components/Home"
import About from "./components/About"
import OneDayPackage from "./components/OneDayPackage"
import Footer from "./components/layout/Footer"
import TourPlaces from "./components/TourPlaces"
import Contact from "./components/Contact"
import Payment from "./components/Payment"

// icons
import { IoPhonePortrait } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import BookYourCab from "./components/BookYourCab"
import { FcCalculator } from "react-icons/fc";
import Register from "./components/Register"
import Releax from "./components/Releax"
import PackageTable from "./components/PackageTable"
function App() {


  return (
     <div>
          <Header/>
          <Routes>
               <Route path="/vaigai" element={<Home/>} />
               <Route path="/about" element={<About/>} />
               <Route path="/one-day-package" element={<OneDayPackage/>} />
               {/* <Route path="/tour-places" element={<TourPlaces/>} /> */}
               <Route path="/contact" element={<Contact/>} />
               <Route path="/payment" element={<Payment/>} />
               <Route path="/book-you-cab" element={<BookYourCab/>} />
               <Route path="/register" element={<Register/>} />
               {/* <Route path="/releax" element={<Releax/>} /> */}
               <Route path="/package-table"  element={<PackageTable/>}/>
          </Routes>
          <Footer/>

          <div className="whatsapp-links">
                <div className="media-link p-2">
                      <div className="show-section">
                         <div>
                         {/* <div className="share-link d-flex justify-content-center align-items-center text-white">
                         <FcCalculator className="h4" />
                          </div> */}
                          <div className="share-link d-flex justify-content-center align-items-center text-white">
                             <a href="tel:+91 94882 44111"><IoPhonePortrait className="h4 text-white" /></a>
                          </div>
                         </div>
                         <div>
                      <div className="share-link d-flex justify-content-center align-items-center text-white">
                         <a href="https://api.whatsapp.com/send?phone=94882 44111"><FaWhatsapp className="h4 text-success text-white" /></a>
                      </div>
                         </div>
                      </div>
                      <div className="share-link  d-flex justify-content-center align-items-center text-white">
                           <FaPlus className="h4 media-hover" />
                      </div>
                </div>
          </div>
     </div>
  )
}

export default App
