import React from 'react'
import Navbar from '../Navbar/Navbar'

function Attendence() {
  return (
      <>
          <Navbar/>
          <div className='d-flex justify-content-center align-items-center  pt-5'>
              <form style={{width:'400px',height:'400px'}} className='mt-5 p-5 shadow'>
                  <input type="text" className='form-control mb-3' placeholder='date'/>
                  <input type="text" className='form-control mb-3' placeholder='time_in'/>
                  <input type="text" className='form-control mb-3' placeholder='time_out'/>
                  <input type="text" className='form-control mb-3' placeholder='working_hours'/>
                 <button className='btn btn-outline-blue form-control'>Present</button>
              </form>
          </div> 
    </>
  )
}

export default Attendence
