import {useEffect} from 'react'
import about1 from "../assets/about/aboutus.png"
import about2 from "../assets/about/mahindra_vento.png"
import about3 from "../assets/about/cars.png"
//icons
import { FaFolderOpen } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaTruckFront } from "react-icons/fa6";
import { BiMale } from "react-icons/bi";
// images
import releax1 from "../assets/releax/img/img-13.png"
import construction1 from "../assets/construction/construction-1.jpg";
import construction2 from "../assets/construction/construction-2.jpg";
import tea from "../assets/construction/tea-tn.jpg";
import biritani from "../assets/construction/chicken1.png";
import restaurant2 from "../assets/construction/restaurant-2.jpg";
  //supermarket
import supermarket1 from "../assets/construction/supermarket-1.jpg";
import supermarket2 from "../assets/construction/supermarket-2.jpg";


const About = () => {


    useEffect(()=>{

        function getRefresh(){
          window.scrollTo(0, 0);
      }
      getRefresh()
    },[])

  return (
    <div>
        {/* vaigai TOURS TRAVELS */}
        <div className="vaigai-about-section ">
              
              <div className="about-banner d-flex justify-content-center align-items-center">
                      <div className=' text-white'>
                           <h2 className='text-center'>About of</h2>
                           <h3>VAIGAI GROUPS</h3>
                      </div>
              </div>

          
                <div className="our-bussiness-contact p-2">
                <h2 className='text-center py-4 opacity-75 text-danger special-font'>VAIGAI ABOUT</h2>
              <div className=" container ">
                   <h4 className='text-center letter-space text-warning'>___OUR BUSSINESS___</h4>
                    <div className="releax py-3">
                      <h2 className='roboto fw-bold text-danger'>Relax</h2>
                    <div className="row">
                         <div className="col-md-12 col-lg-5">
                            <img src={tea} className='w-100 p-3' alt="" />
                         </div>
                         <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center p-2">
                              <div>
                            <h5 className='opacity-50'>About Us Section</h5>
                            <p className='letter-space opacity-50'>&quot;At <strong>Vaigai Relax </strong>Since 2000, Vaigai Relax has been a cherished spot in the heart of Dindigul district, Begambur. Known for our iconic boiler tea and coffee, we proudly serve our customers 24/7. With two convenient branches—one at Arasamaram Street and the other near the Madurai Bus Stop in Begambur —we are always within your reach. <br></br>Our menu offers a variety of snacks, including crispy vadai, flavorful masal vadai, bonda, pachi, and samosas. In the evenings, our special chicken samosa, egg samosa, and freshly prepared vadai are particularly popular.<br></br> Whether you’re stopping by for a quick refreshment or a relaxing break, Vaigai Relax promises to make every visit memorable with our delicious offerings and warm hospitality.<br></br> &quot;</p>

                              </div>
                         </div>
                   </div>
                   <div  data-aos="flip-right" className="row">
                         <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center p-2">
                              <div>
                                 <h5 className='text-danger'>Product Descriptions</h5><br></br>
                                <ul type="circle">
                                   <li><strong>Boiler Tea</strong>: &quot;Enjoy a refreshing and flavorful boiled tea, made with premium leaves for the perfect blend of aroma and taste.&quot;</li><br></br>
                                   <li><strong>Coffee</strong>: &quot;Savor our rich and aromatic coffee, crafted for coffee lovers who appreciate a bold and robust flavor.&quot;</li> <br></br>
                                   <li><strong>Snacks</strong>: &quot;Delight in a variety of hot, savory snacks, including Samosas, Bajji, Masala Vadai, Bonda, available in both sweet and spicy options. Perfect for any time of day!&quot;</li> <br></br>
                                   <li><strong>Biscuits, Buns, & Juices</strong>: &quot;Enjoy our freshly baked biscuits and buns, paired with refreshing juices. Always fresh and available 24/7 for your convenience.&quot;</li><br></br>

                                </ul>
                            </div>
                         </div>
                         <div className="col-md-12 col-lg-5">
                            <img src={releax1} className='w-100 p-3' alt="" />
                         </div>
                   </div>
                    </div>
                    {/* construction */}
                    <div className="construction py-3"  data-aos="flip-right">
                      <h2 className='text-uppercase text-color'>construction</h2>
                    <div className="row">
                         <div className="col-md-12 col-lg-5">
                            <img src={construction1} className='w-100 p-3' alt="" />
                         </div>
                         <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center p-2">
                              <div>
                                 <h5 className='text-danger text-uppercase'>construction</h5>
                             {/* <p className='letter-space opacity-50'>"வைகைக்கு வரவேற்கிறோம் - எதிர்காலத்தை உருவாக்குதல், ஒரு நேரத்தில் ஒரு செங்கல். கருத்து முதல் நிறைவு வரை, உங்கள் தேவைகளுக்கு ஏற்ப புதுமையான, உயர்தர கட்டுமான தீர்வுகளை நாங்கள் வழங்குகிறோம்"</p> */}
                            <h5>About Us Section</h5>
                            <p className='letter-space opacity-50'>&quot;At <strong>vaigai construction </strong>We build multi-family and affordable housing communities, industrial facilities, public and private healthcare facilities, fitness centers and office buildings. We improve the supply chain management process, increase operational efficiencies and build environments that foster creativity. Our commitment to sustainable construction helps improve the communities in which we build. The structures we create provide our clients with more than just buildings – we deliver environments that help them achieve their goals. <strong>We are built on a foundation of quality workmanship and responsive service.</strong>&quot;</p>
                              </div>
                         </div>
                   </div>
                   <div className="row">
                         <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center p-2">
                              <div>
                                 <h5 className='text-danger'>Service Descriptions</h5><br></br>
                                <ul type="circle" className='opacity-50'>
                                   <li><strong>Residential Construction</strong>: &quot;Turn your dream home into reality. We build durable, beautiful, and functional homes designed to suit your lifestyle.&quot;</li><br></br>
                                   <li><strong>Commercial Construction</strong>: &quot;We deliver modern, efficient commercial spaces, from offices to retail outlets, built to drive success.&quot;</li><br></br>
                                  <li><strong>Renovation Services</strong>: &quot;Transform your existing property with our comprehensive renovation services. Quality upgrades tailored to your vision.&quot;</li><br></br>
                                  <li><strong>Infrastructure Projects</strong>: &quot;Supporting communities with top-tier infrastructure — roads, bridges, and public facilities built to last.&quot;</li><br></br>
                                </ul>
                            </div>
                         </div>
                         <div className="col-md-12 col-lg-5">
                            <img src={construction2} className='w-100 p-3' alt="" />
                         </div>
                   </div>
                    </div>
   
                             <p className='letter-space opacity-50'>&quot;Welcome to <strong>Vaigai Hotel</strong> — your home away from home! Experience warm hospitality, luxurious comfort, and authentic flavors in the heart of Dindigul. Whether you’re here for business or leisure, we make every stay unforgettable.&quot;</p>
                            <h5>About Us Section</h5>
                    {/* restaurant */}
                     <div  data-aos="flip-right" className="restaurant py-3">
                      <h2 className='text-uppercase'>restaurant</h2>
                     <div className="row">
                         <div className="col-md-12 col-lg-5">
                            <img src={biritani} className='w-100 p-3 rotate' alt="" />
                         </div>
                         <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center p-2">
                              <div>
                                 <h5 className='text-danger text-uppercase'>Hotel</h5>
                            <h5>About Us Section</h5>
                            <p className='letter-space opacity-50'>&quot;Vaigai Hotel is one of the most renowned establishments in Dindigul. While the world knows Dindigul for its famous Seraga Samba Biryani, Vaigai Biryani has carved its own legacy, becoming a favorite across the district. We are proud to rank among the  Top 5 bestsellers on Zomato and Swiggy in the Dindigul district. Whether it’s a casual meal or a grand celebration, we specialize in bulk orders and function catering, delivering the authentic taste of Dindigul straight to your plate. <strong>Taste the tradition, only at Vaigai Hotel!</strong>&quot;</p>
                              </div>
                         </div>
                   </div>
                   <div className="row">
                         <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center p-2">
                              <div>
                                 <h5 className='text-danger'>Menu Highlights</h5><br></br>
                                <ul type="circle" className='opacity-50'>
                                   <li><strong>Dindigul Special Seraga Samba Biryani</strong>: &quot;Relish the authentic flavor of Seraga Samba Biryani, a specialty at Vaigai Hotel. Made with aromatic Seeraga Samba rice, tender chicken, or succulent mutton, this biryani is cooked to perfection. Available daily from 11 AM to 11 PM, it’s a feast you don’t want to miss!&quot;</li><br></br>
                                   <li><strong>Curry Dosa</strong>: &quot;A crispy dosa topped with a flavorful curry that adds a delightful twist to the classic dish. Perfect for those craving a spicy and satisfying meal with a South Indian flair.&quot;</li><br></br>
                                  <li><strong>Parotta with Chicken Gravy</strong>: &quot;Indulge in soft, flaky parottas paired with rich, aromatic chicken gravy. A timeless combination that’s a favorite among diners looking for comfort food with a punch of flavor..&quot;</li><br></br>
                                </ul>
                            </div>
                         </div>
                         <div className="col-md-12 col-lg-5">
                            <img src={restaurant2} className='w-100 p-3' alt="" />
                         </div>
                   </div>
                     </div>
                     {/* super market */}
                     <div  data-aos="flip-right" className="supermarket py-3">
                       <h2>SUPER MARKET </h2>
                     <div className="row">
                         <div className="col-md-12 col-lg-5">
                            <img src={supermarket1} className='w-100 p-3' alt="" />
                         </div>
                         <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center p-2">
                              <div>
                                 <h5 className='text-danger text-uppercase'>supermarket</h5>
                             <p className='letter-space opacity-50'>&quot;Welcome to Vaigai Supermarket — your one-stop destination for quality, variety, and value! Located on Madurai Road, Begambur, Dindigul, we bring you the freshest produce, everyday essentials, and special deals under one roof.&quot;</p>
                            <h5>About Us Section</h5>
                            <p className='letter-space opacity-50'>&quot;At Vaigai Supermarket, we are committed to making your shopping experience convenient and enjoyable. Our store offers a wide range of products, from fresh fruits and vegetables to groceries, household items, and personal care products. With top brands and affordable prices, we ensure that every visit meets your needs.onveniently located near schools and colleges, we are a trusted choice for students seeking quality stationery at affordable prices. Whether it’s groceries for your home or supplies for your studies, Vaigai Supermarket has got you covered!&quot;</p>
                              </div>
                         </div>
                   </div>
                   <div className="row">
                         <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center p-2">
                              <div>
                                 <h5 className='text-danger'>Product Categories Highlight</h5><br></br>
                                <ul type="circle" className='opacity-50'>
                                   <li><strong>Fresh Produce</strong>:&quot;Locally sourced fruits and vegetables — fresh and full of flavor, delivered every day to ensure the best quality for you.&quot;</li><br></br>
                                   <li><strong>Groceries</strong>: &quot;Explore a wide selection of rice, pulses, spices, and other pantry essentials to stock up your kitchen with the finest ingredients.&quot;</li> <br></br>
                                  <li><strong>Household Essentials</strong>:  &quot;From cleaning supplies to kitchenware, we provide everything you need to keep your home running smoothly and efficiently.&quot;</li><br></br>
                                  <li><strong>Personal Care</strong>: &quot;Discover top-quality health and beauty products tailored for the whole family, ensuring care and comfort in every use.&quot;</li><br></br>
                                </ul>
                            </div>
                         </div>
                         <div className="col-md-12 col-lg-5">
                            <img src={supermarket2} className='w-100 p-3' alt="" />
                         </div>
                   </div>
                     </div>
              </div>
                </div>

             {/* Best Travels in Dindigul for details */}
                <div className="container my-5" data-aos="flip-up">
                     <div className="row">
                          <div className="col-md-12 col-lg-6 p-3">
                               <h4>Best Travels in Dindigul</h4>
                               <p className='opacity-50'>When do you want to travel across the world on the road and 
                                got confused about planning how to go? We are right available for 
                                you to provide you with the best travel experience at an affordable 
                                price. It does not stop just with this we also provide many other rentals and services.</p>
                                <h2 className='py-2'>“Customer’s Safety is our Priority”</h2>
                                <p>Your safety and satisfaction are at the heart of everything we do. Whether you&apos;re traveling near or far, we are committed to providing the best travel experience every step of the way. With our reliable and efficient services, we aim to make your journey in and around Dindigul safe, comfortable, and memorable.</p>

                          </div>
                          <div className="col-md-12 col-lg-6">
                               <img src={about1} className='w-100 p-3' alt="" />
                             </div>
                     </div>
                </div>
                <div data-aos="flip-down" className="container">
                     <div className="row">
                         <div className="col-md-12 col-lg-6 p-3">
                             <img src={about2} alt="" />
                         </div>
                         <div className="col-md-12 col-lg-6 p-3">
                              <h5 className='text-danger '>Car Rental in Dindigul</h5>
                              <p>Vaigai Tours and Travels provides comprehensive travel solutions, supported by 24-hour backup service through our dedicated customer care desk. Since its inception, Vaigai Tours and Travels has established itself as a leading and innovative car rental service provider in and around Dindigul.
We take pride in offering a seamless travel experience with our well-trained, courteous, and customer-friendly drivers, ensuring every journey is safe, smooth, and enjoyable.
Choose from our wide selection of Economic, Premium, and Luxury vehicles to suit your travel needs. Whether it&apos;s a family vacation or a business trip, we are available 24/7 to make your journey comfortable and memorable. </p>
<strong>VAIGAI TOURS AND TRAVELS – HERE TO SERVE YOU ANYTIME, ANYWHERE!!</strong>
                         </div>
                     </div>
                </div>
                 <div data-aos="fade-down-left" className="about-us container">
                      <h2 className='text-center'>We are proud of our business. <br /> <span className='text-danger'>Rent Car</span> Now!</h2>
                     
                      <div className="row d-flex justify-content-center">
                          <div className="col-md-10">
                               <img src={about3} className='w-100' alt="" />
                          </div>
                      </div>
                 </div>

              {/* about people */}
              <div data-aos="fade-down-left" className="about-people-section container-fluid">
                  <div className="row">
                  <div className="col-md-12 col-lg-3 p-1 about-people-show py-2 mt-3 ">
                      <div className='d-flex parent p-2'>
                      <div className="image">
                        <FaFolderOpen className='h3' />
                      </div>
                      <div className="content d-flex">
                          <span className='h3 ms-3'>10+</span>
                          <p className='ms-3'>States We Cover </p>
                      </div>

                      </div>
                  </div>
                  <div className="col-md-12 col-lg-3 p-1 about-people-show py-2 mt-3 ">
                      <div className='d-flex parent p-2'>
                      <div className="image">
                        <IoIosPeople className='h3' />
                      </div>
                      <div className="content d-flex">
                          <span className='h3 ms-3'>200+</span>
                          <p className='ms-3'>Cities Visited </p>
                      </div>

                      </div>
                  </div>
                  <div className="col-md-12 col-lg-3 p-1 about-people-show py-2 mt-3 ">
                      <div className='d-flex parent p-2'>
                      <div className="image">
                        <FaTruckFront className='h3' />
                      </div>
                      <div className="content d-flex">
                          <span className='h3 ms-3'>10+</span>
                          <p className='ms-3'>Rental Vehicles  </p>
                      </div>

                      </div>
                  </div>
                  <div className="col-md-12 col-lg-3 p-1 about-people-show py-2 mt-3 ">
                      <div className='d-flex parent p-2'>
                      <div className="image">
                        <BiMale className='h3' />
                      </div>
                      <div className="content d-flex">
                          <span className='h3 ms-3'>10000+</span>
                          <p className='ms-3'>Happy Clients  </p>
                      </div>

                      </div>
                  </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default About
