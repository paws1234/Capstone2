import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/login.jsx'; // Adjust path as needed
import Register from './components/auth/Register.jsx'; // Adjust path as needed
import AdminDashboard from './components/AdminDashboard.jsx';
import TeacherDashboard from './components/TeacherDashboard.jsx';
import StudentDashboard from './components/StudentDashboard.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
                <Route path="/student/dashboard" element={<StudentDashboard />} />
            </Routes>
        </Router>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
