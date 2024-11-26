import {Link} from "react-router-dom"
// images
import img from "../assets/contact-us.png"
// icons
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { useEffect } from "react";
const Contact = () => {

      useEffect(()=>{
            function getRefresh(){
                  window.scrollTo(0, 0);
              }
              getRefresh()
      },[])
  return (
    <div className='contact-section-us container-fluid'> 
     
         <div className="contact-banner d-flex justify-content-center align-items-center">
              <div className="banner-content">
                    <h3 className="text-white">Contatc</h3>
                    <div className="links text-white">
                         <Link className="text-white" to={"/vaigai"}>Home</Link> / 
                          <Link className="text-white" to={"/contact"}>Contact</Link>
                    </div>
              </div>
         </div>
       
       <div className="contact-us my-5 py-4">
            <h2 className="text-center"><span className="px-4 py-2 bg-danger rounded text-white">Contact Us</span></h2>
            <h1 className="text-center">
                  <span>
                     Ready to Get our best Services!
                  </span><br />
                  <span>Feel free to contact with us</span>
            </h1>
             <div className="container">
            <div className="row">
                   <div className="col-md-12 col-lg-4 mt-3">
                        <div className="contact-icons-box">
                         <div className="icons p-5 d-flex justify-content-center align-items-center">
                               <FaTelegramPlane className="h1 text-danger" />
                         </div>
                          <div className="content p-3">
                           <h4 className="text-center">Office Location</h4>
                           <p className="text-center">Mylapore, Dindigul</p>
                          </div>
                        </div>
                   </div>
                   <div className="col-md-12 col-lg-4 mt-3">
                        <div className="contact-icons-box">
                         <div className="icons p-5 d-flex justify-content-center align-items-center">
                               <FaPhone className="h1 text-danger" />
                         </div>
                          <div className="content p-3">
                           <h4 className="text-center">Email Address</h4>
                           <p className="text-center">prompt_travels@yahoo.co.in</p>
                          </div>
                        </div>
                   </div>
                   <div className="col-md-12 col-lg-4 mt-3">
                        <div className="contact-icons-box">
                         <div className="icons p-5 d-flex justify-content-center align-items-center">
                               < MdOutlineMail className="h1 text-danger" />
                         </div>
                          <div className="content p-3">
                           <h4 className="text-center">Hotline</h4>
                           <p className="text-center">+91 98418 02288</p>     
                          </div>
                        </div>
                   </div>
            </div>

             </div>
            <div className="container-fluid py-4 my-4">
                   <div className="row">
                        <div className="col-md-12 col-lg-6 p-3">
                              <span className="px-3 py-2 bg-danger text-white">Contact With Us</span>
                              <h2 className="py-3">Have questions? Feel free to write us</h2> 
                              <p className="py-3">Man braid hell of edison bulb four brunch subway tile authentic, 
                              chillwave put a bird on church-key ramps heirloom. Set perspiciatis unde 
                              omnis estenatus voluptatem aperiae.</p>

                              <div className="social-media">
                                   <CiFacebook className="h3 p-1 bg-danger text-white ms-2" />
                                   <CiTwitter className="h3 p-1 bg-danger text-white ms-2" />
                                   <FaGooglePlusG className="h3 p-1 bg-danger text-white ms-2" />
                                   <FaPinterestP className="h3 p-1 bg-danger text-white ms-2" />
                                   <TfiYoutube className="h3 p-1 bg-danger text-white ms-2" />
                              </div>
                        </div>
                        <div className="col-md-12 col-lg-6 p-3 border rounded">
                              <div className="row">
                                    <div className="col-md-12 col-lg-6 p-3">
                                          <input type="text"
                                          placeholder="Your Name"
                                            className="form-control"
                                           />
                                    </div>
                                    <div className="col-md-12 col-lg-6 p-3">
                                          <input type="text"
                                          placeholder="Email Address"
                                            className="form-control"
                                           />
                                    </div>
                              </div>
                              <div className="row">
                                    <div className="col-md-12 col-lg-6 p-3">
                                          <input type="number"
                                          placeholder="Number"
                                            className="form-control"
                                           />
                                    </div>
                                    <div className="col-md-12 col-lg-6 p-3">
                                         <select name="" id="" className="form-control">
                                             <option value="">--please choose an option</option>
                                             <option value="">south india</option>
                                             <option value="">north india</option>
                                             <option value="">Weekend Tour</option>
                                             <option value="">Student Tour</option>
                                             <option value="">Corporate Packages</option>
                                             <option value="">Cultural Tour</option>
                                             <option value="">Pilgrimages Tour</option>
                                         </select>
                                    </div>
                              </div>
                              <div className="row">
                                    <div className="col-md-12">
                                          <button className="btn btn-primary">Submit</button>
                                    </div>
                              </div>
                        </div>
                   </div>
            </div> 
            {/* google map */}
            <div className="container-fluid google-map">
                  <div className="contact-fixed rounded container d-flex justify-content-between align-items-center flex-wrap p-3">
                   <div className="left-side d-flex flex-wrap">
                  <div className="book-with">
                         <img src={img} height={80} alt="" />
                  </div>
                  <div className="content ms-2">
                         <p>Travel Made Easy</p>
                         <h5>Book with Prompt Travels for a seamless experience</h5>
                  </div>    
                  </div>
                   <button className="btn btn-primary">Book Now</button>

                   </div>
                  <div className="map-map p-4">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.2903348150335!2d77.96320087140352!3d10.354002991674527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ab5cd3caf8f9%3A0xa92ac7765b4d32fb!2sVAIGAI%20TOURS%20AND%20TRAVELS!5e1!3m2!1sen!2sin!4v1732604705252!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="true" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div> 
            </div>
       </div>
    </div>
  )
}

export default Contact
