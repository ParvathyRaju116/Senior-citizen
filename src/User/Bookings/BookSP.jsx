import React from 'react';
import './mybookings.css'

function BookSP() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',width:'100%'}} className='shadow1'>
      <div style={{width:'400px',display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:'white'}} className='shadow p-3'>
          <form style={{ width: '300px' }} >
            <h4 className='mb-3 ms-4'>Book Service Provider</h4>
            <div className='mb-3'>
                <label htmlFor="">Type of care</label>
              <input type="text" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="">Services</label>
              <input type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor="">starting Time</label>
              <input type="time" className='form-control'/>
            </div>
            <div className='mb-3'>
            <label htmlFor="">ending Time</label>
              <input type="time"  className='form-control'/>
            </div>
            <div className='mb-3'>
            <label htmlFor="">star tDate</label>
              <input type="tdatext" className='form-control'/>
            </div>
            <div className='mb-3'>
            <label htmlFor="">end Date</label>
              <input type="date"  className='form-control'/>
            </div>
            <div className='mb-3'>
            <label htmlFor="">Location</label>
              <input type="text" className='form-control'/>
            </div>
            <div>
                <button className='btn btn-outline-primary ms-5 w-75 px-3'>BOOK</button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default BookSP;
