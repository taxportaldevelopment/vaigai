import {useState} from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import images from "../assets/QR-Code-techdata.jpg";
import images1 from "../assets/footertop.jpg"
import brandPhoto from "../assets/brand-banner.jpeg";

const BookYourCab = () => {
  const [value, setValue] = useState(new Date());
  console.log(value);
  const onChange = (e) => {
    // console.log(e.toDate().toLocaleDateString("en-IN"));
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
      <div data-aos="zoom-in-down" className="container my-3">
        <div className="row">
          <div className="col-md-12 col-lg-9 my-3 p-2">
            <div className="book-form p-2">
              <h2>BOOKING YOUR CAB</h2>
              <form>
                <div className="form-group border px-3 rounded">
                  <DatePicker
                    
                    // value={value}
                    format="DD/MM/YYYY"
                    minDate={new Date()}
                    hideYear={true}
                    shadow={true}
                    onChange={onChange}
                    style={{width:"100%",height:"40px",border:"none",outline:"none"}}
                    placeholder="Pickup Date *  "
                  />
                </div>
                <div className="form-group border px-3 rounded my-3">
                  <DatePicker
                    
                    // value={value}
                    format="DD/MM/YYYY"
                    minDate={new Date()}
                    hideYear={true}
                    shadow={true}
                    onChange={onChange}
                    style={{width:"100%",height:"40px",border:"none",outline:"none"}}
                    placeholder="Departure Date *  "
                  />
                </div>
                <div className="form-group my-3">
                     <select name="" className="form-control" id="">
                         <option value="">--Select Car Type*</option>
                         <option value="">SEDAN</option>
                         <option value="">HATCHBACK</option>
                         <option value="">SUV</option>
                         <option value="">ELITE</option>
                     </select>
                </div>
                <div className="form-group my-3">
                     <select name="" className="form-control" id="">
                         <option value="">--Number Of Person*</option>
                         <option value="">1</option>
                         <option value="">2</option>
                         <option value="">3</option>
                         <option value="">4</option>
                         <option value="">5</option>
                     </select>
                </div>
                <div className="form-group my-3">
                     <input type="text"
                       className="form-control"
                       placeholder="Name:*"
                     />
                </div>
                <div className="form-group my-3">
                     <input type="text"
                       className="form-control"
                       placeholder="Address:*"
                     />
                </div>
                <div className="form-group my-3">
                     <input type="text"
                       className="form-control"
                       placeholder="Email:*"
                     />
                </div>
                <div className="form-group my-3">
                     <input type="text"
                       className="form-control"
                       placeholder="Phone:*"
                     />
                </div>
                <div className="form-group my-3">
                     <textarea 
                     name="" 
                     id="" 
                     cols="30" 
                     rows="4"
                      className="form-control"
                      placeholder="Message"
                      ></textarea>
                </div>
                <div className="form-group">
                     <button className="btn btn-danger">send</button>
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
              <div className="bank-details border shadow my-3 p-2 rounded">
                   <h5 className="text-center py-2 bank-head-line">Bank Detail </h5>
                   <p className="h6 opacity-75">Account Name : vaigai travel</p>
                   <p className="h6 opacity-75">Account NO : *******786</p>
                   <p className="h6 opacity-75">Bank Name  : ICIC BANK</p>
                   <p className="h6 opacity-75">Branch : Dindigul</p>
                   <p className="h6 opacity-75">IFSC Code : CNRB000***</p>
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
