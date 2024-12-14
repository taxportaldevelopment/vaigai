import {Link} from "react-router-dom"
import onedat1 from "../../assets/one-day/all-compo/coakers-walk.jpg";
import onedat2 from "../../assets/one-day/all-compo/dindigul-rock-fort.jpg";
import onedat3 from "../../assets/one-day/all-compo/doiphin-nose.jpg";
import onedat4 from "../../assets/one-day/all-compo/guna-cave.jpg";
import onedat5 from "../../assets/one-day/all-compo/palani.jpg";
import onedat6 from "../../assets/one-day/all-compo/kurinji-andaver.jpg";
import onedat7 from "../../assets/one-day/all-compo/mannavenur-lake.jpg";
import onedat8 from "../../assets/one-day/all-compo/pine-forest.jpg";
import onedat9 from "../../assets/one-day/all-compo/poombarai-viilage.jpg";
import onedat10 from "../../assets/one-day/all-compo/silver-cascade-falls.jpg";
import onedat11 from "../../assets/one-day/all-compo/vattakanal-waterfalls.jpg";

import onedat12 from "../../assets/one-day/honeymoon-3.png";
import onedat13 from "../../assets/Pilgrimage/Pilgrimage-1.jpg";
import onedat14 from "../../assets/Pilgrimage/Pilgrimage-2.jpg";
import onedat15 from "../../assets/Pilgrimage/Pilgrimage-3.jpg";
import onedat16 from "../../assets/Pilgrimage/Pilgrimage-4.jpg";
import onedat17 from "../../assets/Pilgrimage/Pilgrimage-5.jpg";
import onedat18 from "../../assets/Pilgrimage/Pilgrimage-6.jpg";
// tour places packages
import madurai1 from "../../assets/madurai/sri-meenakshi-temple.jpg";
import madurai2 from "../../assets/madurai/Thiruparankundaram-place.jpg";
import madurai3 from "../../assets/madurai/Alakar-kovil.png";
import madurai4 from "../../assets/madurai/gandhi-museum.jpg";
import madurai5 from "../../assets/madurai/marriyamman-water-tank.jpg";
import madurai6 from "../../assets/madurai/thirumalai-nayakar-mahal.jpg";
import madurai7 from "../../assets/madurai/alagar-kovil.jpg";
// Rameshwaram
import rameshwaram1 from "../../assets/RAMESHWARAM/sri-ramanatha-swami-temple.jpg";
import rameshwaram2 from "../../assets/RAMESHWARAM/akkini-theertham.jpg";
import rameshwaram3 from "../../assets/RAMESHWARAM/thanuskodi.jpg";
import rameshwaram4 from "../../assets/RAMESHWARAM/ramarpalam.jpg";
import rameshwaram5 from "../../assets/RAMESHWARAM/lakshmanatheertham.jpg";
import rameshwaram6 from "../../assets/RAMESHWARAM/abdulkalam-memorial.jpg";
import rameshwaram7 from "../../assets/RAMESHWARAM/bamban-bridge.jpg";
import rameshwaram8 from "../../assets/RAMESHWARAM/panchamukhi hanuman.png";
import rameshwaram9 from "../../assets/RAMESHWARAM/Ramar Patham.png";
// Kanyakumari
import Kanyakumari1 from "../../assets/Kanyakumari/Vivekandar-rock.jpg";
import Kanyakumari2 from "../../assets/Kanyakumari/Parvathi-Temple.jpg";
import Kanyakumari3 from "../../assets/Kanyakumari/Wax-Museum.jpg";
import Kanyakumari4 from "../../assets/Kanyakumari/Sunrise-Point.jpg";
import Kanyakumari5 from "../../assets/Kanyakumari/Sunset-Point.jpg";
import Kanyakumari6 from "../../assets/Kanyakumari/Thiriveni-Sangamam.jpg";
import Kanyakumari7 from "../../assets/Kanyakumari/Gandhi-Memorial.jpg";
// Thanjavur
import thanjavur1 from "../../assets/Thanjavur/Sri-Pragatheeswarar-Temple.jpg";
import thanjavur2 from "../../assets/Thanjavur/vinayagar-fort.png";
import thanjavur3 from "../../assets/Thanjavur/Sivaganga-Garden.jpg";
import thanjavur4 from "../../assets/Thanjavur/Punnai-Nallur-Mariamman-Temple.jpg";

