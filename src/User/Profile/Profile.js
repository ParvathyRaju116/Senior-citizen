import React from 'react'
import Header from '../Header/Header'
import { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { editApi } from '../../Services/allApi';
import Swal from 'sweetalert2';


function Profile() {
    const [open, setOpen] = useState(false);
    const [isUpdate,setIsUpdate]= useState(false)

  const [profile,setProfile] = useState({
    username:"",
    email:"",
    password:"",
    number:"",
    address:""
  })
 
  const handleProfile = async()=>{
    const {username,email,password,number,address} = profile

    if(!username || !email || !password || !number || !address){
        Swal({
            title: "Please fill this form completely",
            icon: "warning"
          });
    }
    else{const reqBody = new FormData();

        reqBody.append("username", username);
        reqBody.append("email", email);
        reqBody.append("password", password);
        reqBody.append("number", number);
        reqBody.append("address", address);
       
    
        try {
          const result = await editApi(reqBody);
          console.log(result);
          if (result.status === 200) {
            Swal.fire({
              title: "Successfully Updated!",
              icon: "success"
            });
            sessionStorage.getItem("existingUser",JSON.stringify(result.data))
            setIsUpdate(true)
            setProfile(result.data);
          } else {
            console.log(result.response.data);
          }
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "An error occurred. Please try again later!",
            icon: "warning"
          });
        }
      }
    }; 
  

/* const handleProfile = async () => {
  const { id, username, email, password, number, address } = profile;

  if (!username || !email || !password || !number || !address) {
    Swal.fire({
      title: "Please fill this form completely",
      icon: "warning"
    });
  } else {
    const userData = {
      username,
      email,
      password,
      number,
      address
    };

    try {
      const response = await axios.put(`http://localhost:5000/${id}`, userData);
      console.log(response);
      if (response.status === 200) {
        Swal.fire({
          title: "Successfully Updated!",
          icon: "success"
        });

        setProfile(response.data);
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "An error occurred. Please try again later!",
        icon: "warning"
      });
    }
  }
}; */

    

      
    useEffect(() => {
        if (sessionStorage.getItem("existingUser")) {
          const user = JSON.parse(sessionStorage.getItem("existingUser"));
          if (user) {
            setProfile({
              ...profile,
              username: user.username || "",
              email: user.email || "",
              address:user.address || "",
              number:user.number || "",
              password: user.password || "",
              
            });
          }
        }
      }, [isUpdate]);

  console.log(profile);

  return (
    <>
     <Header /> 
     <div className='d-flex justify-content-center pt-5'>
         <div className='card shadow p-5 w-50 mt-5'>
            <div className='d-flex justify-content-between'>
               <h3> Profile</h3>
               <button className='btn 'onClick={() => setOpen(!open)} ><i class="fa-solid fa-arrow-up-from-bracket fa-rotate-180 ms-auto"></i></button>
            </div>
           <Collapse in={open} >
              <div className='row justify-content-center'>
                  
                  <div className='mb-3'>
                    <input type="text" placeholder='username' className='form-control mt-3' value={profile.username} onChange={(e)=>setProfile({...profile,username:e.target.value})}/>
                    </div>
                    <div className='mb-3'>
                    <input type="text" placeholder='email' className='form-control mt-3' value={profile.email} onChange={(e)=>setProfile({...profile,email:e.target.value})}/>
                    </div>
                    <div className='mb-3'>
                    <input type="text" placeholder='phone no' className='form-control mt-3' value={profile.number} onChange={(e)=>setProfile({...profile,number:e.target.value})}/>
                    </div>
                    <div className='mb-3'>
                    <input type="text" placeholder='Address' className='form-control mt-3' value={profile.address} onChange={(e)=>setProfile({...profile,address:e.target.value})}/>
                    </div>
                    <div className='mb-3'>
                    <input type="text" placeholder='Password' className='form-control mt-3' value={profile.password} onChange={(e)=>setProfile({...profile,password:e.target.value})}/>
                    </div>
                  <button type='button' className='btn btn-warning mt-3'  onClick={handleProfile} >Update</button>
              </div>
           </Collapse>
        </div>
     </div>
    </>
  )
}

export default Profile
