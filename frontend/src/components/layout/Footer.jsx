import {Link} from "react-router-dom"
// icons
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
const Footer = () => {
  return (
    <div className='footer-section container-fluid'>
         <div className="row p-4 text-white ">
               <div className="col-md-12 col-lg-3">
                    <h3 className='py-3 text-danger'>DINDIGUL TRAVEL</h3>
                    <p>Tour Operators in Dindigul is one of the leading travel 
                        agencies in Dindigul, South India for the past few years. 
                        Tour Operators in Dindigul arranged total tour package those 
                        holiday, pilgrimage, educational tour packages etc.</p>
               </div>
               <div className="col-md-12 col-lg-3">
                   <h5 className="text-danger">Quick Links</h5>
                   <ul>
                      <Link className="d-block text-white" to={"/vaigai"}><li className='py-2'>Home</li></Link>
                      <Link className="d-block text-white" to={"/about"}><li className='py-2'>ABOUT US</li></Link>
                      <Link className="d-block text-white" to={"/one-day-package"}><li className='py-2'>TOUR PACKAGES</li></Link>
                     <Link className="d-block text-white" to={"/payment"}> <li className='py-2'>PAYMENT</li></Link>
                     <Link className="d-block text-white" to={"/contact"}><li className='py-2'>CONTACT US</li></Link>
                   </ul>
               </div>
               <div className="col-md-12 col-lg-3">
                   <h5 className="text-danger">TOUR PACKAGES</h5>
                   <ul>
                     <Link className="d-block text-white" to={"/one-day-package"}><li className='py-2'>Oneday Tour Package</li></Link>
                      <Link className="d-block text-white" to={"/one-day-package"}><li className='py-2'>Holiday Tour Package</li></Link>
                       <Link className="d-block text-white" to={"/one-day-package"}> <li className='py-2'>Honeymoon Tour Package</li></Link>
                      <Link className="d-block text-white" to={"/one-day-package"}><li className='py-2'>Pilgrimages Tour Package</li></Link>
                   </ul>
               </div>
               <div className="col-md-12 col-lg-3">
                    <h5 className="text-danger">CONTACT INFO</h5>
                    <ul>
                        <li className='py-2'>Everyday is a new day for us and we work really hard to satisfy our 
                            customers everywhere.</li>
                        <li className='py-2'>
                           <FaTelegramPlane />
                           Vaigai Tours and Travels
                        </li>
                        <li className='py-2'>
                            Vaigai Relax, madurai road, Begambur, dindigul 624002
                        </li>
                        <li>
                          <FaPhone />
                          +91 8489946488 <br /> +91 94882 44111
                        </li>
                        <li className='py-2'>
                          <MdOutlineMail /> sathamtaj1111@gmail.com
                        </li>
                        <li className='py-2'>
                             <IoIosTimer /> 24 x 7 Services
                        </li>
                    </ul>
               </div>
         </div>
    </div>
  )
}

export default Footer
