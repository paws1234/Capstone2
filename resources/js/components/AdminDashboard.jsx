import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminDashboard = () => {
    const location = useLocation();
    const isAdminRoute = () => {
        return location.pathname.startsWith('/admin');
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            {isAdminRoute() && (
                <aside className="bg-gray-800 text-white w-64">
                    <div className="flex items-center justify-center h-16 bg-gray-900">
                        <span className="text-xl font-bold">Admin Dashboard</span>
                    </div>
                    <nav className="mt-6">
                        <Link
                            to="/admin"
                            className={`block px-4 py-2 text-sm ${
                                location.pathname === '/admin' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                            Dashboard
                        </Link>
                        <Link
                            to="/admin/teachers"
                            className={`block px-4 py-2 text-sm ${
                                location.pathname.startsWith('/admin/teachers') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                            Teachers
                        </Link>
        
                    </nav>
                </aside>
            )}

            {/* Main Content Area */}
            <main className="flex-1 p-4">
            <h1 className="text-2xl font-bold mb-4 text-center"> Admin Dashboard</h1>
                <Outlet />
             
            </main>
        </div>
    );
};

export default AdminDashboard;
