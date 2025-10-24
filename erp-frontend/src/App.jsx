import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from 'pages/home';
import Orders from 'pages/orders/order';
import Transactions from 'pages/transactions';
import Inventory from 'pages/inventory';
import Employee from 'pages/employee/employee';
import Attendance from 'pages/employee/Attendance/Attendance';
import WorkTime from 'pages/employee/WorkTime/WorkTime';
import ShiftSchedule from 'pages/employee/ShiftSchedule/ShiftSchedule';
import Admin from 'pages/admin';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="w-screen min-h-screen bg-gray-50 overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employee/attendance" element={<Attendance />} />
          <Route path="/employee/shift-schedule" element={<ShiftSchedule />} />
          <Route path="/employee/work-time" element={<WorkTime />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        
        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 4000,
            style: {
              background: '#ffffff',
              color: '#111827',
              border: '1px solid #e5e7eb',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              fontSize: '15px',
              lineHeight: '1.5',
            },
            success: {
              duration: 3000,
              style: {
                background: '#ffffff',
                color: '#065f46',
                border: '1px solid #d1fae5',
              },
            },
            error: {
              duration: 5000,
              style: {
                background: '#ffffff',
                color: '#991b1b',
                border: '1px solid #fecaca',
              },
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;