export const OneDayPackages = ()=>{

    return(
        <div className="container-fluid">
             <div className="row">
                  <div className="col-md-12 col-lg-4">
                        <img src={onedat1} className="w-100 p-1" alt="" />
                        <h6 className="text-uppercase py-3">coakers walk</h6>
                        <div className="btn-section">
                        <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
                        </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                        <img src={onedat2} className="w-100 p-1" alt="" />
                        <h6 className="text-uppercase py-3">dindigul rock fort</h6>
                        <div className="btn-section">
                        <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
                        </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                        <img src={onedat3} className="w-100 p-1" alt="" />
                        <h6 className="text-uppercase py-3">doiphin nose</h6>
                        <div className="btn-section">
                        <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
                        </div>
                  </div>
             </div>
             <div className="row mt-2">
                  <div className="col-md-12 col-lg-4">
                        <img src={onedat4} className="w-100 p-1" alt="" />
                        <h6 className="text-uppercase py-3">doiphin nose</h6>
                        <div className="btn-section">
                        <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
                        </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                        <img src={onedat5} className="w-100 p-1" alt="" />
                        <h6 className="text-uppercase py-3">guna cave</h6>
                        <div className="btn-section">
                        <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
                        </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                        <img src={onedat6} className="w-100 p-1" alt="" />
                        <h6 className="text-uppercase py-3">kurinji andaver</h6>
                        <div className="btn-section">
                        <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
                        </div>
                  </div>
             </div>
             <div className="row mt-2">
                  <div className="col-md-12 col-lg-4">
                        <img src={onedat7} className="w-100 p-1" alt="" />
                        <h6 className="text-uppercase py-3">mannavenur lake</h6>
                        <div className="btn-section">
                        <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
                        </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                        <img src={onedat8} className="w-100 p-1" alt="" />
                        <h6 className="text-uppercase py-3">pine forest</h6>
                        <div className="btn-section">
                        <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
                        </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                        <img src={onedat9} className="w-100 p-1" alt="" />
                        <h6 className="text-uppercase py-3">poombarai viilage</h6>
                        <div className="btn-section">
                        <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
                        </div>
                  </div>
             </div>

             <div className="row mt-2">
                  <div className="col-md-12 col-lg-4">
                        <img src={onedat10} className="w-100 p-1" alt="" />
                        <h6 className="text-uppercase py-3">silver cascade falls</h6>
                        <div className="btn-section">
                        <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
                        </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                        <img src={onedat11} className="w-100 p-1" alt="" />
                        <h6 className="text-uppercase py-3">vattakanal waterfalls</h6>
                        <div className="btn-section">
                        <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
                        </div>
                  </div>
             </div>
        </div>
    )
}

export const HolidayTour = ()=>{
     
    return(
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-12 col-lg-4">
              <img src={onedat7} className="w-100 p-1" alt="" />
              <h6 className="text-uppercase py-3">HOLIDAY TOUR PACKAGE 1</h6>
              <h6 className="text-center text-primary">(4 Nights 5 Days)</h6>
              <p className="text-center">Dindigul, Rameswaram, Kodaikanal, Dindigul</p>
              <div className="btn-section">
                  <Link to={"/contact"}> <button className="btn-btn m-1">View</button></Link>
              </div>
        </div>
        <div className="col-md-12 col-lg-4">
              <img src={onedat8} className="w-100 p-1" alt="" />
              <h6 className="text-uppercase py-3">HOLIDAY TOUR PACKAGE 2</h6>
              <h6 className="text-center text-primary">(6 Nights 7 Days)</h6>
              <p className="text-center">Dindigul, Kodaikannal, Ooty, Mysore, Bangalore ....</p>
              <div className="btn-section">
              <Link to={"/contact"}> <button className="btn-btn m-1">View</button></Link>
              </div>
        </div>
        <div className="col-md-12 col-lg-4">
              <img src={onedat9} className="w-100 p-1" alt="" />
              <h6 className="text-uppercase py-3">HOLIDAY TOUR PACKAGE 3</h6>
              <h6 className="text-center text-primary">(6 Nights 7 Days)</h6>
              <p className="text-center">Trichy, Thanjavur, Rameswaram, Dindigul, Kanniyakumari, Trivandrum ....</p>
              <div className="btn-section">
              <Link to={"/contact"}> <button className="btn-btn m-1">View</button></Link>
              </div>
        </div>
   </div>
        </div>
    )
}

