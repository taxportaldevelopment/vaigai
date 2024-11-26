import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// gallert
import img1 from "../assets/gallery/athirapalli-falls.png";
import img2 from "../assets/gallery/hogenakal falls.png";
import img3 from "../assets/gallery/kodaikanal falls.png";
import img4 from "../assets/gallery/kutralam falls.png";
import img5 from "../assets/gallery/munnar falls.png";
import img6 from "../assets/gallery/Ooty-pykara-falls.png";
import img7 from "../assets/gallery/Thirparapu-falls.png";
import img8 from "../assets/gallery/thirumoorthy-falls.png";
import imgUs from "../assets/images/corporate.jpg";
// our customer
import customer1 from "../assets/our-customer/BHUTAN.jpg";
import customer2 from "../assets/our-customer/DO-DHAM-YATRA.jpg";
import customer3 from "../assets/our-customer/himalaya-1.jpg";
import customer4 from "../assets/our-customer/KASHMIR.jpg";
import customer5 from "../assets/our-customer/LADAKH.jpg";
import customer6 from "../assets/our-customer/NEPAL.jpg";
import customer7 from "../assets/our-customer/THE-BEST-OF-NORTH-INDIA.jpg";
import customer8 from "../assets/our-customer/THE-BEST-OF-SOUTH-INDIA.jpg";

