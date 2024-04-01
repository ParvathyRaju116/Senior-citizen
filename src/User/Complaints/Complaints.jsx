import React, { useState } from 'react'
import Header from '../Header/Header'

function Complaints() {
  const [complaint,setComplaint] = useState("")
  console.log(complaint);
  return (
    <>
     <Header/>
     <div className='d-flex justify-content-center align-items-center' style={{marginTop:'170px'}}>
        <input type="text" className='form-control w-75' style={{height:'50px'}} onChange={(e)=>setComplaint(e.target.value)}/>
        <button className='ms-4 btn btn-success'>Submit</button>
    </div> 

    </>
  )
}

export default Complaints
