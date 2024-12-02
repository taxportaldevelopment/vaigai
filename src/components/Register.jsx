import { useEffect, useState } from 'react'
import DatePicker from "react-multi-date-picker";
import { useForm } from 'react-hook-form';
import axios from "axios";
const Register = () => {

     const [getData,setGetData] = useState([]);

    useEffect(()=>{

       async function getalluser(){
            const {data} = await axios.get(`http://localhost:8000/api/v1/getallusers`);
            setGetData(data.user)
        }  
        getalluser()
    },[])

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
                totalamount:userData.totalamount,
                diesel:userData.diesel,
                driver:userData.driver,
                tollamount:userData.tollamount,
                profitamt:userData.profitamt
           }
           
            const {data} = await axios.post(`http://localhost:8000/api/v1/userdetails`,userdata);
            
             
            
           
      }

      const dateChange = (e)=>{
        //    console.log(e.toDate().toLocaleDateString("en-IN"));
           setValue(e.toDate().toLocaleDateString("en-IN"));
      }

  return (
    <div>
         <div className="form-section container p-3">
                <h2 className='text-center'>Register Form</h2>
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
                    {/* {errors.date && <p className='text-danger'>Please Enter Your Date</p>} */}
                    </div>
                     <div className="col-md-6 col-lg-4">
                     <div className="form-group">
                          <label htmlFor="days" className='py-2' >Days *</label><br />
                           <select  id='days' name='days' 
                            className='form-control'
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
                              {...register("reason",{required:true})}
                              onChange={onChange}
                            />
                            {errors.reason && <p className='text-danger'>Enter reason.</p>}
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
                              {...register("totalkm",{required:true})}
                              onChange={onChange}
                            />
                            {errors.totalkm && <p className='text-danger'>Enter your Totalkm</p>}
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
                          <label htmlFor="totalamount" className='py-2'>Totalamount *</label><br />
                          <input type="number"
                              id='totalamount'
                              name='totalamount'
                              placeholder='Totalamount...'
                              className='form-control'
                              {...register("totalamount",{required:true})}
                              onChange={onChange}
                            />
                            {errors.totalamount && <p className='text-danger'>Enter Totalamount.</p>}
                       </div>
                    </div>
                     <div className="col-md-6 col-lg-4">
                     <div className="form-group">
                          <label htmlFor="totalkm" className='py-2'>Diesel *</label><br />
                            <input type="number"
                              id='diesel' 
                              name='diesel'
                              placeholder='Diesel..'
                              className='form-control'
                              {...register("diesel",{required:true})}
                              onChange={onChange}
                            />
                            {errors.diesel && <p className='text-danger'>Enter Diesel</p>}
                       </div>
                     </div>
                     <div className="col-md-6 col-lg-4">
                     <div className="form-group">
                          <label htmlFor="perkm" className='py-2'>Driver *</label><br />
                            <input type="number"
                              id='driver'
                              name='driver'
                              placeholder='Driver...'
                              className='form-control'
                              {...register("driver",{required:true})}
                              onChange={onChange}
                            />
                            {errors.driver && <p className='text-danger'>Enter Driver</p>}
                       </div>
                     </div>
                 </div>

                 <div className="row">
                    <div className="col-md-6 col-lg-4">
                       <div className="form-group">
                          <label htmlFor="tollamount" className='py-2'>Tollamount *</label><br />
                          <input type="number"
                              id='tollamount'
                              name='tollamount'
                              placeholder='Tollamount...'
                              className='form-control'
                              {...register("tollamount",{required:true})}
                              onChange={onChange}
                            />
                            {errors.tollamount && <p className='text-danger'>Enter Tollamount.</p>}
                       </div>
                    </div>
                     <div className="col-md-6 col-lg-4">
                     <div className="form-group">
                          <label htmlFor="totalkm" className='py-2'>Profitamt *</label><br />
                            <input type="number"
                              id='profitamt' 
                              name='profitamt'
                              placeholder='Profitamt..'
                              className='form-control'
                              {...register("profitamt",{required:true})}
                              onChange={onChange}
                            />
                            {errors.profitamt && <p className='text-danger'>Enter Profitamt</p>}
                       </div>
                     </div>
                 </div>
                 <div className="submit-btn d-flex justify-content-center p-4">
                     <button type='submit' className='btn btn-danger'>Submit</button>
                 </div>
             </form>
         </div>
         {/* current form */}
         <div className="container register-form-head overflow-auto">
               <table className='table'>
                   <thead>
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
                           <th>Per KM</th>
                           <th>TOTAL AMOUNT</th>
                           <th>DIESEL</th>
                           <th>DRIVER</th>
                           <th>TOLL AMOUNT</th>
                           <th>PROFIT AMT</th>
                           <th>ACTION</th>
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
                              </tr>
                          ))
                       }
                   </tbody>
               </table>
         </div>
    </div>
  )
}

export default Register
