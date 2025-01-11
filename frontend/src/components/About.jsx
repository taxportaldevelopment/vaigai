import {useEffect, useState} from 'react'
import img1 from "../assets/about/a1.jpg";
import img2 from "../assets/about/a2.jpg";
import img3 from "../assets/about/a3.jpg";
import about1 from "../assets/about/aboutus.png"
import about2 from "../assets/about/mahindra_vento.png"
import about3 from "../assets/about/cars.png"
//icons
import { FaFolderOpen } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaTruckFront } from "react-icons/fa6";
import { BiMale } from "react-icons/bi";
// images
import releax from "../assets/releax/service-1.jpg";
import releax1 from "../assets/releax/img/img-13.png"
import construction1 from "../assets/construction/construction-1.jpg";
import construction2 from "../assets/construction/construction-2.jpg";
import tea from "../assets/construction/tea-tn.jpg";
import biritani from "../assets/construction/chicken1.png";
import restaurant1 from "../assets/construction/restaurant-1.jpg";
import restaurant2 from "../assets/construction/restaurant-2.jpg";
  //supermarket
import supermarket1 from "../assets/construction/supermarket-1.jpg";
import supermarket2 from "../assets/construction/supermarket-2.jpg";
import { Link } from 'react-router-dom';
const About = () => {
    const [active,setActive] = useState("about us");
    const [images,setImages] = useState();
    const [title,setTitle] = useState(1);
    const [content,setContent] = useState(1);

  const aboutCartDetails = [
       {
        id:1,
        imgage:img1,
        title:"Vaigai tours and travels are the best tour operators in Dindigul. We are providing you the customized services in Dindigul and south India. We are specialized in offering all kinds of tour packages from educational tour to pilgrim tour.",
        content:"We have been venturing in this field for the last 20 years, blooming from 2000, and are rendering our heartfelt services to many happy customers. We are so pleased to fulfill our customer’s requirements."
       },
       {
        id:2,
        imgage:img2,
        title:"We assure that we will make the visitors to feel more than the comfort level. Personalized service is our specialty.",
        content:"We believe in quality service and we guarantee good value for your money and complete satisfaction of its customer is the motto of our company which is being accomplished with the help of most competent pool of human resources.In order to provide complete customer satisfaction, we offer a comprehensive range of travel and tourism related service that includes A surplus surprise is waiting for you in Dindigul Tours Travels"
       },
       {
        id:3,
        imgage:img3,
        title:"Services We are a 360 degree travel solution provider",
        content:"Our endeavor is to continuously provide the best in class travel services to our customers so that they can look forward to traveling with us again and again. Dindigul Tours Travels help you in traveling and guiding you to see this beautiful places."
       },
  ]  

  const onChange = (event,id)=>{
        setActive(event)
       const store = aboutCartDetails.find(item => item.id == id);
       setTitle(store.title)
       setContent(store.content)
       setImages(store.imgage)
  }

    useEffect(()=>{
        const store = aboutCartDetails.find(item => item.id == 1);
        setTitle(store.title)
        setContent(store.content)
        setImages(store.imgage)
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
                           <h2 className='text-center'>About</h2>

                          <p className='fw-bold h5 d-flex'>
                          <Link to="/book-you-cab" className='text-white'>Book Your Cab</Link> / 
                          <Link to="/contact" className='text-white ms-2'>Contact</Link>
                          </p>
                      </div>
              </div>

              {/* <div className="container-fluid about-section ">
                   <div className='d-flex justify-content-center'>
                   <div className="btn-section">
                        <button className='text-uppercase text-white' style={{backgroundColor:(active == "about us"?"#00bbf9":"#dc2f02")}} onClick={()=>onChange("about us",1)}>about us</button>
                        <button className='text-uppercase text-white' style={{backgroundColor:(active == "the mission"?"#00bbf9":"#dc2f02")}} onClick={()=>onChange("the mission",2)}>the mission</button>
                        <button className='text-uppercase text-white' style={{backgroundColor:(active == "our strategy"?"#00bbf9":"#dc2f02")}} onClick={()=>onChange("our strategy",3)}>our strategy</button>
                   </div>

                   </div>
                   <div className="row">
                       <div className="col-md-12 col-lg-5 p-3">
                            <img src={images} className='w-100' alt="" />
                       </div>
                       <div className="col-md-12 col-lg-7">
                            <div className='p-4'>
                                 <h6>{title}</h6>
                                 <p className='opacity-50'>{content}</p>
                            </div>
                       </div>
                   </div>
              </div> */}
                <div className="our-bussiness-contact p-2">
                <h2 className='text-center py-4 opacity-75 text-danger'>VAIGAI ABOUT</h2>
              <div className=" container ">
                   <h4 className='text-center letter-space text-warning'>___OUR BUSSINESS___</h4>
                    <div className="releax py-3">
                      <h2>Releax</h2>
                    <div className="row">
                         <div className="col-md-12 col-lg-5">
                            <img src={tea} className='w-100 p-3' alt="" />
                         </div>
                         <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center p-2">
                              <div>
                                 <h5 className='text-danger'>தேநீர் கடை</h5>
                             <p className='letter-space opacity-50'><strong>வைகை</strong> கடைக்கு வரவேற்கிறோம் — ஒவ்வொரு சிப்பும் ஒரு கதை சொல்லும்! மலைகளில் இருந்து தேர்ந்தெடுக்கப்பட்ட, கவனத்துடன் கலந்து, அன்புடன் பரிமாறப்படும் சிறந்த தேநீர்களை ஆராயுங்கள். ஒவ்வொரு கோப்பையிலும் பாரம்பரியம், சுவை மற்றும் அமைதியை அனுபவியுங்கள்."</p>
                            <h5 className='opacity-50'>About Us Section</h5>
                            <p className='letter-space opacity-50'>"At <strong>Vaigai</strong> , we believe that tea is more than a beverage; it's a culture, a connection, and a comfort. Founded in [year], we source premium teas from across the globe and infuse them with local traditions. From refreshing green teas to robust chai, each cup is a journey of flavors waiting to be explored."</p>
                              </div>
                         </div>
                   </div>
                   <div  data-aos="flip-right" className="row">
                         <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center p-2">
                              <div>
                                 <h5 className='text-danger'>Product Descriptions</h5>
                                <ul type="circle">
                                   <li><strong>Masala Chai</strong>: "A rich blend of aromatic spices and strong black tea, our Masala Chai warms the heart and soul. Perfect for any time of day."</li>
                                   <li><strong>Green Tea</strong>: "Light, refreshing, and full of antioxidants, our green tea is a perfect companion for moments of calm."</li>
                                  <li><strong>Herbal Infusions</strong>: "Caffeine-free and bursting with natural flavors — our herbal teas bring the soothing power of nature to your cup."</li>
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
                      <h2 className='text-uppercase'>construction</h2>
                    <div className="row">
                         <div className="col-md-12 col-lg-5">
                            <img src={construction1} className='w-100 p-3' alt="" />
                         </div>
                         <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center p-2">
                              <div>
                                 <h5 className='text-danger text-uppercase'>construction</h5>
                             <p className='letter-space opacity-50'>"வைகைக்கு வரவேற்கிறோம் - எதிர்காலத்தை உருவாக்குதல், ஒரு நேரத்தில் ஒரு செங்கல். கருத்து முதல் நிறைவு வரை, உங்கள் தேவைகளுக்கு ஏற்ப புதுமையான, உயர்தர கட்டுமான தீர்வுகளை நாங்கள் வழங்குகிறோம்"</p>
                            <h5>About Us Section</h5>
                            <p className='letter-space opacity-50'>"At <strong>vaigai</strong>, we take pride in delivering exceptional construction services. With [2010] of experience, our skilled team specializes in residential, commercial, and industrial projects. We are committed to quality, safety, and sustainability, ensuring every project exceeds expectations."</p>
                              </div>
                         </div>
                   </div>
                   <div className="row">
                         <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center p-2">
                              <div>
                                 <h5 className='text-danger'>Service Descriptions</h5>
                                <ul type="circle" className='opacity-50'>
                                   <li><strong>Residential Construction</strong>: "Turn your dream home into reality. We build durable, beautiful, and functional homes designed to suit your lifestyle."</li>
                                   <li><strong>Commercial Construction</strong>: "We deliver modern, efficient commercial spaces, from offices to retail outlets, built to drive success."</li>
                                  <li><strong>Renovation Services</strong>: "Transform your existing property with our comprehensive renovation services. Quality upgrades tailored to your vision."</li>
                                  <li><strong>Infrastructure Projects</strong>: "Supporting communities with top-tier infrastructure — roads, bridges, and public facilities built to last."</li>
                                </ul>
                            </div>
                         </div>
                         <div className="col-md-12 col-lg-5">
                            <img src={construction2} className='w-100 p-3' alt="" />
                         </div>
                   </div>
                    </div>
                    {/*Hotel  */}
                    {/* <div className="hotel py-3">
                       <h2>HOTEL</h2>
                    <div className="row">
                         <div className="col-md-12 col-lg-5">
                            <img src={hotel1} className='w-100 p-3' alt="" />
                         </div>
                         <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center p-2">
                              <div>
                                 <h5 className='text-danger text-uppercase'>Hotel</h5>
                             <p className='letter-space opacity-50'>"Welcome to <strong>Vaigai Hotel</strong> — your home away from home! Experience warm hospitality, luxurious comfort, and authentic flavors in the heart of Dindigul. Whether you’re here for business or leisure, we make every stay unforgettable."</p>
                            <h5>About Us Section</h5>
                            <p className='letter-space opacity-50'>"At Vaigai Hotel, we blend tradition with modern luxury to offer an exceptional experience. Located in Vaigai Relax, madurai road, Begambur, dindigul 624002 , our hotel has been a trusted choice for travelers since [2010]. With spacious rooms, world-class amenities, and personalized service, we ensure that every guest enjoys comfort and convenience. Discover the true essence of hospitality with us."</p>
                              </div>
                         </div>
                   </div>
                   <div className="row">
                         <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center p-2">
                              <div>
                                 <h5 className='text-danger'>Room Descriptions</h5>
                                <ul type="circle">
                                   <li><strong>Deluxe Room</strong>:  "Elegant and spacious, our Deluxe Rooms offer modern amenities and a relaxing ambiance — perfect for unwinding after a long day."</li>
                                   <li><strong>Suite</strong>: "Indulge in luxury with our beautifully appointed suites. Enjoy separate living areas, premium facilities, and stunning views."</li>
                                  <li><strong>Family Room</strong>:"Designed for comfort and convenience, our Family Rooms provide ample space and thoughtful amenities for a perfect family stay."</li>
                                </ul>
                            </div>
                         </div>
                         <div className="col-md-12 col-lg-5">
                            <img src={hotel2} className='w-100 p-3' alt="" />
                         </div>
                   </div>
                    </div> */}
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
                             <p className='letter-space opacity-50'>வைகை உணவகத்திற்கு வரவேற்கிறோம் — உங்கள் சமையல் இடமான மதுரை சாலையில் உள்ள பேகம்பூர்! திண்டுக்கல்லின் இதயத்தில் அரவணைப்பு மற்றும் பாரம்பரியத்துடன் பரிமாறப்படும் தென்னிந்தியா மற்றும் அதற்கு அப்பால் உள்ள உண்மையான சுவைகளை அனுபவிக்கவும்.</p>
                            <h5>About Us Section</h5>
                            <p className='letter-space opacity-50'>"Located at the heart of Dindigul, Vaigai Restaurant is more than just a dining spot — it's a celebration of flavors. Our chefs bring you time-honored recipes made with fresh, local ingredients. From rich biryanis to delicious dosas, every dish reflects the culinary heritage of Tamil Nadu."</p>
                              </div>
                         </div>
                   </div>
                   <div className="row">
                         <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center p-2">
                              <div>
                                 <h5 className='text-danger'>Menu Highlights</h5>
                                <ul type="circle" className='opacity-50'>
                                   <li><strong>Dindigul Special Biryani</strong>: "Aromatic and flavorful, our signature biryani is a must-try."</li>
                                   <li><strong>Chettinad Chicken Curry</strong>: "Rich, spicy, and full of traditional flavors."</li>
                                  <li><strong>Classic Dosas</strong>: "Crisp on the outside, soft inside, served with homemade chutneys."</li>
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
                             <p className='letter-space opacity-50'>"Welcome to Vaigai Supermarket — your one-stop destination for quality, variety, and value! Located on Madurai Road, Begambur, Dindigul, we bring you the freshest produce, everyday essentials, and special deals under one roof."</p>
                            <h5>About Us Section</h5>
                            <p className='letter-space opacity-50'>"At Vaigai Supermarket, we are committed to making your shopping experience convenient and enjoyable. Our store offers a wide range of products, from fresh fruits and vegetables to groceries, household items, and personal care products. With top brands and affordable prices, we ensure that every visit meets your needs."</p>
                              </div>
                         </div>
                   </div>
                   <div className="row">
                         <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center p-2">
                              <div>
                                 <h5 className='text-danger'>Product Categories Highlight</h5>
                                <ul type="circle" className='opacity-50'>
                                   <li><strong>Fresh Produce</strong>:"Locally sourced fruits and vegetables — fresh every day."</li>
                                   <li><strong>Groceries</strong>: "A wide selection of rice, pulses, spices, and more."</li>
                                  <li><strong>Household Essentials</strong>:  "Everything you need for your home, from cleaning supplies to kitchenware."</li>
                                  <li><strong>Personal Care</strong>: "Top-quality health and beauty products for the whole family."</li>
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
                                <p>Follow us on Instagram, Facebook and reach us out on WhatsApp 
                                  for further enquires. We serve to provide you with the best 
                                  experience on the road, wherever you decide to go we have our 
                                  service available for you all the time. We assure to provide the 
                                  best travel service for you in Dindigul. Our Travel agency is 
                                  looking for customers to experience a memorable travel time with us.</p>

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
                              <p>Vaigai Travels provides all auxiliary travel services as 
                                required along with our 24 Hours back up service through 
                                the customer service help desk. Ever since its commencement, 
                                Vaigai Travels had turned out to be one of the most innovative 
                                Car Rental Service provider in and around Dindigul. Vaigai Travels, 
                                one of the leading Car rental company in Dindigul, having well behaved, 
                                trained and customer friendly drivers to make your journey to a beautiful ride. 
                                Vaigai Travels is ready to serve you round the clock for your 
                                comfortable journey to enjoy your holiday tour in Dindigul with Economic, 
                                Premium & Luxury vehicles.</p>
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
                          <span className='h3 ms-3'>5</span>
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
                          <span className='h3 ms-3'>100</span>
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
                          <span className='h3 ms-3'>30</span>
                          <p className='ms-3'>Owned Vehicles  </p>
                      </div>

                      </div>
                  </div>
                  <div className="col-md-12 col-lg-3 p-1 about-people-show py-2 mt-3 ">
                      <div className='d-flex parent p-2'>
                      <div className="image">
                        <BiMale className='h3' />
                      </div>
                      <div className="content d-flex">
                          <span className='h3 ms-3'>780</span>
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
