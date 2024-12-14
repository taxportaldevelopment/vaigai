import {useEffect, useState} from "react";
import { MaduraiTour } from "./propsSection/OneDayProps";

const TourPlaces = () => {
    const [active,setActive] = useState("madurai")
    const [pages,setPages] = useState();
    const [loadings,setLoadings] = useState(false)

    const onClick = (event)=>{;
        switch(true){
          case event == "ONE DAY TOUR PACKAGES":
             setPages("")
             setLoadings(true)
            setTimeout(()=>{
                setLoadings(false)
                setPages()

            },1000)
            break
            case event == "HOLIDAY TOUR PACKAGES":
                setLoadings(true)
                setPages("")
                setTimeout(()=>{
                    setLoadings(false)
                    setPages()

                },1000)
             break   
             case event == "HONEYMOON TOUR PACKAGES":
                setLoadings(true)
                setPages("")
                setTimeout(()=>{
                    setLoadings(false)
                    setPages()
                },1000)
             break   
           default:
            setPages("")
            setLoadings(true)
             setTimeout(()=>{
                setLoadings(false)
                 setPages()
             },1000)
             
        }
        setActive(event)
    }

        useEffect(()=>{
          function getRefresh(){
               window.scrollTo(0, 0);
           }
           getRefresh()
        },[])
  return (
    <div className="tour-places">
         <div className="container-fluid">
              <div className="p-4">
                   <h4 className="text-center text-danger py-2">Madurai One Day Tour Packages</h4>
                   <p className="text-center opacity-50">Sai Tours and Travels are offering Madurai one day tour 
                    packages at an economical price. As you know, Madurai is one of 
                    the famous cities in all over Tamil Nadu. A lot of people come 
                    here every day to visit Meenakshi Amman Temple, Thirumalai Nayak palace, 
                    Pazhamudircholai Murugan temple, Arulmigu Kallazhagar temple, 
                    Thiruparankundram Murugan temple, Koodal Alagar Perumal temple, Mariamman 
                    Teppakulam, Gandhi Museum and etc. At once Get tariff and enjoy the trip peacefully.</p>
              </div>
              <div className="row">
                   <div className="col-md-12 col-lg-3">
                   <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("MADURAI")} style={{backgroundColor:(active == "madurai"?"red":""),color:(active == "madurai"?"white":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>MADURAI</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("RAMESHWARAM")} style={{backgroundColor:(active == "HOLIDAY TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>RAMESHWARAM</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("KANYAKUMARI")} style={{backgroundColor:(active == "HONEYMOON TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>KANYAKUMARI</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("PILGRIMAGE TOUR PACKAGES")} style={{backgroundColor:(active == "PILGRIMAGE TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>THANJAVUR</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("PILGRIMAGE TOUR PACKAGES")} style={{backgroundColor:(active == "PILGRIMAGE TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>TRICHY</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("PILGRIMAGE TOUR PACKAGES")} style={{backgroundColor:(active == "PILGRIMAGE TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>OOTY</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("PONDICHERY")} style={{backgroundColor:(active == "PILGRIMAGE TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>PONDICHERY</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("CHETTINAD")} style={{backgroundColor:(active == "PILGRIMAGE TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>CHETTINAD</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("TIRUPATI")} style={{backgroundColor:(active == "PILGRIMAGE TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>TIRUPATI</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("ARUPADAI VEEDU")} style={{backgroundColor:(active == "PILGRIMAGE TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>ARUPADAI VEEDU</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("Navagraham Temple")} style={{backgroundColor:(active == "PILGRIMAGE TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>Navagraham Temple</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("MUNNAR")} style={{backgroundColor:(active == "PILGRIMAGE TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>MUNNAR</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("THEKKADY")} style={{backgroundColor:(active == "PILGRIMAGE TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>THEKKADY</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("ALAPPUZHA")} style={{backgroundColor:(active == "PILGRIMAGE TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>ALAPPUZHA</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("COCHIN")} style={{backgroundColor:(active == "PILGRIMAGE TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>COCHIN</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("MYSORE")} style={{backgroundColor:(active == "PILGRIMAGE TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>MYSORE</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("TRIVANDRUM")} style={{backgroundColor:(active == "PILGRIMAGE TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>TRIVANDRUM</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("KODAIKANAL")} style={{backgroundColor:(active == "PILGRIMAGE TOUR PACKAGES"?"#00bbf9":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>KODAIKANAL</p>
                       </div>
                  </div>

                   </div>
                   <div className="col-md-12 col-lg-9">
                       <MaduraiTour/>
                   </div>
              </div>
         </div>
    </div>
  )
}

export default TourPlaces
