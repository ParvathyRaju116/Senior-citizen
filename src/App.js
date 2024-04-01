import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './Admin/AdminLogin/AdminLogin';
import AdminDashboard from './Admin/Admin Dashboard/AdminDashboard';
import Login from './User/UserLogin/Login';
import UserHome from './User/UserHome/UserHome';
import Profile from './User/Profile/Profile';
import Complaints from './User/Complaints/Complaints';
import Home from './Common/Home';
import MyBookings from './User/Bookings/MyBookings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/admin-dash' element={<AdminDashboard/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/user-login' element={<Login/>}/>
        <Route path='/user-register' element={<Login register/>}/>
        <Route path='/user-home' element={<UserHome/>}/>
        <Route path='/user-profile' element={<Profile/>}/>
        <Route path='/user-complaints' element={<Complaints/>}/>
        <Route path='/' element={<Home />} />
        <Route path='/user-bookings' element={<MyBookings/>} />

      </Routes>
    </div>
  );
}

export default App;
