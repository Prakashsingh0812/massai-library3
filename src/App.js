// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