export const Honeymoon = ()=>{
    return(
        <div className="container-fluid">
       <div className="row">
        <div className="col-md-12 col-lg-4">
              <img src={onedat10} className="w-100 p-1" alt="" />
              <h6 className="text-uppercase py-3">silver cascade falls</h6>
              <h6 className="text-center text-primary">(4 Nights 5 Days)</h6>
              <p className="text-center">Dindigul, Rameswaram, Kodaikanal, Dindigul</p>
              <div className="btn-section">
                   <button className="btn-btn m-1">GET TARIFF</button>
              </div>
        </div>
        <div className="col-md-12 col-lg-4">
              <img src={onedat11} className="w-100 p-1" alt="" />
              <h6 className="text-uppercase py-3">vattakanal waterfalls</h6>
              <h6 className="text-center text-primary">(6 Nights 7 Days)</h6>
              <p className="text-center">Dindigul, Kodaikannal, Ooty, Mysore, Bangalore ....</p>
              <div className="btn-section">
                   <button className="btn-btn m-1">GET TARIFF</button>
              </div>
        </div>
        <div className="col-md-12 col-lg-4">
              <img src={onedat12} className="w-100 p-1" alt="" />
              <h6 className="text-uppercase py-3">kodaikanal</h6>
              <h6 className="text-center text-primary">(6 Nights 7 Days)</h6>
              <p className="text-center">Trichy, Thanjavur, Rameswaram, Dindigul, Kanniyakumari, Trivandrum ....</p>
              <div className="btn-section">
                   <button className="btn-btn m-1">GET TARIFF</button>
              </div>
        </div>
       </div>
        </div>
    )
}
// PILGRIMAGE
export const Pilgrimage = ()=>{
    return(
        <div className="container-fluid">
                    <div className="row">
        <div className="col-md-12 col-lg-4">
              <img src={onedat13} className="w-100 p-1" alt="" />
              <h6 className="text-uppercase py-3">PILGRIMS TOUR PACKAGE 1</h6>
              <h6 className="text-center text-primary">(4 Nights 5 Days)</h6>
              <p className="text-center">DINDIGUL, Rameswaram, Kanniyakumari, Trivandrum</p>
              <div className="btn-section">
              <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
              </div>
        </div>
        <div className="col-md-12 col-lg-4">
              <img src={onedat14} className="w-100 p-1" alt="" />
              <h6 className="text-uppercase py-3">PILGRIMS TOUR PACKAGE 2</h6>
              <h6 className="text-center text-primary">(6 Nights 7 Days)</h6>
              <p className="text-center">Chennai, Thiruppathi, Thiruvannamalai, Trichy, Kodaikanal, Madurai, Rameshwaram, Kaniyakumari, Trivandrum..</p>
              <div className="btn-section">
              <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
              </div>
        </div>
        <div className="col-md-12 col-lg-4">
              <img src={onedat15} className="w-100 p-1" alt="" />
              <h6 className="text-uppercase py-3">PILGRIMS TOUR PACKAGE 3</h6>
              <h6 className="text-center text-primary">(6 Nights 7 Days)</h6>
              <p className="text-center">Chennai, Thirupathi, Pondichery, Thanjavur, Rameshwaram, Kaniyakumari, Madurai ...</p>
              <div className="btn-section">
              <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
              </div>
        </div>
       </div>
       <div className="row mt-2">
        <div className="col-md-12 col-lg-4">
              <img src={onedat16} className="w-100 p-1" alt="" />
              <h6 className="text-uppercase py-3">PILGRIMS TOUR PACKAGE 4</h6>
              <h6 className="text-center text-primary">(4 Nights 5 Days)</h6>
              <p className="text-center">ARUPADAI VEEDU PACKAGE .</p>
              <div className="btn-section">
              <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
              </div>
        </div>
        <div className="col-md-12 col-lg-4">
              <img src={onedat17} className="w-100 p-1" alt="" />
              <h6 className="text-uppercase py-3">PILGRIMS TOUR PACKAGE 6</h6>
              <h6 className="text-center text-primary">(6 Nights 7 Days)</h6>
              <p className="text-center">KUMBAKONAM NAVAGIRAGAM TEMPLE PACKAGE ....</p>
              <div className="btn-section">
              <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
              </div>
        </div>
        <div className="col-md-12 col-lg-4">
              <img src={onedat18} className="w-100 p-1" alt="" />
              <h6 className="text-uppercase py-3">PILGRIMS TOUR PACKAGE 6</h6>
              <h6 className="text-center text-primary">(6 Nights 7 Days)</h6>
              <p className="text-center">DINDIGUL TO SABARI MALAI ...</p>
              <div className="btn-section">
                <Link to={"/contact"}><button className="btn-btn m-1">View</button></Link>
                   
              </div>
        </div>
       </div>
        </div>
    )
}

