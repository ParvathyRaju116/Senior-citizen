import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminDashboard from './Admin/AdminDashboard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/admin-dash' element={<AdminDashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
