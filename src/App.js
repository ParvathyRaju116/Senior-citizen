import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './Admin/AdminLogin/AdminLogin';
import AdminDashboard from './Admin/Admin Dashboard/AdminDashboard';
import Login from './User/UserLogin/Login';
import UserHome from './User/UserHome/UserHome';
import Profile from './User/Profile/Profile';
import LeaveRequest from './Admin/Leave/LeaveRequest';
import Complaints from './User/Complaints/Complaints';
import Home from './Common/Home';
import MyBookings from './User/Bookings/MyBookings';
import Singup from './ServiceProvider/LoginRegister/Singup'
import Feedback from './Admin/AdminFeedback/Feedback';
import Bookings from './Admin/AdminBookings/Bookings';
import UserApproval from './Admin/Approvals/UserApproval';
import UserList from './Admin/Approvals/UserList';

function App() {
  return (
    <div className="App">
      <Routes>
    //admin
        <Route path='/admin-dash' element={<AdminDashboard />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-leave' element={<LeaveRequest />} />
        <Route path='/admin-feedback' element={<Feedback />} />
        <Route path='/admin-bookings' element={<Bookings />} />
        <Route path='/admin-approval' element={<UserApproval />} />
        <Route path='/admin-user' element={< UserList/>} />



//user
        <Route path='/user-login' element={<Login />} />
        <Route path='/user-register' element={<Login register />} />
        <Route path='/user-home' element={<UserHome />} />
        <Route path='/user-profile' element={<Profile />} />
        <Route path='/user-bookings' element={<MyBookings />} />
        <Route path='/user-complaints' element={<Complaints />} />

   //serviceprovider
        <Route path='/service-reg2' element={<Singup />} />
        <Route path='/service-reg' element={<Singup register />} />

        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
