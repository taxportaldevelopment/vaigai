
// icons
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
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
        {/* <div className="right-site py-4">
          <CiFacebook className="px-1 h4 bg-primary text-white ms-1 rounded" /> 
          <CiTwitter className="px-1 h4 bg-primary text-white ms-1 rounded" />
          <FaGooglePlusG className="px-1 h4 bg-primary text-white ms-1 rounded" />
          <FaPinterestP className="px-1 h4 bg-primary text-white ms-1 rounded" />
          <TfiYoutube className="px-1 h4 bg-primary text-white ms-1 rounded" />
        </div>     */}
           <button className='btn btn-danger'>VISIT OUR TARIFF</button>
               </div>
               <div className="col-md-12 col-lg-3">
                   <h5 className="text-danger">Quick Links</h5>
                   <ul>
                      <li className='py-2'>Home</li>
                      <li className='py-2'>ABOUT US</li>
                      <li className='py-2'>TOUR PACKAGES</li>
                      <li className='py-2'>PAYMENT</li>
                      <li className='py-2'>CONTACT US</li>
                   </ul>
               </div>
               <div className="col-md-12 col-lg-3">
                   <h5 className="text-danger">TOUR PACKAGES</h5>
                   <ul>
                      <li className='py-2'>Oneday Tour Package</li>
                      <li className='py-2'>Holiday Tour Package</li>
                      <li className='py-2'>Honeymoon Tour Package</li>
                      <li className='py-2'>Pilgrimages Tour Package</li>
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
                          <MdOutlineMail /> sathamtaj1111@gmail.com <br />
                          maduraisaitours@gmail.com
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
