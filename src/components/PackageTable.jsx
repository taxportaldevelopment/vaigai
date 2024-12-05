import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import { HiOutlineDownload } from "react-icons/hi";
const PackageTable = () => {
    const [bookingList,setBookingList] = useState([]);
    const [from,setFrom] = useState();
    const [to,setTo] = useState();
    useEffect(()=>{
        const getAllBooking = async()=>{
            const {data} = await axios.get(`http://localhost:8000/api/v1/getallusers`);
            setBookingList(data?.user)
        }
        getAllBooking()
    },[])
    console.log(from,to);
    

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
                  <button type='button'  className='btn btn-danger ms-2'>submit</button>
                  {/* <button type='button' className='btn btn-primary ms-2' onClick={viewAll}>View All</button> */}
                  {/* <button type='button' className='btn btn-success' onClick={handleGenerate} >GENERATE</button> */}
                  </div>
              </form> 
              </div>
        </div>
          <div className="section-package overflow-auto">
            <h2 className='p-3'>BOOKING ORDER</h2>
             <table className="table table-hover">
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
             </table>
          </div>
    </div>
  )
}

export default PackageTable
