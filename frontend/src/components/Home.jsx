import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Link} from "react-router-dom";
// banner slider
import brandBanner from "../assets/brand-banner.jpeg";
import brandBanner1 from "../assets/vcc.png";
import brandBanner2 from "../assets/vcc1.png";
import brandBanner3 from "../assets/vcc2.png";
import brandBanner4 from "../assets/vcc3.png";

import imgUs from "../assets/images/corporate.jpg";
// our customer
import customer1 from "../assets/our-customer/madurai.jpg";
import customer2 from "../assets/our-customer/Kodaikanal.jpg";
import customer3 from "../assets/our-customer/theni.jpg";
import customer4 from "../assets/our-customer/Kolukkumalai-Munnar.jpg";
import customer5 from "../assets/our-customer/palani-tours.png";
import customer6 from "../assets/our-customer/sirumalai-tourist.jpg";

// sliders
import slider1 from "../assets/carousel/silder-1.png";
import slider2 from "../assets/carousel/slider-2.png";
import slider3 from "../assets/carousel/slider-3.png";
import Typewriter from 'typewriter-effect';
// icons
import { IoCarSport } from "react-icons/io5";
import { useEffect, useState } from "react";
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



   const [isPaused, setIsPaused] = useState(false);

   const handleMouseEnter = () => {
     setIsPaused(true);
   };
 
   const handleMouseLeave = () => {
     setIsPaused(false);
   };


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
      {/* Greeting to vaigai Tours and Travels */}
      <div className="out-description py-5">
          
      <div className="container my-4 animation-show">
        <h2 className="text-center py-3">
           Vaigai Tours and Travels
        </h2>
        <p className="letter-style">
          vaigai tours and travels is the best tours and travels in vaigai and
          renowned travel agency in vaigai. We cherish our customers with
          quality service and you forever adore our service. We have been in
          this field for long years. So, we are serving the best tourism and
          travel agency with affordable packages. Moreover, we are the
          first-class tour operators and arrange all kinds of tours like
          educational, pilgrim, honeymoon, vacation trips, and corporate trips
          with premium packages.
        </p>
        <p className="letter-style">
          vaigai tours and travels in vaigai have their own professional drivers,
          proficient guide, and outstanding executives. We also offer cab
          services in vaigai. We stand out among other agencies in a way that we
          provide quality customer service and make you feel like your home. Our
          proficient drivers are experts in routes, therefore, providing you a
          completely enjoyable and cozy ride.
        </p>
      </div>

       {/* typing */}
       <div className="d-flex justify-content-center align-items-center py-5 my-3 roboto h1 text-white">
         <h2 className="p-2">VAIGAI</h2>
       <Typewriter
          options={{
            strings: ['SUPER MARKET', " HOTEL",' RELAX', ' CONSTRUCTIONS'],
            autoStart: true,
            loop: true,
            delay: 75, // Typing speed
          }}
        />
          
       </div>
      </div>
         {/* Why Choose Us */} < br></br>
         <div className="why-choose-us p-3 my-2 animation-show">
               <h2 className="text-center text-danger">Why Choose Us</h2>
               <p className="text-center text-danger fw-bold px-3">At vaigai Travels, we understand that you have choices when it comes to your travel needs. <br />
                Here&apos;s why choosing us is the best decision for a seamless and enjoyable journey.</p>

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
                                    <p>Unlock unbeatable value with vaigai Travels – your gateway 
                                      to the best prices in travel. Our commitment to affordability 
                                      ensures that you get exceptional service without compromising your budget.</p>
                              </div>
                         </div>
                         {/* second */}
                         <div className="row d-flex justify-content-evenly">
                              <div className="col-md-12 why-choose-at-us col-lg-4 border p-3 shadow p-3 mb-5 bg-white rounded">
                                    <h6 className="text-danger">Trust &Safety</h6>
                                    <p>Unlock unbeatable value with vaigai Travels – your gateway to the best prices in travel.
                                       Our commitment to affordability ensures that you get exceptional service without 
                                       compromising your budget.</p>
                              </div>
                              <div className="col-md-12 col-lg-4 why-choose-at-us border p-3 shadow p-3 mb-5 bg-white rounded">
                                    <h6 className="text-danger">Amazing Tour</h6>
                                    <p>Embark on an unforgettable journey with vaigai Travels, 
                                      where every tour is crafted to be truly amazing. Discover 
                                      extraordinary destinations and create lasting memories with 
                                      our exceptional travel experiences.</p>
                              </div>
                         </div>
                         {/* three */}
                         <div className="row d-flex justify-content-evenly">
                              <div className="col-md-12 why-choose-at-us col-lg-4 border p-3 shadow p-3 mb-5 bg-white rounded">
                                    <h6 className="text-danger">Ticket Booking</h6>
                                    <p>Simplify your travel plans with vaigai Travels. Our hassle-free 
                                      ticket booking services ensure a seamless and efficient process, 
                                      providing you with the convenience you deserve for your journey ahead.</p>
                              </div>
                              <div className="col-md-12 col-lg-4 why-choose-at-us border p-3 shadow p-3 mb-5 bg-white rounded">
                                    <h6 className="text-danger">Hotel Booking</h6>
                                    <p>Experience comfort from check-in to check-out with vaigai Travels. 
                                      Our hotel booking services offer a seamless and tailored approach, 
                                      ensuring your stay is as enjoyable as the destination itself.</p>
                              </div>
                         </div>
                   </div>
              </div>  
         </div>

      {/* tour packages */}
      <div data-aos="fade-up" className="container-fluid tour-packages py-5 tour-package">
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
      {/* <div data-aos="fade-down-left" className="container-fluid gallery-section p-3">
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
      </div> */}
      {/* OUR CUSTOMERS FAVOURITE DESTINATIONS */}
      <div data-aos="flip-left" className="bg-color my- py-4 ">
        <h3 className="text-center my-3 text-danger text-uppercase roboto fw-bold">dindigul nearby places</h3>
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
            <div className=" d-flex justify-content-center ">
              <div className="customer w-75  p-2">
                <div className="images  d-flex justify-content-center">
                 <img src={customer1} className="w-75 rounded" alt="Image 1" />
                </div>
              <h5 className="mt-2 text-uppercase ">
                 MADURAI
              </h5>
              <p className="py-3">தென்னிந்திய மாநிலமான தமிழ்நாட்டின் தேனி மாவட்டம், ஆண்டிப்பட்டி அருகே வைகை ஆற்றின் மீது கட்டப்பட்ட அற்புதமான மனிதனால் உருவாக்கப்பட்ட வைகை அணை.</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="customer w-75  p-2">
                <div className="images  d-flex justify-content-center">
                 <img src={customer2} className="w-75 rounded" alt="Image 1" />
                </div>
              <h5 className="mt-2 text-uppercase ">
                 Kodaikanal
              </h5>
              <p className="py-3">கொடைக்கானல் இந்தியாவின் தமிழ்நாட்டில் உள்ள ஒரு பிரபலமான மலைவாசஸ்தலம் ஆகும், அதன் இயற்கை அழகு, குளிர்ந்த காலநிலை மற்றும் பல பொழுதுபோக்கு நடவடிக்கைகளுக்கு பெயர் பெற்றது. </p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="customer w-75 p-2">
                <div className="images  d-flex justify-content-center">
                 <img src={customer3} className="w-75 rounded" alt="Image 1" />
                </div>
              <h5 className="mt-2 text-uppercase ">
                 theni
              </h5>
              <p className="py-3">தேனி மாவட்டத்தில் இயற்கை மாறாமல் இருக்கும் சுற்றுலா தலங்கள். 
                நீங்கள் தேனிக்கு சென்றால் இந்த தலங்களுக்கு ஒரு முறையாவது இந்த இடங்களுக்கு சென்று வாருங்கள்.</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="customer w-75  p-2">
                <div className="images  d-flex justify-content-center">
                 <img src={customer4} className="w-75 rounded" alt="Image 1" />
                </div>
              <h5 className="mt-2 text-uppercase ">
              Kolukkumalai Munnar
              </h5>
              <p className="py-3">தென்னிந்தியாவின் மிகப்பெரிய தேயிலை விளையும் பகுதியான மூணாறு, 
                கற்பனை செய்யக்கூடிய மிக அற்புதமான அமைப்புகளுக்கு மத்தியில் கடவுளின் சொந்த 
                நாட்டில் அமைந்துள்ளது.</p>              </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="customer w-75  p-2">
                <div className="images  d-flex justify-content-center">
                 <img src={customer5} className="w-75 rounded" alt="Image 1" />
                </div>
              <h5 className="mt-2 text-uppercase ">
                  palani
              </h5>
              <p className="py-3">பழனி தமிழ்நாட்டின் திண்டுக்கல் மாவட்டத்தில் உள்ள ஒரு சிறிய நகரம். 
                பழனியில் அருவி, மலை, 
                கோயில், ஓய்வு விடுதி உள்ளிட்ட பல்வேறு சுற்றுலா தலங்கள் உள்ளன</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="customer w-75  p-2">
                <div className="images  d-flex justify-content-center">
                 <img src={customer6} className="w-75 rounded" alt="Image 1" />
                </div>
              <h5 className="mt-2 text-uppercase ">
                 sirumali
              </h5>
              <p className="py-3">சிறுமலை திண்டுக்கல்லில் இருந்து 25 கிமீ (16 மைல்) 
                மற்றும் மதுரையில் இருந்து 40 கிமீ (25 மைல்) தொலைவில் 60,000 ஏக்கர் (200 கிமீ)
                 பரப்பளவில் அமைந்துள்ளது.</p>
              </div>
            </div>


          </Carousel>
        </div>

      {/* bber slider */}
       <hr />
      <div className="containe mt-4">
      <h3 className="text-center my-3 text-danger text-uppercase py-3 fw-bold roboto">POSTER</h3>
  

      <div
      className="marquee-container d-flex"
    >
       {/* <div className="d-flex shadow"> */}
       <img
        src={brandBanner} // Replace with your image URL
        alt="Marquee Item"
        height={360}
        className={`marquee-item ${isPaused ? "paused" : ""} w-100 me-2`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
             <img
        src={brandBanner1} // Replace with your image URL
        alt="Marquee Item"
        height={360}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`marquee-item ${isPaused ? "paused" : ""} w-100 me-2`}
      />
             <img
        src={brandBanner2} // Replace with your image URL
        alt="Marquee Item"
        height={360}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`marquee-item ${isPaused ? "paused" : ""} w-100 me-2`}
      />
             <img
        src={brandBanner3} // Replace with your image URL
        alt="Marquee Item"
        height={360}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`marquee-item ${isPaused ? "paused" : ""} w-100 me-2`}
      />
             <img
        src={brandBanner4} // Replace with your image URL
        alt="Marquee Item"
        height={360}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`marquee-item ${isPaused ? "paused" : ""} w-100 me-2`}
      />
       {/* </div> */}

    </div>

        {/* <marquee  scrollamount="20" direction="" >
            <div className="d-flex justify-content-evenly">

             <div  className="me-4 shadow">
                 <img src={brandBanner} height={360} alt="" />
             </div>
             <div className="me-4 shadow">
                 <img src={brandBanner1} height={360} alt="" />
             </div>
             <div className="me-4 shadow">
                 <img src={brandBanner2} height={360} alt="" />
             </div>
             <div className="me-4 shadow">
                 <img src={brandBanner3} height={360} alt="" />
             </div>
             <div className="me-4 shadow">
                 <img src={brandBanner4} height={360} alt="" />
             </div>
            </div>
        </marquee> */}

      </div>

      </div>
      {/* Our Services */}
       <div className="bg-color">
      <div data-aos="flip-right" className="container p-5">
        <h2 className="text-center py-3 text-danger roboto fw-bold">Our Services</h2>
        <div className="row our-service fw-bold">
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
    </div>
  );
};

export default Home;
