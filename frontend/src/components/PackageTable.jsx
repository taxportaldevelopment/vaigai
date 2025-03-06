import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import { HiOutlineDownload } from "react-icons/hi";
import { BsEmojiFrown } from "react-icons/bs";
import jsPDF from 'jspdf'
import 'jspdf-autotable';
import ReactGA from "react-ga4";
// image
import search from "../assets/File-searching-amico.png"
const PackageTable = () => {
    const [bookingList,setBookingList] = useState([]);
    const [viewAll,setViewAll] = useState(false)
    const [from,setFrom] = useState();
    const [to,setTo] = useState();
    useEffect(()=>{     
      ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);
      ReactGA.send({ hitType: "pageview", page:window.location.pathname, title: "PackageTable.jsx" });
        const getAllBooking = async()=>{
            const {data} = await axios.get(`${import.meta.env.VITE_SERVER_APP_URL}/api/v1/getallusers`);
            setBookingList(data?.user)
            setViewAll(false)
        }
        getAllBooking()
    },[viewAll])
    

     const submitFilter = async()=>{
          let store = {
               from,
               to
          }
         const {data} = await axios.post(`${import.meta.env.VITE_SERVER_APP_URL}/api/v1/getfromandto/date`,store);
         setBookingList(data?.user)
     }
     
     const handleGenerate =async(id)=>{
       const userData = [];
     const {data} = await axios.get(`http://localhost:8000/api/v1/bookingdownload/${id}`);

      userData.push(data.user && data.user)
  const doc = new jsPDF();
  const title = "VAIGAI TRAVELS";
  const padding = 10;
  const titleWith = doc.getTextWidth(title);
  const center = (doc.internal.pageSize.width / 2) - (titleWith / 2);

  doc.text(title,center,padding);

  doc.autoTable({
      head:[["NO","DATE","DAYS","PARTY NAME","DRIVER NAME","TYPE","DESIGNATION","REASON","TOTAL KM","PER KM","TOTAL AMOUNT","DIESEL","DRIVER","TOLL AMOUNT","PROFIT AMT"]],
      body:userData.map((item,index)=>[index+1,item.date,item.days,item.partyname,item.drivername,item.type,item.designation,item.reason,item.totalkm,item.perkm,item.
        totalamount,item.diesel,item.driver,item.tollamount,item.profitamt]),
       styles:"center", 
      columnStyles:{
          0:{cellWidth:7,fontSize:5,textAlign:"center"},
          1:{cellWidth:13,fontSize:5,textAlign:"center"},
          2:{cellWidth:12,fontSize:5,textAlign:"center"},
          3:{cellWidth:16,fontSize:5,textAlign:"center"},
          4:{cellWidth:17,fontSize:5,textAlign:"center"},
          5:{cellWidth:12,fontSize:5,textAlign:"center"},
          6:{cellWidth:16,fontSize:5,textAlign:"center"},
          7:{cellWidth:12,fontSize:5,textAlign:"center"},
          8:{cellWidth:15,fontSize:5,textAlign:"center"},
          9:{cellWidth:16,fontSize:5,textAlign:"center"},
         10:{cellWidth:12,fontSize:5,textAlign:"center"},
         11:{cellWidth:12,fontSize:5,textAlign:"center"},
         12:{cellWidth:10,fontSize:5,textAlign:"center"},
         13:{cellWidth:10,fontSize:5,textAlign:"center"},
         14:{cellWidth:10,fontSize:5,textAlign:"center"},
      },
      headStyles:{
        fontSize:5,
        fillColor:"red",
      }
  });
  doc.save("vaigai.pdf")
}

   const download = ()=>{
        if(bookingList.length == 0){
           alert("Record Not Found")
           return;
        }

        const doc = new jsPDF();
        const title = "VAIGAI TRAVELS";
        const padding = 10;
        const titleWith = doc.getTextWidth(title);
        const center = (doc.internal.pageSize.width / 2) - (titleWith / 2);
      
        doc.text(title,center,padding);
      
        doc.autoTable({
            head:[["NO","DATE","DAYS","PARTY NAME","DRIVER NAME","TYPE","DESIGNATION","REASON","TOTAL KM","PER KM","TOTAL AMOUNT","DIESEL","DRIVER","TOLL AMOUNT","PROFIT AMT"]],
            body:bookingList.map((item,index)=>[index+1,item.date,item.days,item.partyname,item.drivername,item.type,item.designation,item.reason,item.totalkm,item.perkm,item.
              totalamount,item.diesel,item.driver,item.tollamount,item.profitamt]),
              styles:"center", 
            columnStyles:{
                0:{cellWidth:7,fontSize:5,textAlign:"center"},
                1:{cellWidth:13,fontSize:5,textAlign:"center"},
                2:{cellWidth:12,fontSize:5,textAlign:"center"},
                3:{cellWidth:16,fontSize:5,textAlign:"center"},
                4:{cellWidth:17,fontSize:5,textAlign:"center"},
                5:{cellWidth:12,fontSize:5,textAlign:"center"},
                6:{cellWidth:16,fontSize:5,textAlign:"center"},
                7:{cellWidth:12,fontSize:5,textAlign:"center"},
                8:{cellWidth:15,fontSize:5,textAlign:"center"},
                9:{cellWidth:16,fontSize:5,textAlign:"center"},
               10:{cellWidth:11,fontSize:5,textAlign:"center"},
               11:{cellWidth:12,fontSize:5,textAlign:"center"},
               12:{cellWidth:10,fontSize:5,textAlign:"center"},
               13:{cellWidth:10,fontSize:5,textAlign:"center"},
               14:{cellWidth:10,fontSize:5,textAlign:"center"},
            },
            headStyles:{
              fontSize:5,
              fillColor:"red",
            }
        });
        doc.save("vaigai.pdf")   
   }

  return (
    <div className='package-table-section container-fluid'>
   
        <div className="package-table-filter">
              <div className="filter-one">
              <form className='d-flex'>
                  <div className="filter-group p-2">
                    <label htmlFor="from-table">FROM</label><br />
                   <DatePicker
                       value={from}
                      id='date'
                      format="YYYY-MM-DD"
                      shadow={true}
                      name='date'
                    onChange={(e)=>setFrom(e.format("YYYY-MM-DD"))}
                    style={{width:"100%",height:"40px"}}
                  />
                  </div>
                  <div className="filter-group p-2">
                    <label htmlFor="from-table">TO</label><br />
                   <DatePicker
                    //    value={travelFilter}
                      id='date'
                      format="YYYY-MM-DD"
                      minDate={from}
                      shadow={true}
                      name='date'
                      onChange={(e)=>setTo(e.format("YYYY-MM-DD"))}
                    style={{width:"100%",height:"40px"}}
                  />
                  <button type='button' onClick={submitFilter}  className='btn btn-danger ms-2'>submit</button>
                  <button type='button' className='btn btn-dark ms-2' onClick={()=>setViewAll(true)}>View All</button>
                  <button type='button' className='btn btn-warning ms-2' onClick={download} >Download All</button> 
                  </div>
              </form> 
              </div>
        </div>
          <div className="section-package overflow-auto">
            <h3 className='p-3 opacity-50'>BOOKING ORDER LIST....</h3>
  
              {!bookingList.length == 0?
             <table className="table table-hover text-center">
             <thead className='table-dark'>
                       <tr className="booking-data-table">
                           <th>NO</th>
                           <th>DATE</th>
                           <th>DAYS</th>
                           <th>PARTY NAME</th>
                           <th>DRIVER NAME</th>
                           <th>TYPE</th>
                           <th>DESIGNATION</th>
                           <th>REASON</th>
                           <th>TOTAL KM</th>
                           <th>PER KM</th>
                           <th>TOTAL AMOUNT</th>
                           <th>DIESEL</th>
                           <th>DRIVER</th>
                           <th>TOLL AMOUNT</th>
                           <th>PROFIT AMT</th>
                            <th>DOWNLOAD</th> 
                       </tr>
            </thead>
               <tbody>
                
                    {
                        bookingList.map((item,index)=>(
                            <tr key={index} className="booking-data-table">
                                <td>{index+1}</td>
                                <td>{item.date}</td>
                                <td>{item.days}</td>
                                <td>{item.partyname}</td>
                                <td>{item.drivername}</td>
                                <td>{item.type}</td>
                                <td>{item.designation}</td>
                                <td>{item.reason}</td>
                                <td>{item.totalkm}</td>
                                <td>{item.perkm}</td>
                                <td>{item.totalamount}</td>
                                <td>{item.diesel}</td>
                                <td>{item.driver}</td>
                                <td>{item.tollamount}</td>  
                                <td>{item.profitamt}</td>
                                <td><h3><HiOutlineDownload className='text-danger' role='button' onClick={()=>handleGenerate(item._id)} /></h3></td>
                            </tr>
                        ))
                    }
               </tbody>
             </table>:
              <div className="d-flex justify-content-center">
                   <div>
                       <img src={search} height={130} alt="" />
                         <h2 className="h1 text-center"><BsEmojiFrown className="text-warning" /></h2>
                       <h3 className="text-danger">Sorry Record Not Found....</h3>
                   </div>
              </div>
            }           
          </div>
    </div>
  )
}

export default PackageTable
