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
import ServiceProviderList from './Admin/Approvals/ServiceProviderList';
import UserRequest from './ServiceProvider/UserRequest/UserRequest';
import Attendence from './ServiceProvider/Attendence/Attendence';
import AcceptedBookings from './ServiceProvider/Bookings/AcceptedBookings';
import AddBlog from './Admin/AdminBlog/AddBlog';
import Blog from './User/Blog/Blog';
import Webinar from './User/Webinar/Webinar';
import UserBlog from './User/Blog/UserBlog';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />} />

    //admin
        <Route path='/admin-dash' element={<AdminDashboard />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-leave' element={<LeaveRequest />} />
        <Route path='/admin-feedback' element={<Feedback />} />
        <Route path='/admin-bookings' element={<Bookings />} />
        <Route path='/admin-approval' element={<UserApproval />} />
        <Route path='/admin-user' element={< UserList/>} />
        <Route path='/admin-service' element={< ServiceProviderList/>} />
        <Route path='/admin-blog' element={< AddBlog/>} />

//user
        <Route path='/user-login' element={<Login />} />
        <Route path='/user-register' element={<Login register />} />
        <Route path='/user-home' element={<UserHome />} />
        <Route path='/user-profile' element={<Profile />} />
        <Route path='/user-bookings' element={<MyBookings />} />
        <Route path='/user-complaints' element={<Complaints />} />
        <Route path='/user-blog' element={<UserBlog />} />
        <Route path='/user-webinar' element={<Webinar />} />

   //serviceprovider
        <Route path='/service-reg2' element={<Singup />} />
        <Route path='/service-reg' element={<Singup register />} />
        <Route path='/service-request' element={<UserRequest/>} />
        <Route path='/service-attendence' element={<Attendence/>} />
        <Route path='/service-bookings' element={<AcceptedBookings/>} />

      </Routes>
    </div>
  );
}

export default App;
