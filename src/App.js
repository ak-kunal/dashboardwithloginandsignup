import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';



import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App () {
  return(
    <Router>
      <div className='dashboard-container'>
        {/* <SideBar menu={sidebar_menu} /> */}
          
          <div className='dashboard-body'>
              <Routes>
                  <Route path="*" element={<div>No Page found</div>} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/" element={<Signup />} />
                  <Route exact path="/dashboard" element={<Dashboard />} />
              </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App;