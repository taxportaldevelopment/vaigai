import React from 'react'
// icons
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
const Contact = () => {
  return (
    <div className='contact-section-us container-fluid'> 
         <div className="row">
               <div className="col-md-12 col-lg-8 p-2">
                    <div className="office-address-section py-3">
                          <h6 className='text-danger'>Head Office</h6>
                          <p>Everyday is a new day for us and we work really hard to satisfy our customers everywhere.</p>
                          <div className="office-address d-flex my-3">
                              <div className="icons">
                                    <FaTelegramPlane />
                              </div>
                              <div className='ms-2 content'>
                                  <h6>Madurai Sai Tours & Travels</h6>
                                  <p>No.16, JP Complex, Puttuthoppu Main Road, Arappalayam Cross Road, Madurai, Tamilnadu – 625016</p>
                              </div>
                          </div>
                          <div className="office-address d-flex my-3">
                              <div className="icons">
                                  <FaPhone />
                              </div>
                              <div className='ms-2 content'>
                                    <p className='opacity-50'>+91 385743658638 <br />+91 93759739983</p>
                              </div>
                          </div>
                          <div className="office-address d-flex my-3">
                              <div className="icons">
                                 <MdOutlineMail />
                              </div>
                              <div className='ms-2 content'>
                                    <p className='opacity-50'>info@maduraisaitourstravels.com</p>
                              </div>
                          </div>
                    </div>
                    <div className="company-location border-top p-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14206.753014713158!2d77.95915814001259!3d10.362400144045287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00aa57a54881e3%3A0x765a14068982e6e7!2sDindigul%2C%20Tamil%20Nadu%20624001!5e1!3m2!1sen!2sin!4v1732525532311!5m2!1sen!2sin" className='w-100 p-2' height="450" style={{border:""}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
               </div>
               <div className="col-md-12 col-lg-4 p-4">
                     <form >
                         <h6 className='text-danger'>Quick Enquiry</h6>
                         <div className="form-group">
                               <input type="text" 
                                 placeholder='Your Name Here'
                                 className='form-control'
                               />
                         </div>
                         <div className="form-group py-3">
                               <input type="number" 
                                 placeholder='Phone'
                                 className='form-control'
                               />
                         </div>
                         <div className="form-group py-3">
                               <input type="email" 
                                 placeholder='Email Id'
                                 className='form-control'
                               />
                         </div>
                         <div className="form-group py-3">
                               <input type="text" 
                                 placeholder='No Of Adult'
                                 className='form-control'
                               />
                         </div>
                         <div className="form-group py-3">
                               <input type="text" 
                                 placeholder='No Of Children'
                                 className='form-control'
                               />
                         </div>
                         <div className="row">
                             <div className="col-md-12 col-lg-6">
                                <div className="form-group py-3">
                                  <input type="text" 
                                    placeholder='Pickup place'
                                   className='form-control'
                                  />
                               </div>
                             </div>
                             <div className="col-md-12 col-lg-6">
                                <div className="form-group py-3">
                                  <input type="text" 
                                    placeholder='Drop Place'
                                   className='form-control'
                                  />    
                               </div>
                             </div>
                         </div>
                         <div className="form-group py-3">
                               <input type="date" 
                                 placeholder='date'
                                 className='form-control'
                               />
                         </div>
                         <div className="form-group py-3">
                             <textarea name="" className='form-control' rows={6} placeholder='Message....' id=""></textarea>
                         </div>
                          <div className="form-group">
                                <button className='btn btn-danger'>SEND MESSAGE</button>
                          </div>
                     </form>
               </div>
         </div>
    </div>
  )
}

export default Contact
