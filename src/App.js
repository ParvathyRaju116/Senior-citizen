import { Route, Routes } from 'react-router-dom';
import './App.css';

import AdminLogin from './Admin/AdminLogin/AdminLogin';
import AdminDashboard from './Admin/Admin Dashboard/AdminDashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/admin-dash' element={<AdminDashboard/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}/>

      </Routes>
    </div>
  );
}

export default App;
