import React from 'react'
// images
import styleimg from "../assets/releax/about.png";
import img1 from "../assets/releax/service-1.jpg"
import img2 from "../assets/releax/service-2.jpg"
import img3 from "../assets/releax/service-3.jpg"
import img4 from "../assets/releax/service-4.jpg"
// icons
import { FaTruck } from "react-icons/fa";
import { RiCupFill } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
// img
import image1 from "../assets/releax/img/img-1.jpg";
import image2 from "../assets/releax/img/img-2.jpg";
import image3 from "../assets/releax/img/img-3.png";
import image4 from "../assets/releax/img/img-4.jpg";
import image5 from "../assets/releax/img/img-5.png";
import image6 from "../assets/releax/img/img-6.png";
import image7 from "../assets/releax/img/img-7.png";
import image8 from "../assets/releax/img/img-8.jpg";
import image9 from "../assets/releax/img/img-9.jpg";
import image10 from "../assets/releax/img/img-10.jpg";
import image11 from "../assets/releax/img/img-11.jpg";
import image12 from "../assets/releax/img/img-12.jpeg";
import image13 from "../assets/releax/img/img-13.png";
import image14 from "../assets/releax/img/img-14.jpg";
import image15 from "../assets/releax/img/img-15.png";
import image16 from "../assets/releax/img/img-16.jpg";
import image17 from "../assets/releax/img/img-17.png";
const Releax = () => {

      const imagesSet = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13
        ,image14,image15,image16,image17
      ]

  return (
    <div className='releax-releax'>
        <div className="releax-banner d-flex justify-content-center align-items-center">
              <div>
                   <h6 className='text-warning'>We Have Been Serving</h6>
                   <h2 className='text-white'><span className='text-danger'>VAIGAI RELEAX</span> COFFEE</h2>
                   <h5 className='text-white'>*SINCE 2010*</h5>
              </div>
        </div>
        <div className="releax-about">
                <div className="container p-5">
                      <h1 className='py-3'>Serving Since 2010</h1>
                       <div className="row">
                      <div className="col-md-12 col-lg-4 py-1">
                            <h2>Our Story</h2>
                            <h6>Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h6>
                            <p className='opacity-50'>Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
                                 nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. 
                                 Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor 
                                 diam sed ipsum et eirmod</p>
                      </div>
                      <div className="col-md-12 col-lg-4">
                          <img src={styleimg} className='w-100' alt="" />
                      </div>
                      <div className="col-md-12 col-lg-4">
                           <h2>Our Vision</h2>
                           <p className='opacity-50'>Invidunt lorem justo sanctus clita. Erat lorem labore ea, 
                            justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. 
                            Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                      </div>

                       </div>
                </div>
        </div>
        {/* Our Services */}
        <div className="our-service-releax">
               <h5 className='text-center text-warning'>Our Services</h5>
               <h2 className='text-center'>Fresh & Organic Beans</h2>
               <div className="container p-3">
                   <div className="row p-2">
                       <div className="col-md-12 col-lg-6">
                            <div className="row">
                                 <div className="col-md-12 col-lg-5">
                                       <img src={img1} className='w-100' alt="" />
                                 </div>
                                 <div className="col-md-12 col-lg-7">
                                     <h5><FaTruck className='text-danger' /> Fastest Door Delivery</h5>
                                     <p>Sit lorem ipsum et diam elitr est dolor sed duo. 
                                        Guberg sea et et lorem dolor sed est sit invidunt, dolore 
                                        tempor diam ipsum takima erat tempor</p>
                                 </div>
                            </div>
                       </div>
                       <div className="col-md-12 col-lg-6">
                            <div className="row">
                                 <div className="col-md-12 col-lg-5">
                                       <img src={img2} className='w-100' alt="" />
                                 </div>
                                 <div className="col-md-12 col-lg-7">
                                     <h5><RiCupFill className='text-danger' /> Fresh Coffee Beans</h5>
                                     <p>Sit lorem ipsum et diam elitr est dolor sed duo. 
                                        Guberg sea et et lorem dolor sed est sit invidunt, dolore 
                                        tempor diam ipsum takima erat tempor</p>
                                 </div>
                            </div>
                       </div>
                   </div>
                   <div className="row p-2 mt-5">
                       <div className="col-md-12 col-lg-6">
                            <div className="row">
                                 <div className="col-md-12 col-lg-5">
                                       <img src={img3} className='w-100' alt="" />
                                 </div>
                                 <div className="col-md-12 col-lg-7">
                                     <h5><FaAward  className='text-danger'/> Best Quality Coffee</h5>
                                     <p>Sit lorem ipsum et diam elitr est dolor sed duo. 
                                        Guberg sea et et lorem dolor sed est sit invidunt, dolore 
                                        tempor diam ipsum takima erat tempor</p>
                                 </div>
                            </div>
                       </div>
                       <div className="col-md-12 col-lg-6">
                            <div className="row">
                                 <div className="col-md-12 col-lg-5">
                                       <img src={img4} className='w-100' alt="" />
                                 </div>
                                 <div className="col-md-12 col-lg-7">
                                     <h5><FaTable className='text-danger' /> Online Table Booking</h5>
                                     <p>Sit lorem ipsum et diam elitr est dolor sed duo. 
                                        Guberg sea et et lorem dolor sed est sit invidunt, dolore 
                                        tempor diam ipsum takima erat tempor</p>
                                 </div>
                            </div>
                       </div>
                   </div>   
               </div>
        </div>
        {/* offer */}
        <div className="relea-offer  d-flex justify-content-center align-items-center my-2">
              <div>
               <h1 className='text-danger'>50% OFF</h1>
               <h4 className='text-white'>Sunday Special Offer</h4>
               <p className='text-white'>Only for Sunday from 1st Jan to 30th Jan 2045</p>
              </div>

        </div>
        {/* images */}
        <div className="vaigai-images container py-4">
               <h3 className='text-center py-3'><span className='text-danger'>VAIGAI</span> TEA KADAI</h3>
               <div className="d-flex justify-content-evenly flex-wrap">
                     {
                        imagesSet.map((items,index)=>(
            <div className="vaigai-releax-tea m-4" key={index}>
                   <div className="image">
                       <img src={items} className='m-3 border' height={210} alt="" />
                   </div>
                   <div className="releax-content p-2 d-flex justify-content-center align-items-center">
                        <p className='text-white h5'><span className='text-danger'>Order </span> Now</p>
                   </div>
            </div>

                        ))
                     }
               </div>
        </div>

        {/* google review */}
        
    </div>
  )
}

export default Releax
