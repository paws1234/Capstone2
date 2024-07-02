import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/login'; // Adjust path as needed
import Register from './components/auth/Register'; // Adjust path as needed
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import TeachersList from './components/TeachersList'; // Import TeachersList component
import AddTeacher from './components/AddTeacher'; // Import AddTeacher component
import EditTeacher from './components/EditTeacher'; // Import EditTeacher component

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Admin Dashboard and related routes */}
                <Route path="/admin/*" element={<AdminDashboard />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="teachers" element={<TeachersList />} />
                    <Route path="teachers/add" element={<AddTeacher />} />
                    <Route path="teachers/edit/:id" element={<EditTeacher />} />
                </Route>

                {/* Teacher and Student dashboards */}
                <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
                <Route path="/student/dashboard" element={<StudentDashboard />} />
            </Routes>
        </Router>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
