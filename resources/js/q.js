
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Login from './components/auth/login.jsx'; // Adjust path as needed
import Register from './components/auth/Register.jsx'; // Adjust path as needed
import AdminDashboard from './components/AdminDashboard.jsx';
import TeacherDashboard from './components/TeacherDashboard.jsx';
import StudentDashboard from './components/StudentDashboard.jsx';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    console.log('User state:', user);
    const handleLogin = (loggedInUser) => {
        setUser(loggedInUser);
    };

    const handleRegister = (registeredUser) => {
        setUser(registeredUser);
    };

    if (!user) {
        return (
            <div>
                <Login onLogin={handleLogin} />
                <Register onRegister={handleRegister} />
            </div>
        );
    }

    let dashboardComponent;

    switch (user.role) {
        case 'admin':
            dashboardComponent = <AdminDashboard />;
            break;
        case 'teacher':
            dashboardComponent = <TeacherDashboard />;
            break;
        case 'student':
            dashboardComponent = <StudentDashboard />;
            break;
        default:
            dashboardComponent = <div>User role not recognized.</div>;
            break;
    }

    const root = ReactDOM.createRoot(document.getElementById('dashboard'));
    root.render(dashboardComponent);

    return null; 
};

export default Dashboard;
