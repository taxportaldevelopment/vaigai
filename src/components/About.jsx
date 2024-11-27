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
        <div className="vaigai-about-section my-4 p-2 ">
              <h2 className='text-center py-4 opacity-75 text-danger'>VAIGAI TOURS TRAVELS</h2>

              <div className="container-fluid about-section ">
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
