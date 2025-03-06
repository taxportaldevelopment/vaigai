import {Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/layout/Header";
import Home from "./components/Home";
import About from "./components/About";
import OneDayPackage from "./components/OneDayPackage";
import Footer from "./components/layout/Footer";
import Contact from "./components/Contact";

// icons
import { IoPhonePortrait } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import BookYourCab from "./components/BookYourCab"; 
import Register from "./components/Register";
import PackageTable from "./components/PackageTable";
function App() {

  return (
     <div>
          <Header/>
          <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/about" element={<About/>} />
               <Route path="/one-day-package" element={<OneDayPackage/>} />
               <Route path="/contact" element={<Contact/>} />
               <Route path="/book-you-cab" element={<BookYourCab/>} />
               <Route path="/register" element={<Register/>} />
               <Route path="/package-table"  element={<PackageTable/>}/>
          </Routes>
          <Footer/>

          <div className="whatsapp-links">
                <div className="media-link p-2">
                      <div className="show-section">
                         <div>
                          <div className="share-link d-flex justify-content-center align-items-center text-white">
                             <a href="tel:+91 8489946488"><IoPhonePortrait className="h4 text-white" /></a>
                          </div>
                         </div>
                         <div>
                      <div className="share-link d-flex justify-content-center align-items-center text-white">
                         <a href="https://api.whatsapp.com/send?phone=8489946488"><FaWhatsapp className="h4 text-success text-white" /></a>
                      </div>
                         </div>
                      </div>
                      <div className="share-link h4 d-flex justify-content-center align-items-center text-white">
                           <FaPlus className=" media-hover" />
                      </div>
                </div>
          </div>
     </div>
  )
}

export default App