// madurai tour
export const MaduraiTour = ()=>{
     return(
         <div className="container-fluid">
        <div className="row">
         <div className="col-md-12 col-lg-4">
               <img src={madurai1} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Sri Meenakshi Sundareswarar Temple</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
         <div className="col-md-12 col-lg-4">
               <img src={madurai2} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Thiruparankundaram Temple</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
         <div className="col-md-12 col-lg-4">
               <img src={madurai3} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Alagar Kovil</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
        </div>
        <div className="row mt-2">
         <div className="col-md-12 col-lg-4">
               <img src={madurai4} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Gandhi Museum</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
         <div className="col-md-12 col-lg-4">
               <img src={madurai5} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Marriyamman Water Tank</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
         <div className="col-md-12 col-lg-4">
               <img src={madurai6} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Thirumalai Nayakar Mahal</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
        </div>
        <div className="row mt-2">
         <div className="col-md-12 col-lg-4">
               <img src={madurai7} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Pazhamudhircholai Murugan Temple</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
        </div>
         </div>
     )
 }
// RAMESHWARAM
export const Rameshwarem = ()=>{
     return(
         <div className="container-fluid">
        <div className="row">
         <div className="col-md-12 col-lg-4">
               <img src={rameshwaram1} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Sri Ramanatha Swamy Temple</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
         <div className="col-md-12 col-lg-4">
               <img src={rameshwaram2} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Agni Theertham</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
         <div className="col-md-12 col-lg-4">
               <img src={rameshwaram3} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Dhanushkodi</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
        </div>
        <div className="row mt-2">
         <div className="col-md-12 col-lg-4">
               <img src={rameshwaram4} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Ramar palam</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
         <div className="col-md-12 col-lg-4">
               <img src={rameshwaram5} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Lakshmanatheertham</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
         <div className="col-md-12 col-lg-4">
               <img src={rameshwaram6} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">A.P.J Abdul Kalam Memorial</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
        </div>
        <div className="row mt-2">
         <div className="col-md-12 col-lg-4">
               <img src={rameshwaram7} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Pamban Bridge</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
         <div className="col-md-12 col-lg-4">
               <img src={rameshwaram8} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Panchamukhi Hanuman Temple</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
         <div className="col-md-12 col-lg-4">
               <img src={rameshwaram9} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Ramar Patham Temple</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
        </div>
         </div>
     )
 }
