import {useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import images from "../assets/QR-Code-techdata.jpg";
import images1 from "../assets/footertop.jpg"
import brandPhoto from "../assets/brand-banner.jpeg";

// icons
import { IoCarSport } from "react-icons/io5";
import { PiSeatFill } from "react-icons/pi";
import { HiCubeTransparent } from "react-icons/hi";
const BookYourCab = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f0662e3b-9485-4ab0-bb56-3feaa3ac8da9");

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
                 <h2 className="text-center py-4">OUR PACKAGES</h2>
                 <p className="text-center text-warning py-1">Dindigul to kodaikanal </p>
                 <div className="row">
                     <div className="col-md-12 col-lg-4">
                           <div className="border p-2 rounded shadow">
                              <h5 className="text- ">SWIFT DEZIRE ( or ) SWIFT : <PiSeatFill /> 4+1 SEAT</h5>
                               <ul type="none">
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY: ₹ 4500 </strong> </li>
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 7000</strong> </li>
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 9000</strong> </li>
                               </ul>
                           </div>
                     </div>
                     <div className="col-md-12 col-lg-4">
                     <div className="border p-2 rounded shadow">
                              <h5 className="">TAVERA :<PiSeatFill /> 8+1 SEAT</h5>
                               <ul type="none">
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 5500</strong> </li>
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 8500</strong> </li>
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 12000</strong> </li>
                               </ul>
                           </div>
                     </div>
                     <div className="col-md-12 col-lg-4">
                     <div className="border p-2 rounded shadow">
                              <h5 className="">INNOVA <PiSeatFill /> 7+1 SEAT</h5>
                               <ul type="none">
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 6000 </strong> </li>
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 10000</strong> </li>
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 13500 </strong> </li>
                               </ul>
                           </div>
                     </div>
                 </div>
                 <div className="row mt-4">
                     <div className="col-md-12 col-lg-4">
                           <div className="border p-2 rounded shadow">
                              <h5 className="text- ">ERTIGA : <PiSeatFill /> 7+1 seat</h5>
                               <ul type="none">
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY: ₹ 5500 </strong> </li>
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 9000</strong> </li>
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 12500</strong> </li>
                               </ul>
                           </div>
                     </div>
                     <div className="col-md-12 col-lg-4">
                     <div className="border p-2 rounded shadow">
                              <h5 className="">TEMPO :<PiSeatFill /> 14+1 SEAT</h5>
                               <ul type="none">
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 8500</strong> </li>
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 12500</strong> </li>
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 16500</strong> </li>
                               </ul>
                           </div>
                     </div>
                     <div className="col-md-12 col-lg-4">
                     <div className="border p-2 rounded shadow">
                              <h5 className="">COACH  <PiSeatFill /> 21+1 SEAT</h5>
                               <ul type="none">
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 9000 </strong> </li>
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 15000</strong> </li>
                                  <li className="opacity-50"><IoCarSport className="h4 text-danger my-2"/> <strong>DAY :₹ 21000 </strong> </li>
                               </ul>
                           </div>
                     </div>
                 </div>
                 {/* INGULDING */}
                 <p className="card p-3 mt-3 bg-danger text-white h5">INGULDING : TOLLGATE & PARKING & DRIVER BATTA &  DIESEL CHARGES</p>
          </div>
       {/* package end */}
      <div data-aos="zoom-in-down" className="container my-3">
        <div className="row">
          <div className="col-md-12 col-lg-9 my-3 p-2">
            <div className="book-form p-2">
              <h2>BOOKING YOUR CAB</h2>
              <form onSubmit={onSubmit} >
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
                         <option value="TAVERA">TAVERA  8+1 SEAT</option>
                         <option value="INNOVA">INNOVA 7+1 SEAT</option>
                         <option value="ERTIGA">ERTIGA 7+1 seat</option>
                         <option value="TEMPO">TEMPO  14+1 SEAT</option>
                         <option value="COACH">COACH 21+1 SEAT</option>
                     </select>
                </div>
                <div className="form-group my-3">
                      <input type="number" 
                      placeholder="Number Of Person..."
                        name="Number Of Person" required className="form-control"
                      />
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
          <img src={images1} className="w-100" alt="" />

        </div>
      </div>
    </div>
  );
};

export default BookYourCab;
