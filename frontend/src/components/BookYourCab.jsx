import {useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import images from "../assets/qr-code-1.jpeg";
import images1 from "../assets/footertop1.png"
import brandPhoto from "../assets/qr-code-2.jpeg";
import { RiFlightLandFill } from "react-icons/ri";
// images
import seats from "../assets/book-seats.png";

// icons
import { IoCarSport } from "react-icons/io5";
import { PiSeatFill } from "react-icons/pi";
import { IoCarSportSharp } from "react-icons/io5";
const BookYourCab = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fab192d6-0ab0-477f-96b5-efbd44dd31c4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();

      setTimeout(()=>{
            navigate("/one-day-package")
      },8000)
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="book-your-cab">
      <div className="book-your-cab-banner d-flex justify-content-center align-items-center">
        <div>
          <h3 className="text-white">BOOK YOUR CAB </h3>
          <p className="text-white text-center">
            <Link to={"/vaigai"} className="text-white">
              Home
            </Link>{" "}
            /{" "}
            <Link to={"/about"} className="text-white">
              About
            </Link>
          </p>
        </div>
      </div>
       {/* package start */}
          <div className="package-section container">
                 <h2 className="text-center py-4 roboto">OUR PACKAGES</h2>
                 <p className="text-center text-warning py-1">Dindigul to kodaikanal </p>
                 <div className="row">
                     <div className="col-md-12 col-lg-4">
                           <div className="border p-2 rounded shadow">
                              <h5 className="text- ">SWIFT DEZIRE ( or ) SWIFT : <PiSeatFill /> 4+1 SEAT</h5>
                                <div className="d-flex justify-content-between align-items-center">
                               <ul type="none">
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY: ₹ 4500 </strong> </li>
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 7000</strong> </li>
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 9000</strong> </li>
                               </ul>
                                  <div>
                                      <div className="d-flex">
                                          <img src={seats} alt="" height={30}/>
                                          <img src={seats} alt="" height={30}/>
                                          <img src={seats} alt="" height={30}/>
                                      </div>
                                      <div className="py-1 d-flex justify-content-between">
                                          <img src={seats} alt="" height={30}/>
                                          <img src={seats} alt="" height={30}/>
                                      </div>
                                  </div>
                                </div>
                           </div>
                     </div>
                     <div className="col-md-12 col-lg-4">
                     <div className="border p-2 rounded shadow">
                              <h5 className="">TAVERA :<PiSeatFill /> 9+1 SEAT</h5>
                               <div>
                               <div className="d-flex justify-content-between align-items-center">
                               <ul type="none">
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 5500</strong> </li>
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 9000</strong> </li>
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 12000</strong> </li>
                               </ul>
                                     <div>
                                      <div className="d-flex">
                                          <img src={seats} alt="" height={30}/>
                                          <img src={seats} alt="" height={30}/>
                                          <img src={seats} alt="" height={30}/>
                                          <img src={seats} alt="" height={30}/>
                                      </div>
                                      <div className="py-1 d-flex justify-content-between">
                                          <img src={seats} alt="" height={30}/>
                                          <img src={seats} alt="" height={30}/>
                                          <img src={seats} alt="" height={30}/>
                                      </div>
                                      <div className="py-1 d-flex justify-content-between">
                                          <img src={seats} alt="" height={30}/>
                                          <div>
                                          <img src={seats} alt="" height={30}/>
                                          <img src={seats} alt="" height={30}/>
                                          </div>
                                      </div>
                                     </div>
                                  </div>
                               </div>
                           </div>
                     </div>
                     <div className="col-md-12 col-lg-4">
                     <div className="border p-2 rounded shadow">
                              <h5 className="">INNOVA <PiSeatFill /> 7+1 SEAT</h5>
                              <div className="d-flex justify-content-between align-items-center">
                               <ul type="none">
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 6000 </strong> </li>
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 10000</strong> </li>
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 13500 </strong> </li>
                               </ul>
                               <div>
                                      <div className="d-flex">
                                          <img src={seats} alt="" height={30}/>
                                          <img src={seats} alt="" height={30}/>
                                          <img src={seats} alt="" height={30}/>
                                      </div>
                                      <div className="py-1 d-flex justify-content-between">
                                          <img src={seats} alt="" height={30}/>
                                          <img src={seats} alt="" height={30}/>
                                          <img src={seats} alt="" height={30}/>
                                      </div>
                                      <div className="py-1 d-flex justify-content-between">
                                          <img src={seats} alt="" height={30}/>
                                          <div>
                                          {/* <img src={seats} alt="" height={30}/> */}
                                          <img src={seats} alt="" height={30}/>
                                          </div>
                                      </div>
                                     </div>
                              </div>
                           </div>
                     </div>
                 </div>
                 <div className="row mt-4">
                     <div className="col-md-12 col-lg-4">
                           <div className="border p-2 rounded shadow">
                              <h5 className="text- ">ERTIGA : <PiSeatFill /> 6+1 seat</h5>
                               <div className="d-flex justify-content-between align-items-center">
                               <ul type="none">
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY: ₹ 5500 </strong> </li>
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 9000</strong> </li>
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 12500</strong> </li>
                               </ul>
                               <div>
                                      <div className="d-flex justify-content-between">
                                          <img src={seats} alt="" height={30}/>
                                          <img src={seats} alt="" height={30}/>
                                      </div>
                                      <div className="py-1 d-flex justify-content-between">
                                          <img src={seats} alt="" height={30}/>
                                          <img src={seats} alt="" height={30}/>
                                          <img src={seats} alt="" height={30}/>
                                      </div>
                                      <div className="py-1 d-flex justify-content-between">
                                          <img src={seats} alt="" height={30}/>
                                          <div>
                                          <img src={seats} alt="" height={30}/>
                                          </div>
                                      </div>
                                </div>

                               </div>
                           </div>
                     </div>
                     <div className="col-md-12 col-lg-4">
                     <div className="border p-2 rounded shadow">
                              <h5 className="">TEMPO :<PiSeatFill /> 14+1 SEAT</h5>
                              <div className="d-flex justify-content-between align-items-center">
                              <ul type="none">
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 8500</strong> </li>
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 12500</strong> </li>
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 16500</strong> </li>
                               </ul>
                               <div>
                                      <div className="d-flex justify-content-between align-items-center">
                                          <img src={seats} alt="" height={16}/>
                                          <img src={seats} alt="" height={16}/>
                                          <div className="ms-3">
                                             <img src={seats} alt="" height={16}/>
                                          </div>
                                      </div>
                                      <div className="d-flex justify-content-between align-items-center">
                                          <img src={seats} alt="" height={16}/>
                                          <img src={seats} alt="" height={16}/>
                                          <div className="ms-3">
                                             <img src={seats} alt="" height={16}/>
                                          </div>
                                      </div>
                                      <div className="d-flex justify-content-between align-items-center">
                                          <img src={seats} alt="" height={16}/>
                                          <img src={seats} alt="" height={16}/>
                                          <div className="ms-3">
                                             <img src={seats} alt="" height={16}/>
                                          </div>
                                      </div>
                                      <div className="d-flex justify-content-between align-items-center">
                                          <img src={seats} alt="" height={16}/>
                                          <img src={seats} alt="" height={16}/>
                                          <div className="ms-3">
                                             <img src={seats} alt="" height={16}/>
                                          </div>
                                      </div>
                                      <div className="d-flex">
                                          <img src={seats} alt="" height={16}/>
                                          <img src={seats} alt="" height={16}/>
                                          <div className="ms-3">
                                             {/* <img src={seats} alt="" height={30}/> */}
                                          </div>
                                      </div>
                                      <div className="d-flex">
                                          <img src={seats} alt="" height={16}/>
                                      </div>
                                     </div>
                              </div>
                           </div>
                     </div>
                     <div className="col-md-12 col-lg-4">
                     <div className="border p-2 rounded shadow">
                              <h5 className="">COACH  <PiSeatFill /> 21+1 SEAT</h5>
                              <div className="d-flex justify-content-between align-items-center">
                              <ul type="none">
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 9000 </strong> </li>
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 15000</strong> </li>
                                  <li><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 21000 </strong> </li>
                               </ul>
                               <div>
                                      <div className="d-flex justify-content-between align-items-center">
                                          <img src={seats} alt="" height={16}/>
                                          <img src={seats} alt="" height={16}/>
                                          <div className="ms-3 d-flex">
                                             <img src={seats} alt="" height={16}/>
                                             <img src={seats} alt="" height={16}/>
                                          </div>
                                      </div>
                                      <div className="d-flex justify-content-between align-items-center">
                                          <img src={seats} alt="" height={16}/>
                                          <img src={seats} alt="" height={16}/>
                                          <div className="ms-3 d-flex">
                                             <img src={seats} alt="" height={16}/>
                                             <img src={seats} alt="" height={16}/>
                                          </div>
                                      </div>
                                      <div className="d-flex justify-content-between align-items-center">
                                          <img src={seats} alt="" height={16}/>
                                          <img src={seats} alt="" height={16}/>
                                          <div className="ms-3 d-flex">
                                             <img src={seats} alt="" height={16}/>
                                             <img src={seats} alt="" height={16}/>
                                          </div>
                                      </div>
                                      <div className="d-flex justify-content-between align-items-center">
                                          <img src={seats} alt="" height={16}/>
                                          <img src={seats} alt="" height={16}/>
                                          <div className="ms-3 d-flex">
                                             <img src={seats} alt="" height={16}/>
                                             <img src={seats} alt="" height={16}/>
                                          </div>
                                      </div>
                                      <div className="d-flex">
                                          <img src={seats} alt="" height={16}/>
                                          <img src={seats} alt="" height={16}/>
                                          <div className="ms-3 d-flex">
                                             <img src={seats} alt="" height={16}/>
                                             <img src={seats} alt="" height={16}/>
                                          </div>
                                      </div>
                                      <div className="d-flex">
                                          <img src={seats} alt="" height={16}/>
                                          <img src={seats} alt="" height={16}/>
                                      </div>
                                      <div className="d-flex">
                                          <img src={seats} alt="" height={16}/>
                                      </div>
                                     </div>
                              </div>
                           </div>
                     </div>
                 </div>
                 {/* INGULDING */}
                 <p className="card p-3 mt-3 bg-light text-primary h5 ">
                      <marquee behavior="alternate" direction="">
                      INGULDING : TOLLGATE & PARKING & DRIVER BATTA &  DIESEL CHARGES
                      </marquee>
                 </p>
          </div>
          {/* book your Airport */}
          <div className="airport-pickup-drop">
                      <div className="title py-3 d-flex justify-content-center align-items-center">
                          <IoCarSportSharp  className="h1 mx-2"/>
                      <h1 className="text-danger roboto fw-bold">AIRPORT PICKUP AND DROP</h1>
                      </div>
                 <div className="container">
                      <div className="row">
                             <div className="col-md-12 col-lg-4 p-2">
                                  <div className="pickup-and-drop border p-2 rounded shadow">
                                       <p className="fw-bold text-center text-danger">Dindigul To Madurai Airport</p>
                                        <div className="p-1">
                                             <ul>
                                                <li> <RiFlightLandFill /> <strong>Swift (OR) Swift Dzire : ₹ 2900</strong>  </li>
                                                <li><RiFlightLandFill /> <strong>Ertiga : ₹ 3100</strong></li>
                                                <li><RiFlightLandFill /> <strong>Innova : ₹ 3500</strong></li>
                                                <li><RiFlightLandFill /> <strong>Tavera : ₹ 3100</strong></li>
                                                <li><RiFlightLandFill /> <strong>Tempo Travels : ₹ 3500</strong></li>
                                             </ul>
                                        </div>
                                  </div>
                             </div>
                             <div className="col-md-12 col-lg-4 p-2">
                                  <div className="pickup-and-drop border p-2 rounded shadow">
                                       <p className="fw-bold text-center text-danger">Dindigul To Tricy Airport</p>
                                        <div className="p-1">
                                             <ul>
                                                <li> <RiFlightLandFill /> <strong>Swift (OR) Swift Dzire : ₹ 2600</strong>  </li>
                                                <li><RiFlightLandFill /> <strong>Ertiga : ₹ 4000</strong></li>
                                                <li><RiFlightLandFill /> <strong>Innova : ₹ 4900</strong></li>
                                                <li><RiFlightLandFill /> <strong>Tavera : ₹ 4000</strong></li>
                                                <li><RiFlightLandFill /> <strong>Tempo Travels : ₹ 8000</strong></li>
                                             </ul>
                                        </div>
                                  </div>
                             </div>
                             <div className="col-md-12 col-lg-4 p-2">
                                  <div className="pickup-and-drop border p-2 rounded shadow">
                                       <p className="fw-bold text-center text-danger">Dindigul To coimbatore Airport</p>
                                        <div className="p-1">
                                             <ul>
                                                <li> <RiFlightLandFill /> <strong>Swift (OR) Swift Dzire : ₹ 4600</strong>  </li>
                                                <li><RiFlightLandFill /> <strong>Ertiga : ₹ 5000</strong></li>
                                                <li><RiFlightLandFill /> <strong>Innova : ₹ 5600</strong></li>
                                                <li><RiFlightLandFill /> <strong>Tavera : ₹ 5000</strong></li>
                                                <li><RiFlightLandFill /> <strong>Tempo Travels : ₹ 10,000</strong></li>
                                             </ul>
                                        </div>
                                  </div>
                             </div>
                             <div className="col-md-12 col-lg-4 p-2">
                                  <div className="pickup-and-drop border p-2 rounded shadow">
                                       <p className="fw-bold text-center text-danger">Dindigul To Chennai Airport</p>
                                        <div className="p-1">
                                             <ul>
                                                <li> <RiFlightLandFill /> <strong>Swift (OR) Swift Dzire : ₹ 12,800</strong>  </li>
                                                <li><RiFlightLandFill /> <strong>Ertiga : ₹ 13,800</strong></li>
                                                <li><RiFlightLandFill /> <strong>Innova : ₹ 15,000</strong></li>
                                                <li><RiFlightLandFill /> <strong>Tavera : ₹ 14,000</strong></li>
                                                <li><RiFlightLandFill /> <strong>Tempo Travels : ₹ 24,000</strong></li>
                                             </ul>
                                        </div>
                                  </div>
                             </div>
                             <div className="col-md-12 col-lg-4 p-2">
                                  <div className="pickup-and-drop border p-2 rounded shadow">
                                       <p className="fw-bold text-center text-danger">Dindigul To Kochin Airport</p>
                                        <div className="p-1">
                                             <ul>
                                                <li> <RiFlightLandFill /> <strong>Swift (OR) Swift Dzire : ₹ 8500</strong>  </li>
                                                <li><RiFlightLandFill /> <strong>Ertiga : ₹ 9500</strong></li>
                                                <li><RiFlightLandFill /> <strong>Innova : ₹ 10,500</strong></li>
                                                <li><RiFlightLandFill /> <strong>Tavera : ₹ 9500</strong></li>
                                                <li><RiFlightLandFill /> <strong>Tempo Travels : ₹ 16,500</strong></li>
                                             </ul>
                                        </div>
                                  </div>
                             </div>
                      </div>
                 </div>
          </div>
       {/* package end */}
      <div data-aos="zoom-in-down" className="container my-3">
        <div className="row">
          <div className="col-md-12 col-lg-9 my-3 p-2">
            <div className="book-form p-2">
              <h2 className="roboto">BOOKING YOUR CAB</h2>
              <form onSubmit={onSubmit} className="book-your-cab-form">
                <div className="form-group border px-3 rounded">
                  <DatePicker
                    format="DD/MM/YYYY"
                    minDate={new Date()}
                    hideYear={true}
                    shadow={true}
                    required
                    name="Pickup Date"
                    style={{width:"100%",height:"40px",border:"none",outline:"none"}}
                    placeholder="Pickup Date *  "
                  />
                </div>
                  <div className="form-group border px-3 rounded my-3">
                  <DatePicker
                    format="DD/MM/YYYY"
                    minDate={new Date()}
                    hideYear={true}
                    shadow={true}
                    required
                    name="Departure Date"
                    style={{width:"100%",height:"40px",border:"none",outline:"none"}}
                    placeholder="Departure Date *  "
                  />
                </div>
                <div className="form-group my-3">
                     <select name="select Vehicle Type" required className="form-control" id="">
                         <option value="">--Select Car Type*</option>
                         <option value="Maruti Suzuki Dzire">Maruti Suzuki Dzire 4+1 SEAT</option>
                         <option value="TAVERA">TAVERA  9+1 SEAT</option>
                         <option value="INNOVA">INNOVA 7+1 SEAT</option>
                         <option value="ERTIGA">ERTIGA 6+1 seat</option>
                         <option value="TEMPO">TEMPO  14+1 SEAT</option>
                         <option value="COACH">COACH 21+1 SEAT</option>
                     </select>
                </div>
                <div className="form-group my-3">
                     <input type="text"
                       className="form-control"
                       placeholder="Name:*"
                       required
                       name="Name"
                     />
                </div>
                <div className="form-group my-3">
                     <input type="text"
                       className="form-control"
                       placeholder="Email:*"
                        required
                        name="Email"
                     />
                </div>
                <div className="form-group my-3">
                     <input type="text"
                       className="form-control"
                       placeholder="Address:*"
                       required
                       name="Address"
                     />
                </div>
                <div className="form-group my-3">
                     <input type="text"
                       className="form-control"
                       placeholder="Phone:*"
                       required
                       name="Phone"
                     />
                </div>
                <div className="form-group my-3">
                     <textarea 
                     required
                     name="Message" 
                     id="" 
                     cols="30" 
                     rows="4"
                      className="form-control"
                      placeholder="Message"
                      ></textarea>
                </div>
                <div className="form-group d-flex justify-content-between align-items-center">
                     <button className="btn btn-danger">send</button>
                     {result && result?<h6 className="alert alert-success">{result}</h6>:""}
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-12 col-lg-3 p-3">
              <div className="img border rounded p-1">
             <h5 className="text-center"> UPI Accepted Here</h5>
              <img src={images} className="p-3 w-100 shadow rounded" alt="" />
                 
              </div>
              <div className="img border rounded p-1">
             <h5 className="text-center"> OUR COMPANY DETAILS</h5>
              <img src={brandPhoto} className="p-3 w-100 shadow rounded" alt="" />
                 
              </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-out-up" className="image">
        <div className="container-fluid">
          <img src={images1} className="w-100 book-your-cab-footer-img" alt="" />

        </div>
      </div>
    </div>
  );
};

export default BookYourCab;