//  KANYAKUMARI
export const Kanyakumari = ()=>{
     return(
         <div className="container-fluid">
        <div className="row">
         <div className="col-md-12 col-lg-4">
               <img src={Kanyakumari1} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Vivekananda rock</h6>
               <div className="btn-section"> 
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
         <div className="col-md-12 col-lg-4">
               <img src={Kanyakumari2} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Parvathi Temple</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
         <div className="col-md-12 col-lg-4">
               <img src={Kanyakumari3} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Wax Museum</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
        </div>
        <div className="row mt-2">
         <div className="col-md-12 col-lg-4">
               <img src={Kanyakumari4} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Sunrise Point</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
         <div className="col-md-12 col-lg-4">
               <img src={Kanyakumari5} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Sunset Point</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
         <div className="col-md-12 col-lg-4">
               <img src={Kanyakumari6} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Thiriveni Sangamam</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
        </div>
        <div className="row mt-2">
         <div className="col-md-12 col-lg-4">
               <img src={Kanyakumari7} className="w-100 p-1" alt="" />
               <h6 className="text-uppercase py-3">Gandhi Memorial</h6>
               <div className="btn-section">
                    <button className="btn-btn m-1">GET TARIFF</button>
               </div>
         </div>
        </div>
         </div>
     )
 }
// THANJAVUR
export const Thanjavur = ()=>{
     return(
          <div className="container-fluid">
         <div className="row">
          <div className="col-md-12 col-lg-4">
                <img src={thanjavur1} className="w-100 p-1" alt="" />
                <h6 className="text-uppercase py-3">Sri Pragatheeswarar Temple</h6>
                <div className="btn-section"> 
                     <button className="btn-btn m-1">GET TARIFF</button>
                </div>
          </div>
          <div className="col-md-12 col-lg-4">
                <img src={thanjavur2} className="w-100 p-1" alt="" />
                <h6 className="text-uppercase py-3">Vijayanagar Fort</h6>
                <div className="btn-section">
                     <button className="btn-btn m-1">GET TARIFF</button>
                </div>
          </div>
          <div className="col-md-12 col-lg-4">
                <img src={thanjavur3} className="w-100 p-1" alt="" />
                <h6 className="text-uppercase py-3">Sivaganga Garden</h6>
                <div className="btn-section">
                     <button className="btn-btn m-1">GET TARIFF</button>
                </div>
          </div>
         </div>
         <div className="row mt-2">
          <div className="col-md-12 col-lg-4">
                <img src={thanjavur4} className="w-100 p-1" alt="" />
                <h6 className="text-uppercase py-3">Punnai Nallur Mariamman Temple</h6>
                <div className="btn-section">
                     <button className="btn-btn m-1">GET TARIFF</button>
                </div>
          </div>
         </div>

          </div>
      )
}
// TRICHY
export const Trichy = ()=>{
     return(
          <div className="container-fluid">
         <div className="row">
          <div className="col-md-12 col-lg-4">
                <img src={thanjavur1} className="w-100 p-1" alt="" />
                <h6 className="text-uppercase py-3">Sri Pragatheeswarar Temple</h6>
                <div className="btn-section"> 
                     <button className="btn-btn m-1">GET TARIFF</button>
                </div>
          </div>
          <div className="col-md-12 col-lg-4">
                <img src={thanjavur2} className="w-100 p-1" alt="" />
                <h6 className="text-uppercase py-3">Vijayanagar Fort</h6>
                <div className="btn-section">
                     <button className="btn-btn m-1">GET TARIFF</button>
                </div>
          </div>
          <div className="col-md-12 col-lg-4">
                <img src={thanjavur3} className="w-100 p-1" alt="" />
                <h6 className="text-uppercase py-3">Sivaganga Garden</h6>
                <div className="btn-section">
                     <button className="btn-btn m-1">GET TARIFF</button>
                </div>
          </div>
         </div>
         <div className="row mt-2">
          <div className="col-md-12 col-lg-4">
                <img src={thanjavur4} className="w-100 p-1" alt="" />
                <h6 className="text-uppercase py-3">Punnai Nallur Mariamman Temple</h6>
                <div className="btn-section">
                     <button className="btn-btn m-1">GET TARIFF</button>
                </div>
          </div>
         </div>

          </div>
      )
}