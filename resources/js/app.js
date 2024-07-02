import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/login.jsx'; // Adjust path as needed
import Register from './components/auth/Register.jsx'; // Adjust path as needed
import AdminDashboard from './components/AdminDashboard.jsx';
import TeacherDashboard from './components/TeacherDashboard.jsx';
import StudentDashboard from './components/StudentDashboard.jsx';
import TeachersList from './components/TeachersList.jsx'; // Import TeachersList component
import AddTeacher from './components/AddTeacher.jsx'; // Import AddTeacher component
import EditTeacher from './components/EditTeacher.jsx'; // Import EditTeacher component

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
                    <Route path="teachers"element={<TeachersList />} />
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
export default App;