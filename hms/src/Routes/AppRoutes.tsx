import React from 'react';
import { Sidebar } from '../Components/Sidebar/Sidebar';
import { Header } from '../Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminDashboard } from '../Layout/AdminDashboard';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AdminDashboard />} />

                {/* <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/doctors' element={<Doctors />} />
                        <Route path='/patients' element={<Patients />} />
                        <Route path='/appointments' element={<Appointments />} />
                        <Route path='/pharmacy' element={<Pharmacy />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

