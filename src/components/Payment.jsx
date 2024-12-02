import React, { useEffect } from 'react'

import icicbank from "../assets/ICICI_Bank_Logo.svg.png"
const Payment = () => {

     useEffect(()=>{
          function getRefresh(){
               window.scrollTo(0, 0);
           }
           getRefresh()
     },[])
  return (
    <div className='payment-section container'>
         <h5 className='text-center text-danger'>Payment Options</h5>

         <h6>Direct Deposit or Transfer to Bank Account :</h6>
         <p>Walk into any of the BANK across India, Make Cheque or Cash payments directly to the below account :</p>
   
          <div className="row">
               <div className="col-md-12 col-lg-6 p-3">
                     <div className="payment-bank bg-danger p-1">
                          <h4 className='ps-2 text-white'>ICIC Bank</h4>
                     </div>
                     <div className="bank-logo mt-5">
                          <img src={icicbank} height={40} alt="" />
                     </div>
               </div>
               <div className="col-md-12 col-lg-6 p-3">
                     <table className='table table-striped'>
                          <thead>
                               <tr >
                                   <th className='bg-danger text-white' colSpan={2}>Dindigul</th>
                                   <th></th>
                               </tr>
                          </thead>
                          <tbody>
                               <tr>
                                  <td>Ac/No</td>
                                  <td>*********780</td>
                               </tr>
                               <tr>
                                  <td>Bank</td>
                                  <td>ICIC BANK</td>
                               </tr>
                               <tr>
                                  <td>IFSC Code</td>
                                  <td>IDIB000V125</td>
                               </tr>
                               <tr>
                                  <td>Branch</td>
                                  <td>Dindigul</td>
                               </tr>
                          </tbody>
                     </table>
               </div>
          </div>
          <p>Alternatively, you can also make Electronics Funds Transfer (EFT) or NEFT via your online banking interface.</p>
          <p>Please notify us after remitting the payment with the details of the amount, branch of deposit and the service you paid for. We will verify the payment online and the orders will be executed accordingly.</p>
    </div>
  )
}

export default Payment