// sliders
import slider1 from "../assets/carousel/slider-1.jpg";
import slider2 from "../assets/carousel/slider-2.jpg";
import slider3 from "../assets/carousel/slider-3.jpg";
// icons
import { IoCarSport } from "react-icons/io5";
import { useEffect } from "react";
const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

   useEffect(()=>{
    function getRefresh(){
      window.scrollTo(0, 0);
  }
  getRefresh()
   },[])

  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Greeting to Sai Tours and Travels */}
      <div className="container my-4 animation-show">
        <h2 className="text-center py-3 text-danger">
          Greeting to Vaigai Tours and Travels
        </h2>
        <p>
          Sai tours and travels is the best tours and travels in vaigai and
          renowned travel agency in vaigai. We cherish our customers with
          quality service and you forever adore our service. We have been in
          this field for long years. So, we are serving the best tourism and
          travel agency with affordable packages. Moreover, we are the
          first-class tour operators and arrange all kinds of tours like
          educational, pilgrim, honeymoon, vacation trips, and corporate trips
          with premium packages.
        </p>
        <p>
          Sai tours and travels in vaigai have their own professional drivers,
          proficient guide, and outstanding executives. We also offer cab
          services in vaigai. We stand out among other agencies in a way that we
          provide quality customer service and make you feel like your home. Our
          proficient drivers are experts in routes, therefore, providing you a
          completely enjoyable and cozy ride.
        </p>
      </div>
      {/* we provide start */}
      <div className="animation-show we-provide-us-home border bg-danger w-50 m-auto p-2 m-2 rounded">
        <h5 className="text-white">
          WE PROVIDE SAFEST & AFFORDABLE TRAVEL SERVICES
        </h5>
        <p className="text-white">
          For more enquiries and details, please visit our tariff
        </p>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary">VISIT THE TARIFF</button>
        </div>
      </div>
         {/* Why Choose Us */}
         <div className="why-choose-us p-3 my-3 animation-show">
               <h2 className="text-center text-danger">Why Choose Us</h2>
               <p className="text-center text-danger px-3">At Lakshmi Travels, we understand that you have choices when it comes to your travel needs. <br />
                Here's why choosing us is the best decision for a seamless and enjoyable journey.</p>

              <div className="row">
                   <div className="col-md-12 col-lg-6">
                            <img src={imgUs} className="w-100 p-4" alt="" />
                   </div>
                   <div className="col-md-12 col-lg-6">
                         <div className="row d-flex justify-content-evenly">
                              <div className="col-md-12 why-choose-at-us col-lg-4 border p-3 shadow p-3 mb-5 bg-white rounded">
                                    <h6 className="text-danger">Best Travel Agent</h6>
                                    <p>Our commitment to excellence revolves around you, our valued customer. 
                                      From the moment you plan your journey to the safe arrival at your destination, 
                                      our customer-centric approach ensures your satisfaction is our top priority.</p>
                              </div>
                              <div className="col-md-12 col-lg-4 why-choose-at-us border p-3 shadow p-3 mb-5 bg-white rounded">
                                    <h6 className="text-danger">Best Price</h6>
                                    <p>Unlock unbeatable value with Lakshmi Travels – your gateway 
                                      to the best prices in travel. Our commitment to affordability 
                                      ensures that you get exceptional service without compromising your budget.</p>
                              </div>
                         </div>
                         {/* second */}
                         <div className="row d-flex justify-content-evenly">
                              <div className="col-md-12 why-choose-at-us col-lg-4 border p-3 shadow p-3 mb-5 bg-white rounded">
                                    <h6 className="text-danger">Trust &Safety</h6>
                                    <p>Unlock unbeatable value with Lakshmi Travels – your gateway to the best prices in travel.
                                       Our commitment to affordability ensures that you get exceptional service without 
                                       compromising your budget.</p>
                              </div>
                              <div className="col-md-12 col-lg-4 why-choose-at-us border p-3 shadow p-3 mb-5 bg-white rounded">
                                    <h6 className="text-danger">Amazing Tour</h6>
                                    <p>Embark on an unforgettable journey with Lakshmi Travels, 
                                      where every tour is crafted to be truly amazing. Discover 
                                      extraordinary destinations and create lasting memories with 
                                      our exceptional travel experiences.</p>
                              </div>
                         </div>
                         {/* three */}
                         <div className="row d-flex justify-content-evenly">
                              <div className="col-md-12 why-choose-at-us col-lg-4 border p-3 shadow p-3 mb-5 bg-white rounded">
                                    <h6 className="text-danger">Ticket Booking</h6>
                                    <p>Simplify your travel plans with Lakshmi Travels. Our hassle-free 
                                      ticket booking services ensure a seamless and efficient process, 
                                      providing you with the convenience you deserve for your journey ahead.</p>
                              </div>
                              <div className="col-md-12 col-lg-4 why-choose-at-us border p-3 shadow p-3 mb-5 bg-white rounded">
                                    <h6 className="text-danger">Hotel Booking</h6>
                                    <p>Experience comfort from check-in to check-out with Lakshmi Travels. 
                                      Our hotel booking services offer a seamless and tailored approach, 
                                      ensuring your stay is as enjoyable as the destination itself.</p>
                              </div>
                         </div>
                   </div>
              </div>  
         </div>

      {/* tour packages */}
      <div className="container-fluid tour-packages py-5 tour-package">
        <h2 className="text-center">OUR TOUR PACKAGES</h2>
        <div className="row">
          <div className="col-md-12 col-lg-3 p-1 mt-4">
            <div className="p-2 items-col d-flex justify-content-between align-items-center">
              <div className="image d-flex justify-content-center align-items-center">
                <IoCarSport className="h1" />
              </div>
              <div className="content">
                <h5>ONE DAY TOUR PACKAGE</h5>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-3 p-1 mt-4">
            <div className="p-2 items-col d-flex justify-content-between align-items-center">
              <div className="image d-flex justify-content-center align-items-center">
                <IoCarSport className="h1" />
              </div>
              <div className="content">
                <h5>HOLIDAY TOUR PACKAGE</h5>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-3 p-1 mt-4">
            <div className="p-2 items-col d-flex justify-content-between align-items-center">
              <div className="image d-flex justify-content-center align-items-center">
                <IoCarSport className="h1" />
              </div>
              <div className="content">
                <h5>HONEYMOON TOUR PACKGAE</h5>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-3 p-1 mt-4">
            <div className="p-2 items-col d-flex justify-content-between align-items-center">
              <div className="image d-flex justify-content-center align-items-center">
                <IoCarSport className="h1" />
              </div>
              <div className="content">
                <h5>PILGRIMAGE TOUR PACKAGE</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* gallery */}
      <div className="container-fluid gallery-section p-3">
        <h3 className="text-center my-3 text-white">GALLERY</h3>
        <div className="container my-4 py-4">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            transitionDuration={500}
            swipeable={false}
            draggable={false}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          >
            <div className="">
              <img src={img1} className="w-75 rounded" alt="Image 1" />{" "}
              <h5 className="mt-2 text-uppercase text-white">
                athirapalli-falls
              </h5>
            </div>
            <div className="">
              <img src={img2} className="w-75 rounded" alt="Image 2" />
              <h5 className="mt-2 text-uppercase text-white">
                hogenakal falls
              </h5>
            </div>
            <div className="">
              <img src={img3} className="w-75 rounded" alt="Image 3" />
              <h5 className="mt-2 text-uppercase text-white">
                kodaikanal falls
              </h5>
            </div>
            <div className="">
              <img src={img4} className="w-75 rounded" alt="Image 4" />
              <h5 className="mt-2 text-uppercase text-white">kutralam falls</h5>
            </div>
            <div className="">
              <img src={img5} className="w-75 rounded" alt="Image 1" />
              <h5 className="mt-2 text-uppercase text-white">munnar falls</h5>
            </div>
            <div className="">
              <img src={img6} className="w-75 rounded" alt="Image 2" />
              <h5 className="mt-2 text-uppercase text-white">
                Ooty-pykara-falls
              </h5>
            </div>
            <div className="">
              <img src={img7} className="w-75 rounded" alt="Image 3" />
              <h5 className="mt-2 text-uppercase text-white">
                Thirparapu-falls
              </h5>
            </div>
            <div className="">
              <img src={img8} className="w-75 rounded" alt="Image 4" />
              <h5 className="mt-2 text-uppercase text-white">
                thirumoorthy-falls
              </h5>
            </div>
          </Carousel>
        </div>
      </div>
      {/* OUR CUSTOMERS FAVOURITE DESTINATIONS */}
      <div className="our-customer my-3 py-4">
        <h3 className="text-center my-3">OUR CUSTOMERS FAVOURITE DESTINATIONS</h3>
        <div className="container my-4 py-4">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}

            transitionDuration={800}
            swipeable={true}
            draggable={true}
            containerClass="carousel-container"
           
          >
            <div className="d-flex justify-content-center">
            <div className="customer w-75  p-2">
                <div className="images  d-flex justify-content-center">
                 <img src={customer8} className="w-75 rounded" alt="Image 1" />
                </div>
              <h5 className="mt-2 text-uppercase ">
                   THE BEST OF SOUTH INDIA
              </h5>
              <p className="py-3">THE BEST OF SOUTH INDIA</p>
              <button className="btn btn-danger mt-3">View More</button>
              </div>
            </div>
            <div className=" d-flex justify-content-center ">
              <div className="customer w-75  p-2">
                <div className="images  d-flex justify-content-center">
                 <img src={customer1} className="w-75 rounded" alt="Image 1" />
                </div>
              <h5 className="mt-2 text-uppercase ">
                 BHUTAN
              </h5>
              <p className="py-3  ">Arrive Paro Airport on arrival meet by our representative with garlanding welcome...</p>
              <button className="btn btn-danger mt-3">View More</button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="customer w-75  p-2">
                <div className="images  d-flex justify-content-center">
                 <img src={customer2} className="w-75 rounded" alt="Image 1" />
                </div>
              <h5 className="mt-2 text-uppercase ">
                  DO DHAM YATRA 
              </h5>
              <p className="py-3">Arrival Delhi Airport / Railway Station, Meet & Assist by our representative. Later drive...</p>
              <button className="btn btn-danger mt-3">View More</button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="customer w-75 p-2">
                <div className="images  d-flex justify-content-center">
                 <img src={customer3} className="w-75 rounded" alt="Image 1" />
                </div>
              <h5 className="mt-2 text-uppercase ">
                 THE BEST OF EASTERN HIMALAYAS
              </h5>
              <p className="py-3">On arrival at NJP Railway Station / (IXB) Bagdogra Airport you will meet by our local...</p>
              <button className="btn btn-danger mt-3">View More</button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="customer w-75  p-2">
                <div className="images  d-flex justify-content-center">
                 <img src={customer4} className="w-75 rounded" alt="Image 1" />
                </div>
              <h5 className="mt-2 text-uppercase ">
                  KASHMIR
              </h5>
              <p className="py-3">On arrival at Srinagar, you will be met by our representative and transfer you to Houseboat...</p>
              <button className="btn btn-danger mt-3">View More</button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="customer w-75  p-2">
                <div className="images  d-flex justify-content-center">
                 <img src={customer5} className="w-75 rounded" alt="Image 1" />
                </div>
              <h5 className="mt-2 text-uppercase ">
                  LADAKH
              </h5>
              <p className="py-3">On arrival at Leh airport, you will be met by our representative and transfer you to Hotel...</p>
              <button className="btn btn-danger mt-3">View More</button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="customer w-75  p-2">
                <div className="images  d-flex justify-content-center">
                 <img src={customer6} className="w-75 rounded" alt="Image 1" />
                </div>
              <h5 className="mt-2 text-uppercase ">
                 NEPAL
              </h5>
              <p className="py-3">Nepal has seen many rulers and ruling dynasties. The earliest rulers were the Kirantis...</p>
              <button className="btn btn-danger mt-3">View More</button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="customer w-75  p-2">
                <div className="images  d-flex justify-content-center">
                 <img src={customer7} className="w-75 rounded" alt="Image 1" />
                </div>
              <h5 className="mt-2 text-uppercase ">
                  THE BEST OF NORTH INDIA
              </h5>
              <p className="py-3">Meet by our  representative on arrival, welcome with garlanding and transfer to the hotel...</p>
              <button className="btn btn-danger mt-3">View More</button>
              </div>
            </div>

          </Carousel>
        </div>
      </div>
      {/* Our Services */}
      <div className="container p-5">
        <h2 className="text-center py-3 text-danger">Our Services</h2>
        <div className="row our-service">
          <div className="col-md-12 col-lg-3">
            <div>
              <ul type={"disc"}>
                <li>Travels In Dindigul</li>
                <li>Dindigul Travels</li>
                <li>Best Travels in Dindigul</li>
                <li>Travel Agency In Dindigul</li>
                <li>best travel agency in Dindigul</li>
                <li>Tours and Travels in Dindigul</li>
                <li>Dindigul Tours and Travels</li>
                <li>Tours Travel Agency in Dindigul</li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 col-lg-3">
            <ul>
              <li>Tour Packages from Dindigul</li>
              <li>Travel Packages in Dindiguldurai Travels</li>
              <li>Tour Packages in Dindigul</li>
              <li>Dindigul Tour Packages</li>
              <li>Dindigul Tourism packages</li>
              <li>Dindigul One Day Tour Package</li>
              <li>Tour operators in Dindigul</li>
              <li>Best Tour operators in Dindigul</li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-3">
            <ul>
              <li>Car Rental in Dindigul</li>
              <li>Cab services in Dindigul</li>
              <li>Dindigul cab service</li>
              <li>Cabs Booking in Dindigul</li>
              <li>Travels Booking from Dindigul</li>
              <li>Tour Package from Dindigul</li>
              <li>Booking Travels From Dindigul</li>
              <li>Tempo Traveller in Dindigul</li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-3">
            <ul>
              <li>Dindigul Tourism</li>
              <li>Dindigul Best Travels</li>
              <li>Dindigul Tour Operators</li>
              <li>Tours from Dindigul</li>
              <li>Dindigul Tempo Traveller</li>
              <li>Tempo Traveller Price in Dindigul</li>
              <li>Dindigul Tours</li>
              <li>Best Tours and Travels in Dindigul</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
