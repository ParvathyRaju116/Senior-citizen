import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminDashboard from './Admin/AdminDashboard'
import AdminLogin from './Admin/AdminLogin/AdminLogin';

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
