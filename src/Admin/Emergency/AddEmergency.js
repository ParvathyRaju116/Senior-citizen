import { Container } from '@mui/material';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { addEmergencyApi } from '../../Services/allApi';

function AddEmergency() {
  const [showModal, setShowModal] = useState(false);
  const [showTable, setShowTable] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
    setShowTable(true);
  };

  const handleShowModal = () => {
    setShowModal(true);
    setShowTable(false);
  };


const[addemergency,setEmergency]=useState({
    emergency_support:"",
    location:"",
    phonenumber:""
})

const setInputs=(e)=>{
    const {value,name}=e.target
    setEmergency({...addemergency,[name]:value})
}

const handleAdd=async()=>{
    const {emergency_support,location, phonenumber}=addemergency

    if(!emergency_support||!location||!phonenumber){
        alert("Please fill all datas")
    }
    else{
const result=await addEmergencyApi(addemergency)
console.log(result);
    }


}




console.log(addemergency);
  return (
    <Container>
      <div style={{ height: '500px' }} className='mt-5'>
        <h2 className='text-center mt-3' style={{ color: '#B08968' }}>
          Emergency Contact Numbers
        </h2>
        <div className='text-center mt-5 p-5'>
          <Button
            style={{ backgroundColor: '#B08968', color: 'white', width: '50%', height: '50px' }}
            onClick={handleShowModal}
          >
            <h4>Add Emergency Contact Numbers </h4>
          </Button>

          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: '#B08968' }}>Emergency Contact Numbers</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FloatingLabel controlId="floatingInput" label="Service" className="mb-3">
                <Form.Control type="text"
                onChange={(e)=>setInputs(e)}
                name={"emergency_support"}
                placeholder="" />
              </FloatingLabel>
              <FloatingLabel controlId="" label="Location">
                <Form.Control type="text" placeholder=""
                 onChange={(e)=>setInputs(e)}
                 name={"location"}
                
                />
              </FloatingLabel>
              <FloatingLabel className='mt-3' controlId="" label="Phone Number">
                <Form.Control type="text" placeholder=""
                 onChange={(e)=>setInputs(e)}
                 name={ "phonenumber"}
                />
              </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
              <Button style={{ backgroundColor: 'red', color: 'white' }} variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button onClick={(e)=>handleAdd()} style={{ backgroundColor: 'green', color: 'white' }} >
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        {showTable && (
          <div>
            <Table className='text-center' bordered>
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>Service</th>
                  <th>Location</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
            <Stack spacing={2} className="text-center mt-3">
        <Pagination
         
         
        
          style={{ color: "#B08968" }}
        />
        </Stack>
          </div>
        )}
      </div>
    </Container>
  );
}

export default AddEmergency;
