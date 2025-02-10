import {useEffect, useState} from "react";
import { HolidayTour, Honeymoon, OneDayPackages, Pilgrimage } from "./propsSection/OneDayProps";
import Loading from "./layout/Loading";
const OneDayPackage = () => {
    const [active,setActive] = useState("ONE DAY TOUR PACKAGES")
    const [pages,setPages] = useState(<OneDayPackages/>);
    const [loadings,setLoadings] = useState(false)

    const onClick = (event)=>{;
        switch(true){
          case event == "ONE DAY TOUR PACKAGES":
             setPages("")
             setLoadings(true)
            setTimeout(()=>{
                setLoadings(false)
                setPages(<OneDayPackages/>)

            },1000)
            break
            case event == "HOLIDAY TOUR PACKAGES":
                setLoadings(true)
                setPages("")
                setTimeout(()=>{
                    setLoadings(false)
                    setPages(<HolidayTour/>)

                },1000)
             break   
             case event == "HONEYMOON TOUR PACKAGES":
                setLoadings(true)
                setPages("")
                setTimeout(()=>{
                    setLoadings(false)
                    setPages(<Honeymoon/>)
                },1000)
             break   
           default:
            setPages("")
            setLoadings(true)
             setTimeout(()=>{
                setLoadings(false)
                 setPages(<Pilgrimage/>)
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
    <div className='container-fluid py-5 bg-dark text-white'>
        <h2 className='text-center py-3'>TOUR PACKAGES</h2>
        <div className="row">
             <div className="col-md-12 col-lg-3">
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("ONE DAY TOUR PACKAGES")} style={{backgroundColor:(active == "ONE DAY TOUR PACKAGES"?"#dc3545":""),color:(active == "ONE DAY TOUR PACKAGES"?"#fff":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>ONE DAY TOUR PACKAGES</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("HOLIDAY TOUR PACKAGES")} style={{backgroundColor:(active == "HOLIDAY TOUR PACKAGES"?"#dc3545":""),color:(active == "HOLIDAY TOUR PACKAGES"?"#fff":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>HOLIDAY TOUR PACKAGES</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("HONEYMOON TOUR PACKAGES")} style={{backgroundColor:(active == "HONEYMOON TOUR PACKAGES"?"#dc3545":""),color:(active == "HONEYMOON TOUR PACKAGES"?"#fff":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>HONEYMOON TOUR PACKAGES</p>
                       </div>
                  </div>
                  <div className="one-day-packgae-left-side m-2">
                       <div role="button" onClick={()=>onClick("PILGRIMAGE TOUR PACKAGES")} style={{backgroundColor:(active == "PILGRIMAGE TOUR PACKAGES"?"#dc3545":""),color:(active == "PILGRIMAGE TOUR PACKAGES"?"#fff":"")}} className="package-links rounded p-1 border d-flex justify-content-center align-items-center">
                            <p>PILGRIMAGE TOUR PACKAGES</p>
                       </div>
                  </div>
             </div>
             <div className="col-md-12 col-lg-9 p-2">
                   {/* <OneDayPackages/> */}
                    
                    {loadings?<Loading/>:pages}
             </div>
        </div>
        
    </div>
  )
}

export default OneDayPackage
