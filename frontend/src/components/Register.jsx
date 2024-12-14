import { useEffect, useState } from 'react'
import DatePicker from "react-multi-date-picker";
import { useForm } from 'react-hook-form';
// import { HiOutlineDownload } from "react-icons/hi";
import axios from "axios";
// import jsPDF from 'jspdf'
// import 'jspdf-autotable'
const Register = () => {
     
     const [statusActive,setStatusActive] = useState(true)
     const [getData,setGetData] = useState([]);
     const [showMessage,setShowMessage] = useState("");
    //  const [travelFilter,setTravelFilter] = useState();
      
    useEffect(()=>{

       if(statusActive){
         async function getalluser(){
              const {data} = await axios.get(`${import.meta.env.VITE_SERVER_APP_URL}/api/v1/getallusers`);
              setGetData(data?.user)
              setStatusActive(false)
          }  
          getalluser() 
       }
    },[statusActive])

   console.log(getData);
   

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      
      const [value,setValue] = useState(new Date())
      const [userData,setUserData] = useState({
        days:"",
        partyname:"",
        drivername:"",
        type:"",
        designation:"",
        reason:"",
        totalkm:"",
        perkm:"",
        totalamount:"",
        diesel:"",
        driver:"",
        tollamount:"",
        profitamt:""
      });

      const onChange = (e)=>{
          setUserData({...userData,[e.target.name]:e.target.value})
      }

      const onSubmit = async()=>{
           const userdata = {
                date:value,
                days:userData.days,
                partyname:userData.partyname,
                drivername:userData.drivername,
                type:userData.type,
                designation:userData.designation,
                reason:userData.reason,
                totalkm:userData.totalkm,
                perkm:userData.perkm,
                totalamount:parseInt(userData.totalkm) * parseInt(userData.perkm),
                diesel:userData.diesel,
                driver:userData.driver,
                tollamount:userData.tollamount,
                profitamt:parseInt(userData.totalkm) * parseInt(userData.perkm) - parseInt(userData.diesel)-parseInt(userData.driver)
           }

             try{
                setShowMessage("Sending...")
               const {data} = await axios.post(`${import.meta.env.VITE_SERVER_APP_URL}/api/v1/userdetails`,userdata);
                 if(data.success){
                     setShowMessage("Pending...")
                 }
             }catch(err){
                 setShowMessage(err.message)
             }finally{
                 setShowMessage("successfilly submit")
                           setUserData({
                            days:"",
                            partyname:"",
                            drivername:"",
                            type:"",
                            designation:"",
                            reason:"",
                            totalkm:"",
                            perkm:"",
                            totalamount:"",
                            diesel:"",
                            driver:"",
                            tollamount:"",
                            profitamt:""
                          })
             }  
      }

      const dateChange = (e)=>{
        //    console.log(e.toDate().toLocaleDateString("en-IN"));
           setValue(e.toDate().toLocaleDateString("en-IN"));
      }
// filter submit
// const Filtersubmit = async()=>{
//          let filterDate = {
//               date:travelFilter
//          }
//     const {data} = await axios.post(`http://localhost:8000/api/v1/getsinledata`,filterDate);
//     setGetData(data?.user)
     
// }
      //  viewAll
    //   const viewAll = ()=>{
    //     setStatusActive(true)
    //   }


    //  const handleGenerate =async(id)=>{
    //         const userData = [];
    //        const {data} = await axios.get(`http://localhost:8000/api/v1/bookingdownload/${id}`);

    //         userData.push(data.user && data.user)
    //     const doc = new jsPDF();
    //     const title = "VAIGAI TRAVELS";
    //     const padding = 10;
    //     const titleWith = doc.getTextWidth(title);
    //     const center = (doc.internal.pageSize.width / 2) - (titleWith / 2);

    //     doc.text(title,center,padding);

    //     doc.autoTable({
    //         head:[["NO","DATE","DAYS","PARTY NAME","DRIVER NAME","TYPE","DESIGNATION","REASON","TOTAL KM","PER KM","TOTAL AMOUNT","DIESEL","DRIVER","PROFIT AMT"]],
    //         body:userData.map((item,index)=>[index+1,item.date,item.days,item.partyname,item.drivername,item.type,item.designation,item.reason,item.totalkm,item.perkm,item.
    //           totalamount,item.diesel,item.driver,item.profitamt]),
    //         columnStyles:{
    //             0:{cellWidth:7,fontSize:5,textAlign:"center"},
    //             1:{cellWidth:12,fontSize:5,textAlign:"center"},
    //             2:{cellWidth:12,fontSize:5,textAlign:"center"},
    //             3:{cellWidth:16,fontSize:5,textAlign:"center"},
    //             4:{cellWidth:17,fontSize:5,textAlign:"center"},
    //             5:{cellWidth:12,fontSize:5,textAlign:"center"},
    //             6:{cellWidth:16,fontSize:5,textAlign:"center"},
    //             7:{cellWidth:12,fontSize:5,textAlign:"center"},
    //             8:{cellWidth:15,fontSize:5,textAlign:"center"},
    //             9:{cellWidth:16,fontSize:5,textAlign:"center"},
    //            10:{cellWidth:12,fontSize:5,textAlign:"center"},
    //            11:{cellWidth:12,fontSize:5,textAlign:"center"},
    //            12:{cellWidth:10,fontSize:5,textAlign:"center"},
    //         },
    //         headStyles:{
    //           fontSize:5,
    //           fillColor:"red",
    //         }
    //     });
    //     doc.save("vaigai.pdf")
    //  }

  return (
    <div>
         <div className="form-section container position-relative p-3">
                <h2 className='text-center' role='button' >Register Form</h2>
                <div className="alert-box position-absolute top-0 w-100">
                    {showMessage && showMessage?<h5 className='alert alert-success w-100'>{showMessage}</h5>:""}
                </div>
             <form onSubmit={handleSubmit(onSubmit)} >
                 <div className="row">
                    <div className="col-md-6 col-lg-4">
                       <div className="form-group">
                          <label htmlFor="date" className='py-2'>Date *</label><br />
                          <DatePicker
                      id='date'
                      format="DD/MM/YYYY"
                      minDate={new Date()}
                      shadow={true}
                      name='date'
                    //   {...register('date', { required: true })}
                    onChange={dateChange}
                    style={{width:"100%",height:"40px"}}
                  />
                       </div>
                    {/* {value==""?<p className='text-danger'>Please Enter Your Date</p>:""} */}
                    </div>
                     <div className="col-md-6 col-lg-4">
                     <div className="form-group">
                          <label htmlFor="days" className='py-2' >Days *</label><br />
                           <select  id='days' name='days' 
                            className='form-control'
                            value={userData.days}
                            {...register('days', { required: true })}
                            onChange={onChange}
                           >
                               <option value="">--select days--</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                               <option value="5">5</option>
                               <option value="6">6</option>
                           </select>
                           {errors.days && <p className='text-danger'>Please Enter Days.</p>}
                       </div>
                     </div>
                     <div className="col-md-6 col-lg-4">
                     <div className="form-group">
                          <label htmlFor="partyname" className='py-2'>Party Name *</label><br />
                            <input type="text"
                              id='partyname'
                              name='partyname'
                              placeholder='Party Name...'
                              className='form-control'
                              value={userData.partyname}
                              {...register("partyname",{required:true})}
                              onChange={onChange}
                            />
                            {errors.partyname && <p className='text-danger'>Enter Party Name.</p>}
                       </div>
                     </div>
                 </div>

                 <div className="row">
                    <div className="col-md-6 col-lg-4">
                       <div className="form-group">
                          <label htmlFor="drivername" className='py-2'>Driver Name *</label><br />
                          <input type="text"
                              id='drivername'
                              name='drivername'
                              placeholder='Drivername...'
                              className='form-control'
                              value={userData.drivername}
                              {...register("drivername",{required:true})}
                              onChange={onChange}
                            />
                         {errors.partyname && <p className='text-danger'>Enter Driver Name.</p>}
                       </div>
                    </div>
                     <div className="col-md-6 col-lg-4">
                     <div className="form-group">
                          <label htmlFor="type" className='py-2'>Type *</label><br />
                            <input type="text"
                              id='type' 
                              name='type'
                              placeholder='Type..'
                              className='form-control'
                              value={userData.type}
                              {...register("type",{required:true})}
                              onChange={onChange}
                            />
                            {errors.type && <p className='text-danger'>Enter Type</p>}
                       </div>
                     </div>
                     <div className="col-md-6 col-lg-4">
                     <div className="form-group">
                          <label htmlFor="designation" className='py-2'>Designation *</label><br />
                            <input type="text"
                              id='designation'
                              name='designation'
                              placeholder='Designation...'
                              className='form-control'
                              value={userData.designation}
                              {...register("designation",{required:true})}
                              onChange={onChange}
                            />
                            {errors.designation && <p className='text-danger'>Enter Designation.</p>}
                       </div>
                     </div>
                 </div>

                 <div className="row">
                    <div className="col-md-6 col-lg-4">
                       <div className="form-group">
                          <label htmlFor="reason" className='py-2'>Reason *</label><br />
                          <input type="text"
                              id='reason'
                              name='reason'
                              placeholder='Reason...'
                              className='form-control'
                              value={userData.reason}
                              {...register("reason",{required:true})}
                              onChange={onChange}
                            />
                            {errors.reason && <p className='text-danger'>Enter Reason</p>}
                       </div>
                    </div>
                     <div className="col-md-6 col-lg-4">
                     <div className="form-group">
                          <label htmlFor="totalkm" className='py-2'>Total k/M *</label><br />
                            <input type="number"
                              id='totalkm' 
                              name='totalkm'
                              placeholder='Total K/M..'
                              className='form-control'
                              value={userData.totalkm}
                              {...register("totalkm",{required:true})}
                              onChange={onChange}
                            />
                            {errors.totalkm && <p className='text-danger'>Enter your Total k/m</p>}
                       </div>
                     </div>
                     <div className="col-md-6 col-lg-4">
                     <div className="form-group">
                          <label htmlFor="perkm" className='py-2'>Per K/M *</label><br />
                            <input type="number"
                              id='perkm'
                              name='perkm'
                              placeholder='Per K/M...'
                              className='form-control'
                              value={userData.perkm}
                              {...register("perkm",{required:true})}
                              onChange={onChange}
                            />
                            {errors.perkm && <p className='text-danger'>Enter Per K/M</p>}
                       </div>
                     </div>
                 </div>

                 <div className="row">
                    <div className="col-md-6 col-lg-4">
                       <div className="form-group">
                          <label htmlFor="totalamount" className='py-2'>Total Amount *</label><br />
                          <input type="number"
                              id='totalamount'
                              name='totalamount'
                              placeholder='Totalamount...'
                              className='form-control'
                              value={parseInt(userData.totalkm) * parseInt(userData.perkm)}
                              readOnly
                            />
                       </div>
                    </div>
                     <div className="col-md-6 col-lg-4">
                     <div className="form-group">
                          <label htmlFor="totalkm" className='py-2'>Diesel Amt*</label><br />
                            <input type="number"
                              id='diesel' 
                              name='diesel'
                              placeholder='Diesel..'
                              className='form-control'
                              value={userData.diesel}
                              {...register("diesel",{required:true})}
                              onChange={onChange}
                            />
                            {errors.diesel && <p className='text-danger'>Enter Diesel Amt</p>}
                       </div>
                     </div>
                     <div className="col-md-6 col-lg-4">
                     <div className="form-group">
                          <label htmlFor="perkm" className='py-2'>Driver Amt*</label><br />
                            <input type="number"
                              id='driver'
                              name='driver'
                              placeholder='Driver...'
                              className='form-control'
                              value={userData.driver}
                              {...register("driver",{required:true})}
                              onChange={onChange}
                            />
                            {errors.driver && <p className='text-danger'>Enter Driver Amt</p>}
                       </div>
                     </div>
                 </div>

                 <div className="row">
                    <div className="col-md-6 col-lg-4">
                       <div className="form-group" >
                          <label htmlFor="tollamount" className='py-2'>Toll Amount *</label><br />
                          <input type="number"
                              id='tollamount'
                              name='tollamount'
                              placeholder='Tollamount...'
                              className='form-control'
                              value={userData.tollamount}
                              {...register("tollamount",{required:true})}
                              onChange={onChange}
                            />
                            {errors.tollamount && <p className='text-danger'>Enter Toll Amount.</p>}
                       </div>
                    </div>
                     <div className="col-md-6 col-lg-4">
                     <div className="form-group">
                          <label htmlFor="totalkm" className='py-2'>Profit Amt *</label><br />
                            <input type="number"
                              id='profitamt' 
                              name='profitamt'
                              placeholder='Profitamt..'
                              className='form-control'
                              readOnly
                              value={parseInt(userData.totalkm) * parseInt(userData.perkm) - parseInt(userData.diesel) - parseInt(userData.driver)}
                            />
                       </div>
                     </div>
                 </div>
                 <div className="submit-btn d-flex justify-content-center p-4">
                     <button type='submit' className='btn btn-danger'>Submit</button>
                 </div>
             </form>
         </div>
         {/* table filter */}
             {/* <div className="filter-form container my-4">
                <h6>Filter Dates:</h6>
              <form className='d-flex'>
                  <div className="filter-group">
                   <DatePicker
                       value={travelFilter}
                      id='date'
                      format="DD/MM/YYYY"
                      minDate={new Date()}
                      shadow={true}
                      name='date'
                    onChange={(e)=>setTravelFilter(e.toDate().toLocaleDateString("en-IN"))}
                    style={{width:"100%",height:"40px"}}
                  />
                  <button type='button' onClick={Filtersubmit} className='btn btn-danger ms-2'>submit</button>
                  <button type='button' className='btn btn-primary ms-2' onClick={viewAll}>View All</button>
                  <button type='button' className='btn btn-success' onClick={handleGenerate} >GENERATE</button>
                  </div>
              </form> 
             </div> */}
         {/* current form */}
         {/* <div className="container text-center register-form-head overflow-auto">
              {!getData.length ==0?
               <table className='table'>
                   <thead className='table-dark'>
                       <tr>
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
                          getData.map((item,index)=>(
                              <tr key={index}>
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

              :<div className='p-2'><h3 className='d-flex justify-content-center text-danger'>Record Not Found</h3></div>}
         </div> */}
    </div>
  )
}

export default Register
